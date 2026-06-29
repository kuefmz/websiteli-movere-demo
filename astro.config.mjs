import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = ["websiteli", "movere", "de" + "mo"].join("-");

export default defineConfig({
  output: "static",
  site: "https://websiteli-ch.github.io",
  base: isGitHubPages ? `/${repositoryName}` : "/",
  integrations: [react()]
});
