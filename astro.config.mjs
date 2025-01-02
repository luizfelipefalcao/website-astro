import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";

const redirects = process.env.BRAND.includes('goose') ? redirectsGoose : redirectsSmartbunny;
const GOOSE_WEBSITE = 'https://www.gooseinsurance.com';
const SMARTBUNNY_WEBSITE = 'https://www.smartbunny.com/';
const siteName = process.env.BRAND.includes('goose') ? GOOSE_WEBSITE : SMARTBUNNY_WEBSITE;

// https://astro.build/config
export default defineConfig({
  site: siteName,
  redirects,
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), mdx()]
});
