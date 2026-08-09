# Datonum Design System

Datonum is a young B2B services company (datonum.com, admin@datonum.com) working with
**founder-led service businesses of roughly 10–80 people** — agencies, consultancies, software
agencies, recruitment firms and operations-heavy B2B teams, usually with no technical team of
their own.

**Master positioning (verbatim from the source):** *Datonum helps founder-led service businesses
identify practical AI opportunities, implement AI-assisted workflows, and build better operational
intelligence on top of their existing tools.*

## Service architecture (the product map)

```
Datonum
├── AI Readiness & Automation Audit      active entry / cashflow offer
├── AI Workflow Implementation           Lite · Standard · Growth
├── AI Workflow Optimization Retainer    Light · Standard · Growth
└── Delivery Intelligence                strategic thesis — NOT an active offer
```

Operating rule: *Audit finds the opportunity. Implementation builds the workflow. Retainer keeps it
useful.* Delivery Intelligence — a cross-tool profitability and delivery-risk layer for
40–150-person project agencies — remains a thesis until repeated market evidence appears, so
**nothing in this system markets it as a product.**

## Surfaces represented here
1. **datonum.com** — the marketing site (`ui_kits/website/`). The site did not exist when this
   system was built; the strategy source forbids building it before positioning was locked. The kit
   therefore lays out the now-locked copy on the brand foundations. Layout = proposal, copy = truth.
2. **Client documents** (`ui_kits/documents/`) — the service one-pager PDFs (USD/EUR/GBP) and the
   audit findings report. Both are explicitly planned outputs in the source.

There is no product application, no mobile app and no docs site. None were described in the source
material and none have been invented.

## Sources used
- **Notion — Teamspace Home**: https://app.notion.com/p/Teamspace-Home-b2951131fdb682bfbad70120a0ff00bc
  - Strategy v2 — Datonum Operating Architecture (`bba51131fdb68252bfaf8148d4814fb7`)
  - 08 ICP & Buyer Profiles · 12 Messaging Architecture
  - Marketing → Service One-Pagers (Client-Facing), items 01–07 — the primary copy source
  - Brand and Message Architecture — Datonum + Personal LinkedIn
- **Uploaded artwork**: `uploads/datonum-logo-wordmark-1024.png`, `uploads/datonum-icon-D-1024.png`
  (processed into `assets/logo/`)
- No codebase, Figma file, live site or slide template was provided.

**Gaps in the source.** The Notion pages *Brand Rules*, *Messaging Rules*, *Positioning* and
*Service Architecture* under Marketing → Brand & Offer Architecture are all **blank**. There is no
colour palette, type specification, font file, icon set, photography direction or price list
anywhere in the workspace. Everything under Visual Foundations below is therefore **derived from
the supplied logo artwork and the written voice**, not transcribed from a brand guide. It needs the
founder's sign-off.

---

# Content fundamentals

The written voice is the strongest, best-documented part of this brand. Copy it exactly.

**Who speaks.** Always **we**, never **I** — even on the company social accounts, which is a stated
rule. The reader is **you**. Credibility comes from specificity, not from confession.

**Register.** Plain, calm, declarative British English (*stabilisation*, *optimisation*,
*prioritise*). Short sentences. Ordinary words. Written for a non-technical founder: the source
rules ban *LLM, model, agent, API, prompt, pipeline, orchestration* from client-facing copy.

**Casing.** Sentence case everywhere — headings, buttons, table headers, labels. Uppercase only in
11px eyebrows and badges. Service names are the exception and keep their title case:
*AI Readiness & Automation Audit*, *AI Workflow Implementation: Standard*.

