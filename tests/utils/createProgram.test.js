const { Command } = require('commander');

// Mock getPackageJson
jest.mock('../../src/utils/getPackageJson'); // This will mock the module

// Mock formatDescription
jest.mock('../../src/utils/formatDescription', () => jest.fn((desc) => `formatted_${desc}`));

// Mock commander
jest.mock('commander', () => {
  const mockCommandInstance = {
    version: jest.fn().mockReturnThis(),
    description: jest.fn().mockReturnThis(),
    configureHelp: jest.fn().mockReturnThis(),
    options: [],
    commands: [],
    _args: [],
  };
  const MockCommand = jest.fn(() => mockCommandInstance);
  return { Command: MockCommand };
});

// Require createProgram AFTER all its dependencies are mocked
const createProgramModule = require('../../src/utils/createProgram');

describe('createProgram', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks, including Command
  });

  test('should return null if package.json is not found', () => {
    require('../../src/utils/getPackageJson').mockReturnValue(null);
    const program = createProgramModule();
    expect(program).toBeNull();
    expect(require('../../src/utils/getPackageJson')).toHaveBeenCalledTimes(1);
  });

  test('should create a Commander program with version and raw description', () => {
    const mockPackageJson = {
      version: '1.0.0',
      description: 'Test description.',
    };
    require('../../src/utils/getPackageJson').mockReturnValue(mockPackageJson);

    const program = createProgramModule();
    expect(program).toBeInstanceOf(Command); // This should now pass
    expect(program.version).toHaveBeenCalledWith('1.0.0');
    expect(program.description).toHaveBeenCalledWith('Test description.'); // Assert raw description
    expect(require('../../src/utils/formatDescription')).not.toHaveBeenCalled(); // formatDescription is applied later
    expect(program.options).toEqual([]); // No global options defined in createProgram
    expect(program.commands).toEqual([]); // No commands defined in createProgram
  });

  test.todo('should configure help options');
  test.todo('should handle global options if defined in createProgram');
});