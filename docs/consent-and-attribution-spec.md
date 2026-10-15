# datonum.com: consent banner, attribution and tracking (build spec for Claude Code)

Prepared 15 Oct 2026. Decision by Ros: ask visitors for consent and collect three additional kinds of data:
1. where an inquiry came from (UTM and landing page, sent to HubSpot with the form);
2. the HubSpot tracking code;
3. the LinkedIn Insight Tag.

Umami stays as it is. It is cookieless and runs on legitimate interest, outside the banner.

> The legal text in section 9 is a draft written for a non-lawyer. Have it checked before publishing, especially the LinkedIn joint-controller wording and the cookie list. Cookie names and durations change, so verify them in the browser after implementation.

---

## 0. Current state (verified 15 Oct 2026)

- Astro 5 static site hosted on a **Hetzner VPS behind Caddy**, with **Cloudflare as a proxy in front** (CDN and security). Responses carry `server: cloudflare` and `via: 1.1 Caddy`. The form posts directly to the HubSpot Forms API v3:
  - portal `147885520`, form `cf2fcf59-3620-44ec-894c-afe8894d43fe`, region `eu1`;
  - payload is `fields` plus `context.pageUri/pageName` only;
  - fields are firstname, lastname, email, company and message.
- On success the site calls `window.umami?.track('contact_form_submit')`.
- Umami is loaded with these attributes: `script.js` with `data-do-not-track=true data-exclude-hash=true data-performance=true`. `recorder.js` is also loaded.
- There are no `data-umami-event` attributes anywhere. CTA clicks are not tracked.
- The footer LinkedIn link points to `https://www.linkedin.com/`, which is wrong. It should point to `https://www.linkedin.com/company/datonum-systems/`.
- `/privacy` is dated 10 Aug 2026 and says "no non-essential cookies; a banner will be added if that changes".

## 1. Consent manager

Use **vanilla-cookieconsent v3** (orestbida, MIT). It is self-hosted, adds no third-party service, and is about 20 KB.
- Bundle it through npm (`vanilla-cookieconsent`) and do not load it from a CDN, so that Lighthouse stays clean.

Categories:

| Category | Default | Contents |
|---|---|---|
| `necessary` | on, read-only | the consent cookie itself (`cc_cookie`) |
| `analytics` | off | HubSpot tracking code, and storing first/last-touch attribution in `localStorage` |
| `marketing` | off | LinkedIn Insight Tag |

Requirements (GDPR, LSSI-CE art. 22.2, AEPD cookie guide):
- The first layer has **Accept all**, **Reject all** and **Manage preferences**. Accept and Reject are equally prominent: same size and style, with no dark pattern.
- Nothing non-essential runs, and nothing non-essential is written to storage, before the visitor opts in.
- Consent lasts 12 months, then the banner asks again. Changing the category list (bump `revision`) also asks again.
- The footer has a permanent **Cookie settings** link on every page that reopens the preferences panel (`CookieConsent.showPreferences()`).
- When consent is withdrawn:
  - delete `localStorage` keys `dtn_first_touch` and `dtn_last_touch`;
  - delete HubSpot first-party cookies (`__hstc`, `hubspotutk`, `__hssrc`, `__hssc`) using `autoClear`;
  - reload the page.
- Proof of consent: `cc_cookie` holds the consent ID, date and categories. Also send a Umami event `consent_update` with event data `{analytics: bool, marketing: bool}`. It contains no personal data and gives a count of accept and reject choices.
- The banner text is in English and short. Proposed first-layer copy:
  > **Your choice on cookies.** We use privacy-friendly, cookieless analytics on this site in any case. With your permission we'd also like to use HubSpot and LinkedIn cookies to understand which pages and channels bring people to us. You can change this any time via "Cookie settings". [Accept all] [Reject all] [Manage preferences]
- Styling uses the site design tokens (navy, teal, DM Sans). No brass/amber; that colour is reserved for the logo.
- Lighthouse: the banner must not cause layout shift. Render it as a fixed overlay at the bottom and load the library with `defer`.

