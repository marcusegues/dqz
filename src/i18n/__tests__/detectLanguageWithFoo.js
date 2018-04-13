import { languageDetector } from '../index';

jest.mock('expo', () => ({
  Util: {
    getCurrentLocaleAsync: () =>
      new Promise(resolve => resolve('friFraFroFrum')),
  },
}));

describe('Language is correctly detected', () => {
  test('Using a longer string with correct beginning (like en-us)', async () => {
    const cb = jest.fn();
    const det = languageDetector.detect;
    await det(cb);
    expect(cb).toBeCalledWith('fr');
  });
});
