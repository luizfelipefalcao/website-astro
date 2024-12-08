import { execSync } from 'child_process';

function runScriptFile(command) {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    process.exit(1);
  }
}

runScriptFile('astro build');
runScriptFile('node ./scripts/clean-folder.js');

