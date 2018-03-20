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
  note: string,
  underConstruction: string,
};

type SnackBarTranslations = {
  limitExceeded: string,
  limitExceededRightText: string,
  offline: string,
  paymentAborted: string,
  paymentFailed: string,
  paymentAbortedRightText: string,
  paymentFailedRightText: string,
  showBorder: string,
};

type OnBoardingTranslations = {
  welcome: string,
  onBoardingMessage: string,
  selectLanguage: string,
  currentLanguageMessage: string,
  confirmationVat: string,
  confirmationVat2: string,
  vatInformation: string,
  skipThisStep: string,
};

type PeopleInputTranslations = {
  peopleInputQuestion: string,
};

type MainCategoriesInputTranslations = {
  mainCategoriesQuestion: string,
  mainCategoriesNotYetAnswered: string,
};

type QuantityInputTranslations = {
  quantityInput: string,
  recordedOn: string,
  addQuantities: string,
  enterQuantities: string,
  enterQuantity: string,
  enterQuantitiesButter: string,
    enterQuantitiesCigarettes: string,
    enterQuantitiesTobacco: string,
  enterQuantitiesAlcohol: string,
    enterQuantitiesOil: string,
    enterQuantitiesMeat: string,
  standardInputSubText: string,
    meatInput: string,
    butterInput: string,
    oilInput: string,
    alcSoftInput: string,
    alcHardInput: string,
    cigarettesInput: string,
    tobaccoInput: string,
};

type AmountInputTranslations = {
  amountInput: string,
  amountInputLargeItem: string,
  amountInputAddItem: string,
  amountInputEnterValueBeginning: string,
  amountInputEnterValueBoldText: string,
  amountInputEnterValueEnd: string,
  amountInputLargeItemGreyBox: string,
  amountInputAddItemLarge: string,
  currentTotalValue: string,
  lastExchangeRate: string,
};

type PaymentTranslations = {
  overViewTitle: string,
  dutyColumn: string,
  sumText: string,
  entryInfo: string,
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
  validateNoPeopleTitle: string,
  validateNoPeopleSubtitle: string,
  validateGenericYes: string,
  validateGenericNo: string,
  validateGenericOk: string,
  validateMainCategoryRemoveTitle: string,
  validateMainCategoryRemoveSubtitle: string,
  validateMainCategoryRemoveYes: string,
  itemsGreaterThan300CHF: string,
  toPayment: string,
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
  timePickerTitle: string,
  timePickerSubTitle: string,
  timePickerRegistrationValidUntilSameDay: string,
  timePickerRegistrationValidUntilDifferentDay: string,
  timePickerTakeOverThePeriod: string,
  closeModalText: string,
  timePickerTimePrefix: string,
  savedBasket: string,
};

type CustomsProceduresTranslation = {
  customsProceduresMainText: string,
  customsProceduresText1: string,
  customsProceduresText2: string,
  customsProceduresText3: string,
  customsProceduresText4: string,
  customsProceduresText5: string,
  customsProceduresText6: string,
  customsProceduresText7: string,
  customsProceduresText8: string,
  customsProceduresText9: string,
  customsProceduresText10: string,
  customsProceduresText11: string,
  customsProceduresText12: string,
  customsProceduresText13: string,
  customsProceduresText14: string,
  customsProceduresText15: string,
  customsProceduresText16: string,
  customsProceduresText17: string,
  customsProceduresText18: string,
  customsProceduresText19: string,
  customsProceduresText20: string,
  customsProceduresText21: string,
  customsProceduresExtLink1: string,
};

type TravelDocumentsTranslations = {
  travelDocumentsMainText: string,
  travelDocumentsText1: string,
  travelDocumentsText2: string,
};

