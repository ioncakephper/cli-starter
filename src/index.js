// src/index.js
/**
 * @file This is the main entry point for the CLI application.
 * It sets up the Commander.js program, loads commands dynamically,
 * and applies description formatting.
 */
const createProgram = require('./utils/createProgram');
const loadCommands = require('./utils/loadCommands');
const applyDescriptionFormatting = require('./utils/applyDescriptionFormatting');
const path = require('path');

function run() {
  const program = createProgram();
  if (!program) {
    process.exit(1); // Exit if program could not be created
  }

  // Load commands dynamically
  const commandsDir = path.join(__dirname, 'commands');
  loadCommands(program, commandsDir);

  // Apply description formatting after all commands are loaded
  applyDescriptionFormatting(program);

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

module.exports = { run };