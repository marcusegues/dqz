import { languageDetector } from '../index';

jest.mock('expo', () => ({
  Util: {
    getCurrentLocaleAsync: () => new Promise(resolve => resolve('foo')),
  },
}));

describe('Language is correctly detected', () => {
  test('Using an invalid language and then go for fallback', async () => {
    const cb = jest.fn();
    const det = languageDetector.detect;
    await det(cb);
    expect(cb).toBeCalledWith('de');
  });
});
