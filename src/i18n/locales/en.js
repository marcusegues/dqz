// @flow
import type { Locale } from '../types/locale';

export const en: Locale = {
  categories: {
    Meat: 'Meat and meat products',
    Butter: 'Butter and cream',
    Oils: 'Oils/fats/margarine',
    OtherFood: 'Other food and non-alcoholic beverages',
    AlcSoft: 'Alcohol content of 0.5% to 18% AB',
    AlcHard: 'Alcohol content of more than 18% ABV',
    Cigarettes: 'Cigarettes and cigars',
    Tobacco: 'Other tobacco products',
    Meds: 'Medications',
    Books: 'Books',
    Magazines: 'Magazines',
    Flowers: 'Cut flowers and plants',
    AnimalFeed: 'Animal feed',
    Fertilizer: 'Fertilisers',
    Other: 'Other Goods',
  },
  mainCategories: {
    Meat: 'Meat and meat products',
    Butter: 'Butter and cream',
    Oil: 'Oils/fats/margarine',
    Alcohol: `Alcohol`,
    TobaccoProducts: 'Tobacco Products',
    OtherGoods: 'Other Goods',
  },
  general: {
    declareGoods: 'Declare goods',
    pleaseSelect: 'Please select',
    receipts: 'Swiss Customs receipts',
    guideline: 'Clearing Swiss Customs without delay',
    information: 'Information about using the app',
    navbarFirst: 'Your trip',
    navbarSecond: 'Payment',
    navbarThird: 'Receipt',
    customsDuty: 'Customs duty',
    customsVat: 'VAT',
    goodCategories: 'Categories of goods',
    confirm: 'Confirm',
    toPayment: 'To payment',
    buttonContinue: 'Continue',
    buttonBack: 'Back',
  },
  snackBar: {
    limitExceeded:
      'Goods value for the app exceeded. Please report your goods at the border crossing',
    showBorder: 'Show border crossing',
  },
  onBoarding: {
    welcome: 'Welcome to',
    onBoardingMessage:
      'We have set your language based on your current system settings.',
    selectLanguage: 'Select another language',
    confirmationVat: 'I hereby confirm that I accept the single VAT rate of',
    confirmationVat2: 'when declaring goods.',
    vatInformation: 'Further information',
  },
  peopleInput: {
    peopleInputQuestion:
      'How many travelers should be considered for customs clearance?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Which goods do you want to declare?',
  },
  quantityInput: {
    quantityInput: 'Enter quantity',
  },
  amountInput: {
    amountInput: 'Please enter here the value of all transported goods.',
    amountInputLargeItem:
      'Are you carrying individual items with a value of over CHF {{value}}?',
    amountInputLargeItemGreyBox:
      'Please enter here each item which is worth more than CHF 300.00.',
    amountInputAddItem: 'Add value',
    amountInputAddItemLarge: 'Add item',
    amountInputEnterValue: 'Enter the value without foreign VAT (net value).',
    currentTotalValue: 'Current total value:',
    lastExchangeRate:
      'Based on the last available exchange rate, which is updated when paying.',
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
    currencyPickerNoOffsettingInput: 'No offsetting amount',
    currencyPickerTooSmallLargeAmount: 'Amount too small',
    savedBasketDoYoWantToContinue:
      'Do you want to continue with an existing basket or start a new one',
    savedBasketTotalCost: 'Total cost: CHF {{value}}',
    savedBasketNewShoppingCart: 'New Configuration',
    closeModalText: 'Close',
    timePickerTitle: 'Select the period of entry',
    timePickerSubTitle: 'When would you like to cross the border?',
    timePickerRegistrationValidUntil:
      'Please be sure to enter with this registration within two hours. This registration is valid until {{date}} at {{time}}.',
    timePickerTakeOverThePeriod: 'Take over the period',
    timePickerTimePrefix: '',
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
    allReceiptsNavigationHeaderTitle: 'Swiss Customs Receipts',
    allReceiptsCurrentReceipt: 'Current receipt:',
    allReceiptsOlderReceipts: 'Older receipts:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'from {{value}}',
    entryTime: 'Time of entry',
    chooseOtherEntryTime: 'Choose new time of entry',
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
    allowancesFoodAlcoholTobacco: 'Allowances: food, alcohol and tobacco',
    allowancesFoodAlcoholTobaccoText:
      'Introduce goods for your private use or as a gift these are duty-free. Exceptions are so-called sensitive goods,for you for agricultural or health-political reasons from one have to pay a certain amount of duty (see table below). The Allowances are per person per day.',
    prohibitions: 'Prohibitions and Restrictions',
    prohibitionsSubText:
      'Far behind, far from the lands of vocabulary and consonants live the blind texts.',
  },
  appInformation: {
    appInfoTitle: 'About the app',
    leftTabText: 'Imprint',
    rightTabText: 'Development',
    publisher: 'Publisher',
    customsAdministrationAddressTitle: 'Federal Customs Administration',
    contact: 'Contact',
    customsInfoCenter:
      'Customs Information Center\n058 467 15 15\nzollauskunft@ezv.admin.ch',
    reachability: 'Reachability:',
    workingHours: 'Monday – Friday, 8.00 – 11.30 and 13.30 to 17.00',
    generalCustomsDirectorate:
      'General Directorate of Customs\nMonbijoustrasse 40\n' +
      '3003 Bern\n' +
      'http://www.ezv.admin.ch',
    designAndDevelopment: 'Design & Development',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Disclaimer',
    disclaimerText:
      'The same old lyre everywhere. The layout is finished, the text is slow in coming. So that the layout does not stand naked in the room and looks small and empty, I jump in: the blind text. Created exactly for this purpose, always in the shadow of my big brother "Lorem Ipsum," I rejoice every time you read a few lines. Because eating est percipi - being is to be perceived. And because you\'re kind enough to accompany me for a few more sentences, I\'d like to take this opportunity to serve you not just as a filler, but to point out something that deserves to be recognized as well: web standards.',
  },
};