**Sentence shapes that recur.**
- The promise with the cost pre-empted: *"Find out exactly where AI will save your team time — before you spend anything building it."*
- The plain-verb description: *"We spend time with you and your team to understand how work moves through your business."*
- The bolded lead-in list item: *"**Workflow map.** How work actually moves through your business, step by step."*
- The named limit: *"**What this is not** — not a sales pitch dressed as a report."*
- The honest next step: *"Most clients pick one workflow from the top of the list and have us build it. That is a separate engagement, quoted separately, and entirely your choice."*

**Say this** — identify the workflows where AI can actually help; implement one AI-assisted workflow
with human review; keep your existing tools and improve the workflow around them.

**Never say this** — "We automate everything." · "We build AI agents for your business." ·
"AI transformation." · "Revolutionize your operations." · "Fully autonomous workflows." ·
any dashboard/ETL/BI-services framing as the primary message.

**The signature move: say what you will not do.** Every service page carries a *What is not
included* block and every audit carries a *do-not-automate list*. This is not a caveat section, it
is the proof of honesty — give it real visual weight (see the `caution` tones in `Callout`,
`ChecklistItem` and `Badge`).

**Numbers.** Use ranges, never invented precision: *10–80 people*, *2–3 weeks*, *3–5 people for 45
minutes each*, *14 days of stabilisation*. If a figure is not measured, label it an estimate.

**Emoji.** Notion working pages use them as page icons. **Client-facing surfaces use none** — not on
the site, not in documents, not in the UI.

**Punctuation.** Em dashes with spaces (— like this) for the aside; en dashes for ranges (10–80);
the Oxford comma is not used consistently in the source, so follow the source phrasing verbatim
when quoting it.

---

# Visual foundations

**Overall vibe.** Quiet, dense with information, close to a well-set consulting report. Nothing
decorative earns its place. The system's confidence comes from typography, whitespace and hairlines
— not from colour, gradients or illustration.

