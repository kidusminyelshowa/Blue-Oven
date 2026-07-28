# Blue Oven Design System

Brand and UI system for **Blue Oven**, a Turkish cafe. Built from brand assets provided directly by the user (no codebase or Figma was attached this run):

- `uploads/Logo_Transparent_Bg.png`, `uploads/Logo_With_Background_Color.png` — full lockup (arch mark + wordmark)
- `uploads/Icon_Motif.png` — the arch/spark mark alone
- `uploads/Word_Mark.png` — wordmark alone
- `uploads/FreeSans.otf`, `uploads/FreeSansBold.otf` — brand typeface
- Brand HEX values supplied by user: main `#1212a0`, secondary `#1288a0` / `#1c1cf5`, tertiary `#e30a17`

Because only a logo suite, a typeface, and color codes were given (no product screens, no copy deck, no codebase), this system's components and UI kit are **originated from scratch**, sized to a small cafe brand's real needs — not copied from an existing product. Treat the component set and the "Cafe Site" UI kit as an intentional starting point, not a recreation.

## Brand read
The mark is a rounded stone/tandır **arch** (the doorway of an oven) with a **six-point spark/asterisk** inside it — read as the fire, the embers, or a stylized wheat sheaf. It's a warm, artisanal, slightly old-world mark rendered in a clean, ungarnished geometric sans (Free Sans, a Helvetica-adjacent grotesque). The pairing suggests: **handmade craft, modern presentation** — think a neighborhood cafe that takes its baking seriously without being twee about it.

The deep indigo-blue (`#1212a0`) is unusual for a cafe (most bake/coffee brands lean warm brown/terracotta) — it's a deliberate, confident departure, almost jewel-toned. The red tertiary (`#e30a17`) echoes the Turkish flag red, used sparingly as a cultural nod, not a primary color.

