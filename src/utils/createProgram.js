// src/utils/createProgram.js

/**
 * @file Utility function for creating and configuring the main Commander.js program.
 */
const { Command } = require("commander");
const getPackageJson = require("./getPackageJson");
const formatDescription = require("./formatDescription");

/**
 * Creates and configures the main Commander.js program instance.
 * It sets the version, description (from package.json), and help options.
 * @returns {object|null} The configured Commander.js program instance, or null if package.json is not found.
 */
function createProgram() {
  const packageJson = getPackageJson();
  if (!packageJson) {
    return null; // Do not create program if package.json is missing
  }
  const program = new Command();
  program.version(packageJson.version).description(packageJson.description); // Raw description

  // Load global options (if any) - currently none explicitly defined here
  program
    .option("--debug", "enable debug mode")
    .option("-v, --verbose", "enable verbose output")
    .option("--silent", "disable all output")
    .configureHelp({
      sortSubcommands: true,
      sortOptions: true,
      showGlobalOptions: true, // Show global options in help
    });

  return program;
}

module.exports = createProgram;
