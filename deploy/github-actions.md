# GitHub Actions deployment

Changes are made, built and committed in the local Datonum repository, then pushed. The
`Website checks and deployment` workflow checks pull requests and `main`, and deploys
verified `main` commits when `DEPLOY_ENABLED=true`. A manual workflow dispatch on `main`
can retry the same commit. No deployment occurs from pull requests or other branches.

Production connections are configured and automatic deployment is enabled. The existing
production Actions SSH access is reused; Cloudflare access is scoped to datonum.com.
For a fresh installation, keep deployment disabled until those connections are ready.
A successful build with a skipped deployment is **not** a live release.

## One-time connections

Use the repository's `production` environment for secrets, with a deployment branch rule
allowing only `main`. Keep environment approval requirements off if fully automatic
deployment is intended. Do not replace an existing protection rule without reviewing it.

| Setting | Location | Purpose |
| --- | --- | --- |
| `DEPLOY_SSH_KEY` | production secret | Existing production Actions key, transferred as GitHub-encrypted ciphertext from ai_stack_infra |
| `DEPLOY_KNOWN_HOSTS` | production secret | Pinned host-key entry captured through the existing successful production Actions connection |
| `CF_API_TOKEN` | production secret | Cloudflare token scoped to datonum.com, Zone Read and Cache Purge only |
| `CF_ZONE_ID` | repository variable | Zone ID for datonum.com; the workflow verifies the returned zone name before a purge |
| `DEPLOY_HOST` | production secret (or repository variable) | Defaults to `5.75.164.13` |
| `DEPLOY_USER` | production secret (or repository variable) | Defaults to `deploy` |
| `DEPLOY_PORT` | repository variable, optional | Defaults to `22` |
| `DEPLOY_ENABLED` | repository variable | Set to `true` only after the above connections are installed |

The existing production Actions SSH key is reused; no new server key installation is
required. The one-time connection run in ai_stack_infra sealed the key and host/user to
this environment's GitHub public key before transfer. Plaintext keys were not downloaded
or logged. Strict host-key checking uses the captured known-hosts entries; this preserves
the existing workflow's trust basis, not a separate out-of-band fingerprint verification.

Store the Cloudflare token directly in the production secret and its zone ID as a
repository variable. Never paste credentials into chat, source files or Actions logs.
RB Home is a Shopify store and has no connection to this server or deployment workflow.

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
   the exact tested commit. The pre-existing public/BingSiteAuth.xml may be adopted only
   when it is the sole untracked change and its bytes exactly match the tested Git blob;
   retain a backup outside the checkout and restore it if the merge fails. Older queued runs are skipped if a newer `main` already exists.
5. Preserve the running image and resolved Compose configuration; build with the server's
   production `.env`. Recreate only `datonum-website`, then check its origin version marker.
6. Purge the Datonum zone's cache and verify the **canonical public** `/deployment.json`
   commit plus `/`, `/services`, `/insights`, robots, sitemap and Bing verification. No cache-busting query is
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
