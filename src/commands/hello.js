module.exports = (program) => {
  program
    .command('hello [name]')
    .description('Say hello to someone')
    .action((name = 'world') => {
      console.log(`Hello, ${name}!`);
    });
};