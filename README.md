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

Production URL:

```text
https://kuefmz.github.io/websiteli-movere-demo/
```

`astro.config.mjs` must keep:

```js
site: "https://kuefmz.github.io",
base: "/websiteli-movere-demo"
```

All public assets must be referenced through `withBase(...)` or `import.meta.env.BASE_URL` so images, CSS, JS, favicon files, and the manifest resolve below the GitHub Pages base path.

In GitHub repository settings:

- Open **Settings → Pages**
- Set **Source** to **GitHub Actions**
- Push to `main`

For Netlify or Hostpoint, run `npm run build` and deploy the `dist/` folder.

### Deployment Troubleshooting

- If the GitHub Actions build fails, check the **Actions** tab and inspect the failing step.
- If dependencies fail to install, confirm `package-lock.json` is committed.
- If assets do not load on GitHub Pages, confirm `astro.config.mjs` has the exact `site` and `base` values above.
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

Approved palette:

- black: `#111111`
- white: `#FFFFFF`
- red: `#C1121F`
- soft background: `#F7F5F2`
- muted text: `#6F6A66`

The main CSS receives those values as variables in:

```text
src/styles/global.css
```

## Edit Logo

The website uses the approved Movere logo image. The header shows the icon and `MOVERE` only. The logo component is:

```text
src/components/Logo.astro
```

The logo image asset is:

```text
public/assets/movere-logo-reference.png
```

Do not redraw or replace this logo unless the client provides a new approved logo file. Route logo references through `withBase(...)` for GitHub Pages.

## Browser Tab Icon

The browser tab icon uses:

```text
public/assets/logo.png
```

The head links in `src/pages/index.astro` must point to this file through `withBase(...)`.

## Language Switching

Default language is English. All editable copy lives in `src/content/siteContent.ts`.

Components should render one structural section/card/step and swap the text with `data-lang-content="en"` and `data-lang-content="it"`. The language switcher updates `html[data-lang]`, `html[lang]`, local storage, and SEO metadata. Do not create separate visible sections for each language.

## Appointment Link

Appointment requests currently use WhatsApp instead of an embedded form.

Set the production number in `BRAND.contact.whatsappNumber` in `src/config/brand.ts`.
Use the WhatsApp international format without `+`, spaces, or punctuation.

## Public Copy Rule

Public-facing copy must read as launch-ready clinic content. Avoid interim status language in website text, contact notes, section headings, metadata, and image alt text.
