import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: process.env.ENV_PATH || '.env' });

const baseUrl = process.env.BASE_URL || 'https://example.com';
const pages = [
  '/',
  '/about',
  '/contact',
  '/products'
];

// Generate the XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>!</priority>
    </url>`
    )
    .join('')}
</urlset>`;

// Write to the correct output directory
const outputDir = path.resolve(`dist-${process.env.SITE_NAME}`);
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);

console.log(`Sitemap generated for ${baseUrl}`);
