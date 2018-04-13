import { languageDetector } from '../index';

jest.mock('expo', () => ({
  Util: {
    getCurrentLocaleAsync: () => new Promise(resolve => resolve('en')),
  },
}));

describe('Language is correctly detected', () => {
  test('Using a valid language', async () => {
    const cb = jest.fn();
    const det = languageDetector.detect;
    await det(cb);
    expect(cb).toBeCalledWith('en');
  });
});