type VatAllowanceTranslations = {
  vatAllowanceMainText: string,
  vatAllowanceText1: string,
  vatAllowanceText2: string,
  vatAllowanceText3: string,
  vatAllowanceText4: string,
  vatAllowanceText5: string,
  vatAllowanceText6: string,
  vatAllowanceText7: string,
  vatAllowanceText8: string,
  vatAllowanceText9: string,
  vatAllowanceText10: string,
  vatAllowanceText11: string,
  vatAllowanceText12: string,
  vatAllowanceText13: string,
  vatAllowanceText14: string,
  vatAllowanceText15: string,
  vatAllowanceText16: string,
  vatAllowanceText17: string,
  vatAllowanceText18: string,
  vatAllowanceText19: string,
  vatAllowanceText20: string,
  vatAllowanceText21: string,
  vatAllowanceText22: string,
  vatAllowanceText23: string,
  vatAllowanceText24: string,
  vatAllowanceText25: string,
  vatAllowanceText26: string,
  vatAllowanceText27: string,
  vatAllowanceText28: string,
  vatAllowanceText29: string,
  vatAllowanceText30: string,
  vatAllowanceText31: string,
  vatAllowanceText32: string,
  vatAllowanceText33: string,
  vatAllowanceText34: string,
  vatAllowanceText35: string,
  vatAllowanceText36: string,
  vatAllowanceText37: string,
  vatAllowanceText38: string,
  vatAllowanceText39: string,
  vatAllowanceText40: string,
  vatAllowanceText41: string,
  vatAllowanceText42: string,
  vatAllowanceText43: string,
  vatAllowanceText44: string,
};

type DutyAllowanceTranslations = {
  dutyAllowanceMainText: string,
  dutyAllowanceText1: string,
  dutyAllowanceText2: string,
  dutyAllowanceText3: string,
  dutyAllowanceText4: string,
  dutyAllowanceText5: string,
  dutyAllowanceText6: string,
  dutyAllowanceText7: string,
  dutyAllowanceText8: string,
  dutyAllowanceText9: string,
  dutyAllowanceText10: string,
  dutyAllowanceText11: string,
  dutyAllowanceText12: string,
  dutyAllowanceText13: string,
  dutyAllowanceText14: string,
  dutyAllowanceText15: string,
  dutyAllowanceText16: string,
  dutyAllowanceText17: string,
  dutyAllowanceText18: string,
  dutyAllowanceText19: string,
  dutyAllowanceText20: string,
  dutyAllowanceText21: string,
  dutyAllowanceText22: string,
  dutyAllowanceText23: string,
  dutyAllowanceText24: string,
  dutyAllowanceText25: string,
  dutyAllowanceText26: string,
  dutyAllowanceText27: string,
  dutyAllowanceText28: string,
  dutyAllowanceText29: string,
  dutyAllowanceText30: string,
  dutyAllowanceText31: string,
  dutyAllowanceText32: string,
  dutyAllowanceText33: string,
  dutyAllowanceText34: string,
  dutyAllowanceText35: string,
  dutyAllowanceText35a: string,
  dutyAllowanceText36: string,
  dutyAllowanceText37: string,
  dutyAllowanceText38: string,
  dutyAllowanceText39: string,
  dutyAllowanceText40: string,
  dutyAllowanceText41: string,
  dutyAllowanceText42: string,
  dutyAllowanceText43: string,
  dutyAllowanceText44: string,
  dutyAllowanceText45: string,
  dutyAllowanceText46: string,
  dutyAllowanceText47: string,
  dutyAllowanceText48: string,
};

type ForeignVatTranslations = {
  foreignVatMainText: string,
  foreignVatText1: string,
  foreignVatText2: string,
  foreignVatText3: string,
  foreignVatText4: string,
  foreignVatText5: string,
};

type PersonalEffectsTranslations = {
  personalEffectsMainText: string,
  personalEffectsText1: string,
  personalEffectsText2: string,
  personalEffectsText3: string,
  personalEffectsText4: string,
  personalEffectsText5: string,
  personalEffectsText6: string,
  personalEffectsText7: string,
};

type AnimalsTranslations = {
  animalsMainText: string,
  animalsText1: string,
  animalsText2: string,
  animalsText3: string,
  animalsText4: string,
};

