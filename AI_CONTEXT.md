# AI Context: Movere

## Business Context

Movere is a physiotherapy and movement care practice in Florence / Firenze, Italy. The website should be treated as launch-ready and professional. It presents Movere as a premium clinical brand focused on recovery, mobility, posture, prevention, and long-term wellbeing.

## Brand Identity

- Name: Movere
- Visual identity: black, white, and red
- Tone: premium, calm, confident, medical, human, and trustworthy
- Location feel: Florentine and refined, never touristy
- Logo: primary brand identity supplied as `public/assets/movere-logo-reference.png`, consisting only of the icon and the word MOVERE
- The V in MOVERE is red; the other letters are black or white depending on context
- The icon uses thin, elegant strokes inspired by human proportion, movement, and body mechanics

Do not redesign, redraw, trace, generate, or replace the logo unless explicitly requested. Preserve the supplied logo image, spacing, proportions, typography, and colors. The site should use the provided raster logo asset directly.

## Tech Stack

- Astro
- TypeScript
- React for interactive sections only
- Static output
- Clean global CSS
- GitHub Actions deployment to GitHub Pages

## Content Structure

All website copy is in:

```text
src/content/siteContent.ts
```

Brand settings are in:

```text
src/config/brand.ts
```

Do not hardcode editable copy inside components unless it is purely decorative or structural.

## Language Structure

- Supported languages: English and Italian
- The page renders both language versions and hides/shows content based on `html[data-lang]`
- `LanguageSwitcher.tsx` updates local state, `localStorage`, HTML language attributes, and SEO metadata
- Keep Italian natural, polished, and clinically appropriate

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

## Future AI Edit Rules

- Keep the site one page unless explicitly asked otherwise
- Keep all copy in `siteContent.ts`
- Keep brand colors and asset paths in `brand.ts`
- Preserve accessibility labels, semantic HTML, contrast, and visible focus states
- Preserve EN / IT switching
- Run `npm run build` before finishing code changes
- Search for disallowed launch-positioning language before completion
