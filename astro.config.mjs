import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: "https://kuefmz.github.io",
  base: "/websiteli-movere-demo",
  integrations: [react()]
});
