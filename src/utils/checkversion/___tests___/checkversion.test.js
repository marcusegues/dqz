import { appShouldUpdate } from '../checkversion';

describe('checkVersion tests', () => {
  test('init values for checkVersion', () => {
    expect(appShouldUpdate('0.0.1')).toBe(false);
    expect(appShouldUpdate('999.99.99')).toBe(true);
    expect(appShouldUpdate('abc')).toBe(false);
    expect(appShouldUpdate('10')).toBe(false);
    expect(appShouldUpdate('')).toBe(false);
  });
});
