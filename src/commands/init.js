// src/commands/init.js

/**
 * @file Defines the 'init' command for the CLI.
 */

module.exports = (program) => {
  program
    .command("init")
    .description("Initialize a new project.")
    .alias("i")
    .option("-q, --quick", "Quick initialization without prompts.")
    .action(() => {
      console.log("Project initialized!");
    });
};