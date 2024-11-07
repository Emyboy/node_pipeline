import { add, subtract, multiply, divide } from '../common/arithmetics';

describe('Arithmetic Functions', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, -1)).toBe(-2);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(2, 3)).toBe(-1);
  });

  test('multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, -1)).toBe(1);
  });

  test('divides two numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, -3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
});
