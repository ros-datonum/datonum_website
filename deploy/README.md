# Deploy notes

The site is a static Astro build hosted on **Cloudflare Pages** (project `datonum-website`).
A push to `main`, including a merged pull request, builds and deploys automatically through
GitHub Actions; see [GitHub Actions deployment](github-actions.md). Nothing about the site
runs on the VPS any more.

Pages reads two control files from the build output root, both kept in `public/`:

- `public/_redirects`: the `/go/*` short links (302);
- `public/_headers`: security headers and cache rules (immutable `/_astro/*`, 30 days for
  `/fonts/*` and `/brand/*`, `no-store` for `/deployment.json`).

Pages serves `/about.html` at `/about` and 308-redirects `/about.html`, `/about/` and
`/index.html` to the canonical spelling, matching `trailingSlash: 'never'` and
`build.format: 'file'`. One difference from the old nginx: `/404` answers 200 with the
not-found page (Pages cannot return 404 for an existing file); the page is `noindex`.

Local check of the real Pages routing, redirects and headers:

```sh
npm run build && npx wrangler pages dev dist
```

## Environment variables

The `PUBLIC_*` values are public (inlined into the client bundle) and are set in the
`env:` block of `.github/workflows/website.yml`. For local builds copy `.env.example` to
`.env`. Required in production:

- `PUBLIC_HUBSPOT_PORTAL_ID`, `PUBLIC_HUBSPOT_FORM_GUID`, `PUBLIC_HUBSPOT_REGION`: contact
  form submission and the consent-gated HubSpot tracking code.
- `PUBLIC_UMAMI_SRC`, `PUBLIC_UMAMI_RECORDER_SRC`, `PUBLIC_UMAMI_WEBSITE_ID`,
  `PUBLIC_UMAMI_DOMAINS`: cookieless analytics.
- `PUBLIC_LINKEDIN_PARTNER_ID=11110585`: LinkedIn Insight Tag (consent-gated). If it is
  missing, the tag is silently not rendered.

## Short links (`/go/*`)

Each code is two lines in `public/_redirects` (with and without a trailing slash), status
302. Add a code there, register it in Notion ("UTM-правила" -> Реєстр посилань) and push:
the next deploy publishes it, and the deploy workflow checks `/go/li` on every release.

## Content Security Policy

There is no CSP today. If a CSP is added later, allow js-eu1.hs-scripts.com,
js-eu1.hs-analytics.net, js-eu1.hs-banner.com, snap.licdn.com, px.ads.linkedin.com.

## Retention

The Privacy Notice (§3, §7) says the web server keeps no access logs, and that usage
analytics are kept for up to 24 months and session recordings for up to 30 days. Umami does
not enforce this by itself. Install and check the pieces below. The notice states these
periods as in force from its 19 October 2026 version, so install the Umami job in the same
session as that deploy.

### Server logs

The site has no web server of its own: Cloudflare Pages serves it and gives the account no
per-request access log, so no visitor IPs are kept for the website. Umami is the only
analytics store (below). Umami itself still runs on the VPS.

### Umami data (24 months; recordings 30 days)

`umami-retention.sql` deletes analytics rows older than 24 months and session-replay and
heatmap rows older than 30 days. It is written for Umami v3.4.1 (PostgreSQL); its header
lists the exact tables and columns. Re-check it after every Umami upgrade. The wrapper
`umami-retention.sh` takes a lock (`flock`, from util-linux), so overlapping runs skip.

1. Create `/etc/umami-retention.env` (mode 600) with the database URL. Use the same one as
   Umami's `DATABASE_URL`, from Umami's compose file:

   ```sh
   UMAMI_DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db>
   # If psql is not installed on the host, run it inside the Postgres container instead
   # (the URL is then resolved from inside that container):
   # UMAMI_DB_CONTAINER=<postgres container name>
   ```

2. Dry run. It prints the cutoffs and how many rows per table are past retention, and
   deletes nothing:

   ```sh
   sudo /opt/datonum_website/deploy/umami-retention.sh --dry-run
   ```

3. Install the daily job as `/etc/cron.d/umami-retention` (03:30 server time):

   ```cron
   PATH=/usr/local/bin:/usr/bin:/bin
   30 3 * * * root /opt/datonum_website/deploy/umami-retention.sh 2>&1 | logger -t umami-retention
   ```

Verify the next day: `journalctl -t umami-retention --since yesterday` shows
`Retention applied.`. Rows keep ageing out during the day, so a `--dry-run` reports 0 for
every table only straight after a run.

## GitHub Actions

See [GitHub Actions deployment](github-actions.md) for automated checks, deployment, cache purge and rollback. The Umami retention job above still runs on the VPS from the `/opt/datonum_website` checkout; keep that checkout when the old site container is removed.
