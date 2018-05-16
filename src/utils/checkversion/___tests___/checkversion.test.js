import { appShouldUpdate } from '../checkversion';
import packageJson from '../../../../package.json';

jest.mock('../../../../package.json');

describe('checkVersion tests', () => {
  test('test values checkVersion', () => {
    expect(appShouldUpdate('0.0.1')).toBe(false);
    expect(appShouldUpdate('999.99.99')).toBe(true);
    expect(appShouldUpdate('abc')).toBe(false);
    expect(appShouldUpdate('10')).toBe(false);
    expect(appShouldUpdate('')).toBe(false);
  });
  test('test values checkVersion with mocked version', () => {
    packageJson.version = '5.0.5';
    expect(appShouldUpdate('7.1.11')).toBe(true);
    expect(appShouldUpdate('3.3.01')).toBe(false);
    expect(appShouldUpdate('3.3.01a')).toBe(false);
  });
  test('test values checkVersion with fail version', () => {
    packageJson.version = '0.0.1abc';
    expect(appShouldUpdate('9.1.1')).toBe(false);
    expect(appShouldUpdate('9.1.1a')).toBe(false);
  });
});
