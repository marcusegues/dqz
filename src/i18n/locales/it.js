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
  makeInformationNSRecord,
  makeAmountInputNSRecord,
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
  amountInput: makeAmountInputNSRecord({}),
  qaFlow: makeQAFlowNSRecord({}),
  modal: makeModalNSRecord({
    confirmPicker: '💰 {{value}}',
    standardCategoryPicker: '🏟️',
    individualCategoryPicker: '🔀',
    currencyPickerTitle: 'Raccogli oggetti con oltre CHF {{value}}',
    currencyPickerSubTitle:
      "Registra il valore netto dell'articolo nella sua valuta originale:",
    currencyPickerRate: 'i18n',
    savedBasketDoYoWantToContinue: '🔀',
    savedBasketTotalCost: '🏟️ {{value}}',
    savedBasketNewShoppingCart: '🔀',
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

  information: makeInformationNSRecord({
    proceedinAtTheCustoms: 'I18N',
    proceedinAtTheCustomsSubText: 'I18N',
    travelDocuments: 'I18N',
    travelDocumentsSubText: 'I18N',
    haveGoodsWithMe: 'I18N',
    haveGoodsWithMeSubText: 'I18N',
    haveAnimalsOrPlantsWithMe: 'I18N',
    haveAnimalsOrPlantsWithMeSubText: 'I18N',
    travelingWithVehicle: 'I18N',
    travelingWithVehicleSubText: 'I18N',
    entryByTrain: 'I18N',
    entryByTrainSubText: 'I18N',
  }),
});
