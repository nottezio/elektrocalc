---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: ElektroCalc app (index.html)

Mode: Operate. Users: ED/ward doctors in Indonesia, on a phone at the bedside, writing an infusion order. Scope: visual + layout only; all formulas, thresholds, clinical copy, translations and behavior unchanged. Offline PWA.

## Direction contract

THESIS: Each fluid result reads as the label printed on the bag it will become, so the doctor checks the order the same way they check the bag. Refuses the generic dark dashboard of gold-on-navy cards.

OWN-WORLD: Label-white ground (cool #eef0ed, so the pure-white labels lift off it), carbon ink text, Atkinson Hyperlegible (text) and Atkinson Hyperlegible Mono (orders, numerals), tabular figures. Product bands: Na⁺ calculator teal-blue, K⁺ calculator violet; NaCl 3% magenta band, NaCl 0.9% green band, KCl violet band. Critical red and caution amber only for safety states. 8px corners on surfaces, 5px on controls, 1px rules, no gradients, no glow, no shadows beyond a hairline lift. Dark mode mirrors with carbon ground; bands and shell stay printed-dark with white ink.

STORY: The doctor enters weight and serum value, presses Calculate, sees the deficit and the safety limit first, then the bag label(s) with the order line to copy, then alternatives and pearls.

FIRST VIEWPORT: Phone: compact top bar (wordmark, help, EN/ID), full-width segmented Na⁺/K⁺ tabs, then the inputs card with large numeric fields and a full-width Calculate. Desktop: inputs left column (sticky), results right column. Results lead with the deficit summary strip, then a full-width red safety band.

FORM: Infusion label, position 3 on the ordered list. seed:e8756994b07983ec. Signature move: each fluid card is a bag label with a colored product band on its left edge and a vertical graduation scale filled to the safe 24h volume against the full-deficit volume.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Recorded adaptations

- KCl recommended label carries the spine and title but no graduation scale: the K⁺ logic has no safe-24h versus full-deficit pair, and a ratio must not be invented from clinical values.
- Calculate shares its row with Reset on phone because Reset is an existing control; Calculate takes the remaining width.
- ⚠ glyphs in alert titles and the footer live inside locked translation strings.