## Index
- `styles.css` — root stylesheet, imports all tokens. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (`@font-face`)
- `assets/` — logo, icon motif, wordmark, font binaries
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand marks) shown in the Design System tab
- `components/core/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip
- `ui_kits/cafe-site/` — marketing/ordering site recreation: Home, Menu, Location, Cart/checkout
- `SKILL.md` — portable skill file for use outside this environment

## Content fundamentals
No product copy or marketing deck was provided, so the voice below is a **proposed** starting point inferred from the brand mark and category — flag and refine with real copy as soon as you have it.

- **Address:** second person ("your morning simit," "your order"). Cafe-warm, not corporate.
- **Sentence length:** short. Menu and UI copy reads like a chalkboard, not a brochure — fragments over full sentences ("Fresh from the oven." not "Our items are freshly baked every day.")
- **Casing:** Sentence case everywhere — headings, buttons, nav. Never ALL CAPS except the odd one-word label (e.g. "NEW").
- **Turkish vocabulary is used, unitalicized, as the primary name** (simit, çay, künefe, poğaça), with a short plain-English gloss in parentheses or a smaller caption line — never a hyphenated pronunciation guide. e.g. "Çay — black tea, served hot."
- **Numerals** for anything countable or priced ("2 simit," "$4.50"), words for casual quantities ("a few," "fresh batch").
- **No emoji.** The brand's warmth comes from the wordmark and color, not decoration.
- **Punctuation:** periods on standalone statements, none on nav/button labels/menu items.

## Visual foundations
- **Color:** one deep indigo-blue (`--color-brand`, `#1212a0`) carries nearly everything — headers, primary buttons, icon strokes. A teal-blue (`#1288a0`) and a brighter blue-violet (`#1c1cf5`) are secondary accents for links, highlights, and hover/active states. Red (`#e30a17`) is tertiary and rare: use for a single "new"/limited badge or a Turkish-flag nod, never for structural UI. Backgrounds default to a warm cream (`--color-bg`, near-white with a faint yellow warmth) rather than stark white or brand-blue — the blue reads as ink on paper, not as a filled surface. Max two background colors per composition: cream + brand-blue.
- **Type:** Free Sans throughout, both for display and body — no serif, no second family. Headlines use bold weight at tight line-height (`--lh-tight`); body copy uses regular weight at relaxed line-height for legibility. No italics in the wordmark or headlines (the typeface's geometric regularity is the point).
- **Backgrounds:** flat color, not gradients or photography-heavy hero treatment absent real photography. Full-bleed brand-blue sections are used sparingly as a "poster" moment (e.g. a hero band or footer), always paired with cream elsewhere on the same page. No repeating textures/patterns, no illustration style established yet — the icon motif is the only graphic device.
- **The arch is the core shape language.** Card tops, image crops, and modal headers may take the rounded-arch profile (`--radius-arch`) as an occasional accent shape, echoing the logo — used once per screen at most, never on every card. Ordinary rounding uses `--radius-m` (8px cards) or `--radius-l` (14px, larger surfaces).
- **Buttons:** solid brand-blue fill for primary, cream/outline for secondary. Hover darkens the fill by one step (`--color-brand-hover`); press darkens one step further and the button does not scale/shrink. No shadow on buttons.
- **Cards:** cream or white surface, 1px `--color-border` hairline, `--radius-m`, a soft ambient shadow (`--shadow-s`) — never a colored left border accent.
- **Shadows:** soft and neutral-tinted (ink at low opacity), not colored. Reserved for cards, dialogs, dropdowns — flat elsewhere.
- **Motion:** minimal — 120–200ms ease-standard fades/opacity and color transitions only. No bounce, no springy overshoot, no parallax. This is a calm, editorial brand, not a playful one.
- **Hover:** color darkens by one token step (`*-hover` tokens); underline appears under text links. No lift/scale on hover.
2**Press:** darken one step further (`*-press`); no scale change.
- **Borders:** 1px hairline, `--color-border` (a very light ink tint) for structure; `--color-border-strong` for inputs/focus-adjacent outlines.
- **Focus ring:** 2px `--color-focus-ring` (blue-violet) offset ring — always visible, never suppressed.
- **Transparency/blur:** none currently — no glass/blur surfaces in the source marks. Avoid frosted-glass panels; keep surfaces opaque.
- **Imagery:** none supplied. Photography, if added, should be warm-toned (bread, tea, wood) — avoid cool/blue-graded food photography, which would fight the brand-blue instead of contrasting with it. Treat image slots as placeholders until real photography exists.
- **Corner radii:** 4px (controls/inputs), 8px (cards), 14px (large surfaces/dialogs), pill (999px, tags/badges/pills), plus the one-off arch radius for logo-adjacent moments.

## Iconography
No icon set, icon font, or SVG sprite was supplied with the brand assets. The only real graphic asset is the arch/spark mark itself (`assets/icon-motif.png`), which should be used as a brand mark, not as a general-purpose icon.

For interface iconography, this system links **Lucide** (lucide.dev) from CDN — an open, MIT-licensed outline icon set with a stroke weight and geometric plainness that matches Free Sans and the logo's stroke-based construction. This is a **substitution**, flagged here: if Blue Oven has or commissions its own icon set, replace this pointer.
- Stroke width 2px, no fill, rounded joins — matches the arch mark's rounded terminals.
- No emoji, no unicode-glyph icons.
- Load via `<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`, or the static SVG CDN paths, as shown in the component/UI kit files.

## Intentional additions
No existing component library or codebase was provided, so the following standard primitives were authored from scratch to brand spec: Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip. These are a reasonable general-purpose set for a small cafe site/app, not a recreation of anything pre-existing.

## Caveats
- No product screens, marketing copy, or codebase were provided — the UI kit ("Cafe Site") and content-fundamentals voice are originated to fit the brand, not recreated from a real product. Please share your actual site/app or copy deck so these can be corrected to match reality.
- No icon set was supplied; Lucide is substituted (see Iconography).
- No food/interior photography was supplied; UI kit and cards use flat color/placeholder blocks where photography would go.
