import fs from 'fs/promises';
import path from 'path';

async function removeUnecessaryFolders() {
  const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
  const siteDistDirsToRemove = (() => {
    const siteName = process.env.BRAND;
    if (siteName === 'goose') return ['en-us'];
    if (siteName === 'smartbunny') return ['en-ca', 'fr-ca'];
    return;
  })();

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

removeUnecessaryFolders();
