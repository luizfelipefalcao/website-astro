import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";

const redirects = process.env.BRAND.includes('goose') ? redirectsGoose : redirectsSmartbunny;

// https://astro.build/config
export default defineConfig({
  redirects,
  output: "static",
  adapter: vercel()
});