## 2. Gated scripts

Load the scripts only after consent. Use cookieconsent's script-blocking: `type="text/plain" data-category="..."`.

```html
<!-- HubSpot tracking code (EU data centre) -->
<script type="text/plain" data-category="analytics" id="hs-script-loader" async defer src="https://js-eu1.hs-scripts.com/147885520.js"></script>

<!-- LinkedIn Insight Tag: Partner ID 11110585 (Campaign Manager, created 15 Oct 2026) -->
<script type="text/plain" data-category="marketing">
  _linkedin_partner_id = "11110585";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  (function(l){ if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
  var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");
  b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b,s);})(window.lintrk);
</script>
```

- **Do not add LinkedIn's `<noscript><img src="https://px.ads.linkedin.com/collect/?pid=11110585&fmt=gif"></noscript>` pixel.** LinkedIn's install snippet includes it, but it fires for visitors without JavaScript. Those visitors cannot see the banner, so the pixel would track them without consent.
- Do **not** load HubSpot's own cookie banner. In HubSpot, set Settings → Privacy & Consent → Cookies → banner off. The site's banner is the only one.
- Remove `recorder.js` and session recording from the consent discussion: they stay cookieless under legitimate interest, as `/privacy` already describes.
- Keep the Umami `script.js` loaded as now. Decide separately whether to drop `data-do-not-track` (Umami task in TickTick).

## 3. Attribution capture (first and last touch)

A small module `src/scripts/attribution.ts` runs on every page:
- On page load, read `utm_source`, `utm_medium`, `utm_campaign` and `utm_content` from the URL. Also read `document.referrer` (external only; ignore datonum.com) and the landing path. Keep them **in memory**.
- When the `analytics` consent is present (at load or when given later through `onConsent` / `onChange`), write them to storage:
  - `dtn_first_touch` is written only if absent. Shape: `{source, medium, campaign, content, landing, referrer, ts}`. Expires after 90 days; check `ts` and discard old entries.
  - `dtn_last_touch` is overwritten whenever the current page has UTMs or an external referrer.
- If there are no UTMs but the referrer is external, set `source` to the referrer host and `medium=referral`. If there are no UTMs and no referrer, set `source=direct`.
- Without consent, nothing is written. If consent arrives on a later page, the landing data is already gone. Umami still has the visit, so this is accepted.

## 4. Form submission → HubSpot

**Status 15 Oct 2026: the HubSpot side is done.**
- The property group and the 9 properties exist.
- They are published as hidden fields on the form.
- No HubSpot consent banner is configured.
- Tracking is limited to listed domains (datonum.com is listed), with secure cookies only.
- "Intent data access" is off, so HubSpot does not use tracking data for its own intent features. This matches the "processor" wording in /privacy.
- Ros's IP 79.117.246.247 is excluded. It may change; update it under Settings → Tracking & Analytics → Advanced Tracking.

The setup that was done, for reference:
- Create a contact property group **"Datonum attribution"** with these single-line text properties:
  - `first_utm_source`, `first_utm_medium`, `first_utm_campaign`, `first_utm_content`, `first_landing_page`, `first_referrer`;
  - `last_utm_source`, `last_utm_medium`, `last_utm_campaign`.
- Add these properties as **hidden fields** to the form `cf2fcf59-…`, so that the v3 submit endpoint accepts them.
- Under Settings → Tracking & Analytics → Tracking code:
  - make sure `datonum.com` is listed;
  - exclude Ros's own traffic by IP or by the opt-out cookie.

In the site form script:
- If `analytics` consent is present:
  - append the attribution fields from `dtn_first_touch` and `dtn_last_touch`, skipping empty values;
  - add `context.hutk` with the value of the `hubspotutk` cookie, so that HubSpot links the form to the browsing session and fills its own Original Source.
