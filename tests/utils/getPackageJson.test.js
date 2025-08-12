const getPackageJson = require('../../src/utils/getPackageJson');
const path = require('path');
const fs = require('fs');

// Mock path.join to control the path resolution for require
jest.mock('path', () => ({
  ...jest.requireActual('path'), // Import and retain default behavior
  join: jest.fn(),
}));

describe('getPackageJson', () => {
  const originalConsoleError = console.error;
  let consoleErrorOutput = '';

  beforeAll(() => {
    // Mock console.error to capture its output
    console.error = (message) => { consoleErrorOutput += message; };
  });

  afterAll(() => {
    // Restore original console.error
    console.error = originalConsoleError;
  });

  beforeEach(() => {
    consoleErrorOutput = ''; // Clear output before each test
    // Reset path.join mock before each test
    path.join.mockClear();
    // Default mock for path.join to point to the actual package.json
    path.join.mockImplementation((...args) => jest.requireActual('path').join(...args));
  });

  test('should return package.json content if found', () => {
    // path.join will resolve to the actual package.json
    const packageJson = getPackageJson();
    expect(packageJson).toBeDefined();
    expect(packageJson.name).toBe('@shytiger/cli-starter');
  });

  test('should return null and log error if package.json is not found', () => {
    // Mock path.join to return a path that will cause require to fail
    path.join.mockReturnValue('/non/existent/path/package.json');
    const packageJson = getPackageJson();
    expect(packageJson).toBeNull();
    expect(consoleErrorOutput).toContain('Error: package.json not found. Cannot initialize CLI.');
  });

  test.todo('should handle malformed package.json');
  test.todo('should return null and log error for other require errors');
});