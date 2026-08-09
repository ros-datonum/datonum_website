# Datonum logo assets

## The 2026 mark — Rising matrix
Six blocks in three columns of one, two and three, stepping up left to right. The blocks are
**data**; the count is **number**; the ascent is what the work is for. Two accents sit at opposite
ends of the climb: **teal** on the first block, where the work starts, and **brass** on the summit —
the one measured gain the audit is hired to find. Navy between them.

Built on a 64-unit grid: columns at x9 / x26 / x43, rows at y42 / y26 / y10, blocks 12 × 12 with a
2-unit radius, 5-unit column gaps and 4-unit row gaps.

## The wordmark is outlined — no font required
**No file here contains live type.** Of the 28 SVGs, the **17 that include the wordmark** carry it as
**vector outlines**, converted from **DM Sans Medium (static, weight 500) at −0.0301em tracking**;
the other **11 are mark-only or tile files** and contain no wordmark at all. Drop any of these into Figma,
Illustrator, Word, Keynote, a sign-writer's cutter or an email and it renders correctly with no font
installed.

Two things worth knowing:

1. **The supplied artwork is set in the older static DM Sans, not the DM Sans that Google Fonts
   serves today.** Google now serves a redrawn variable DM Sans with different metrics — its cap
   height is 0.662em against the original's 0.700em, and its letters are proportioned differently
   (its `D` is 21% wider relative to cap height). Comparing scale-invariant letter ratios against
   the supplied PNG identifies the original cut conclusively. Outlining is therefore what keeps the
   logo matching the artwork the brand owner approved; live type would silently redraw it.
2. **Body and UI text still use the current DM Sans from Google Fonts**, which is correct — that is
   the living text face. Only the logo is frozen. This is normal practice, and it does mean the
   wordmark is very slightly wider and lower-contrast than the same word set in a heading.

The tracking was fitted, not guessed: −0.0301em is the value that reproduces the supplied artwork's
ink-width-to-cap-height ratio of **5.789** exactly.

## Construction ratio
**Mark ink height = 1.4 × wordmark cap height.** This is the one relationship between the two parts
of the identity and it holds in every lockup — horizontal, stacked, these SVGs, and the `Logo`
component. Mark ink is 46 × 44; cap height is therefore 31.4286 and the wordmark ink is 181.94 wide.
The horizontal gap between mark and wordmark is 11 units (0.35 × cap). Do not eyeball a lockup —
derive it.

### Two families: transparent, and plated

**The 15 transparent files are cropped to real ink — no baked padding.** The mark files are
`viewBox="9 10 46 44"`, the lockup is `0 0 238.94 44`, the wordmark is `0 0 181.94 31.43`, and the
stacked form is `0 0 181.94 91.14`. So `<img src="datonum-mark.svg" height="20">` gives exactly the
same mark as `<Logo variant="mark" height={20}/>`, and the minimums below apply to what you see.

**The 13 plated files carry a background and one block of clear space, so the ink is smaller than the
box.** Size them by their own minimums, not the ink minimums:

| Family | Box | Ink | Ink ÷ box | Its own minimum |
| --- | --- | --- | --- | --- |
| `datonum-mark-on-*.svg` | 70 × 68 | 46 × 44 | 0.647 of height | **25px tall** (gives a 16px mark) |
| `datonum-lockup-on-*.svg` | 262.94 × 68 | 238.94 × 44 | 0.909 of width | **93px wide** (gives an 84px lockup) |
| `datonum-app-tile*.svg` | 64 × 64 | 0.58 × tile | 0.58 of height | **28px tall** (gives a 16.2px mark) |

Rendering a plate at the ink minimum under-sizes the mark — a 16px `mark-on-navy.svg` yields a
10.4px mark, below the point where the 4-unit row gaps stop rendering.

## Files

### Full colour — light surfaces
| File | Use |
| --- | --- |
| `datonum-lockup.svg` | **Default.** Mark + wordmark, navy with teal base and brass summit |
| `datonum-mark.svg` | Mark alone |
| `datonum-stacked.svg` | Mark above wordmark — covers, social squares, closing slides |

