# Datonum website

Astro static site for datonum.com. Marketing site for an AI workflow
consultancy serving service businesses

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
Astro 7, static output, no adapter. Deployed to Cloudflare Pages.
Astro content layer API: use `render(entry)` and `entry.id`,
NOT the older `entry.render()` / `entry.slug`.

## Reference
`design/reference/` holds frozen Claude Design exports. Read-only —
use for visual diffing, never edit.