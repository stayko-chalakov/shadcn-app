// utils.test.ts
import { add, subtract, capitalize } from './utils';

describe('Utility Functions', () => {
  // Test for add function
  test('add function adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Test for subtract function
  test('subtract function subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });

  // Test for capitalize function
  test('capitalize function capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
  });
});
