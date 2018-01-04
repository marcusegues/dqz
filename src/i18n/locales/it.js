// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeQAFlowNSRecord,
  makeMainCategoriesNSRecord,
  makeMainCategoriesInputNSRecord,
  makeQuantityInputNSRecord,
  makePeopleInputNSRecord,
  makePaymentNSRecord,
  makeReceiptNSRecord,
} from '../types/locale';

export const it: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({}),
  mainCategories: makeMainCategoriesNSRecord({}),
  general: makeGeneralNSRecord({
    declareGoods: '🛃️',
    pleaseSelect: '',
    receipts: '🦄',
    guideline: '😸',
    information: '🏎',
    navbarFirst: '✈️',
    navbarSecond: '💸',
    navbarThird: '📇',
  }),
  onBoarding: makeOnBoardingNSRecord({
    welcome: 'Benvenuto a',
    onBoardingMessage:
      'Abbiamo impostato la tua lingua in base alle tue attuali impostazioni di sistema',
    selectLanguage: 'Seleziona una lingua diversa',
  }),
  peopleInput: makePeopleInputNSRecord({}),
  mainCategoriesInput: makeMainCategoriesInputNSRecord({}),
  quantityInput: makeQuantityInputNSRecord({}),
  qaFlow: makeQAFlowNSRecord({}),
  modal: makeModalNSRecord({
    confirmPicker: '💰 {{value}}',
    standardCategoryPicker: '🏟️',
    individualCategoryPicker: '🔀',
    currencyPickerTitle: 'Raccogli oggetti con oltre CHF {{value}}',
    currencyPickerSubTitle:
      "Registra il valore netto dell'articolo nella sua valuta originale:",
    currencyPickerRate: 'i18n',
  }),
  payment: makePaymentNSRecord({}),

  receipt: makeReceiptNSRecord({
    dutyAndVat: '🏂: {{duty}}  |  🏂: {{vat}}',
    paidOn: '🏂 {{date}} 🏂 {{time}} 🏂:',
    transactionId: '🏂: {{value}}',
    receiptValidUntilText: '🏂',
    receiptValidUntilTime: '{{date}} | {{time}} 🏂',
    sumText: '🏂: {{value}}',
    vatColumn: '🏂:',
    receiptStorageNotification: '🏂.',
  }),
});
