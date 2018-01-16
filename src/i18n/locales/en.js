// @flow
import type { Locale } from '../types/locale';

export const en: Locale = {
  categories: {
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
  },
  mainCategories: {
    Foods: 'Foods',
    Alcohol: `Alcohol`,
    TobaccoProducts: 'Tobacco Products',
    OtherGoods: 'Other Goods',
  },
  general: {
    declareGoods: 'Declare',
    pleaseSelect: 'Please select',
    receipts: 'Receipts',
    guideline: 'Guideline',
    information: 'Information',
    navbarFirst: 'Journey',
    navbarSecond: 'Payment',
    navbarThird: 'Receipt',
    customsDuty: 'Customs duty',
    customsVat: 'VAT',
    goodCategories: 'Good Categories',
    confirm: 'Confirm',
    toPayment: 'Make Payment',
    buttonContinue: 'Continue',
    buttonBack: 'Back',
  },
  onBoarding: {
    welcome: 'Welcome to',
    onBoardingMessage:
      'We’ve set your language based on your current system settings:',
    selectLanguage: 'Select a different language',
    confirmationVat: 'I hereby confirm to accept the general vat rate of ',
    confirmationVat2: 'in this application.',
    vatInformation: 'Further information',
  },
  peopleInput: {
    peopleInputQuestion:
      'How many travelers should be included in this customs declaration?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'What types of goods are you carrying?',
  },
  quantityInput: {
    quantityInput: 'Quantity input',
  },
  amountInput: {
    amountInput: 'Please enter here the value of all goods carried.',
    amountInputLargeItem: 'Amount Input (items larger than CHF {{value}})',
    amountInputMoreThan300Text:
      'Record here any item that is worth more than 300.00 CHF.',
    amountInputAddItem: 'Add value',
    amountInputEnterValue: 'Enter the value without foreign VAT (net value).',
    currentTotalValue: 'Current total value:',
  },
  qaFlow: {
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
  },
  modal: {
    confirmPicker: 'Confirm {{value}}',
    standardCategoryPicker: 'Standard',
    individualCategoryPicker: 'Exact',
    currencyPickerTitle: 'Enter item',
    currencyPickerLargeAmountTitle: 'Enter item with more than CHF {{value}}',
    currencyPickerSubTitle:
      'Record the net value of the item in its original currency:',
    currencyPickerRate: 'Rate of',
    currencyPickerInvalidInput: 'Invalid/empty input',
    savedBasketDoYoWantToContinue:
      'Do you want to continue with an existing basket or start a new one',
    savedBasketTotalCost: 'Total cost: CHF {{value}}',
    savedBasketNewShoppingCart: 'New Configuration',
  },
  payment: {
    overViewTitle: 'Summary of your Declaration',
    dutyColumn: 'Customs Duty in CHF',
    sumText: 'Sum (CHF)',
  },
  receipt: {
    dutyAndVat: 'Customs duty: {{duty}}  |  vat: {{vat}}',
    paidOn: 'Paid on {{date}} at {{time}}:',
    transactionId: 'Transaction-ID (SIX): {{value}}',
    receiptValidUntilText: 'This receipt is valid until:',
    receiptValidUntilTime: '{{date}} | {{time}}:',
    sumText: 'Sum: {{value}}',
    vatColumn: 'VAT in CHF:',
    amountsTitle: 'Total of all goods',
    amountsSubtitle: 'Sum of all receipts',
    receiptStorageNotification:
      'This receipt is stored for a year. As long as you can call the receipt at any time in the app.',
  },
  information: {
    informationTitle: 'Information',
    proceedinAtTheCustoms: 'Proceeding at the customs',
    proceedinAtTheCustomsSubText:
      'Far behind, behind the word mountains, far from the lands of vocabulary and consonants live the blind texts.',
    travelDocuments: 'Travel documents',
    travelDocumentsSubText:
      'Far behind, far from the lands of vocabulary and consonants live the blind texts.',
    haveGoodsWithMe: 'I have goods with me',
    haveGoodsWithMeSubText:
      'Far behind, behind the word mountains, far from the lands of vocabulary and consonants live the blind texts.',
    haveAnimalsOrPlantsWithMe: 'I have animals or plants with me.',
    haveAnimalsOrPlantsWithMeSubText: 'Far behind live the blind texts.',
    travelingWithVehicle: "I'm traveling with a vehicle",
    travelingWithVehicleSubText: 'Far behind live the blind texts.',
    entryByTrain: 'Entry by train',
    entryByTrainSubText:
      'Far behind, far from the lands of vocabulary and consonants live the blind texts.',
  },
};