type PlantsTranslations = {
  plantsMainText: string,
  plantsText1: string,
  plantsText2: string,
  plantsText3: string,
  plantsText4: string,
  plantsText5: string,
  plantsText6: string,
  plantsText7: string,
  plantsText8: string,
  plantsText9: string,
  plantsText10: string,
  plantsText11: string,
  plantsText12: string,
  plantsText13: string,
  plantsText14: string,
  plantsText15: string,
  plantsText16: string,
  plantsText17: string,
  plantsText18: string,
  plantsText19: string,
  plantsText20: string,
  plantsText21: string,
  plantsText22: string,
  plantsText23: string,
  plantsText24: string,
  plantsText25: string,
  plantsText26: string,
  plantsText27: string,
  plantsText28: string,
  plantsText29: string,
  plantsText30: string,
  plantsText31: string,
};

type SouvenirsAndSpeciesProtectionTranslations = {
  souvenirsAndSpeciesProtectionMainText: string,
  souvenirsAndSpeciesProtectionText1: string,
  souvenirsAndSpeciesProtectionText2: string,
  souvenirsAndSpeciesProtectionText3: string,
  souvenirsAndSpeciesProtectionText4: string,
  souvenirsAndSpeciesProtectionText5: string,
  souvenirsAndSpeciesProtectionText6: string,
  souvenirsAndSpeciesProtectionText7: string,
  souvenirsAndSpeciesProtectionText8: string,
};

type HighwayVignetteTranslations = {
  highwayVignetteMainText: string,
  highwayVignetteText1: string,
  highwayVignetteText2: string,
  highwayVignetteText3: string,
  highwayVignetteText4: string,
  highwayVignetteText5: string,
  highwayVignetteText6: string,
  highwayVignetteText7: string,
  highwayVignetteText8: string,
  highwayVignetteText9: string,
  highwayVignetteText10: string,
};

type RoadTaxTranslations = {
  roadTaxMainText: string,
  roadTaxText1: string,
  roadTaxText2: string,
  roadTaxText3: string,
  roadTaxText4: string,
  roadTaxText5: string,
  roadTaxText6: string,
  roadTaxText7: string,
  roadTaxText8: string,
  roadTaxText9: string,
  roadTaxText10: string,
  roadTaxText11: string,
  roadTaxText12: string,
  roadTaxText13: string,
  roadTaxText14: string,
  roadTaxText15: string,
  roadTaxCategory1: string,
  roadTaxCategory2: string,
  roadTaxCategory3: string,
  roadTaxCategory4: string,
  roadTaxCategory5: string,
  costPerDay: string,
  commonRates: string,
  vehicleTariffs: string,
  per100kgTrailerLoad: string,
  till: string,
};

type FuelAndRepairsTranslations = {
  fuelAndRepairsMainText: string,
  fuelAndRepairsText1: string,
  fuelAndRepairsText2: string,
  fuelAndRepairsText3: string,
  fuelAndRepairsText4: string,
  fuelAndRepairsText5: string,
};

type ForgeryTranslations = {
  forgeryMainText: string,
  forgeryText1: string,
  forgeryText2: string,
  forgeryText3: string,
  forgeryText4: string,
  forgeryText5: string,
  forgeryText6: string,
};

type CashTranslations = {
  cashMainText: string,
  cashText1: string,
  cashText2: string,
};

type FoodTranslations = {
  foodMainText: string,
  foodText1: string,
  foodText2: string,
  foodText3: string,
  foodText4: string,
  foodText5: string,
  foodText6: string,
  foodText7: string,
  foodText8: string,
  foodText9: string,
};

type AuthorisationRequirementsTranslations = {
  authorisationRequirementsMainText: string,
  authorisationRequirementsText1: string,
  authorisationRequirementsText2: string,
  authorisationRequirementsText3: string,
  authorisationRequirementsText4: string,
  authorisationRequirementsText5: string,
  authorisationRequirementsText6: string,
  authorisationRequirementsText7: string,
  authorisationRequirementsText8: string,
  authorisationRequirementsText9: string,
  authorisationRequirementsText10: string,
  authorisationRequirementsText11: string,
};

