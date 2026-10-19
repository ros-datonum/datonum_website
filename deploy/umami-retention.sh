#!/usr/bin/env bash
# Deletes Umami data past its retention period (deploy/umami-retention.sql). Safe to run daily:
# every delete is bounded by a cutoff, and a lock stops two runs overlapping.
#
#   umami-retention.sh --dry-run   # print the rows past retention, delete nothing
#   umami-retention.sh             # delete them
#
# Configuration, from the environment or from $UMAMI_RETENTION_ENV_FILE
# (default /etc/umami-retention.env):
#   UMAMI_DATABASE_URL   PostgreSQL URL of the Umami database (required)
#   UMAMI_DB_CONTAINER   optional: run psql inside this Docker container instead of on the host;
#                        the URL is then resolved from inside that container
#   UMAMI_RETENTION_LOCK optional lock file (default /run/lock/umami-retention.lock)
set -euo pipefail

readonly SQL_FILE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/umami-retention.sql"
readonly ENV_FILE="${UMAMI_RETENTION_ENV_FILE:-/etc/umami-retention.env}"

if [[ -f "$ENV_FILE" ]]; then
  # shellcheck source=/dev/null
  source "$ENV_FILE"
fi

dry_run=false
case "${1:-}" in
  --dry-run) dry_run=true ;;
  "") ;;
  *) echo "usage: $0 [--dry-run]" >&2; exit 2 ;;
esac

if [[ -z "${UMAMI_DATABASE_URL:-}" ]]; then
  echo "UMAMI_DATABASE_URL is not set (environment or $ENV_FILE)" >&2
  exit 2
fi

exec 9>"${UMAMI_RETENTION_LOCK:-/run/lock/umami-retention.lock}"
if ! flock -n 9; then
  echo "another umami-retention run is in progress; skipping" >&2
  exit 0
fi

psql_args=(--no-psqlrc --quiet --set "dry_run=$dry_run" "$UMAMI_DATABASE_URL")

echo "umami-retention: start $(date -u +%Y-%m-%dT%H:%M:%SZ) dry_run=$dry_run"
if [[ -n "${UMAMI_DB_CONTAINER:-}" ]]; then
  docker exec -i "$UMAMI_DB_CONTAINER" psql "${psql_args[@]}" < "$SQL_FILE"
else
  psql "${psql_args[@]}" < "$SQL_FILE"
fi
echo "umami-retention: done"
