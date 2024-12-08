import fs from 'fs/promises';
import path from 'path';

async function copyPublicFiles() {
  const brand = process.env.BRAND || 'goose';
  const publicDistDir = path.resolve('.vercel/output/static');
  const filesToBeCopied = ['robots.txt', 'favicon.svg', 'sitemap-0.xml'];
  const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

  for (const file of filesToBeCopied) {
    const source = path.resolve(`public/${brand}/${file}`);
    const destination = path.resolve(publicDistDir, file);

    try {
      await fs.copyFile(source, destination);
      console.log(`${timestamp} [copied ${file}]: ${brand} Successfully!`);
    } catch (err) {
      console.error(`Error copying ${file}: ${err.message}`);
      process.exit(1);
    }
  }
}

copyPublicFiles();