type EntryByTrainTranslations = {
  entryByTrainMainText: string,
  entryByTrainText1: string,
  entryByTrainText2: string,
  entryByTrainText3: string,
  entryByTrainText4: string,
  entryByTrainText5: string,
  entryByTrainText6: string,
  entryByTrainText7: string,
  entryByTrainText8: string,
  entryByTrainText9: string,
};

type PurchasesOnlineOfflineTranslations = {
  purchasesOnlineOfflineMainText: string,
  purchasesOnlineOfflineText1: string,
  purchasesOnlineOfflineText2: string,
  purchasesOnlineOfflineText3: string,
  purchasesOnlineOfflineText4: string,
  purchasesOnlineOfflineText5: string,
  purchasesOnlineOfflineText6: string,
  purchasesOnlineOfflineText7: string,
  purchasesOnlineOfflineText8: string,
  purchasesOnlineOfflineText9: string,
  purchasesOnlineOfflineText10: string,
  purchasesOnlineOfflineText11: string,
  purchasesOnlineOfflineText12: string,
  purchasesOnlineOfflineText13: string,
  purchasesOnlineOfflineText14: string,
  purchasesOnlineOfflineText15: string,
  purchasesOnlineOfflineText16: string,
  purchasesOnlineOfflineText17: string,
};

type InformationTranslations = {
  informationTitle: string,
  informationSubCategoryTitle: string,
  customsProceduresMainText: string,
  travelDocumentsMainText: string,
  declarationMainText: string,
  animalsAndPlantsMainText: string,
  vehiclesMainText: string,
  entryByTrainMainText: string,
  prohibitionsAndRestrictionsMainText: string,
  highwayVignetteMainText: string,
  roadTaxMainText: string,
  fuelAndRepairsMainText: string,
  forgeryMainText: string,
  cashMainText: string,
  foodMainText: string,
  authorisationRequirementsMainText: string,
  purchasesOnlineOfflineMainText: string,
  borderCrossingsMainText: string,
};

type ReceiptTranslations = {
  dutyAndVat: string,
  travellers: string,
  paidOn: string,
  transactionId: string,
  receiptValidFrom: string,
  receiptValidFromDate: string,
  receiptValidOn: string,
  receiptValidOnDate: string,
  sumText: string,
  vatColumn: string,
  normalAmountsTitle: string,
  normalAmountsSubtitle: string,
  largeAmountsTitle: string,
  largeAmountsSubtitle: string,
  receiptStorageNotification: string,
  allReceiptsNavigationHeaderTitle: string,
  allReceiptsCurrentReceipt: string,
  allReceiptsOlderReceipts: string,
  allReceiptsSumInFranks: string,
  allReceiptsDate: string,
  entryTime: string,
  chooseOtherEntryTime: string,
  until: string,
};

type AppInformationTranslations = {
  leftTabText: string,
  rightTabText: string,
  publisher: string,
  customsAdministrationAddressTitle: string,
  contact: string,
  customsInfoCenter: string,
  generalCustomsDirectorate: string,
  designAndDevelopment: string,
  ambriteAddress: string,
  disclaimerTitle: string,
  disclaimerText: string,
  toContactForm: string,
};

