import { defineConfig, sharpImageService } from 'astro/config';
import storyblok from '@storyblok/astro';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import basicSsl from '@vitejs/plugin-basic-ssl';
import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";
import { redirects } from './redirects';

import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

//const redirects = process.env.BRAND.includes('goose') ? redirectsGoose : redirectsSmartbunny;

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService(),
    domains: ["source.unsplash.com", "images.unsplash.com"]
  },
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
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  redirects,
  output: "static",
  adapter: vercel()
});


