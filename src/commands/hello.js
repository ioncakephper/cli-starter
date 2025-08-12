// src/commands/hello.js
/**
 * @file Defines the 'hello' command for the CLI.
 */
const formatDescription = require('../utils/formatDescription');

module.exports = (program) => {
  program
    .command('hello [name]')
    .description('Say hello to someone.')
    .configureHelp({
      sortSubcommands: true,
      sortOptions: true,
    })
    .action((name = 'world') => {
      console.log(`Hello, ${name}!`);
    });
};