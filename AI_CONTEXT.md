# AI Context: Movere

## Business Context

Movere is a physiotherapy and movement care practice in Florence / Firenze, Italy. The website should be treated as launch-ready and professional. It presents Movere as a premium clinical brand focused on recovery, mobility, posture, prevention, and long-term wellbeing.

## Brand Identity

- Name: Movere
- Visual identity: black, white, red, soft background, and muted text
- Approved palette: `#111111`, `#FFFFFF`, `#C1121F`, `#F7F5F2`, `#6F6A66`
- Tone: premium, calm, confident, medical, human, and trustworthy
- Location feel: Florentine and refined, never touristy
- Logo: primary brand identity supplied as `public/assets/movere-logo-reference.png`, consisting only of the icon and the word MOVERE
- The V in MOVERE is red; the other letters are black or white depending on context
- The icon uses thin, elegant strokes inspired by human proportion, movement, and body mechanics

Do not redesign, redraw, trace, generate, or replace the logo unless explicitly requested. Preserve the supplied logo image, spacing, proportions, typography, and colors. The header logo must show only the icon and MOVERE wordmark.

## Tech Stack

- Astro
- TypeScript
- React for interactive sections only
- Static output
- Clean global CSS
- GitHub Actions deployment to GitHub Pages

## GitHub Pages Deployment

Production URL:

```text
https://kuefmz.github.io/websiteli-movere-demo/
```

`astro.config.mjs` must keep:

```js
site: "https://kuefmz.github.io",
base: "/websiteli-movere-demo"
```

Use `withBase(...)` or `import.meta.env.BASE_URL` for public assets, including logo, hero images, favicon files, manifest, and preloads.

## Content Structure

All website copy is in:

```text
src/content/siteContent.ts
```

Brand settings are in:

```text
src/config/brand.ts
```

Colors are defined once in `BRAND.colors` and passed to CSS variables from `src/pages/index.astro`.

Do not hardcode editable copy inside components unless it is purely decorative or structural.

## Language Structure

- Supported languages: English and Italian
- The page renders both language versions and hides/shows content based on `html[data-lang]`
- `LanguageSwitcher.tsx` updates local state, `localStorage`, HTML language attributes, and SEO metadata
- Keep Italian natural, polished, and clinically appropriate
- Keep one structural section/card/step and swap text with `data-lang-content`; do not duplicate whole visible sections for each language

## Components

- `Header.astro`
- `Hero.astro`
- `Logo.astro`
- `LanguageSwitcher.tsx`
- `ServiceCard.astro`
- `AboutSection.astro`
- `TreatmentsSection.astro`
- `WhyMovere.astro`
- `OpeningSoon.astro`
- `Footer.astro`

`OpeningSoon.astro` is retained as a component name for continuity, but its visible copy must use appointment inquiry language.

## Appointment Request Rules

Appointment requests currently link to WhatsApp. Set the production number in `BRAND.contact.whatsappNumber` in `src/config/brand.ts` using international format without `+`, spaces, or punctuation.

## Logo And Browser Tab Assets

- Logo: `public/assets/movere-logo-reference.png`
- Browser tab icon: `public/assets/logo.png`

Head links for these assets live in `src/pages/index.astro` and must use base-safe URLs.

## What Not To Add

- No prices
- No booking calendar
- No fake reviews or testimonials
- No medical guarantees
- No invented opening dates
- No insurance claims unless confirmed
- No interim positioning language
- No language that says the clinic is unfinished
- No generic filler text
- Public copy must read as launch-ready clinic content

## Future AI Edit Rules

- Keep the site one page unless explicitly asked otherwise
- Keep all copy in `siteContent.ts`
- Keep brand colors and asset paths in `brand.ts`
- Preserve accessibility labels, semantic HTML, contrast, and visible focus states
- Preserve EN / IT switching
- Run `npm run build` before finishing code changes
- Search for disallowed launch-positioning language before completion
