// @flow
import i18n from 'i18next';
// $FlowFixMe
import Expo from 'expo';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { it } from './locales/it';
import type { Language } from './types/locale';

export const languages: Array<Language> = ['de', 'fr', 'it', 'en'];

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: callback =>
    Expo.Util.getCurrentLocaleAsync().then(lng => callback(lng.substr(0, 2))),
  init: () => {},
  cacheUserLanguage: () => {},
};

export const i18nImplementation = i18n.use(languageDetector).init({
  fallbackLng: 'de',

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
