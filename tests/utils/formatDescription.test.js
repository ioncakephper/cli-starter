const formatDescription = require('../../src/utils/formatDescription');

describe('formatDescription', () => {
  test('should convert string to lowercase', () => {
    expect(formatDescription('Hello World')).toBe('hello world');
  });

  test('should trim leading and trailing whitespace', () => {
    expect(formatDescription('  Hello World  ')).toBe('hello world');
  });

  test('should remove trailing dots', () => {
    expect(formatDescription('Hello World.')).toBe('hello world');
    expect(formatDescription('Hello World...')).toBe('hello world');
  });

  test('should handle empty string', () => {
    expect(formatDescription('')).toBe('');
  });

  test('should handle null or undefined input', () => {
    expect(formatDescription(null)).toBe('');
    expect(formatDescription(undefined)).toBe('');
  });

  test('should combine all rules', () => {
    expect(formatDescription('  This is a Test.  ')).toBe('this is a test');
    expect(formatDescription('Another Test...')).toBe('another test');
  });

  test.todo('should handle descriptions with multiple sentences');
  test.todo('should handle descriptions with numbers and special characters');
});