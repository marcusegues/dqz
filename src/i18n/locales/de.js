// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeLargeAmountInputNSRecord,
  makeQAFlowNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeMainCategoriesNSRecord,
} from '../types/locale';

export const de: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({
    Meat: 'Fleisch & Fleischzubereitung',
    Butter: 'Butter & Rahm',
    Oils: 'Öle/Fette/Margarine',
    OtherFood: 'Sonstige Lebensmittel & alkoholfreie Getränke',
    AlcSoft: 'Alkohol über 0.5 % bis 18 % Vol.%',
    AlcHard: 'Alkohol von über 18 % Vol.',
    Cigarettes: 'Zigaretten & Zigarren',
    Tobacco: 'andere Tabakfabrikate',
    Med: 'Medikamente',
    Books: 'Bücher',
    Magazines: 'Zeitschriften',
    Flowers: 'Schnittblumen & Pflanzen',
    AnimalFeed: 'Tierfutter',
    Fertilizer: 'Dünger',
    Other: 'Sonstige Waren',
  }),
  mainCategories: makeMainCategoriesNSRecord({
    Foods: 'Lebensmittel',
    Alcohol: `Alkohol`,
    TobaccoProducts: 'Tabak',
    OtherGoods: 'Anderes',
  }),
  general: makeGeneralNSRecord({
    declareGoods: 'Waren anmelden',
    pleaseSelect: 'Bitte auswählen',
    receipts: 'Quittungen Schweizer Zoll',
    guideline: 'Ihr Weg durch den Schweizer Zoll',
    information: 'Informationen zum Gebrauch der App',
    navbarFirst: 'Ihre Reise',
    navbarSecond: 'Bezahlung',
    navbarThird: 'Zollschein',
    customsDuty: 'Zollabgabe',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
    selectLanguage: 'Wählen Sie eine andere Sprache',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Bitte geben Sie die Menge ein',
    totalLargeAmount: 'Insgesamt grosse Mengen sind {{value}}.',
  }),
  qaFlow: makeQAFlowNSRecord({
    toOverview: 'Zur Übersicht',
    adult: 'Erwachsene',
    adultInfo: '17+ Jahre',
    adultCount: '{{value}} Erwachsener',
    adultCount_plural: '{{value}} Erwachsene',
    minor: 'Kinder & Jugendliche',
    minorInfo: 'unter 17 Jahre',
    minorCount: '{{value}} Kind (unter 17 Jahre)',
    minorCount_plural: '{{value}} Kinder (unter 17 Jahre)',
  }),
  modal: makeModalNSRecord({
    confirmPicker: '{{value}} übernehmen',
    standardCategoryPicker: 'Standardmengen',
    individualCategoryPicker: 'Genaue Mengen',
  }),
});
