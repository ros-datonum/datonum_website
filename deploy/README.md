# Deploy notes

The site is a static Astro build served by nginx in a container (`Dockerfile`,
`nginx.conf`), behind the host's Caddy (TLS) and Cloudflare. Deploy on the VPS with
`docker compose up -d --build`.

## Environment variables

The build reads `.env` (copied into the build stage). See `.env.example` for the full
list. Required in production:

- `PUBLIC_HUBSPOT_PORTAL_ID`, `PUBLIC_HUBSPOT_FORM_GUID`, `PUBLIC_HUBSPOT_REGION`: contact
  form submission and the consent-gated HubSpot tracking code.
- `PUBLIC_UMAMI_SRC`, `PUBLIC_UMAMI_RECORDER_SRC`, `PUBLIC_UMAMI_WEBSITE_ID`,
  `PUBLIC_UMAMI_DOMAINS`: cookieless analytics.
- `PUBLIC_LINKEDIN_PARTNER_ID=11110585`: LinkedIn Insight Tag (consent-gated). If it is
  missing, the tag is silently not rendered.

## Short links (`/go/*`)

`go-links.caddy` holds the `/go/<code>` redirects. They live in Caddy, not in the site,
so adding a link needs no rebuild.

1. Copy `go-links.caddy` next to the Caddyfile on the VPS.
2. Inside the `datonum.com` site block of the Caddyfile, add:

   ```caddy
   import go-links.caddy
   ```

3. Validate and reload:

   ```sh
   caddy validate --config /etc/caddy/Caddyfile
   caddy reload --config /etc/caddy/Caddyfile
   ```

4. Check: `curl -sI https://datonum.com/go/li` and `curl -sI https://datonum.com/go/li/`
   both return `302` with the UTM `location`.

To add a link, add a matcher and `redir` pair to `go-links.caddy` on the VPS (and
here), then reload.

## Content Security Policy

There is no CSP today. If a CSP is added later, allow js-eu1.hs-scripts.com,
js-eu1.hs-analytics.net, js-eu1.hs-banner.com, snap.licdn.com, px.ads.linkedin.com.

## Retention

The Privacy Notice (§7) promises server logs for up to 14 days, usage analytics for up
to 24 months and session recordings for up to 30 days. Neither Umami nor Docker enforces
this by default. Install the pieces below. The `TODO(ros)` markers in
`src/pages/[legal].astro` stay until they are installed and verified.

### Server logs (14 days)

- **nginx (this container):** logs to stdout/stderr. `docker-compose.yml` sends them to
  the journal (`logging: driver: journald`), so the change applies on the next
  `docker compose up -d --build`. Before that, install the journal retention:

  ```sh
  sudo install -D -m 644 deploy/journald-retention.conf /etc/systemd/journald.conf.d/retention.conf
  sudo systemctl restart systemd-journald
  ```

- **Caddy:** its Caddyfile is not in this repo. Caddy writes access logs only for sites
  with a `log` directive.
  - If it logs to stderr (the default), its logs land wherever Caddy runs:
    - as a systemd service, they go to the journal and are already covered;
    - as a container, add the same `logging: driver: journald` block to its compose
      service.
  - If it logs to a file, set the roll options in that `log` block:

    ```caddy
    log {
    	output file /var/log/caddy/access.log {
    		roll_interval 24h
    		roll_keep_for 336h
    	}
    }
    ```

    `roll_interval` makes the file roll daily even when it is small; without it Caddy
    rolls only by size (100 MiB) and the live file can hold older entries. Run
    `caddy validate` first: if it rejects `roll_interval`, this Caddy version predates
    it, so upgrade it or log to stderr instead.

Verify:

```sh
docker inspect -f '{{.HostConfig.LogConfig.Type}}' datonum-website   # journald
systemd-analyze cat-config systemd/journald.conf | grep -E 'MaxFileSec|MaxRetentionSec'
journalctl -o short-iso | head -1                                     # after two weeks: ≤ 14 days old
```

### Umami data (24 months; recordings 30 days)

`umami-retention.sql` deletes analytics rows older than 24 months and session-replay and
heatmap rows older than 30 days. It is written for Umami v3.2.0 (PostgreSQL); its header
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
   sudo /path/to/datonum-website/deploy/umami-retention.sh --dry-run
   ```

3. Install the daily job as `/etc/cron.d/umami-retention` (03:30 server time):

   ```cron
   PATH=/usr/local/bin:/usr/bin:/bin
   30 3 * * * root /path/to/datonum-website/deploy/umami-retention.sh 2>&1 | logger -t umami-retention
   ```

Verify the next day: `journalctl -t umami-retention --since yesterday` shows
`Retention applied.`. Rows keep ageing out during the day, so a `--dry-run` reports 0 for
every table only straight after a run.
