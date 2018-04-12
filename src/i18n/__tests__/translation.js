import i18n from 'i18next';
import { fr } from '../locales/fr';
import { it } from '../locales/it';
import { en } from '../locales/en';
import { de } from '../locales/de';
import { languageDetector } from '../index';

const init = lng =>
  i18n.init({
    fallbackLng: 'de',
    lng,
    debug: false,
    resources: {
      en,
      de,
      fr,
      it,
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

describe('Translation works', () => {
  test('english', () => {
    init('en');
    expect(i18n.t('onBoarding:welcome')).toBe('Welcome to');
  });
  test('german', () => {
    init('de');
    expect(i18n.t('onBoarding:welcome')).toBe('Willkommen zu');
  });
  test('french', () => {
    init('fr');
    expect(i18n.t('onBoarding:welcome')).toBe('Bienvenue à');
  });
  test('italian', () => {
    init('it');
    expect(i18n.t('onBoarding:welcome')).toBe('Benvenuti a');
  });
  test('fallback', () => {
    init('xy');
    expect(i18n.t('onBoarding:welcome')).toBe('Willkommen zu');
  });
});

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
