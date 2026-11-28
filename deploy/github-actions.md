# GitHub Actions deployment (Cloudflare Pages)

The `Website checks and deployment` workflow (`.github/workflows/website.yml`):

- **Pull request to `main`:** tests (`tests/deployment.test.mjs`), build, and a check that
  `_redirects`, `_headers` and `deployment.json` are in the output. Nothing is deployed.
- **Push to `main`** (a direct push or a merged pull request), or a manual run on `main`:
  the same checks, then a deploy when `PAGES_DEPLOY_ENABLED=true`.

## What a deploy does

1. Skips if `main` has already moved on (a newer run will deploy the newer commit).
2. Builds the exact commit and writes `/deployment.json` with its SHA.
3. Creates the Pages project `datonum-website` if it does not exist (`deploy/pages.mjs ensure`)
   and remembers the current production deployment.
4. Uploads a **preview** (branch `verify`) and checks it with `deploy/verify-site.mjs`:
   commit marker, key pages, robots, sitemap, Bing file, and the `/go/li` 302.
   A failing preview never reaches production.
5. Deploys the same files as **production** (branch `main`) and checks that deployment URL.
6. When `PAGES_CUSTOM_DOMAIN_LIVE=true`: purges the datonum.com cache, checks
   https://datonum.com itself, then pings IndexNow.
7. If a check after step 5 fails, production is rolled back to the remembered deployment
   (`deploy/pages.mjs rollback`). Rollback is also one click in the Pages dashboard.

## One-time connections

Secrets go in the repository's `production` environment (deployment branch rule: `main`
only). Never paste credentials into chat, source files or Actions logs.

| Setting | Location | Purpose |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | production secret | Account token, permission **Account → Cloudflare Pages → Edit** only |
| `CLOUDFLARE_ACCOUNT_ID` | repository variable | Cloudflare account ID (dashboard sidebar; not a secret) |
| `CF_API_TOKEN` | production secret | Existing token: datonum.com Zone Read + Cache Purge |
| `CF_ZONE_ID` | repository variable | Existing: zone ID for datonum.com |
| `PAGES_DEPLOY_ENABLED` | repository variable | `true` turns on deployment |
| `PAGES_CUSTOM_DOMAIN_LIVE` | repository variable | `true` once datonum.com is attached to the Pages project |

The old VPS settings (`DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_HOST`, `DEPLOY_USER`,
`DEPLOY_PORT`, `DEPLOY_ENABLED`) are no longer read and can be deleted.

## First release and moving datonum.com

```sh
gh variable set CLOUDFLARE_ACCOUNT_ID --body <account-id>
gh secret set CLOUDFLARE_API_TOKEN --env production     # paste when prompted
gh variable set PAGES_DEPLOY_ENABLED --body true
gh workflow run website.yml --ref main && gh run watch --exit-status
```

That run creates the project and deploys to `*.pages.dev` only; datonum.com still points at
the VPS. Then:

1. Pages → `datonum-website` → Custom domains: add `datonum.com` and `www.datonum.com`.
   Cloudflare replaces their DNS records (apex via CNAME flattening).
2. Rules → Redirect Rules: `www.datonum.com/*` → `https://datonum.com/${1}`, 301,
   preserve query string. (`_redirects` cannot redirect between hosts.)
3. `gh variable set PAGES_CUSTOM_DOMAIN_LIVE --body true`, then re-run the workflow so it
   checks datonum.com itself.
4. On the VPS, remove the `datonum.com` and `www` blocks from the shared Caddyfile
   (ai_stack_infra) and stop the old `datonum-website` container. Keep the
   `/opt/datonum_website` checkout: the Umami retention cron job runs from it.
