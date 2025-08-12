// src/utils/applyDescriptionFormatting.js
/**
 * @file Utility function for applying consistent description formatting across Commander.js elements.
 */
const formatDescription = require('./formatDescription');

/**
 * Recursively applies formatting to descriptions of a Commander.js command instance,
 * including its own description, options' descriptions, arguments' descriptions,
 * and descriptions of any nested subcommands.
 * @param {object} commandInstance - The Commander.js command instance (can be the main program or a subcommand).
 */
function applyDescriptionFormatting(commandInstance) {
  // Apply to current commandInstance's description
  if (commandInstance.description()) {
    commandInstance.description(formatDescription(commandInstance.description()));
  }

  // Apply to current commandInstance's options' descriptions
  for (const option of commandInstance.options) {
    if (option.description) {
      option.description = formatDescription(option.description);
    }
  }

  // Apply to current commandInstance's arguments' descriptions
  for (const arg of commandInstance._args) {
    if (arg.description) {
      arg.description = formatDescription(arg.description);
    }
  }

  // Recursively apply to subcommands
  for (const subcommand of commandInstance.commands) {
    applyDescriptionFormatting(subcommand);
  }
}

module.exports = applyDescriptionFormatting;