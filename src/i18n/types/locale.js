// @flow

export type Language = 'de' | 'fr' | 'en' | 'it';

type MainCategoriesTranslations = {
  Meat: string,
  Butter: string,
  Oil: string,
  Alcohol: string,
  TobaccoProducts: string,
  OtherGoods: string,
};

type CategoriesTranslations = {
  Meat: string,
  Butter: string,
  Oils: string,
  OtherFood: string,
  AlcSoft: string,
  AlcHard: string,
  Cigarettes: string,
  Tobacco: string,
  Meds: string,
  Books: string,
  Magazines: string,
  Flowers: string,
  AnimalFeed: string,
  Fertilizer: string,
  Other: string,
};

type GeneralTranslations = {
  declareGoods: string,
  pleaseSelect: string,
  guideline: string,
  receipts: string,
  information: string,
  navbarFirst: string,
  navbarSecond: string,
  navbarThird: string,
  customsDuty: string,
  customsVat: string,
  goodCategories: string,
  confirm: string,
  toPayment: string,
  buttonContinue: string,
  buttonBack: string,
};

type OnBoardingTranslations = {
  welcome: string,
  onBoardingMessage: string,
  selectLanguage: string,
  confirmationVat: string,
  confirmationVat2: string,
  vatInformation: string,
};

type PeopleInputTranslations = {
  peopleInputQuestion: string,
};

type MainCategoriesInputTranslations = {
  mainCategoriesQuestion: string,
};

type QuantityInputTranslations = {
  quantityInput: string,
};

type AmountInputTranslations = {
  amountInput: string,
  amountInputLargeItem: string,
  amountInputAddItem: string,
  amountInputEnterValue: string,
  amountInputLargeItemGreyBox: string,
  amountInputAddItemLarge: string,
  currentTotalValue: string,
  lastExchangeRate: string,
};

type PaymentTranslations = {
  overViewTitle: string,
  dutyColumn: string,
  sumText: string,
};

type QAFlowTranslations = {
  declareGoods: string,
  toOverview: string,
  adult: string,
  adultInfo: string,
  adultCount: string,
  adultCount_plural: string,
  minor: string,
  minorInfo: string,
  minorCount: string,
  minorCount_plural: string,
  validateNoAdultsTitle: string,
  validateNoAdultsSubtitle: string,
  validateGenericYes: string,
  validateGenericNo: string,
  validateMainCategoryRemoveTitle: string,
  validateMainCategoryRemoveSubtitle: string,
  validateMainCategoryRemoveYes: string,
};

type ModalTranslations = {
  confirmPicker: string,
  standardCategoryPicker: string,
  individualCategoryPicker: string,
  currencyPickerTitle: string,
  currencyPickerLargeAmountTitle: string,
  currencyPickerSubTitle: string,
  currencyPickerRate: string,
  currencyPickerInvalidInput: string,
  currencyPickerNoOffsettingInput: string,
  currencyPickerTooSmallLargeAmount: string,
  savedBasketDoYoWantToContinue: string,
  savedBasketTotalCost: string,
  savedBasketNewShoppingCart: string,
  timePickerTitle: 'string',
  timePickerSubTitle: 'string',
  timePickerRegistrationValidUntil: 'string',
  timePickerTakeOverThePeriod: 'string',
};

type InformationTranslations = {
  informationTitle: string,
  proceedinAtTheCustoms: string,
  proceedinAtTheCustomsSubText: string,
  travelDocuments: string,
  travelDocumentsSubText: string,
  haveGoodsWithMe: string,
  haveGoodsWithMeSubText: string,
  haveAnimalsOrPlantsWithMe: string,
  haveAnimalsOrPlantsWithMeSubText: string,
  travelingWithVehicle: string,
  travelingWithVehicleSubText: string,
  entryByTrain: string,
  entryByTrainSubText: string,
  allowancesFoodAlcoholTobacco: string,
  allowancesFoodAlcoholTobaccoText: string,
};

type ReceiptTranslations = {
  dutyAndVat: string,
  paidOn: string,
  transactionId: string,
  receiptValidUntilText: string,
  receiptValidUntilTime: string,
  sumText: string,
  vatColumn: string,
  amountsTitle: string,
  amountsSubtitle: string,
  receiptStorageNotification: string,
  allReceiptsNavigationHeaderTitle: string,
  allReceiptsCurrentReceipt: string,
  allReceiptsOlderReceipts: string,
  allReceiptsSumInFranks: string,
  allReceiptsDate: string,
};

type AppInformationTranslations = {
  leftTabText: string,
  rightTabText: string,
  publisher: string,
  customsAdministrationAddressTitle: string,
  contact: string,
  customsInfoCenter: string,
  reachability: string,
  workingHours: string,
  generalCustomsDirectorate: string,
  designAndDevelopment: string,
  ambriteAddress: string,
  disclaimerTitle: string,
  disclaimerText: string,
};

/**
 * The Locale type defines all the namespaces that we use in the translation
 * The namespaces are formed by the individual strings, respectively.
 */
export type Locale = {
  mainCategories: MainCategoriesTranslations,
  categories: CategoriesTranslations,
  onBoarding: OnBoardingTranslations,
  general: GeneralTranslations,
  peopleInput: PeopleInputTranslations,
  mainCategoriesInput: MainCategoriesInputTranslations,
  quantityInput: QuantityInputTranslations,
  amountInput: AmountInputTranslations,
  qaFlow: QAFlowTranslations,
  modal: ModalTranslations,
  payment: PaymentTranslations,
  receipt: ReceiptTranslations,
  information: InformationTranslations,
  appInformation: AppInformationTranslations,
};
