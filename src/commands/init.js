module.exports = (program) => {
  program
    .command("init")
    .description("Initialize a new project")
    .alias("i")
    .option("-q, --quick", "Quick initialization without prompts")
    .action(() => {
      console.log("Project initialized!");
    });
};