# Deploy notes

The site is a static Astro build served by nginx in a container (`Dockerfile`,
`nginx.conf`). In front of it sit the shared Caddy container (TLS), reached over the
`ai_stack_public_proxy` Docker network with no host port published, and Cloudflare. Deploy on
the VPS with `docker compose up -d --build`.

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

Caddy runs as a shared container whose compose file is not in this repo. Below,
`<caddy-container>` is its container name (`docker ps --filter ancestor=caddy`), and
`<caddy-config-dir>` is the host directory it mounts at `/etc/caddy`
(`docker inspect -f '{{json .Mounts}}' <caddy-container>`).

1. Copy `go-links.caddy` into `<caddy-config-dir>`, next to the Caddyfile.
2. Inside the `datonum.com` site block of the Caddyfile, add:

   ```caddy
   import go-links.caddy
   ```

3. Validate and reload:

   ```sh
   docker exec <caddy-container> caddy validate --config /etc/caddy/Caddyfile
   docker exec <caddy-container> caddy reload --config /etc/caddy/Caddyfile
   ```

4. Check: `curl -sI https://datonum.com/go/li` and `curl -sI https://datonum.com/go/li/`
   both return `302` with the UTM `location`.

To add a link, add a matcher and `redir` pair to `go-links.caddy` on the VPS (and
here), then reload.

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

Nothing here changes VPS-wide settings; everything is scoped to this site.

- **nginx (this container):** requests arrive through Caddy with the visitor's IP in
  `X-Forwarded-For` and `CF-Connecting-IP`, and the image's default access-log format
  records `X-Forwarded-For`. `nginx.conf` therefore sets `access_log off` and logs errors
  at `warn` only. Those error lines show the Caddy container's address as `client`,
  never a visitor's. `docker-compose.yml` caps this container's log at 2 × 1 MB
  (`json-file`, per service).
- **Caddy (shared container):** Caddy writes access logs only for site blocks that
  contain a `log` directive. Check the `datonum.com` block in the shared Caddyfile:
  - no `log`: nothing to do;
  - has `log`: remove it, or keep it and mask client IPs:

    ```caddy
    log {
    	format filter {
    		request>remote_ip ip_mask 16 32
    		request>client_ip ip_mask 16 32
    		request>headers>X-Forwarded-For delete
    		request>headers>Cf-Connecting-Ip delete
    	}
    }
    ```

    Then validate and reload as in "Short links" above.

Verify after the next deploy:

```sh
docker inspect -f '{{.HostConfig.LogConfig}}' datonum-website   # {json-file map[max-file:2 max-size:1m]}
docker logs datonum-website 2>&1 | grep -c 'GET /'              # 0: no access lines
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