- Without consent, send the form exactly as today.
- Pass the current page's UTMs (from memory, not storage) as Umami event data. This is allowed without consent because nothing is stored on the device: `umami.track('contact_form_submit', {source, medium, campaign})`. No name or email in event data, ever.
- The submit must keep working if HubSpot's script is blocked. Do not depend on `window._hsq`.

## 5. Umami events on the site

| Element | Attribute |
|---|---|
| Every "Book a call" / CTA to `/contact` | `data-umami-event="cta_book_call"` + `data-umami-event-location="<hero|nav|footer|service-<slug>|case-<slug>|article>"` |
| `mailto:hello@datonum.com` | `data-umami-event="email_click"` |
| Footer and any LinkedIn links | `data-umami-event="outbound_linkedin"` |
| Service sample PDF downloads (if added later) | `data-umami-event="download"` + `data-umami-event-file="<name>"` |

## 6. Footer and short links

- Footer LinkedIn link → `https://www.linkedin.com/company/datonum-systems/`. Add the **Cookie settings** link next to Privacy and Terms.
- Add short links as **302** redirects in the **Caddyfile** on the Hetzner VPS, inside the datonum.com site block. Use 302 so destinations can change without cache problems. Codes come from the Notion page **"UTM-правила" → Реєстр посилань**.
  - Keep the list in one imported file, e.g. `import go-links.caddy`, so that adding a link means editing one file and running `caddy reload`. No site rebuild is needed.
  - Make sure Cloudflare does not cache the 302s. Cloudflare does not cache 302 by default; do not add a cache rule for `/go/*`.

```caddy
# go-links.caddy
redir /go/li        /?utm_source=linkedin&utm_medium=profile&utm_campaign=always-on&utm_content=contact-info 302
redir /go/li-about  /?utm_source=linkedin&utm_medium=profile&utm_campaign=always-on&utm_content=about        302
redir /go/co        /?utm_source=linkedin&utm_medium=company-page&utm_campaign=always-on                     302
redir /go/x         /?utm_source=x&utm_medium=profile&utm_campaign=always-on&utm_content=bio                  302
redir /go/th        /?utm_source=threads&utm_medium=profile&utm_campaign=always-on&utm_content=bio            302
redir /go/sig       /?utm_source=email&utm_medium=signature&utm_campaign=always-on                            302
```

## 7. LinkedIn (Ros, not code)

- **Done 15 Oct 2026:** the Campaign Manager ad account and Insight Tag exist. Partner ID **11110585**. Put it in the site config as the `PUBLIC_LINKEDIN_PARTNER_ID` env var, or hard-code it; it is public by design.
- After the deploy, check that the tag status in Campaign Manager turns "Active". This only happens after a visit where the visitor accepted marketing cookies.
- Website demographics need at least 300 members to show data. Until then expect empty reports.

## 8. Test plan (after deploy)

1. In a fresh private window, open `datonum.com/?utm_source=test&utm_medium=test&utm_campaign=consent-check`.
2. The banner appears. DevTools shows no HubSpot or LinkedIn requests, no `__hstc`/`hubspotutk` cookies and no `dtn_*` keys.
3. Click **Reject all**. Still nothing loads. "Cookie settings" reopens the panel.
4. New private window, same URL, then **Accept all**:
   - `js-eu1.hs-scripts.com` and `snap.licdn.com` load;
   - `dtn_first_touch` holds `source=test`.
5. Go to `/contact` and submit a test inquiry (name "TEST — delete").
6. In HubSpot, check that the contact has `first_utm_source=test` and Original Source filled, and that page views show in the timeline.
7. In Umami, check that `contact_form_submit` has event data `source=test` when analytics consent was given (it comes from `dtn_last_touch`, because the UTMs were on `/`, not on `/contact`). Without analytics consent the event data is empty unless the visitor landed on `/contact` with UTMs. Also check that `consent_update` events exist.
8. Withdraw consent through Cookie settings. `dtn_*` keys and HubSpot cookies are removed.
9. Run Lighthouse on `/` with no consent. The score must not drop compared with today.
10. Delete the test contact in HubSpot.

