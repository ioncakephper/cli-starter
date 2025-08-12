const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

describe("CLI execution from different directories", () => {
  let tempDir;
  let cliPath;
  let projectRoot;

  beforeAll(() => {
    // Get the absolute path to the cli-starter executable
    cliPath = path.resolve(__dirname, "..", "bin", "cli-starter.js");
    projectRoot = path.resolve(__dirname, "..");
  });

  beforeEach(() => {
    // Create a temporary directory for each test
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "cli-test-"));
  });

  afterEach(() => {
    // Clean up the temporary directory after each test
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test("should run cli-starter --version from a different directory", () => {
    const command = `node "${cliPath}" --version`;
    const output = execSync(command, { cwd: tempDir }).toString();
    // Expect the version from package.json (e.g., 0.1.0)
    expect(output).toMatch(/\d+\.\d+\.\d+/);
  });

  test("should run cli-starter hello from a different directory", () => {
    const command = `node "${cliPath}" hello`;
    const output = execSync(command, { cwd: tempDir }).toString();
    expect(output).toContain("Hello, world!");
  });

  test("should run cli-starter hello <name> from a different directory", () => {
    const command = `node "${cliPath}" hello Alice`;
    const output = execSync(command, { cwd: tempDir }).toString();
    expect(output).toContain("Hello, Alice!");
  });

  test("should display help when no arguments are provided from a different directory", () => {
    let output = "";
    try {
      const command = `node "${cliPath}" 2>&1`; // Redirect stderr to stdout
      output = execSync(command, { cwd: tempDir, stdio: "pipe" }).toString();
    } catch (error) {
      output = error.stdout.toString(); // Capture stdout even on error
    }
    expect(output).toContain("Usage: cli-starter [options]");
    expect(output).toContain("Commands:");
  });
});
