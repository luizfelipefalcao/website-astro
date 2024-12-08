import { defineConfig } from 'astro/config';
import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";
import vercel from "@astrojs/vercel/static";

const redirects = process.env.SITE_NAME === 'goose' ? redirectsGoose : redirectsSmartbunny;

// https://astro.build/config
export default defineConfig({
  redirects,
  output: "static",
  adapter: vercel()
});
