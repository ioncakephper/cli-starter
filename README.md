# @ioncakephper/cli-starter

[![npm version](https://badge.fury.io/js/@ioncakephper/cli-starter.svg)](https://badge.fury.io/js/@ioncakephper/cli-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://example.com/your-build-status-link) <!-- Placeholder -->
[![npm downloads](https://img.shields.io/npm/dm/@ioncakephper/cli-starter.svg)](https://www.npmjs.com/package/@ioncakephper/cli-starter) <!-- Placeholder -->

A starter template for building command-line interface (CLI) applications with Node.js and Commander.js.

## Key Features

* **Robust CLI Foundation**: Built with Commander.js for easy command definition, option parsing, and help generation.
* **Graceful Error Handling**: Safely handles missing `package.json` by providing informative messages and exiting cleanly.
* **Cross-Platform Compatibility**: Designed to run seamlessly on various operating systems.
* **Testable Structure**: Includes Jest for unit and integration testing, ensuring reliability.

## Installation

To use this CLI, first ensure you have Node.js (>=18.0.0) and npm installed.

### Global Installation (Recommended for CLI Tools)

You can install `@ioncakephper/cli-starter` globally to use it as a command from anywhere in your terminal. Once installed, `cli-starter` becomes available on your local machine.

```bash
# Using npm
npm install -g @ioncakephper/cli-starter

# Using yarn
yarn global add @ioncakephper/cli-starter
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

You can also use `npx` to run `@ioncakephper/cli-starter` without installing it globally. This is convenient for one-off uses or to ensure you're always using the latest version. See the [Usage](#usage) section for examples.

## Usage

Once installed, you can use `@ioncakephper/cli-starter` in several ways:

### Global Command

```bash
cli-starter hello
# Output: Hello, world!

cli-starter hello Alice
# Output: Hello, Alice!

cli-starter --version
# Output: 0.1.0

cli-starter --help
# Displays help information
```

### Using npx (No Installation Required)

If you have `npx` installed (comes with npm 5.2+), you can run the CLI without global installation:

```bash
npx @ioncakephper/cli-starter hello
# Output: Hello, world!

npx @ioncakephper/cli-starter hello Bob
# Output: Hello, Bob!

npx @ioncakephper/cli-starter --version
# Output: 0.1.0

npx @ioncakephper/cli-starter --help
# Displays help information
```

### Direct Execution (for Development or Local Clones)

If you have cloned the repository and installed dependencies locally:

```bash
node bin/cli-starter.js hello
# Output: Hello, world!

node bin/cli-starter.js hello Alice
# Output: Hello, Alice!

node bin/cli-starter.js --version
# Output: 0.1.0

node bin/cli-starter.js --help
# Displays help information
```

## Contributing

We welcome contributions to `@ioncakephper/cli-starter`! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started, including our code of conduct.

For bug reports, feature requests, or general discussions, please visit our [GitHub Issues](https://github.com/ioncakephper/cli-starter/issues) or [GitHub Discussions](https://github.com/ioncakephper/cli-starter/discussions).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**[ioncakephper](https://github.com/ioncakephper)**
