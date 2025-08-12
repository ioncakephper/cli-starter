// src/utils/getPackageJson.js

/**
 * @file Utility function to retrieve package.json content.
 */
const path = require('path');

/**
 * Retrieves the package.json content from the project root.
 * Handles cases where package.json might not be found, providing a graceful exit.
 * @returns {object|null} The parsed package.json content, or null if not found.
 */
function getPackageJson() {
  try {
    return require(path.join(__dirname, '..', '..', 'package.json')); // Corrected path
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('package.json')) {
      console.error('Error: package.json not found. Cannot initialize CLI.');
      return null; // Indicate failure
    } else {
      throw error; // Re-throw other errors
    }
  }
}

module.exports = getPackageJson;