### Full colour — navy surfaces
| File | Use |
| --- | --- |
| `datonum-lockup-white.svg` | Reversed lockup: white blocks, teal-500 base, brass-500 summit |
| `datonum-mark-white.svg` | Reversed mark |
| `datonum-stacked-white.svg` | Reversed stacked |

### One colour — engraving, embroidery, single-plate print, fax, stamps
| File | Use |
| --- | --- |
| `datonum-lockup-mono.svg` / `datonum-mark-mono.svg` | All navy |
| `datonum-lockup-mono-black.svg` / `datonum-mark-mono-black.svg` | All black |
| `datonum-lockup-mono-white.svg` / `datonum-mark-mono-white.svg` | All white |

### Wordmark alone
| File | Use |
| --- | --- |
| `datonum-wordmark.svg` / `-white.svg` / `-mono-black.svg` | Rare — running footers where the mark would crowd |

### Lockup on a background (word + symbol, plate included)
One block of clear space is baked in on every side, so each file can be cropped flush to any edge.
Use these for social avatars, OG images, email headers, slide corners and anywhere the logo needs to
sit on its own ground rather than the page's.

| File | Ground | Ink |
| --- | --- | --- |
| `datonum-lockup-on-white.svg` | White | Full colour |
| `datonum-lockup-on-tint.svg` | Navy 050 | Full colour |
| `datonum-lockup-on-navy.svg` | Navy 800 | Full colour reversed |
| `datonum-lockup-on-navy-900.svg` | Navy 900 | Full colour reversed |
| `datonum-lockup-on-teal.svg` | Teal 700 | One white ink |
| `datonum-lockup-on-brass.svg` | Brass 700 | One white ink |
| `datonum-lockup-on-black.svg` | Black | One white ink |

**Full colour is for white, near-white and navy only.** On a saturated ground the teal base block and
brass summit lose their separation from the field, so the lockup takes a single white ink instead.

### Symbol on a background (mark only, plate included)
The same four grounds, mark alone, 70 × 68 units with one block of clear space on every side.

| File | Ground | Ink |
| --- | --- | --- |
| `datonum-mark-on-white.svg` | White | Full colour |
| `datonum-mark-on-tint.svg` | Navy 050 | Full colour |
| `datonum-mark-on-navy.svg` | Navy 800 | Full colour reversed |
| `datonum-mark-on-navy-900.svg` | Navy 900 | Full colour reversed |

For a rounded avatar or app icon use `datonum-app-tile.svg` — these are square-edged plates.

### Tiles
| File | Use |
| --- | --- |
| `datonum-app-tile.svg` | Rounded navy tile — app icon, favicon, avatar, social profile |
| `datonum-app-tile-mono.svg` | Same tile, one-colour mark |

For HTML surfaces prefer the `Logo` component — it draws the identical geometry inline and takes
the tone, variant and `mono` flag as props.

## Rules
- Clear space on every side = one block (12 units, 27% of mark height).
- Minimums, for the transparent files: **mark 16px ink height, lockup 84px wide, wordmark 20px tall.**
  Plated files have their own, larger minimums — see the table above. Derived, not chosen: the
  tightest feature is the 4-unit row gap, which at a 16px mark is 1.45px — the smallest gap that
  still renders on a 1× screen. Below 16px use the app tile, whose mark is **0.58 × the tile** in
  both the SVG and the component — so the smallest usable tile is 28px (16.2px mark).
- Never reorder the columns, level the steps, change the block count, or move either accent off its
  block: teal is always the first block, brass always the summit.
- **Two accents, one block each.** Teal 600 / 500 on the first block, brass 600 / 500 on the summit
  (the lighter value on navy surfaces). Outside the logo, teal does all the interface work —
  eyebrows, focus rings, checkmarks, one CTA per view — and brass appears nowhere else at all.
- `mono` collapses both accents to the base ink.
- Never rotate, stretch, outline, add a shadow, or place navy blocks on a mid-tone.
- Never put the two accents on a saturated ground — use the one-ink lockup (`datonum-lockup-mono-white.svg`)
  or, for the symbol alone, `datonum-mark-mono-white.svg`.
- Never re-typeset the wordmark from a live font — use these outlines.

## Superseded
`source/` holds the originally supplied artwork (the name set in DM Sans with a letterform D icon).
The rising matrix replaces it.
