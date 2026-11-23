import type { APIRoute } from "astro";
import { languageMeta, languages } from "../content/siteContent";
import { withBase } from "../utils/paths";

export const GET: APIRoute = ({ site }) => {
  const urls = languages.map((lang) => new URL(withBase(languageMeta[lang].path), site));

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url.href}</loc></url>`).join("\n")}
</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
