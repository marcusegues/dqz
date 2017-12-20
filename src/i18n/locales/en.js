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
} from '../types/locale';

export const en: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({
    Meat: 'Meat',
    Butter: 'Butter',
    Oils: 'Oils',
    OtherFood: 'Other Foods',
    AlcSoft: 'Alcohol <18%',
    AlcHard: 'Alcohol >18%',
    Cigarettes: 'Cigarettes',
    Tobacco: 'Tobacco',
    Med: 'Medicine',
    Books: 'Books',
    Magazines: 'Magazines',
    Flowers: 'Flowers',
    AnimalFeed: 'Animal Feed',
    Fertilizer: 'Fertilizer',
    Other: 'Other Goods',
  }),
  general: makeGeneralNSRecord({
    declareGoods: 'Declare',
    pleaseSelect: 'Please select',
    receipts: 'Receipts',
    guideline: 'Guideline.', // TODO: if I put "Guideline", the last "e" is not displayed... huh?
    information: 'Information',
    navbarFirst: 'Journey',
    navbarSecond: 'Payment',
    navbarThird: 'Receipt',
  }),
  onBoarding: makeOnBoardingNSRecord({
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
  }),
  largeAmountInput: makeLargeAmountInputNSRecord({
    pleaseInput: 'Please input the values',
    totalLargeAmount: 'Total value of large items is {{value}}.',
  }),
  qaFlow: makeQAFlowNSRecord({
    toOverview: 'To Overview',
    adult: 'Adults',
    adultInfo: '17+ years',
    adultCount: '{{value}} Adult',
    adultCount_plural: '{{value}} Adults',
    minor: 'Kids & Teens',
    minorInfo: 'under 17 years',
    minorCount: '{{value}} Minor (below 17)',
    minorCount_plural: '{{value}} Minors (below 17)',
  }),
  modal: makeModalNSRecord({
    confirmPicker: 'Confirm {{value}}',
    standardCategoryPicker: 'Standard',
    individualCategoryPicker: 'Exact',
  }),
});
