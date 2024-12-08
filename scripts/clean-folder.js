import fs from 'fs/promises';
import path from 'path';

const siteDistDirsToRemove = (() => {
  const siteName = process.env.BRAND;
  if (siteName === 'goose') return ['en-us'];
  if (siteName === 'smartbunny') return ['en-ca', 'fr-ca'];
  return;
})();

const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

async function removeUnecessaryFolders() {
  for (const dir of siteDistDirsToRemove) {
    const siteDirPath = path.resolve(`.vercel/output/static/${dir}`);

    try {
      await fs.rm(siteDirPath, { recursive: true, force: true });
      await fs.rm(path.resolve(`.vercel/output/static/goose`), { recursive: true, force: true });
      await fs.rm(path.resolve(`.vercel/output/static/smartbunny`), { recursive: true, force: true });
      console.log(`${timestamp} [removed folder]: /${dir} Successfully!`);
    } catch (error) {
      console.error(`Error removing /${dir} folder: ${error.message}`);
    }
  }
}

async function copyPublicFiles() {
  const brand = process.env.BRAND || 'goose';
  const publicDistDir = path.resolve('.vercel/output/static');
  const filesToBeCopied = ['robots.txt', 'favicon.svg'];

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
removeUnecessaryFolders();
