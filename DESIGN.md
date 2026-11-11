---
name: ElektroCalc
description: Na⁺ and K⁺ correction orders that read like the bag labels they become.
colors:
  ground: "#eef0ed"
  paper: "#ffffff"
  paper-2: "#f6f7f5"
  ink: "#14191b"
  ink-2: "#434b50"
  ink-3: "#5f686d"
  rule: "#d8dcd7"
  rule-2: "#b8beb9"
  na: "#0b6378"
  na-tint: "#e3f0f3"
  k: "#5b36a8"
  k-tint: "#eee9f8"
  hyper-band: "#a3195e"
  iso-band: "#1c6b42"
  kcl-band: "#5b36a8"
  crit: "#b3261e"
  crit-tint: "#fcebe9"
  crit-ink: "#8c1d17"
  caut: "#8a5100"
  caut-tint: "#fdf1dc"
  caut-line: "#e4b469"
  ok: "#1c6b42"
  ok-tint: "#e4f2ea"
  on-band: "#ffffff"
typography:
  wordmark:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  label-title:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
  meta:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
  product-tag:
    fontFamily: "Atkinson, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.06em"
  metric:
    fontFamily: "'Atkinson Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.15
  numeric-input:
    fontFamily: "'Atkinson Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "19px"
    fontWeight: 600
  order:
    fontFamily: "'Atkinson Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.4
  fact:
    fontFamily: "'Atkinson Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "18px"
    fontWeight: 600
  spine:
    fontFamily: "'Atkinson Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  tag: "4px"
  control: "5px"
  surface: "8px"
  sheet-modal: "14px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  field: "14px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.na}"
    textColor: "{colors.on-band}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "50px"
  button-primary-k:
    backgroundColor: "{colors.k}"
    textColor: "{colors.on-band}"
    rounded: "{rounded.control}"
    height: "50px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "50px"
  button-ghost-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  input-numeric:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.numeric-input}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "50px"
  sheet:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "16px"
  bag-label:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "14px"
  bag-label-spine:
    backgroundColor: "{colors.hyper-band}"
    textColor: "{colors.on-band}"
    typography: "{typography.spine}"
    width: "32px"
  order-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.order}"
    rounded: "{rounded.control}"
    padding: "12px"
  alert-critical-head:
    backgroundColor: "{colors.crit}"
    textColor: "{colors.on-band}"
    padding: "10px 14px"
  alert-critical-body:
    backgroundColor: "{colors.crit-tint}"
    textColor: "{colors.ink}"
    padding: "12px 14px"
  caution:
    backgroundColor: "{colors.caut-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px"
  badge-critical:
    backgroundColor: "{colors.crit}"
    textColor: "{colors.on-band}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  badge-caution:
    backgroundColor: "{colors.caut-tint}"
    textColor: "{colors.caut}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  badge-safe:
    backgroundColor: "{colors.ok-tint}"
    textColor: "{colors.ok}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  top-bar:
    backgroundColor: "{colors.na}"
    textColor: "{colors.on-band}"
    height: "56px"
---

# Design System: ElektroCalc

## Overview

**Creative North Star: "The Printed Bag Label"**

Every result is set the way a pharmacy or manufacturer label is printed on an infusion bag: white stock, carbon ink, a colored product band on the edge, monospaced figures, and hairline rules between facts. The doctor checks the screen the same way they check the bag before hanging it. The world is a clinical print shop, not a dashboard: flat paper on a cool grey-green ground, color reserved for product identity and safety, numerals that cannot be misread.

Density is moderate and phone-first. One column on phones, a sticky inputs column beside a results column from 1000px. Safety states are the loudest thing on screen when they apply: a full-width red band with white ink, above the bag labels. Light by default; dark is a manual switch in the header, remembered per device, and never follows the system setting (owner decision, 2026-11-11). In dark, the shell, bands and critical heads stay printed-dark with white ink.

