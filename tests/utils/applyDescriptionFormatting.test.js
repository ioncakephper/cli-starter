const applyDescriptionFormatting = require('../../src/utils/applyDescriptionFormatting');
const formatDescription = require('../../src/utils/formatDescription'); // Need to mock this too

jest.mock('../../src/utils/formatDescription', () => jest.fn((desc) => `formatted_${desc}`));

describe('applyDescriptionFormatting', () => {
  let mockProgram;
  let mockCommand;
  let mockOption;
  let mockArgument;

  beforeEach(() => {
    formatDescription.mockClear(); // Clear mock calls before each test

    mockOption = { description: 'Option description' };
    mockArgument = { description: 'Argument description' };

    mockCommand = {
      description: jest.fn(() => 'Command description'),
      options: [mockOption],
      _args: [mockArgument],
      commands: [], // For recursion
    };

    mockProgram = {
      description: jest.fn(() => 'Program description'),
      options: [{ description: 'Global option description' }],
      _args: [{ description: 'Global argument description' }],
      commands: [mockCommand],
    };
  });

  test('should format program description', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockProgram.description).toHaveBeenCalledWith('formatted_Program description');
  });

  test('should format global options descriptions', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockProgram.options[0].description).toBe('formatted_Global option description');
  });

  test('should format global arguments descriptions', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockProgram._args[0].description).toBe('formatted_Global argument description');
  });

  test('should format command description', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockCommand.description).toHaveBeenCalledWith('formatted_Command description');
  });

  test('should format command options descriptions', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockCommand.options[0].description).toBe('formatted_Option description');
  });

  test('should format command arguments descriptions', () => {
    applyDescriptionFormatting(mockProgram);
    expect(mockCommand._args[0].description).toBe('formatted_Argument description');
  });

  test('should recursively format subcommand descriptions', () => {
    const mockSubcommand = {
      description: jest.fn(() => 'Subcommand description'),
      options: [],
      _args: [],
      commands: [],
    };
    mockCommand.commands.push(mockSubcommand); // Add subcommand

    applyDescriptionFormatting(mockProgram);
    expect(mockSubcommand.description).toHaveBeenCalledWith('formatted_Subcommand description');
  });

  test.todo('should handle cases where descriptions are undefined or null');
  test.todo('should handle commands with no options or arguments');
});