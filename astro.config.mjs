import { defineConfig, sharpImageService } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import basicSsl from '@vitejs/plugin-basic-ssl';
import { redirectsGoose } from "./redirects/goose";
import { redirectsSmartbunny } from "./redirects/smartbunny";

const redirects = process.env.BRAND.includes('goose') ? redirectsGoose : redirectsSmartbunny;

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService(),
    domains: ["source.unsplash.com", "images.unsplash.com"]
  },
  integrations: [tailwind(), mdx()],
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


