# GitHub Actions deployment

Changes are made, built and committed in the local Datonum repository, then pushed. The
`Website checks and deployment` workflow checks pull requests and `main`, and deploys
verified `main` commits when `DEPLOY_ENABLED=true`. A manual workflow dispatch on `main`
can retry the same commit. No deployment occurs from pull requests or other branches.

The workflow remains explicitly disabled until the production connections below are
configured. A successful build with a skipped deployment is **not** a live release.

## One-time connections

Use the repository's `production` environment for secrets, with a deployment branch rule
allowing only `main`. Keep environment approval requirements off if fully automatic
deployment is intended. Do not replace an existing protection rule without reviewing it.

| Setting | Location | Purpose |
| --- | --- | --- |
| `DEPLOY_SSH_KEY` | production secret | Dedicated unencrypted Ed25519 private key for this repository, never Ros's personal SSH key |
| `DEPLOY_KNOWN_HOSTS` | production secret | Verified SSH host-key entry for the deployment host/port |
| `CF_API_TOKEN` | production secret | Cloudflare token scoped to datonum.com, Zone Read and Cache Purge only |
| `CF_ZONE_ID` | repository variable | Zone ID for datonum.com; the workflow verifies the returned zone name before a purge |
| `DEPLOY_HOST` | repository variable, optional | Defaults to `5.75.164.13` |
| `DEPLOY_USER` | repository variable, optional | Defaults to `deploy` |
| `DEPLOY_PORT` | repository variable, optional | Defaults to `22` |
| `DEPLOY_ENABLED` | repository variable | Set to `true` only after the above connections are installed |

Generate a new key on a trusted machine. Install its public half in the server deploy
user's `~/.ssh/authorized_keys`, with the `restrict` prefix to disable forwarding and PTY.
Save its private half directly to the GitHub environment secret using standard input;
never paste it into a chat, issue, repository file or Actions log. A passphrase would
require another unattended secret, so use a dedicated key with no passphrase and revoke
it separately when no longer needed.

```sh
ssh-keygen -t ed25519 -N '' -C datonum-github-actions -f /secure/private/path/datonum-actions
gh secret set DEPLOY_SSH_KEY --env production < /secure/private/path/datonum-actions
gh secret set DEPLOY_KNOWN_HOSTS --env production < /secure/private/path/verified-known-hosts
gh secret set CF_API_TOKEN --env production  # securely prompts for the token
gh variable set CF_ZONE_ID --body YOUR_DATONUM_ZONE_ID
```

Do not trust a fresh `ssh-keyscan` result without comparing its fingerprint against the
server console or an already trusted connection. For port22 the known-hosts line starts
with the host; for a custom port use `[host]:port`. Strict host-key checking is mandatory.

## Server prerequisites

- `/opt/datonum_website` is the existing clean checkout of `ros-datonum/datonum_website`,
  on `main`, with an authenticated read connection to its origin.
- The deploy user can run Git, Docker Compose v2 and `flock`, and can write its own
  `~/.local/state/datonum-website-deploy` directory.
- The existing `datonum-website` container is running with its Compose project label;
  the shared `ai_stack_public_proxy` network and Caddy routing remain managed separately.
- The existing production `.env` is present. It is used only by the server's image build
  and is never uploaded to GitHub or replaced by CI's empty environment.
- The SSH host is reachable by the runner. Do not broadly open infrastructure firewall
  rules just to make a failed connection pass; review runner/network placement if needed.

After configuring the connections, enable deployment and run a first observed release:

```sh
gh variable set DEPLOY_ENABLED --body true
gh workflow run website.yml --ref main
gh run list --workflow website.yml
gh run watch RUN_ID --exit-status
```

## What runs

1. Node22 locked dependency install, deployment tests, shell syntax, Astro build and
   Docker build. A temporary container must serve the expected commit and essential routes.
2. One production deployment at a time, without cancelling an activation in progress.
3. Verify Cloudflare's zone identity and strict SSH host identity before production work.
4. On the server, refuse dirty/diverged/wrong-origin checkouts. Fetch and fast-forward to
   the exact tested commit. Older queued runs are skipped if a newer `main` already exists.
5. Preserve the running image and resolved Compose configuration; build with the server's
   production `.env`. Recreate only `datonum-website`, then check its origin version marker.
6. Purge the Datonum zone's cache and verify the **canonical public** `/deployment.json`
   commit plus `/`, `/services`, `/insights`, robots and sitemap. No cache-busting query is
   used to hide stale canonical content.
7. Submit IndexNow only after the website is verified. HTTP202 is pending verification,
   not indexing success. IndexNow failure produces a warning; it does not roll back a
   healthy website.

The public marker contains only the commit SHA. Image labels record the same revision.
Manual `docker compose up -d --build` still works, but uses marker `local` unless passed
the intended `DEPLOY_SHA` build argument. Such a build is not mistaken for a successful
Actions deployment.

## Failures and rollback

Origin activation failure attempts an immediate rollback. Cache purge/public verification
failure triggers a second SSH rollback attempt followed by another cache purge. Backups
are keyed by target commit. The rollback refuses to overwrite a different/newer release.
The previous image and Compose config must remain available; do not prune rollback images
without a retention policy. Backups are under the deploy user's state directory, not Git.

The server's Git checkout records the desired source and can remain at the failed commit;
the running image and public version marker determine what is deployed. Rollback never
uses `git reset --hard` or force-push. To repair the source, commit a fix or revert locally,
push, and let Actions deploy it. If SSH or Cloudflare itself is unavailable, automatic
recovery cannot be guaranteed: the job stays failed and its logs identify the failing step.

Existing manual deployments should not run concurrently with Actions. To pause automation,
set `DEPLOY_ENABLED=false`; this does not cancel an activation already in progress.

References: [GitHub deployment workflows](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments),
[Cloudflare cache purge API](https://developers.cloudflare.com/api/resources/cache/methods/purge/).
