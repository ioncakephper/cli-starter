// src/commands/init.js
/**
 * @file Defines the 'init' command for the CLI.
 */
const formatDescription = require('../utils/formatDescription');

module.exports = (program) => {
  program
    .command("init")
    .description("Initialize a new project.")
    .alias("i")
    .option("-q, --quick", "Quick initialization without prompts.")
    .configureHelp({
      sortSubcommands: true,
      sortOptions: true,
    })
    .action(() => {
      console.log("Project initialized!");
    });
};