The previous gold-on-navy dashboard look is not binding and is the explicit anti-reference: no gradient cards, no glow, no gold.

**Key Characteristics:**
- White paper sheets on a cool ground (`ground` behind `paper`), separated by a 1px rule and a hairline lift.
- Atkinson Hyperlegible Next for text, Atkinson Hyperlegible Mono for every number, order line and product spine; tabular figures everywhere.
- Calculator identity by hue: Na⁺ teal-blue, K⁺ violet, carried by the shell, the active tab, the primary button and the focus ring.
- Product bands by fluid: NaCl 3% magenta, NaCl 0.9% green, KCl violet.
- Red and amber appear only for safety states.

## Colors

A label-print palette: neutral paper and ink, a small set of product inks, and two safety inks that nothing else may borrow.

### Primary
- **Na⁺ Teal-Blue** (`na`): the sodium calculator's shell, active tab underline, primary button, focus ring and accent text. Also the app icon and light `theme-color`.
- **K⁺ Violet** (`k`): replaces Na⁺ Teal-Blue in every one of those roles when the potassium calculator is active (`body[data-calc="k"]` re-points `--accent`, `--shell`, `--accent-tint`).
- **Na⁺ Tint / K⁺ Tint** (`na-tint`, `k-tint`): the pearls (notes) panel and accent badges.

### Secondary (product bands)
- **Hypertonic Magenta** (`hyper-band`): NaCl 3% (Otsu-Salin 3) label spine, title rule, tag and key fact.
- **Isotonic Green** (`iso-band`): NaCl 0.9% (Otsu-NS) label spine and accents.
- **KCl Violet** (`kcl-band`): KCl label spine and the "Recommended" badge on the KCl label. Shares its value with K⁺ Violet in light mode.

### Tertiary (safety)
- **Critical Red** (`crit`, with `crit-tint` body and `crit-ink` text on tint): the safety-limit alert head, critical badges, critical inline text.
- **Caution Amber** (`caut` text, `caut-tint` fill, `caut-line` border): caution boxes, caution badges, the footer's clinical-support lead.
- **Safe Green** (`ok`, `ok-tint`): "Safe" badges only.

### Neutral
- **Ward Ground** (`ground`): page background. Built darker than the contract's #f7f8f6 so white sheets keep their edge under bright ward light.
- **Label White** (`paper`): sheets, labels, inputs, order boxes, footer, help sheet.
- **Tray Grey** (`paper-2`): reference boxes, gauge tube, ghost-button hover, help code blocks.
- **Carbon Ink / Ink 2 / Ink 3** (`ink`, `ink-2`, `ink-3`): primary text; labels and secondary copy; metric labels, units, placeholders, footnotes.
- **Rule / Strong Rule** (`rule`, `rule-2`): 1px dividers between facts, metric cells and list rows; input borders, label borders, tab baseline.
- **On-Band White** (`on-band`): text on the shell, bands and critical heads, in both modes.

Dark values live in `.impeccable/design.json` (`extensions.darkMode`) and apply only under `:root[data-theme="dark"]`, set by the header switch.

### Named Rules
**The Safety Ink Rule.** Red and amber mean a clinical limit or caution, nothing else. No decorative red, no amber highlights, no brand use.

**The Product Band Rule.** A band color identifies a product, not a mood. A new fluid gets its own band; an existing band is never reused for a different product, except KCl sharing the K⁺ calculator's violet.

**The Manual Theme Rule.** Light is the default. Dark only via the header switch; never use `prefers-color-scheme` to change the theme automatically.

## Typography

**Text Font:** Atkinson Hyperlegible Next (self-hosted as `Atkinson`, 400/600/700), with system-ui fallback
**Numeric / Order Font:** Atkinson Hyperlegible Mono (self-hosted as `Atkinson Mono`, 400/600), with ui-monospace fallback

**Character:** A low-vision legibility face throughout, chosen so 1/l/I and 0/O never collide; the mono cut is the printed-label voice for doses, rates and order lines.

