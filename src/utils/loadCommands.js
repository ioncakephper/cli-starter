// src/utils/loadCommands.js

/**
 * @file Utility function for dynamically loading Commander.js commands.
 */
const fs = require('fs');
const path = require('path');

/**
 * Recursively loads command modules from a specified directory and applies them to the Commander program.
 * Each JavaScript file in the directory (and its subdirectories) is expected to export a function
 * that takes the Commander program instance as an argument and defines commands, options, etc.
 * @param {object} program - The Commander.js program instance.
 * @param {string} commandsDir - The absolute path to the directory containing command modules.
 */
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

module.exports = loadCommands;