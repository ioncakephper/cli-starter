// src/utils/formatDescription.js

/**
 * @file Utility function for formatting description strings.
 */

/**
 * Formats a description string by trimming whitespace, removing all trailing dots,
 * and converting it to lowercase.
 * @param {string} description - The description string to format.
 * @returns {string} The formatted description string.
 */
function formatDescription(description) {
  if (!description) return '';
  let formatted = description.trim();
  // Remove all trailing dots
  formatted = formatted.replace(/\.+$/, '').trim();
  return formatted.toLowerCase();
}

module.exports = formatDescription;