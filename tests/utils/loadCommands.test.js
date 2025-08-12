const loadCommands = require('../../src/utils/loadCommands');
const path = require('path');
const fs = require('fs');

// Mock fs and path
jest.mock('fs');
jest.mock('path', () => ({
  ...jest.requireActual('path'),
  join: jest.fn(),
}));

describe('loadCommands', () => {
  let mockProgram;
  let mockCommandsDir;

  beforeEach(() => {
    mockProgram = {
      command: jest.fn().mockReturnThis(),
      description: jest.fn().mockReturnThis(),
      alias: jest.fn().mockReturnThis(),
      option: jest.fn().mockReturnThis(),
      action: jest.fn().mockReturnThis(),
      configureHelp: jest.fn().mockReturnThis(),
    };
    mockCommandsDir = path.resolve(__dirname, '..', '..', 'src', 'commands'); // Point to actual commands directory

    fs.readdirSync.mockReset();
    fs.statSync.mockReset();
    path.join.mockReset();
    path.join.mockImplementation(jest.requireActual('path').join); // Default to actual join

    // Clear Jest's module registry before each test
    jest.resetModules();
  });

  test('should load hello and init commands', () => {
    // Mock fs.readdirSync to return the actual files in src/commands
    fs.readdirSync.mockReturnValue(['hello.js', 'init.js']);
    // Mock fs.statSync to return isDirectory: false for these files
    fs.statSync.mockImplementation((filePath) => ({
      isDirectory: () => !filePath.endsWith('.js'), // Simulate files, not directories
    }));

    loadCommands(mockProgram, mockCommandsDir);

    expect(mockProgram.command).toHaveBeenCalledWith('hello [name]');
    expect(mockProgram.command).toHaveBeenCalledWith('init');
  });

  test.todo('should handle errors during file system operations');
  test.todo('should handle command modules that do not export a function');
  test.todo('should recursively load commands from subdirectories');
});