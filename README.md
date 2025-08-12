# @shytiger/cli-starter

[![npm version](https://img.shields.io/npm/v/@shytiger/cli-starter.svg)](https://www.npmjs.com/package/@shytiger/cli-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-unknown-lightgrey.svg)](https://github.com/shytiger/cli-starter/actions)
[![npm downloads](https://img.shields.io/npm/dm/@shytiger/cli-starter.svg)](https://www.npmjs.com/package/@shytiger/cli-starter)

A starter template for building command-line interface (CLI) applications with Node.js and Commander.js.

## Key Features

* **Robust CLI Foundation**: Built with Commander.js for easy command definition, option parsing, and help generation.
* **Graceful Error Handling**: Safely handles missing `package.json` by providing informative messages and exiting cleanly.
* **Cross-Platform Compatibility**: Designed to run seamlessly on various operating systems.
* **Testable Structure**: Includes Jest for unit and integration testing, ensuring reliability.

## Installation

To use this CLI, first ensure you have Node.js (>=18.0.0) and npm installed.

### Global Installation (Recommended for CLI Tools)

You can install `@shytiger/cli-starter` globally to use it as a command from anywhere in your terminal. Once installed, `cli-starter` becomes available on your local machine.

```bash
# Using npm
npm install -g @shytiger/cli-starter

# Using yarn
yarn global add @shytiger/cli-starter
```

To verify the installation, you can check the version:

```bash
cli-starter --version
```

### Local Installation (for Development or Specific Projects)

If you prefer to clone the repository and run it locally:

```bash
git clone https://github.com/ioncakephper/cli-starter.git
cd cli-starter
npm install
# Then you can run it using:
node bin/cli-starter.js <command>
```

### Using npx (No Installation Required)

You can also use `npx` to run `@shytiger/cli-starter` without installing it globally. This is convenient for one-off uses or to ensure you're always using the latest version. See the [Usage](#usage) section for examples.

## Usage

Once installed, you can use `@shytiger/cli-starter` in several ways:

### Global Command

```bash
cli-starter hello [name]
# Say hello to someone. If no name is provided, it defaults to "world".
# Output: Hello, world! (if no name)
# Output: Hello, Alice! (if name is Alice)

cli-starter --version
# Output: 0.1.0

cli-starter --help
# Displays help information
```

### Using npx (No Installation Required)

If you have `npx` installed (comes with npm 5.2+), you can run the CLI without global installation:

```bash
npx @shytiger/cli-starter hello [name]
# Say hello to someone. If no name is provided, it defaults to "world".
# Output: Hello, world! (if no name)
# Output: Hello, Bob! (if name is Bob)

npx @shytiger/cli-starter --version
# Output: 0.1.0

npx @shytiger/cli-starter --help
# Displays help information
```

### Direct Execution (for Development or Local Clones)

If you have cloned the repository and installed dependencies locally:

```bash
node bin/cli-starter.js hello [name]
# Output: Hello, world! (if no name)
# Output: Hello, Alice! (if name is Alice)

node bin/cli-starter.js --version
# Output: 0.1.0

node bin/cli-starter.js --help
# Displays help information
```

## CLI Reference

This section provides a detailed overview of `cli-starter` commands and their available options.

### Global Options

These options can be used with any command.

* `-V, --version`: Output the current version of the CLI.
  * **Example**: `cli-starter --version`
* `-h, --help`: Display help information for the CLI or a specific command.
  * **Example**: `cli-starter --help`
  * **Example (for a command)**: `cli-starter hello --help`

### Commands

#### `hello [name]`

Say hello to someone. If no name is provided, it defaults to "world".

* **Arguments**:
  * `[name]` (optional): The name of the person to greet.
* **Options**:
  * (No specific options for this command yet)
* **Examples**:
  * `cli-starter hello`
    * Output: `Hello, world!`
  * `cli-starter hello Alice`
    * Output: `Hello, Alice!`

#### `init` or `i`

Initialize a new project.

* **Arguments**:
  * (No specific arguments for this command)
* **Options**:
  * `-q, --quick`: Quick initialization without prompts.
* **Examples**:
  * `cli-starter init`
    * Output: `Project initialized!`
  * `cli-starter i --quick`
    * Output: `Project initialized!`

## Contributing

We welcome contributions to `@shytiger/cli-starter`! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started, including our code of conduct.

For bug reports, feature requests, or general discussions, please visit our [GitHub Issues](https://github.com/ioncakephper/cli-starter/issues) or [GitHub Discussions](https://github.com/ioncakephper/cli-starter/discussions).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**[ioncakephper](https://github.com/ioncakephper)**