### Hierarchy
- **Wordmark** (700, 20px, 1.1): "ElektroCalc" in the top bar only.
- **Headline** (700, 21px, 1.25): sheet headings (Patient Inputs, Alternative Regimens).
- **Label title** (700, 21px, 1.15): product name on a bag label.
- **Title** (700, 15px): alternative regimen names, help terms, buttons at 16px.
- **Body** (400, 16px, 1.5): base. **Body small** (14px, 1.5–1.55): alert bodies, notes, footnotes, formulas. Help copy caps at 70ch.
- **Label** (600, 14px, 1.3): form labels. **Meta** (600, 13px): metric labels, badges.
- **Product tag** (700, 12px, 0.06em, uppercase): the product class tag on a bag label ("HYPERTONIC"), the one uppercase style in the system.
- **Metric** (mono 600, 26px; 20px small variant): deficit summary values. **Fact** (mono 600, 18px; 22px for the key fact). **Order** (mono 600, 17px, 1.4; 15px in alternatives). **Numeric input** (mono 600, 19px). **Spine** (mono 600, 13px, 0.08em, vertical).

### Named Rules
**The Mono Numbers Rule.** Every dose, volume, rate, concentration, serum value and order line is set in Atkinson Mono at 600. Units sit beside it in the text face at 12–13px, `ink-3`, weight 400.

**The Tabular Rule.** `font-variant-numeric: tabular-nums` is on the body; never turn it off.

## Layout

Single centered column (`max-width: 1120px`) with a 16px gutter, 24px from 640px. On phones everything stacks: compact sticky top bar (56px), full-width two-up segmented tabs, inputs sheet, then results. From 1000px the panel becomes a two-column grid (`minmax(320px,380px) 1fr`, 24px gap) with the inputs sheet sticky at `top: 76px`. Stack gaps are 16px; sheet padding 16px, 20px from 640px; bag label body 14px; field gap 14px; label-to-input 6px.

The deficit summary is a ruled grid: two columns on phones, three or four from 720px, cells divided by 1px rules like a printed table. Two bag labels sit side by side only between 860px and 999px; otherwise they stack. A fixed footer carries the clinical-support disclaimer and credit; the body reserves 104px below for it.

Breakpoints in use: 480px, 640px, 720px, 860px, 1000px.

## Elevation & Depth

Flat paper. Depth comes from the ground/paper value step and 1px rules. Sheets and bag labels carry one hairline lift; nothing else casts a shadow.

### Shadow Vocabulary
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(20,25,27,.06), 0 2px 8px rgba(20,25,27,.04)`): sheets and bag labels only.
- **Focus halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent)`): focused inputs, with the border turning accent.

### Named Rules
**The Hairline Rule.** No elevation beyond the hairline lift. No glow, no gradients on surfaces, no stacked card shadows. The help sheet sits on a 55% carbon scrim, not a shadow.

## Shapes

Square-ish printed corners: 8px on containers (sheets, bag labels, alerts, notes, empty state), 5px on controls (inputs, buttons, order box, caution box, reference box), 4px on the product tag and help code blocks. Pills (999px) only for badges and the EN/ID toggle; icon buttons are circles. The help sheet rises from the bottom with 14px top corners on phones, 12px all round from 720px. Borders are 1px; the order box (1.5px carbon) and the product tag (1.5px band) are the only heavier strokes, and the label title takes a 2px band-colored underline. The gauge tube is a bottle silhouette: 6px top, 12px bottom corners, with a small cap.

## Components

### Buttons
Solid and printed, never glossy.
- **Shape:** control corners (5px), 50px tall, 16px/700 text.
- **Primary (Calculate):** shell fill (Na⁺ teal-blue or K⁺ violet), white ink, takes the remaining row width beside Reset. Hover `filter: brightness(1.08)`; active nudges down 1px.
- **Ghost (Reset):** transparent, `ink-2` text, `rule-2` border; hover fills Tray Grey and darkens text. A 36px compact ghost lives inside the rate-override row.
- **Icon button:** 40px circle, translucent white border on the shell; inline SVG stroke icons at 20px.

