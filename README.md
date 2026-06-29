# Movere

Premium one-page Astro website for **Movere**, a physiotherapy and movement care practice in Florence, Italy. The site is bilingual, SEO-friendly, statically generated, and built for simple maintenance.

## Tech Stack

- Astro with static output
- TypeScript
- React only for interactive components
- Clean global CSS
- WhatsApp appointment request links

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

Preview the build locally:

```bash
npm run preview
```

## Deploy

The repository includes `.github/workflows/deploy.yml`. Every push to `main` installs dependencies, builds the Astro site, uploads `dist/`, and deploys it to GitHub Pages.

In GitHub repository settings:

- Open **Settings → Pages**
- Set **Source** to **GitHub Actions**
- Push to `main`

For Netlify or Hostpoint, run `npm run build` and deploy the `dist/` folder.

### Deployment Troubleshooting

- If the GitHub Actions build fails, check the **Actions** tab and inspect the failing step.
- If dependencies fail to install, confirm `package-lock.json` is committed.
- If assets do not load on GitHub Pages, confirm `astro.config.mjs` has the correct `base` for the repository.
- If appointment links open the wrong chat, update `BRAND.contact.whatsappNumber`.

## Edit Text

All English and Italian copy is in:

```text
src/content/siteContent.ts
```

Keep both languages complete when editing.

## Edit Colors And Brand Settings

Brand values live in:

```text
src/config/brand.ts
```

The main CSS uses those values as variables in:

```text
src/styles/global.css
```

## Edit Logo

The website uses the provided logo image directly. The logo component is:

```text
src/components/Logo.astro
```

The logo image asset is:

```text
public/assets/movere-logo-reference.png
```

Do not redraw or replace this logo unless the client provides a new approved logo file.

## Favicon Assets

```bash
The favicon files are stored in `public/`. Only regenerate or replace them when a new approved logo/icon file is provided.
```

This creates:

- `public/favicon.ico`
- `public/favicon.svg`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/site.webmanifest`

## Appointment Link

Appointment requests currently use WhatsApp instead of an embedded form.

Set the production number in `BRAND.contact.whatsappNumber` in `src/config/brand.ts`.
Use the WhatsApp international format without `+`, spaces, or punctuation.