type LegalNoticeInformationTranslations = {
  navigationHeaderTitle: string,
  conditions: string,
  importantSoon: string,
  importantSoonText1: string,
  importantSoonText2: string,
  importantSoonText3: string,
  importantSoonText4: string,
  importantSoonText5: string,
  importantSoonText6: string,
  importantSoonText7: string,
  importantSoonText8: string,
  importantSoonText9: string,
  importantSoonBoldText1: string,

  howToDeclareYourGoods: string,
  howToDeclareYourGoodsText1: string,
  howToDeclareYourGoodsText2: string,
  howToDeclareYourGoodsText3: string,
  howToDeclareYourGoodsText4: string,
  howToDeclareYourGoodsText5: string,
  howToDeclareYourGoodsText6: string,
  howToDeclareYourGoodsText7: string,

  legal: string,
  legalText1: string,
  legalText2: string,
  legalText3: string,
  legalText4: string,
  legalText5: string,
  legalText6: string,
  legalText7: string,

  specialCases: string,
  specialCasesText1: string,
  specialCasesText2: string,
  specialCasesText3: string,
  specialCasesText4: string,
  specialCasesText5: string,
  specialCasesText6: string,
  specialCasesText7: string,
  specialCasesText8: string,
  specialCasesText9: string,
  specialCasesText10: string,
  specialCasesText11: string,
  specialCasesText12: string,

  privacyAndLiability: string,
  dataProtection: string,
  dataProtectionText1: string,
  dataProtectionText2: string,
  dataProtectionText3: string,
  dataProtectionText4: string,
  dataProtectionText5: string,

  liability: string,
  liabilityText1: string,
  liabilityText2: string,

  referencesAndLinks: string,
  referencesAndLinksText1: string,
  referencesAndLinksText2: string,

  copyright: string,
  copyrightText1: string,
  copyrightText2: string,
  copyrightText3: string,
};

type OverviewTranslations = {
  declared: string,
  dutyFree: string,
  details: string,
};

type LegalNoticeModalTranslations = {
  importantNote: string,
  vatRateInfo: string,
  vatRateInfoText1: string,
  vatRateInfoText2: string,
  vatRateInfoText3: string,
  vatRateInfoText4: string,
  termsOfService: string,
  acceptance: string,
  confirm: string,
  abort: string,
};
type FurtherInformationModalTranslations = {
  furtherInformation: string,
  acceptance: string,
};

type UpdateTheAppTranslations = {
  title: string,
  subtitle: string,
  buttonTextAndroid: string,
  buttonTextIos: string,
};

type UnitsTranslations = {
  kilo: string,
  kiloOrLiter: string,
  liter: string,
  unit: string,
  gram: string,
};

type AcceptRateModalTranslations = {
  modalTitle: string,
  modalSubTitle: string,
  confirm: string,
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
  snackBar: SnackBarTranslations,
  peopleInput: PeopleInputTranslations,
  mainCategoriesInput: MainCategoriesInputTranslations,
  quantityInput: QuantityInputTranslations,
  amountInput: AmountInputTranslations,
  qaFlow: QAFlowTranslations,
  modal: ModalTranslations,
  payment: PaymentTranslations,
  receipt: ReceiptTranslations,
  information: InformationTranslations,
  customsProcedures: CustomsProceduresTranslation,
  travelDocuments: TravelDocumentsTranslations,
  vatAllowance: VatAllowanceTranslations,
  dutyAllowance: DutyAllowanceTranslations,
  personalEffects: PersonalEffectsTranslations,
  foreignVat: ForeignVatTranslations,
  animals: AnimalsTranslations,
  plants: PlantsTranslations,
  souvenirsAndSpeciesProtection: SouvenirsAndSpeciesProtectionTranslations,
  highwayVignette: HighwayVignetteTranslations,
  roadTax: RoadTaxTranslations,
  fuelAndRepairs: FuelAndRepairsTranslations,
  entryByTrain: EntryByTrainTranslations,
  forgery: ForgeryTranslations,
  cash: CashTranslations,
  food: FoodTranslations,
  authorisationRequirements: AuthorisationRequirementsTranslations,
  appInformation: AppInformationTranslations,
  legalNoticeInformation: LegalNoticeInformationTranslations,
  overview: OverviewTranslations,
  legalNoticeModal: LegalNoticeModalTranslations,
  furtherInformationModal: FurtherInformationModalTranslations,
  units: UnitsTranslations,
  purchasesOnlineOffline: PurchasesOnlineOfflineTranslations,
  updateTheApp: UpdateTheAppTranslations,
  acceptRateModal: AcceptRateModalTranslations,
};
