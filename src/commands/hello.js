// src/commands/hello.js

/**
 * @file Defines the 'hello' command for the CLI.
 */

module.exports = (program) => {
  program
    .command('hello [name]')
    .description('Say hello to someone.')
    .action((name = 'world') => {
      console.log(`Hello, ${name}!`);
    });
};