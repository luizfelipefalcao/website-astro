import chalk from "chalk";
import fs from 'fs/promises';
import path from 'path';

async function copyPublicFiles() {
  const brand = process.env.BRAND || 'goose';
  const publicDistDir = path.resolve('.vercel/output/static');
  const filesToBeCopied = ['robots.txt', 'favicon.ico', 'sitemap-0.xml'];
  const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

  for (const file of filesToBeCopied) {
    const source = path.resolve(`public/${brand}/${file}`);
    const destination = path.resolve(publicDistDir, file);

    try {
      await fs.copyFile(source, destination);
      console.log(`${chalk.grey(timestamp)} ${chalk.blue(`[copied ${file}]`)} ${brand} ${chalk.green(` ✓ Successfull!!`)}`);
    } catch (err) {
      console.log(`${chalk.red(`Error on copying ${file}: ${err.message}`)}`);
      process.exit(1);
    }
  }
}

copyPublicFiles();
