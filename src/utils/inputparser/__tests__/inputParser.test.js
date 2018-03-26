import { parseInputToFloat } from '../inputParser';

describe('checkVersion tests', () => {
  test('init values for checkVersion', () => {
    expect(parseInputToFloat('0.0.1')).toBe('0.0');
    expect(parseInputToFloat('.')).toBe('0');
    expect(parseInputToFloat('999.99.99')).toBe('999.99');
    expect(parseInputToFloat('-999.99')).toBe('999.99');
    expect(parseInputToFloat('-999.99.99')).toBe('999.99');
    expect(parseInputToFloat('-asd999.q99.c99')).toBe('999.99');
    expect(parseInputToFloat('-asd\'9"99.q99.c99')).toBe('999.99');
    expect(parseInputToFloat('abc')).toBe('');
    expect(parseInputToFloat('abc!@%&#*1')).toBe('1');
    expect(parseInputToFloat('abc!@,%&#*1')).toBe('.1');
    expect(parseInputToFloat('a00bc!@,%&#*1')).toBe('00.1');
    expect(parseInputToFloat('10')).toBe('10');
    expect(parseInputToFloat('12345')).toBe('12345');
    expect(parseInputToFloat('abc12')).toBe('12');
    expect(parseInputToFloat('abc12,123avc')).toBe('12.12');
    expect(parseInputToFloat('abc12,123avc', 6, 3)).toBe('12.123');
    expect(parseInputToFloat('123456789')).toBe('123456');
    expect(parseInputToFloat('123456789', 9)).toBe('123456789');
    expect(parseInputToFloat('0000000000001.1999')).toBe('000000.19');
    expect(parseInputToFloat('0000000000001.1999', 2, 1)).toBe('00.1');
    expect(
      parseInputToFloat('a123bc456789123456,12345678,12345678,12345678')
    ).toBe('123456.12');
    expect(
      parseInputToFloat('a123bc456789123456,12345678,12345678,12345678', 7, 3)
    ).toBe('1234567.123');
    expect(
      parseInputToFloat('a123bc456789123456,12345678,12345678,12345678', 3, 5)
    ).toBe('123.12345');
    expect(parseInputToFloat('11,22,33,44')).toBe('11.22');
  });
});