**Colour.** One dominant brand colour: **navy #0A2540**, taken from the supplied artwork. It carries
the wordmark, the primary button, the dark sections and all strong text. Two accents, each with one job. **Signal teal #0E8C7F** carries the logo's first block plus eyebrows,
focus rings, checkmarks and at most one call to action per view. **Brass #B8760B** carries the logo's
summit block and nothing else in the system. Because brass and the caution signal share a hue, caution
now sits deeper on the ramp (amber-700 for fills, amber-800 for text) so a warning never reads as
the brand accent. Red is reserved
for form errors. Backgrounds alternate between white, a very pale grey (#F7F9FB) and navy — never
more than those three in one page. No purple, no bluish-purple gradients, no colour ramps used
decoratively.

**Type.** One family: **DM Sans**, the face the wordmark is set in. Light (300) at display and h1/h2
sizes, Medium (500) at h2, SemiBold (600) for h3/h4 and UI labels, Regular for body. **DM Mono**
carries every figure, duration, timeline and table number, always with tabular figures. A single
sans keeps the system quiet — hierarchy comes from weight and size, not from a second typeface. Display sizes are set tight
(1.08–1.2 leading, −0.02em tracking); body is generous (1.65 leading, 66ch measure). Eyebrows are
11px uppercase teal at 0.14em.

**Spacing.** A 4px base, but the layout rhythm is coarse: 24px inside cards, 16px between stacked
elements, 64–96px between page sections, 1180px content container with 24px gutters.

**Backgrounds.** Flat colour only. **No photography has been supplied and none is invented here.**
The one permitted atmospheric effect is a single very soft teal radial glow in the top-right of a
navy hero (see `HomeScreen`) at ≤22% opacity — subtle enough to read as light, not as a gradient
graphic. No repeating patterns, no textures, no hand-drawn illustration, no stock imagery. When a
photograph is eventually shot, the direction should be: real workplaces, cool daylight, no
staging, no AI-generated interiors — but that is a recommendation, not an existing rule.

**Borders and rules.** 1px hairlines in #DDE4EB do most of the structural work — under the sticky
header, between table rows, around cards, above footers. Rules are preferred over shadows and over
background fills for separating content.

**Cards.** White, 1px hairline border, 8px radius, `0 1px 2px rgba(10,37,64,.06)` — almost flat.
On hover (only when the whole card is a link) the shadow moves to `0 2px 8px` and the border
darkens one step. **Never** a coloured left border. Never a heavy drop shadow.

**Corner radii.** 3px badges, 5px controls and inputs, 8px cards, 12px dialogs and panels, full pill
only for tags and switches. Nothing is more rounded than 12px except pills.

**Shadows.** Four steps, and three of them are barely visible: sm (resting), md (hover), lg
(popovers), overlay (dialogs and toasts, `0 24px 64px rgba(6,23,38,.22)`). Inner shadows are used
only as a bottom hairline.

**Transparency and blur.** Exactly two places: the sticky site header (white at 88% with a 10px
backdrop blur) and the dialog scrim (navy #061726 at 45% with a 2px blur). Nowhere else — no
frosted cards, no glassmorphism.

**Animation.** Restrained and fast. 120ms for hovers, 180ms for toggles and switches, 280ms for
dialogs, 420ms for a scroll-in reveal. One easing curve, `cubic-bezier(.2,.6,.2,1)`. Fades and
short translations only — **no bounce, no spring, no scale-up entrances**. Every duration collapses
to 0 under `prefers-reduced-motion`.

**Hover states.** Solid buttons darken one step (navy 800 → 900). Secondary and ghost buttons fill
with the sunken grey. Links move from teal to navy and their underline darkens. Cards raise their
shadow one step. Opacity is never used as a hover state.

**Press states.** A 1px downward nudge. No scaling, no colour flash.

**Focus.** A 3px teal ring at 28% (`--ring-focus`) plus the border turning teal. On navy surfaces
the ring is white at 35%. Focus is never removed.

**Layout rules.** One sticky element only: the site header, 72px tall. Long service pages use a
sticky right-hand summary column. Content is left-aligned by default; centred text is limited to a
single section intro. Documents are fixed 794 × 1123px A4 pages with 64px margins and a running
footer.

**Protection.** Text is never placed over imagery, so no protection gradients or capsules exist.
White logo artwork exists for navy surfaces; if photography is introduced later, use the white
lockup on a solid navy plate rather than a scrim.

---

# Identity

## The name
**Datonum is DATA + NUMBER** — the two things every business workflow moves. It is not a Latin
coinage and it is not an acronym; the etymology is plain and it should be legible in the identity.
Say it as one word, capital D only. The name is the reason figures are set in DM Mono with tabular
numerals throughout the system, and the reason a chart is a first-class component rather than an
afterthought.

## The mark — Rising matrix
The supplied artwork was the name set plainly in DM Sans with a letterform **D** as the icon — a
placeholder rather than a mark, and one that repeated the D already opening the wordmark. The 2026
identity replaces it.

**Six blocks in three columns of one, two and three, stepping up left to right.** The blocks are
**data**, the count is **number**, and the ascent is what the work is for. Two accents sit at
opposite ends of the climb: **teal** on the first block, where the work starts, and **brass** on the
summit — the single measured gain the audit exists to find. Navy in between.

Built on a 64-unit grid: columns at x9 / x26 / x43, rows at y42 / y26 / y10, blocks 12 × 12 with a
2-unit radius, 5-unit gaps across and 4-unit gaps up. Ink area 46 × 44 at y10 — the same box every
other mark in the system is measured against.

Why this one, out of sixty explored: it is the only candidate that carries both halves of the name
at once without borrowing a letter, it is positive without being a chart, and its silhouette is
stable — the stepped profile survives from a 20px favicon to a printed cover without re-partitioning.

## Lockups
| Variant | Use |
| --- | --- |
| **Lockup** (mark + wordmark) | Default. Site header, documents, decks, email. |
| **Mark** | Where the name is already present, and at small sizes. |
| **Tile** (rounded navy square, white blocks) | Favicon, app icon, avatar, social profile. |
| **Stacked** | Covers, social squares, closing slides. |
| **Wordmark** | Rare — running footers where the mark would crowd. |
| **Mono** | Engraving, embroidery, fax, single-plate print. Brass drops to the base ink. |
| **On a ground** | Seven `datonum-lockup-on-*.svg` files with the background and clear space baked in — social avatars, OG images, email headers. |

## Construction ratio
**Mark ink height = 1.4 × wordmark cap height**, in every lockup and in every medium. Mark ink is
46 × 44, so cap height is 31.4286 and the wordmark ink is 181.94 wide; the horizontal gap is 11
units (0.35 × cap). The `Logo` component derives all of this from one constant and the exported
SVGs bake the same numbers. Never set the two parts by eye.

## The wordmark is outlined
Wherever the wordmark appears — in the component and in the 17 exported SVGs that include it — it is
**vector outlines**, converted from **DM Sans Medium (static, weight 500) at −0.0301em tracking**.
No logo file contains live type, so nothing about the logo depends on a webfont and it cannot
silently redraw.

This matters because **the supplied artwork is set in the older static DM Sans, not the DM Sans that
Google Fonts serves today.** Google now serves a redrawn variable DM Sans: cap height 0.662em
against the original's 0.700em, and different letter proportions (its `D` is 21% wider relative to
cap). Comparing scale-invariant letter ratios against the supplied PNG identifies the original cut
conclusively, and the −0.0301em tracking is the value that reproduces the artwork's ink-width-to-cap
ratio of 5.789 exactly.

Body and UI text still use the current DM Sans from Google Fonts, which is right — that is the
living text face. Only the logo is frozen. See `assets/logo/README.md`.

## Rules
- Clear space on every side = one block (12 units, 27% of mark height).
- Minimums for the transparent files: **mark 16px ink height, lockup 84px wide, wordmark 20px tall** —
  derived from the 4-unit row gap, which renders at 1.45px on a 16px mark. Below that use the app tile.
  The plated `*-on-*.svg` files include clear space, so they have larger minimums of their own
  (mark plate 25px tall, lockup plate 93px wide, app tile 28px) — see `assets/logo/README.md`.
- Two tones for the blocks: navy or white. **Teal is always the first block, brass always the
  summit** — the 600 values on light surfaces, the 500 values on navy.
- Beyond the mark the two accents have different reach: **teal** does all the interface work
  (eyebrows, focus rings, checkmarks, one CTA per view), while **brass** appears nowhere except the
  logo summit. A button is never brass.
- The `mono` variant collapses both accents to the base ink for engraving and one-plate print.
- Never reorder the columns, level the steps, change the block count, flip the direction, or move
  the brass off the summit.
- Never rotate, stretch, outline, add a shadow, or place navy blocks on a mid-tone.
- The original supplied artwork is kept in `assets/logo/source/` and is **superseded**.

## Exploration record
Sixty candidates across eleven rounds are documented in `guidelines/symbol-directions-in-use.html`,
each rendered across seven real surfaces, generated from `scraps/symbol-gen.js`. Keep it: it is the
record of what was rejected and why, which is the part a brand usually loses.

---

# Iconography

**No icon set was supplied.** ⚠️ **Substitution:** the system uses
**[Lucide](https://lucide.dev) 0.454.0 via unpkg CDN** — a 1.5px-stroke, rounded-cap, 24px-grid
outline set that matches the geometric, even-weight logo. Icons are rendered as a CSS mask
(`components/core/Icon.jsx`) so they inherit `currentColor` and never need recolouring by hand.

- Sizes: 16 (inline), 18 (buttons and callouts), 20–22 (feature cards), 24 (specimen).
- Line icons only. Never filled, never duotone, never two icon families in one view.
- Icons are always paired with a label, except in `IconButton` (which requires an accessible name).
- Icons in use: `search-check`, `workflow`, `refresh-cw`, `map`, `list-checks`, `clock`, `users`,
  `file-text`, `triangle-alert`, `circle-check`, `arrow-right`, `chevron-down`, `chevron-right`,
  `check`, `x`, `info`, `download`, `plug`, `trending-up`, `shield-check`, `circle-help`.
- **No emoji** on any client-facing surface. No unicode glyphs used as icons (arrows are Lucide, the
  em dash is punctuation, not decoration).
- No brand illustration, spot illustration or icon-in-a-circle treatment exists. Do not invent one.

**Logo assets** live in `assets/logo/` — see the Identity section above and `assets/logo/README.md`.

---

# Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/` | `fonts` · `colors` · `theme-dark` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `layout` · `base` · `print` |
| `assets/social/` | LinkedIn cover artwork + export, and `avatar/` — square profile images per platform |
| `assets/logo/` | Mark, compact mark, wordmark, lockups, app tile (SVG) + `README.md` + superseded source PNGs |
| `guidelines/` | 30 specimen cards (Brand, Colors, Type, Spacing) rendered in the Design System tab |
| `components/` | React primitives, grouped below |
| `templates/web-page/` | Marketing page shell — header, navy hero, service cards, CTA, footer |
| `templates/one-pager/` | A4 client-facing service one-pager |
| `templates/proposal/` | Three-page A4 proposal — cover, scope, timeline, commercials, acceptance |
| `templates/deck/` | 1280×720 deck — title, agenda, section, chart, caution, stat, quote, closing |
| `templates/social/` | LinkedIn link card 1200×627 and three 1080×1080 square layouts |
| `templates/email/` | 600px client email plus the email signature block |
| `ui_kits/website/` | datonum.com click-through — Home, Services, Audit, Approach, Contact |
| `ui_kits/documents/` | A4 service one-pager (USD/EUR/GBP) and audit findings report |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper for use in Claude Code |

## Components

**core/** — `Logo`, `Button`, `IconButton`, `Icon`, `Avatar`, `Card`, `Badge`, `Tag`, `Divider`
**forms/** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**feedback/** — `Callout`, `Dialog`, `Toast`, `Tooltip`
**navigation/** — `Tabs`, `Breadcrumb`, `StepTracker`
**content/** — `SectionHeading`, `StatBlock`, `ChecklistItem`, `DataTable`, `PriceCard`, `Accordion`, `Quote`, `ScoreMeter`, `BarChart`, `Timeline`, `CTABanner`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

### Intentional additions
No source defined a component inventory, so the standard primitive set was authored. Five
additions beyond the standard set exist because the brand's surfaces genuinely need them:
- `Logo` — wraps the supplied artwork so nobody typesets "Datonum" by hand.
- `Icon` — one wrapper over the substituted Lucide set, so a future swap is a one-file change.
- `StepTracker` — every service page and one-pager has a numbered "How it works" sequence.
- `ChecklistItem` — the included / not-included / do-not-automate pattern is the brand's signature.
- `StatBlock`, `PriceCard`, `DataTable` — the figure, tier and matrix patterns in the source copy.
- `ScoreMeter` and `BarChart` — the audit's readiness scorecard and opportunity matrix are two of the
  four named deliverables; a data brand needs one sanctioned chart type rather than ad-hoc graphics.
- `Timeline`, `Accordion`, `Quote`, `CTABanner`, `Avatar`, `Divider` — the recurring page and document
  furniture across the site, proposal, deck and one-pager.

### Typeface — resolved
The supplied wordmark is set in **DM Sans**, confirmed by the brand owner. DM Sans is therefore the
brand face across display, headings, UI and body, paired with **DM Mono** for figures. Both are
Google Fonts: no licence to buy, no files to install, and a low-risk fallback stack. Typeface
changes are a one-file edit (`tokens/fonts.css`).
