import fs from 'fs/promises';
import path from 'path';

const distDirsToRemove = (() => {
  const siteName = process.env.SITE_NAME;
  if (siteName === 'goose') return ['en-us'];
  if (siteName === 'smartbunny') return ['en-ca', 'fr-ca'];
  return;
})();

async function removeFolders() {
  for (const dir of distDirsToRemove) {
    const dirPath = path.resolve(`./dist/${dir}`);
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    try {
      await fs.rm(dirPath, { recursive: true, force: true });
      console.log(`${timestamp} [removed folder]: /${dir} Successfully!`);
    } catch (error) {
      console.error(`Error removing /${dir} folder: ${error.message}`);
    }
  }
}

removeFolders();
