const { Command } = require('commander');
const path = require('path');

function getPackageJson() {
  try {
    return require(path.join(__dirname, '..', 'package.json'));
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('package.json')) {
      console.error('Error: package.json not found. Cannot initialize CLI.');
      return null; // Indicate failure
    } else {
      throw error; // Re-throw other errors
    }
  }
}

function createProgram() {
  const packageJson = getPackageJson();
  if (!packageJson) {
    return null; // Do not create program if package.json is missing
  }
  const program = new Command();
  program
    .version(packageJson.version)
    .description(packageJson.description);
  return program;
}

function run() {
  const program = createProgram();
  if (!program) {
    process.exit(1); // Exit if program could not be created
  }

  program
    .command('hello [name]')
    .description('Say hello to someone')
    .action((name = 'world') => {
      console.log(`Hello, ${name}!`);
    });

  try {
    program.parse(process.argv);
  } catch (error) {
    console.error('Error parsing command:', error.message);
    process.exit(1);
  }

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}

module.exports = { run, createProgram };