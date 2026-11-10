# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Single static `index.html` plus offline PWA files (manifest, service worker, `version.js`). No build step. The redesign drops the Tailwind CDN and hosted Google Fonts so the app loads with no network.

## Users

Emergency department and ward doctors in Indonesia (residents and GPs). They use it on a phone at the bedside or at the nurses' station, often one-handed, between patients, under ward lighting, while writing an infusion order.

## Product Purpose

ElektroCalc turns a patient's weight, sex, age group and serum Na⁺ or K⁺ into a ready-to-write correction order: deficit, safe 24-hour limit, fluid volume, rate, and a suggested order line. Success means the doctor gets a safe, correct order in seconds and never misses the safety limit (ODS for sodium, peripheral concentration/rate limits for potassium).

## Positioning

Built around local practice: Otsuka products (Otsu-Salin 3, Otsu-NS, KCl 7.46%), common Indonesian peripheral KCl practice set beside the textbook limit, bag-based regimens, and a bilingual EN/ID interface.

## Operating Context

- Two calculators: hyponatremia (Na⁺) and hypokalemia (K⁺), plus a Help & Glossary modal.
- Inputs → Calculate → results with deficit summary, fluid options, suggested orders, alternatives, oral options, and clinical pearls.
- K⁺ calculator includes a per-bag slow-rate override and CVC recommendation logic.
- Bilingual: English and Bahasa Indonesia toggle.

## Capabilities and Constraints

- Redesign scope is visual and layout only: every formula, threshold, clinical text, translation string and behavior stays as is.
- Personal clinical reference, not indexed (`robots.txt` disallows all). Not for direct patient use.
- Must work offline once loaded (PWA).
- Versioning: one `APP_VERSION` (YYYY-MM-DD.N) in `version.js`, shown in-app; cache name derives from it.

## Brand Commitments

- Product name: ElektroCalc.
- Footer credit "Developed by Avicenna" must stay.
- The previous gold/navy look is not binding.

## Evidence on Hand

No testimonials, usage data, or external validation. Do not invent any.

## Product Principles

1. Safety limits are the loudest thing on the screen when they apply.
2. The order line is the deliverable: it must be readable and copyable at a glance.
3. Phone-first and one-handed: inputs reachable, no hunting.
4. Never change the clinical math or text as a side effect of design work.

## Accessibility & Inclusion

Readable under ward lighting on a phone; WCAG AA contrast; large touch targets; numerals must be unambiguous.
