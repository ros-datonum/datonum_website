#!/usr/bin/env bash
# Runs on the VPS through stdin. No personal SSH key or Cloudflare token reaches this script.
set -Eeuo pipefail
umask 077
operation=${1:?Expected deploy or rollback}
target=${2:?Expected commit SHA}
[[ "$operation" = deploy || "$operation" = rollback ]] || exit 2
[[ "$target" =~ ^[0-9a-f]{40}$ ]] || { echo 'Invalid commit SHA' >&2; exit 2; }
root=${DATONUM_DEPLOY_ROOT:-/opt/datonum_website}
state_root=${DATONUM_DEPLOY_STATE:-$HOME/.local/state/datonum-website-deploy}
service=datonum-website
image=datonum-website:latest
mkdir -p "$state_root"
exec 9>"$state_root/lock"
flock -w 60 9 || { echo 'Another deployment holds the lock' >&2; exit 1; }
state="$state_root/$target"
cd "$root"

container_image() { docker inspect --format '{{.Image}}' "$service"; }
container_revision() { docker inspect --format '{{index .Config.Labels "org.opencontainers.image.revision"}}' "$service" 2>/dev/null || true; }
probe() {
  local expected=$1 current
  for _ in {1..20}; do
    current=$(docker exec "$service" wget -qO- http://127.0.0.1/deployment.json 2>/dev/null || true)
    if [[ "$current" == "{\"commit\":\"$expected\"}" ]]; then return 0; fi
    sleep 2
  done
  echo "Origin did not serve expected commit $expected" >&2
  return 1
}
rollback() {
  if [[ ! -s "$state/previous-image" || ! -s "$state/compose.yaml" ]]; then
    echo 'No activation backup for this commit; nothing to roll back.'
    return 0
  fi
  local current previous project
  current=$(container_revision)
  previous=$(cat "$state/previous-image")
  project=$(cat "$state/project")
  if [[ "$current" != "$target" ]]; then
    if [[ $(container_image) == "$previous" ]]; then
      docker tag "$previous" "$image"
      echo 'Previous image is already running.'
      return 0
    fi
    echo 'A different deployment is running; refusing to roll it back.' >&2
    return 1
  fi
  docker image inspect "$previous" >/dev/null
  docker tag "$previous" "$image"
  docker compose --project-name "$project" -f "$state/compose.yaml" up -d --no-deps --no-build "$service"
  [[ $(container_image) == "$previous" ]] || { echo 'Rollback image mismatch' >&2; return 1; }
  for _ in {1..15}; do
    if docker exec "$service" wget -q -O /dev/null http://127.0.0.1/; then
      printf 'rolled_back\n' > "$state/status"
      echo 'ROLLBACK_RESULT=restored'
      return 0
    fi
    sleep 2
  done
  echo 'Rollback image did not become healthy' >&2
  return 1
}

if [[ "$operation" = rollback ]]; then rollback; exit; fi
[[ $(git branch --show-current) == main ]] || { echo 'Server checkout must be on main' >&2; exit 1; }
[[ -z $(git status --porcelain) ]] || { echo 'Server checkout has local changes; refusing to overwrite' >&2; exit 1; }
origin=$(git remote get-url origin)
case "$origin" in
  git@github.com:ros-datonum/datonum_website.git|https://github.com/ros-datonum/datonum_website.git) ;;
  *) echo 'Unexpected repository origin' >&2; exit 1 ;;
esac
[[ -s .env ]] || { echo 'Missing production .env; preserve the existing build configuration' >&2; exit 1; }
git fetch origin main
if [[ $(git rev-parse origin/main) != "$target" ]]; then
  echo 'DEPLOY_RESULT=superseded'
  exit 0
fi
git merge-base --is-ancestor HEAD "$target" || { echo 'Server branch diverged; refusing non-fast-forward deployment' >&2; exit 1; }
if [[ $(container_revision) == "$target" ]]; then
  probe "$target"
  echo 'DEPLOY_RESULT=deployed'
  exit 0
fi

previous=$(container_image)
project=$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project"}}' "$service")
[[ "$project" =~ ^[a-zA-Z0-9_-]+$ ]] || { echo 'Existing Compose project could not be identified' >&2; exit 1; }
mkdir -p "$state"
if [[ -s "$state/previous-image" ]]; then
  [[ $(cat "$state/previous-image") == "$previous" ]] || { echo 'Existing rollback backup does not match the running baseline' >&2; exit 1; }
else
printf '%s\n' "$previous" > "$state/previous-image"
printf '%s\n' "$project" > "$state/project"
git rev-parse HEAD > "$state/previous-source-commit"
docker compose --project-name "$project" config > "$state/compose.yaml"
fi
docker tag "$previous" "datonum-website:rollback-$target"
# The checkout records desired source, not deployment success; the image marker is authoritative.
git merge --ff-only "$target"
printf 'building\n' > "$state/status"
docker compose --project-name "$project" build --build-arg "DEPLOY_SHA=$target" "$service"

# Re-check newest main immediately before activation. Never cancel an in-progress activation.
git fetch origin main
if [[ $(git rev-parse origin/main) != "$target" ]]; then
  docker tag "$previous" "$image"
  echo 'DEPLOY_RESULT=superseded'
  exit 0
fi
activation_started=false
on_error() {
  local code=$?
  trap - ERR
  if [[ "$activation_started" = true ]]; then
    rollback || echo 'Automatic rollback failed; inspect the running container before retrying.' >&2
  fi
  exit "$code"
}
trap on_error ERR
activation_started=true
printf 'activating\n' > "$state/status"
docker compose --project-name "$project" up -d --no-deps --no-build "$service"
probe "$target"
printf 'origin_verified\n' > "$state/status"
echo 'DEPLOY_RESULT=deployed'