### Badges
- **Style:** pill, 13px/700, 6px 10px. Critical = red fill, white ink. Caution = amber tint, amber text, amber line. Safe = green tint. Accent = calculator tint. Neutral = Tray Grey with a rule border.

### Cards / Containers (sheets)
- **Corner Style:** 8px. **Background:** Label White. **Shadow Strategy:** hairline lift. **Border:** 1px `rule`. **Internal Padding:** 16px, 20px from 640px. Heading row: headline left, small `ink-3` meta right.

### Inputs / Fields
- **Style:** 50px tall, Label White, 1px `rule-2`, 5px corners; numbers in mono 19px/600, selects in the text face 16px/600 with an inline chevron. Visible label above every field.
- **Hover / Focus:** border to `ink-3` on hover; on focus border turns accent with the 3px accent halo.

### Navigation
- **Top bar:** sticky, shell-colored, 56px, wordmark with icon, help icon button, EN/ID pill toggle (active segment white with shell-colored text). The bar color follows the active calculator with a 0.3s transition.
- **Calculator tabs:** two equal segments on a `rule-2` baseline; active tab takes calculator color and a 3px underline with rounded top; inactive `ink-3`, hover `ink`.

### Bag Label (signature)
The result card as an infusion-bag label.
- A 32px colored **spine** on the left edge carrying the product name in vertical mono caps-spacing, white ink.
- **Title** block: product name at 21px/700, product line in `ink-2`, uppercase product tag outlined in the band color, all over a 2px band-colored rule.
- **Graduation gauge** beside the facts: a bottle-shaped tube with tick marks every 10%, filled with 30% band color to the safe-24h share of the full-deficit volume, percentage in mono below. Rendered only where the clinical logic supplies that pair (not on the KCl recommended label).
- **Facts:** ruled rows, label left, mono value right; the key fact at 22px in band color.
- **Order box:** 1.5px carbon border, mono 17px/600 order line, note in `ink-3` below. This is the deliverable.

### Safety Alert
Full-width, 8px corners, red border. A red head band with white 14px/700 title, then a critical-tint body in ink. Placed directly after the deficit summary, above the labels.

### Pearls (notes)
Calculator-tint panel, 8px corners, inline info icon in accent, 14px body with accent-colored lead terms.

### Motion
Results enter with a 6px rise and fade over 0.45s on `cubic-bezier(.16,1,.3,1)`; gauge fill animates height over 0.7s; the help sheet rises 24px over 0.3s on a 0.2s scrim fade. Hover and border changes run 0.15s. `prefers-reduced-motion` collapses all of it to instant.

## Do's and Don'ts

### Do:
- **Do** set every clinical number and order line in Atkinson Mono 600 with tabular figures, units in the text face beside it.
- **Do** give every fluid result a bag label: band spine, band-ruled title, ruled facts, carbon-bordered order box.
- **Do** put the safety alert directly after the deficit summary and before any label, as a red head band with white ink.
- **Do** switch shell, tab, primary button, focus ring and tints together through `--accent` / `--shell` when the calculator changes.
- **Do** keep containers at 8px and controls at 5px, separated by 1px rules and the hairline lift.

### Don't:
- **Don't** use red or amber for anything but safety states.
- **Don't** add gradients, glow, or shadows heavier than the hairline lift.
- **Don't** reintroduce the gold-on-navy dashboard card look.
- **Don't** reuse a product band color for a different product or for decoration.
- **Don't** invent a gauge ratio where the clinical logic has no safe-24h versus full-deficit pair.
- **Don't** use system or remote fonts; both faces are self-hosted for offline use.
- **Don't** use emoji or text glyphs as icons in new UI; icons are inline SVG strokes at 2px.
