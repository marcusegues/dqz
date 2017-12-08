import i18n from 'i18next';

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: callback => {
    return /*'en'; */ Expo.Util.getCurrentLocaleAsync().then(lng => {
      callback(lng);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n.use(languageDetector).init({
  fallbackLng: 'de',

  ns: ['translations'],
  defaultNS: 'translations',
  debug: true,
  resources: {
    en: {
      translation: {
        declareGoods: 'Declare Goods',
        onBoardingMessage:
          'We’ve set your language based on your current system settings:',
      },
    },
    de: {
      translation: {
        declareGoods: 'Waren Deklarieren',
        onBoardingMessage:
          'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
      },
    },
    fr: {
      translation: {
        declareGoods: 'Déclarer les marchandises',
        onBoarding:
          'Nous avons défini votre langue en fonction de vos paramètres système actuels',
      },
    },
    it: {
      translation: {
        declareGoods: 'Dichiarare le merci',
        onBoarding:
          'Abbiamo impostato la tua lingua in base alle tue attuali impostazioni di sistema',
      },
    },
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

export default i18n;
