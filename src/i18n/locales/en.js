// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeQAFlowNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeMainCategoriesNSRecord,
  makeMainCategoriesInputNSRecord,
  makeQuantityInputNSRecord,
  makePeopleInputNSRecord,
  makePaymentNSRecord,
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
    Meds: 'Medicine',
    Books: 'Books',
    Magazines: 'Magazines',
    Flowers: 'Flowers',
    AnimalFeed: 'Animal Feed',
    Fertilizer: 'Fertilizer',
    Other: 'Other',
  }),
  mainCategories: makeMainCategoriesNSRecord({
    Foods: 'Foods',
    Alcohol: `Alcohol`,
    TobaccoProducts: 'Tobacco Products',
    OtherGoods: 'Other Goods',
  }),
  general: makeGeneralNSRecord({
    declareGoods: 'Declare',
    pleaseSelect: 'Please select',
    receipts: 'Receipts',
    guideline: 'Guideline',
    information: 'Information',
    navbarFirst: 'Journey',
    navbarSecond: 'Payment',
    navbarThird: 'Receipt',
    customsDuty: 'Customs duty',
    goodCategories: 'Good Categories',
    confirm: 'Confirm',
    toPayment: 'Make Payment',
  }),
  onBoarding: makeOnBoardingNSRecord({
    welcome: 'Welcome to',
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
    confirmationVat: 'I hereby confirm to accept the general vat rate of ',
    confirmationVat2: 'in this application.',
    vatInformation: 'Further information',
  }),
  peopleInput: makePeopleInputNSRecord({
    peopleInputQuestion:
      'How many travelers should be included in this customs declaration?',
  }),
  mainCategoriesInput: makeMainCategoriesInputNSRecord({
    mainCategoriesQuestion: 'What types of goods are you carrying?',
  }),
  quantityInput: makeQuantityInputNSRecord({
    quantityInput: 'Quantity input',
  }),
  qaFlow: makeQAFlowNSRecord({
    declareGoods: 'Declare Goods',
    toOverview: 'To Overview',
    adult: 'Adults',
    adultInfo: '17+ years',
    adultCount: '{{value}} Adult',
    adultCount_plural: '{{value}} Adults',
    minor: 'Kids & Teens',
    minorInfo: 'under 17 years',
    minorCount: '{{value}} Minor (below 17)',
    minorCount_plural: '{{value}} Minors (below 17)',
    validateNoAdultsTitle: 'No Adults',
    validateNoAdultsSubtitle: 'Please ensure legitimacy.',
    validateGenericYes: 'Yes',
    validateGenericNo: 'No',
    validateMainCategoryRemoveTitle:
      'Are you sure you want to remove this main category?',
    validateMainCategoryRemoveSubtitle:
      'Currently, some subcategories contain quantities: {{value}}',
    validateMainCategoryRemoveYes: 'Yes, remove resp. quantities',
  }),
  modal: makeModalNSRecord({
    confirmPicker: 'Confirm {{value}}',
    standardCategoryPicker: 'Standard',
    individualCategoryPicker: 'Exact',
    currencyPickerTitle: 'Enter item with more than CHF {{value}}',
    currencyPickerSubTitle:
      'Record the net value of the item in its original currency:',
    currencyPickerRate: 'Rate of',
    currencyPickerInvalidInput: 'Invalid/empty input',
    savedBasketDoYoWantToContinue: 'I18N',
    savedBasketTotalCost: 'I18N {{value}}',
    savedBasketNewShoppingCart: 'I18N',
  }),
  payment: makePaymentNSRecord({
    overViewTitle: 'Summary of your Declaration',
    dutyColumn: 'Customs Duty in CHF',
    sumText: 'Sum (CHF)',
  }),
});
