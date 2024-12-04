import { defineConfig } from 'astro/config';
//import vercel from "@astrojs/vercel/static";
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.SITE_NAME || 'site1'}` });

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL,
  outDir: `dist-${process.env.SITE_NAME}`,
  //output: "static",
  //adapter: vercel({ edgeMiddleware: true, })
});