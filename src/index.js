const { Command } = require('commander');
const path = require('path');
const fs = require('fs');

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

function loadCommands(program, commandsDir) {
  const files = fs.readdirSync(commandsDir);

  for (const file of files) {
    const filePath = path.join(commandsDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      loadCommands(program, filePath); // Recursively load commands from subdirectories
    } else if (file.endsWith('.js')) {
      const commandModule = require(filePath);
      if (typeof commandModule === 'function') {
        commandModule(program); // Invoke the exported function with the program object
      }
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
    .description(packageJson.description)
    .configureHelp({ // Apply to top-level program
      sortSubcommands: true,
      sortOptions: true,
    });

  // Load global options (if any) - currently none explicitly defined here
  // program
  //   .option('--debug', 'enable debug mode')
  //   .option('-v, --verbose', 'enable verbose output')
  //   .option('--silent', 'disable all output');

  return program;
}

function run() {
  const program = createProgram();
  if (!program) {
    process.exit(1); // Exit if program could not be created
  }

  // Load commands dynamically
  const commandsDir = path.join(__dirname, 'commands');
  loadCommands(program, commandsDir);

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