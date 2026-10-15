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

4. Check: `curl -sI https://datonum.com/go/li` returns `302` with the UTM `location`.

To add a link, add one `redir` line to `go-links.caddy` on the VPS (and here), then
reload.

## Content Security Policy

There is no CSP today. If a CSP is added later, allow js-eu1.hs-scripts.com,
js-eu1.hs-analytics.net, js-eu1.hs-banner.com, snap.licdn.com, px.ads.linkedin.com.
