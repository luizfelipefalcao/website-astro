import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.SITE_NAME || 'site1'}` });

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL,
  //outDir: `dist-${process.env.SITE_NAME}`,
  output: `static-${process.env.SITE_NAME}`,
  adapter: vercel({ edgeMiddleware: true, })
});