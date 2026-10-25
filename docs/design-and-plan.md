# Boiled Nuts (fictional) — design context, brainstorm, plan

## Design context (impeccable)
- **Audience:** drivers and locals on a rural Georgia road deciding, usually on a phone, whether to pull over. Needs: what's in the pot, price, hours, how to call, where it is.
- **Tone:** warm, plain-spoken Southern roadside. Confident, not kitsch: no fake dialect, no "y'all" spam, no cartoon mascots.
- **Look:** hand-lettered roadside sign. Warm paper background, deep pine green, red-clay accent, peanut-shell tan. Fraunces (display) + Inter (text). Flat colours, hairline rules, no gradients, no shadows-on-cards.
- **Anti-goals:** purple gradients, hero + three icon cards, stock testimonials, filler copy.

## Brainstorm (decided)
1. Photo-led hero (Wikimedia photo) — rejected: licensing overhead, generic.
2. **SVG/CSS illustration + type-led sign hero** — chosen. Zero licensing risk, fast, distinctive.
3. Prices as a painted price board (rows with dotted leaders, two columns Regular / Cajun), not cards.
4. One page: Sign (hero) → Price board → How we boil them (short, numbered) → Hours + Visit (OSM embed of a generic rural spot) → Call/ask form → Footer with sample note.

## Plan
1. Config file `src/config/business.ts` (all fake data, demoMode).
2. Layout with noindex, OG, FoodEstablishment JSON-LD, base-aware URLs.
3. Sections in `src/pages/index.astro`; styles in `src/styles/global.css`.
4. Astro `site`/`base` for GitHub Pages; Actions workflow with actions/deploy-pages.
5. Verify: build, JSON-LD validate, base-path link check, screenshots at 390@2x and 1440; audit & polish; commit locally (no remote).
