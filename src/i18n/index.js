import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  fallbackLng: 'de',

  ns: ['translations'],
  defaultNS: 'translations',
  debug: true,
  resources: {
    en: {
      translation: {
        declareGoods: 'Declare Goods'
      }
    },
    de: {
      translation: {
        declareGoods: 'Waren Deklarieren'
      }
    }
  },
  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
});

export default i18n;