## 9. Privacy Notice changes (draft, English, replace in `/privacy`)

Change "Last updated" to the deploy date. Keep all other sections as they are.

**Section 3, add after "Session recording":**

> **Cookies and similar technologies, with your consent.** If you accept them in our cookie banner, we also use:
> - **Attribution data** — we store in your browser (local storage) the campaign parameters of the link that brought you to our site (for example "LinkedIn post"), the first page you visited and the referring website, so that if you later contact us we know which channel reached you. Kept for up to 90 days.
> - **HubSpot tracking** — HubSpot cookies record the pages you view on our site; if you later submit our inquiry form, this browsing history is linked to your contact record in our CRM.
> - **LinkedIn Insight Tag** — LinkedIn cookies let LinkedIn report to us, in aggregated form, the professional characteristics of our visitors (such as industry, job function and company size) and, in future, let us show our content on LinkedIn to people who have visited our site.
>
> None of these run unless you opt in, and you can withdraw your choice at any time through "Cookie settings" at the bottom of every page.

**Section 4, add a line:**

> To understand which channels bring visitors and inquiries, to link an inquiry to the pages viewed before it, and to measure and target our LinkedIn activity, using the cookies and similar technologies described above — Article 6(1)(a) GDPR, your consent (and Article 22.2 LSSI-CE), which you can withdraw at any time.

**Section 5, change the HubSpot line and add LinkedIn:**

> **HubSpot** — our customer relationship management platform; inquiry-form submissions, and, if you accept analytics cookies, your browsing on our site, are stored there on servers in the European Union (acting as our processor).
>
> **LinkedIn Ireland Unlimited Company** — only if you accept marketing cookies, for the LinkedIn Insight Tag. For this processing LinkedIn acts as joint controller with us under its Joint Controller Addendum; LinkedIn's own privacy policy and cookie policy apply to the data it collects. *(Verify wording against LinkedIn's current terms before publishing.)*

**Section 5, also fix hosting (the current text names Cloudflare as the host, which is inaccurate):**

> **Hetzner Online GmbH** (Germany) — hosting of this website and of our self-hosted analytics (processor).
> **Cloudflare** — content delivery and security in front of our website (processor).

**Section 10, "hosting and security provider" sentence → "our content delivery and security provider (Cloudflare)".**

**Section 6, add:** LinkedIn is part of a US group; transfers are covered by the EU–US Data Privacy Framework and/or Standard Contractual Clauses.

**Section 7, add:** Attribution data in your browser: up to 90 days. Your cookie choice: 12 months. HubSpot and LinkedIn cookies: see the table in section 10.

**Section 10, replace the whole section with:**

> **10. Cookies and similar technologies**
>
> Our usage analytics (Umami) and session recording are cookieless and run without any storage on your device. Everything else listed below is used only after you agree to it in our cookie banner. You can change your choice at any time through "Cookie settings" at the bottom of every page, or delete cookies in your browser settings.
>
> | Name | Provider | Purpose | Category | Duration |
> |---|---|---|---|---|
> | cc_cookie | Datonum | Remembers your cookie choice | Necessary | 12 months |
> | dtn_first_touch, dtn_last_touch (local storage) | Datonum | Which link or website brought you to us | Analytics | 90 days |
> | __hstc | HubSpot | Tracks visits | Analytics | 6 months |
> | hubspotutk | HubSpot | Links your visits to an inquiry you submit | Analytics | 6 months |
> | __hssc | HubSpot | Counts pages in a session | Analytics | 30 minutes |
> | __hssrc | HubSpot | Detects a new session | Analytics | Session |
> | li_fat_id, bcookie, lidc, UserMatchHistory, AnalyticsSyncHistory, li_sugr | LinkedIn | Visitor demographics, conversion measurement, future ad targeting | Marketing | from 1 day to 1 year |
>
> Our content delivery and security provider (Cloudflare) may set strictly necessary technical cookies to deliver and protect the site; these are exempt from consent under Article 22.2 LSSI-CE.
