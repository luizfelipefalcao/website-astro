import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { loadEnv } from 'vite';

import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";

const env = loadEnv("", process.cwd(), 'STORYBLOK');
const redirects = process.env.BRAND.includes('goose') ? redirectsGoose : redirectsSmartbunny;
const GOOSE_WEBSITE = 'https://www.gooseinsurance.com';
const SMARTBUNNY_WEBSITE = 'https://www.smartbunny.com/';
const siteName = process.env.BRAND.includes('goose') ? GOOSE_WEBSITE : SMARTBUNNY_WEBSITE;

export default defineConfig({
  site: siteName,
  redirects,
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), mdx(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page'
    },
    apiOptions: {
      region: 'us'
    }
  })]
});
