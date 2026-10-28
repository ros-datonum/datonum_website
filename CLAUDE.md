# Datonum website

Astro static site for datonum.com. Marketing site for an AI
solutions company (AI audit and AI workflow implementation)

## Design system — non-negotiable

Source of truth: the Claude Design export. Tokens ship as CSS custom
properties in `src/styles/` (entry `src/styles/styles.css`, which chains
`src/styles/tokens/*.css`), copied verbatim from the frozen export in
`design/reference/`. Full thesis: `design/design-system.md` ("The Instrument").

- Primary: Navy `#0A2540`
- Accent (interface): Signal teal `#0E8C7F` — this is *the* accent. Carries
  eyebrows, links, focus rings, checkmarks, and at most one CTA per view.
- Identity accent: Brass `#B8760B` — the logo summit block only. Never on
  buttons or other UI.
- Type: DM Sans for prose, DM Mono for figures and labels
- Wordmark: DM Sans, outlined (not live type), letter-spacing -0.0301em, navy
- Signature motif: the rising-matrix mark and the "tick rule" measurement
  device; faint block-motif watermarks at section edges

### Design authority
The Claude Design export in `design/reference/` is the source of truth. Where
it uses a technique, follow it — the guardrails below yield to the export.

### Excluded unless the export uses it
photography · illustration · pill buttons (controls use `--radius-control`) ·
a third accent colour beyond navy / teal / brass

Permitted, per the design system: a single very soft teal radial glow in the
top-right of a section; sparse inline line-icons (checkmarks, small UI marks).

### Hard rules
- Never write a literal hex value or font-family in a component.
  Use CSS custom properties from `src/styles/` only.
- The `src/styles/` token files are copied verbatim from the Claude Design
  export. Never hand-edit token values — re-copy from a new export in
  `design/reference/` instead.
- If a needed token is missing, stop and ask — do not invent one.

## Copy rules
No prices anywhere on the site. Pricing lives only in the PDF one-pagers.

## Stack
Astro 7, static output, no adapter. Built into an nginx container (`Dockerfile`,
`nginx.conf`) on a VPS, behind a shared Caddy container (TLS, on the `ai_stack_public_proxy`
Docker network) and Cloudflare. Deploy:
`docker compose up -d --build`.
After deploying a new article or a major edit, run `npm run indexnow` (pings IndexNow with
every sitemap URL; `npm run indexnow -- --urls=/insights/slug,...` sends only those). The key
file is `public/087946e69631a726e776769531d9618f.txt`.

URLs have no trailing slash. Pages build to `/about.html` (`build.format: 'file'`) and
nginx serves them at `/about`, 301-ing every other spelling. Use `toRoutePath()` from
`src/data/navigation.ts` rather than raw `Astro.url.pathname`.

SEO plumbing: head metadata and JSON-LD render in `src/layouts/BaseLayout.astro`; site
identity lives in `src/data/site.ts`, schema builders in `src/data/structuredData.ts`.
`/robots.txt` and `/llms.txt` are endpoints in `src/pages/`; the sitemap comes from
`@astrojs/sitemap`.

## Insights articles
Articles are Markdown files in `src/content/insights/`; the filename is the slug
(`ai-automation-roi.md` -> `/insights/ai-automation-roi`). Briefs and drafts live in the
Notion database "Insights — Articles" (under SEO Strategy); a finished draft is copied
into a file here. A file in that folder is published on the next deploy — there is no
draft flag. Frontmatter (schema in `src/content.config.ts`):

```yaml
title: "..."
description: "..."        # max 160 chars; meta description and hero lead
publishedDate: 2026-10-20
updatedDate: 2026-11-02   # optional
relatedService: audit      # audit | deep | impl | retainer
relatedCaseStudy: opportunity-scoring   # optional, a case study slug
```

Start body headings at `##` (the title is the H1). No prices in articles either.
`metaTitle` (optional, ≤ 50 chars) replaces the headline in `<title>` when the headline is too long.

Article figures are plain HTML blocks inside the Markdown, styled by
`src/styles/article-figures.css` (tokens only, no images). Three kinds:
- `figure.fig.fig-strip` — the process strip: `<li data-kind="rule|ai|human">` with
  `.fig-strip__n`, `.fig-strip__t`, `.fig-kind`. Five steps by default (`--fig-cols` to change).
- `figure.fig.fig-decide` — a decision path: rows of `.fig-decide__n`, `.fig-decide__q`
  (with `<small>` for the branch rule) and `.fig-decide__out` holding
  `.fig-out[data-kind="rule|ai|human|manual"]`.
- `figure.fig.fig-bars` — a bar chart: `<li style="--v:NN%">` with `.fig-bars__l`,
  `.fig-bars__track > .fig-bars__bar`, `.fig-bars__v`.
Each figure has a `.fig__title` and a `figcaption`. Numbers in figures are either sourced
(name the source and year in the caption) or a labelled worked example — never invented.
See `src/content/insights/what-is-ai-workflow-automation.md` for all three.
While the folder has no articles, `/insights` is noindexed, left out of the sitemap and
not linked from the footer; all three switch on automatically with the first file.
The insights pages have no design export: they are composed from existing tokens.

Astro content layer API: use `render(entry)` and `entry.id`,
NOT the older `entry.render()` / `entry.slug`.

## Reference
`design/reference/` holds frozen Claude Design exports. Read-only —
use for visual diffing, never edit.