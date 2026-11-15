#!/usr/bin/env bash
set -euo pipefail
operation=${1:?Expected deploy or rollback}
[[ "$operation" = deploy || "$operation" = rollback ]] || exit 2
[[ ${DEPLOY_SHA:-} =~ ^[0-9a-f]{40}$ ]] || { echo 'Invalid commit SHA' >&2; exit 2; }
[[ ${DEPLOY_HOST:-} =~ ^[a-zA-Z0-9][a-zA-Z0-9.-]*$ ]] || exit 2
[[ ${DEPLOY_USER:-} =~ ^[a-z_][a-z0-9_-]*$ ]] || exit 2
[[ ${DEPLOY_PORT:-22} =~ ^[0-9]+$ ]] || exit 2
ssh -T -o BatchMode=yes -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes \
  -o ConnectTimeout=15 -o ServerAliveInterval=15 -o ServerAliveCountMax=4 \
  -o "UserKnownHostsFile=$RUNNER_TEMP/datonum-known-hosts" \
  -i "$RUNNER_TEMP/datonum-deploy-key" -p "${DEPLOY_PORT:-22}" \
  "$DEPLOY_USER@$DEPLOY_HOST" "bash -s -- $operation $DEPLOY_SHA" < deploy/github-deploy.sh
