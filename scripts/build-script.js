import chalk from "chalk";
import { execSync } from 'child_process';

function runScriptFile(command) {
  try {
    console.log(`${chalk.bgGreen(` running custom scripts: ${command}`)}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.log(`${chalk.red(`Error running command: ${command}!!`)}`);
    process.exit(1);
  }
}

runScriptFile('astro build');
runScriptFile('node ./scripts/copy-public.js');
runScriptFile('node ./scripts/clean-folder.js');

