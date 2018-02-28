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
    note: 'Note',
    underConstruction: 'Under construction',
  },
  snackBar: {
    limitExceeded:
      'Declaration value limit exceeded. Please report your goods at the border crossing',
    offline: 'You are offline. Please check your connection.',
    showBorder: 'Show border crossing',
  },
  onBoarding: {
    welcome: 'Welcome to',
    onBoardingMessage:
      'We have set your language based on your current system settings.',
    currentLanguageMessage: 'Your currently selected language is',
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
    mainCategoriesNotYetAnswered: 'Main categories: need to be answered',
  },
  quantityInput: {
    quantityInput: 'Enter quantity',
    recordedOn: 'recorded on {{value}}',
    addQuantities: 'Add quantities',
    enterQuantities: 'Enter the quantities of all {{value}} here',
    enterQuantity: 'Enter quantity',
    enterQuantitiesButter: 'Enter the quantities of all {{value}} here',
    enterQuantitiesAlcohol: 'Enter the quantities of all {{value}} here',
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
      'Do you want to continue with an existing basket or start a new one?',
    savedBasketTotalCost: 'Total cost: CHF {{value}}',
    savedBasketNewShoppingCart: 'New basket',
    closeModalText: 'Close',
    timePickerTitle: 'Select the period of entry',
    timePickerSubTitle: 'When would you like to cross the border?',

    timePickerRegistrationValidUntilSameDay:
      'Please be sure to enter with this registration within two hours. This registration is valid on {{date}} from {{startTime}} to {{endTime}}.',
    timePickerRegistrationValidUntilDifferentDay:
      'Please be sure to enter with this registration within two hours. This registration is valid from {{startDate}} at {{startTime}} to {{endDate}} at {{endTime}}.',
    timePickerTakeOverThePeriod: 'Take over the period',
    timePickerTimePrefix: '',
    recordTheAmountOfMeat: 'Record the amount of meat you carry with you:',
    recordTheAmountOfTobacco: 'Record the amount of tobacco you carry:',
    savedBasket: 'Current basket',
  },
  payment: {
    overViewTitle: 'Summary of your Declaration',
    dutyColumn: 'Customs Duty in CHF',
    sumText: 'Sum (CHF)',
    entryInfo:
      'You can only cross the border within the specified period with the goods registered here.',
  },
  receipt: {
    dutyAndVat: 'Customs duty: {{duty}}  |  vat: {{vat}}',
    paidOn: 'Paid on {{date}} at {{time}}:',
    transactionId: 'Transaction-ID (SIX): {{value}}',
    receiptValidFrom: 'This receipt is valid from:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} to {{endDate}} | {{endTime}}',
    receiptValidOn: 'This receipt is valid on',
    receiptValidOnDate: '{{date}} from {{startTime}} to {{endTime}}',
    sumText: 'Sum: CHF {{value}}',
    vatColumn: 'VAT in CHF:',
    normalAmountsTitle: 'Total of all goods',
    normalAmountsSubtitle: 'Sum of all receipts',
    largeAmountsTitle: 'Single goods',
    largeAmountsSubtitle: 'Value over CHF 300',
    receiptStorageNotification:
      'This receipt is stored for a year. As long as you can call the receipt at any time in the app.',
    allReceiptsNavigationHeaderTitle: 'Swiss Customs Receipts',
    allReceiptsCurrentReceipt: 'Current receipt:',
    allReceiptsOlderReceipts: 'Older receipts:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'from {{value}}',
    entryTime: 'Time of entry',
    chooseOtherEntryTime: 'Choose new time of entry',
    until: 'until',
  },

  customsProcedures: {
    customsProceduresMainText: '',
    customsProceduresSubText: '',
    customsProceduresText1: '',
    customsProceduresText2: '',
    customsProceduresText3: '',
    customsProceduresText4: '',
    customsProceduresText5: '',
    customsProceduresText6: '',
    customsProceduresText7: '',
    customsProceduresText8: '',
    customsProceduresText9: '',
    customsProceduresText10: '',
    customsProceduresText11: '',
    customsProceduresText12: '',
    customsProceduresText13: '',
    customsProceduresText14: '',
    customsProceduresText15: '',
    customsProceduresText16: '',
    customsProceduresText17: '',
    customsProceduresText18: '',
    customsProceduresText19: '',
    customsProceduresText20: '',
    customsProceduresText21: '',
  },

  travelDocuments: {
    travelDocumentsMainText: '',
    travelDocumentsSubText: '',
    travelDocumentsText1: '',
    travelDocumentsText2: '',
  },

  vatAllowance: {
    vatAllowanceMainText: '',
    vatAllowanceSubText: '',
    vatAllowanceText1: '',
    vatAllowanceText2: '',
    vatAllowanceText3: '',
    vatAllowanceText4: '',
    vatAllowanceText5: '',
    vatAllowanceText6: '',
    vatAllowanceText7: '',
    vatAllowanceText8: '',
    vatAllowanceText9: '',
    vatAllowanceText10: '',
    vatAllowanceText11: '',
    vatAllowanceText12: '',
    vatAllowanceText13: '',
    vatAllowanceText14: '',
    vatAllowanceText15: '',
    vatAllowanceText16: '',
    vatAllowanceText17: '',
    vatAllowanceText18: '',
    vatAllowanceText19: '',
    vatAllowanceText20: '',
    vatAllowanceText21: '',
    vatAllowanceText22: '',
    vatAllowanceText23: '',
    vatAllowanceText24: '',
    vatAllowanceText25: '',
    vatAllowanceText26: '',
    vatAllowanceText27: '',
    vatAllowanceText28: '',
    vatAllowanceText29: '',
    vatAllowanceText30: '',
    vatAllowanceText31: '',
    vatAllowanceText32: '',
    vatAllowanceText33: '',
    vatAllowanceText34: '',
    vatAllowanceText35: '',
    vatAllowanceText36: '',
    vatAllowanceText37: '',
    vatAllowanceText38: '',
    vatAllowanceText39: '',
    vatAllowanceText40: '',
    vatAllowanceText41: '',
    vatAllowanceText42: '',
    vatAllowanceText43: '',
    vatAllowanceText44: '',
  },

  dutyAllowance: {
    dutyAllowanceMainText: '',
    dutyAllowanceSubText: '',
    dutyAllowanceText1: '',
    dutyAllowanceText2: '',
    dutyAllowanceText3: '',
    dutyAllowanceText4: '',
    dutyAllowanceText5: '',
    dutyAllowanceText6: '',
    dutyAllowanceText7: '',
    dutyAllowanceText8: '',
    dutyAllowanceText9: '',
    dutyAllowanceText10: '',
    dutyAllowanceText11: '',
    dutyAllowanceText12: '',
    dutyAllowanceText13: '',
    dutyAllowanceText14: '',
    dutyAllowanceText15: '',
    dutyAllowanceText16: '',
    dutyAllowanceText17: '',
    dutyAllowanceText18: '',
    dutyAllowanceText19: '',
    dutyAllowanceText20: '',
    dutyAllowanceText21: '',
    dutyAllowanceText22: '',
    dutyAllowanceText23: '',
    dutyAllowanceText24: '',
    dutyAllowanceText25: '',
    dutyAllowanceText26: '',
    dutyAllowanceText27: '',
    dutyAllowanceText28: '',
    dutyAllowanceText29: '',
    dutyAllowanceText30: '',
    dutyAllowanceText31: '',
    dutyAllowanceText32: '',
    dutyAllowanceText33: '',
    dutyAllowanceText34: '',
    dutyAllowanceText35: '',
    dutyAllowanceText36: '',
    dutyAllowanceText37: '',
    dutyAllowanceText38: '',
    dutyAllowanceText39: '',
    dutyAllowanceText40: '',
    dutyAllowanceText41: '',
    dutyAllowanceText42: '',
    dutyAllowanceText43: '',
    dutyAllowanceText44: '',
    dutyAllowanceText45: '',
    dutyAllowanceText46: '',
    dutyAllowanceText47: '',
  },

  personalEffects: {
    personalEffectsMainText: '',
    personalEffectsSubText: '',
    personalEffectsText1: '',
    personalEffectsText2: '',
    personalEffectsText3: '',
    personalEffectsText4: '',
    personalEffectsText5: '',
    personalEffectsText6: '',
    personalEffectsText7: '',
  },

  foreignVat: {
    foreignVatMainText: '',
    foreignVatSubText: '',
    foreignVatText1: '',
    foreignVatText2: '',
    foreignVatText3: '',
    foreignVatText4: '',
    foreignVatText5: '',
  },

  animals: {
    animalsMainText: '',
    animalsSubText: '',
    animalsText1: '',
    animalsText2: '',
    animalsText3: '',
    animalsText4: '',
  },

  plants: {
    plantsMainText: '',
    plantsSubText: '',
    plantsText1: '',
    plantsText2: '',
    plantsText3: '',
    plantsText4: '',
    plantsText5: '',
    plantsText6: '',
    plantsText7: '',
    plantsText8: '',
    plantsText9: '',
    plantsText10: '',
    plantsText11: '',
    plantsText12: '',
    plantsText13: '',
    plantsText14: '',
    plantsText15: '',
    plantsText16: '',
    plantsText17: '',
    plantsText18: '',
    plantsText19: '',
    plantsText20: '',
    plantsText21: '',
    plantsText22: '',
    plantsText23: '',
    plantsText24: '',
    plantsText25: '',
    plantsText26: '',
    plantsText27: '',
    plantsText28: '',
    plantsText29: '',
    plantsText30: '',
    plantsText31: '',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText: '',
    souvenirsAndSpeciesProtectionSubText: '',
    souvenirsAndSpeciesProtectionText1: '',
    souvenirsAndSpeciesProtectionText2: '',
    souvenirsAndSpeciesProtectionText3: '',
    souvenirsAndSpeciesProtectionText4: '',
    souvenirsAndSpeciesProtectionText5: '',
    souvenirsAndSpeciesProtectionText6: '',
    souvenirsAndSpeciesProtectionText7: '',
    souvenirsAndSpeciesProtectionText8: '',
  },

  highwayVignette: {
    highwayVignetteMainText: '',
    highwayVignetteSubText: '',
    highwayVignetteText1: '',
    highwayVignetteText2: '',
    highwayVignetteText3: '',
    highwayVignetteText4: '',
    highwayVignetteText5: '',
    highwayVignetteText6: '',
    highwayVignetteText7: '',
    highwayVignetteText8: '',
    highwayVignetteText9: '',
    highwayVignetteText10: '',
  },

  roadTax: {
    roadTaxMainText: '',
    roadTaxSubText: '',
    roadTaxText1: '',
    roadTaxText2: '',
    roadTaxText3: '',
    roadTaxText4: '',
    roadTaxText5: '',
    roadTaxText6: '',
    roadTaxText7: '',
    roadTaxText8: '',
    roadTaxText9: '',
    roadTaxText10: '',
    roadTaxText11: '',
    roadTaxText12: '',
    roadTaxText13: '',
    roadTaxText14: '',
    roadTaxText15: '',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: '',
    fuelAndRepairsSubText: '',
    fuelAndRepairsText1: '',
    fuelAndRepairsText2: '',
    fuelAndRepairsText3: '',
    fuelAndRepairsText4: '',
    fuelAndRepairsText5: '',
  },

  entryByTrain: {
    entryByTrainMainText: '',
    entryByTrainSubText: '',
    entryByTrainText1: '',
    entryByTrainText2: '',
    entryByTrainText3: '',
    entryByTrainText4: '',
    entryByTrainText5: '',
    entryByTrainText6: '',
    entryByTrainText7: '',
    entryByTrainText8: '',
    entryByTrainText9: '',
  },

  forgery: {
    forgeryMainText: '',
    forgerySubText: '',
    forgeryText1: '',
    forgeryText2: '',
    forgeryText3: '',
    forgeryText4: '',
    forgeryText5: '',
    forgeryText6: '',
  },

  cash: {
    cashMainText: '',
    cashSubText: '',
    cashText1: '',
    cashText2: '',
  },

  food: {
    foodMainText: '',
    foodSubText: '',
    foodText1: '',
    foodText2: '',
    foodText3: '',
    foodText4: '',
    foodText5: '',
    foodText6: '',
    foodText7: '',
    foodText8: '',
    foodText9: '',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText: '',
    authorisationRequirementsSubText: '',
    authorisationRequirementsText1: '',
    authorisationRequirementsText2: '',
    authorisationRequirementsText3: '',
    authorisationRequirementsText4: '',
    authorisationRequirementsText5: '',
    authorisationRequirementsText6: '',
    authorisationRequirementsText7: '',
    authorisationRequirementsText8: '',
    authorisationRequirementsText9: '',
    authorisationRequirementsText10: '',
    authorisationRequirementsText11: '',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText: '',
    purchasesOnlineOfflineSubText: '',
    purchasesOnlineOfflineText1: '',
    purchasesOnlineOfflineText2: '',
    purchasesOnlineOfflineText3: '',
    purchasesOnlineOfflineText4: '',
    purchasesOnlineOfflineText5: '',
    purchasesOnlineOfflineText6: '',
    purchasesOnlineOfflineText7: '',
    purchasesOnlineOfflineText8: '',
    purchasesOnlineOfflineText9: '',
    purchasesOnlineOfflineText10: '',
    purchasesOnlineOfflineText11: '',
    purchasesOnlineOfflineText12: '',
    purchasesOnlineOfflineText13: '',
    purchasesOnlineOfflineText14: '',
    purchasesOnlineOfflineText15: '',
    purchasesOnlineOfflineText16: '',
    purchasesOnlineOfflineText17: '',
  },

  information: {
    informationTitle: 'Information',
    informationSubCategoryTitle: 'I have goods with me:',
    customsProceduresMainText: 'Proceeding at the customs',
    customsProceduresSubText:
      'As a private individual you have to enter Switzerland ...',
    travelDocumentsMainText: 'Travel documents',
    travelDocumentsSubText:
      'To enter Switzerland foreign nationals need a valid ...',

    declarationMainText: 'I have goods with me',
    declarationSubText: 'Goods for your private use or as a gift ...',
    animalsAndPlantsMainText: 'I have animals or plants with me',
    animalsAndPlantsSubText:
      'For dogs, cats, other pets and horses you will find the ...',
    vehiclesMainText: "I'm traveling with a vehicle",
    vehiclesSubText:
      'The use of highways and motorways with motor vehicles and trailers ...',
    entryByTrainMainText: 'Entry by train',
    entryByTrainSubText:
      'If customs personnel are present on the train, you must take all goods ...',
    prohibitionsAndRestrictionsMainText: 'Prohibitions and restrictions',
    prohibitionsAndRestrictionsSubText:
      'It is forbidden to introduce trademark and design counterfeits. The Swiss customs ...',

    vatAllowanceMainText: '',
    vatAllowanceSubText: '',

    dutyAllowanceMainText: '',
    dutyAllowanceSubText: '',

    personalEffectsMainText: '',
    personalEffectsSubText: '',

    foreignVatMainText: '',
    foreignVatSubText: '',

    animalsMainText: '',
    animalsSubText: '',

    plantsMainText: '',
    plantsSubText: '',

    souvenirsAndSpeciesProtectionMainText: '',
    souvenirsAndSpeciesProtectionSubText: '',

    highwayVignetteMainText: '',
    highwayVignetteSubText: '',
    roadTaxMainText: '',
    roadTaxSubText: '',
    fuelAndRepairsMainText: '',
    fuelAndRepairsSubText: '',

    forgeryMainText: '',
    forgerySubText: '',
    cashMainText: '',
    cashSubText: '',
    foodMainText: '',
    foodSubText: '',
    authorisationRequirementsMainText: '',
    authorisationRequirementsSubText: '',
    purchasesOnlineOfflineMainText: '',
    purchasesOnlineOfflineSubText: '',
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
  legalNoticeInformation: {
    navigationHeaderTitle: 'Information about using the app',
    conditions: 'Framework Conditions',
    importantSoon: 'Brief summary',
    importantSoonText1:
      'You may use the app for the same person(s) only once a day (calendar day).',
    importantSoonText2:
      'You may use the app only for goods that you import for your personal use or as gifts.',
    importantSoonText3:
      'By using the app, you accept that the VAT rate of 7.7% is applied; including for goods that are actually subject to the reduced tax rate (food, animal feed, medications and books).',
    importantSoonText4:
      'Only credit card payment (Visa, MasterCard) is possible (no refund option). The goods are cleared through customs after payment of the duties.',
    importantSoonText5:
      'Customs clearance must take place before crossing the border or at the latest at the border crossing point. However, this is only possible 48 hours before crossing the border at the earliest.',
    importantSoonText6:
      'After customs clearance, you may also use the following border crossings:',
    importantSoonText7:
      'border crossing points where Customs staff are not present;',
    importantSoonText8: 'the green channel at airports',
    importantSoonText9:
      'The Customs receipt must be presented to Swiss Customs staff upon request. Customs staff take a photo of the receipt if necessary.',

    howToDeclareYourGoods: 'How to clear your goods through customs:',
    howToDeclareYourGoodsText1:
      'Declare all transported goods (except personal effects and travelling provisions).',
    howToDeclareYourGoodsText2:
      'The applicable duty-free allowances and the tax-free limit are automatically deducted during customs clearance.',
    howToDeclareYourGoodsText3:
      "Enter the value in the foreign currency according to the payment document. The value is converted using the preceding day's (last working day) exchange rate (forex sell rate).",
    howToDeclareYourGoodsText4:
      'Set a two-hour timeframe for your border crossing. The receipt is valid only during this timeframe. If you are unable to comply with the selected timeframe, you must report to a border crossing manned by Swiss Customs staff and explain why you were unable to enter during the validity period. Duties will be levied again without credible justification.',
    howToDeclareYourGoodsText5:
      'If the customs clearance applies to you and fellow travellers or to another person, you must enter together with these persons.',
    howToDeclareYourGoodsText6:
      'You can correct your declaration at any time before paying. No further corrections are possible in the app after paying. After paying for additional foreign goods purchased, you must declare them at a border crossing manned by Swiss Customs staff.',
    howToDeclareYourGoodsText7:
      'The Swiss Customs receipt must be retained for at least one year. You can also save the receipt as an image.',
    howToDeclareYourGoodsText8:
      'You must declare the following goods at a border crossing manned by Swiss Customs staff in any case:',
    howToDeclareYourGoodsText9:
      'goods which are subject to restrictions or bans and which require a certificate or authorisation (e.g. weapons, live animals and products governed by species protection); further information;',
    howToDeclareYourGoodsText10:
      'goods for private use or as gifts worth a total of CHF 20,000.00 or more;',
    howToDeclareYourGoodsText11:
      'goods that you are not importing for your personal use or as gifts (e.g. goods that are intended for trade);',
    howToDeclareYourGoodsText12: 'vehicles, vehicle repairs and fuel;',
    howToDeclareYourGoodsText13:
      'household effects, wedding trousseaux and inherited property;',
    howToDeclareYourGoodsText14:
      'goods that are only temporarily imported into Switzerland;',
    howToDeclareYourGoodsText15:
      'goods intended for transit through Switzerland.',
    howToDeclareYourGoodsText16:
      'Goods that are exported cannot be declared with the app. Information on tax-free shopping in Switzerland can be found here.',

    legal: 'Legal aspects',
    usage: 'Usage',
    legalText1:
      'Customs clearance with the app is binding (Art. 33 of the Customs Act, SR 631.0). You commit a criminal offence if you do not declare or falsely declare prohibited or dutiable goods or ones that require authorisation.',
    legalText2:
      'The person who presents the receipt for customs control is responsible for the correct clearance of the goods transported. That person also incurs criminal law liability in the event of undeclared or falsely declared goods being found.',
    legalText3: 'When using the app, make sure that:',
    legalText4:
      'You have an internet connection during the payment process in order to be able to complete customs clearance.',
    legalText5: 'You have a valid receipt for the goods you are importing.',
    legalText6:
      'You can display the receipt on your mobile device during controls when crossing the border.',
    legalText7:
      'Please note that, during the validity period of the receipt, a picture of the receipt that is forwarded to third parties via WhatsApp, iMessage, SMS or email will not be accepted as a receipt.',

    privacyAndLiability: 'Data protection and liability',
    dataProtection: 'Data protection',
    dataProtectionText1:
      'Based on Article 13 of the Swiss Constitution and the federal data protection provisions, all persons are entitled to have their individual privacy preserved and to be protected against misuse of their personal data. The federal authorities comply with these provisions. Personal data is treated strictly confidentially and is neither disclosed nor sold to third parties.',
    dataProtectionText2:
      'In close cooperation with our hosting providers, we strive to protect the databases insofar as possible from unauthorised access, loss, misuse or falsification.',
    dataProtectionText3:
      'When our web pages are accessed, the following data is stored in log files: IP address, date, time, browser query and general information transmitted about the operating system or browser.',
    dataProtectionText4:
      'This usage data forms the basis for anonymous statistical evaluations so that trends can be identified, thereby enabling the federal authorities to improve their offering accordingly. According to the Federal Act on the Surveillance of Postal and Telecommunications Traffic (SPTA), there is a statutory obligation to retain connection data for six months.',
    dataProtectionText5:
      'In the case of the voluntary establishment of contact, your email address is stored in a separate database that is not linked to the anonymous log files. You can cancel your registration at any time. The federal authorities expressly reserve the right to change some or all content at any time without prior notice, as well as to delete or occasionally not publish such content. The federal authorities accept no liability whatsoever for material or immaterial losses resulting from access to or use/non-use of the information published, from the misuse of links or from technical faults.',

    liability: 'Liability',
    liabilityText1:
      'The Federal Authorities expressly reserve the right to change, delete or temporarily not publish contents in whole or in part at any time without notice.',
    liabilityText2:
      'Liability claims against the Federal authorities for damages of a material or immaterial nature which have arisen from the access or use or non-use of the published information, through misuse of the connection or due to technical faults are excluded.',
    referencesAndLinks: 'References and links',
    referencesAndLinksText1:
      'References and links to third-party websites lie outside the scope of responsibility of the federal authorities. Users who access and/or use such websites do so at their own risk. The federal authorities explicitly declare that they have no influence whatsoever on the design, content or offers of linked sites. The relevant third party is entirely responsible for the information and services of third-party websites.',
    referencesAndLinksText2:
      'Any responsibility in respect of such websites is declined.',

    copyright: 'Copyright',
    copyrightText1:
      'Copyright, federal authorities of the Swiss Confederation, 2007.',
    copyrightText2:
      'The information contained on the websites of the federal authorities is made publicly accessible. Downloading or copying content, illustrations, photos or any other data does not entail any transfer of rights concerning the content.',
    copyrightText3:
      'Copyright and all other rights to content, illustrations, photos or other data on the websites of the federal authorities belong exclusively to the federal authorities or to any specifically named right holders. The reproduction of any components requires the prior written consent of the copyright holder.',
  },
  overview: {
    declared: 'Declared:',
    dutyFree: 'Duty Free:',
    details: 'Details',
  },
  legalNoticeModal: {
    importantNote: 'Important Note',
    vatRateInfo:
      'Please take into account that no refund is possible when using this app. Declared goods are cleared at the uniform VAT rate of 7.7%. More information can be found here:',
    termsOfService: 'Terms of Service',
    acceptance:
      'I hereby accept the terms and conditions that I have read and understood.',
    confirm: 'Confirm',
    abort: 'Abort',
  },
  furtherInformationModal: {
    furtherInformation: 'Further Information:',
    acceptance:
      'By using the app, you accept that the VAT rate is 7.7%; is also applied to goods that are actually subject to the reduced tax rate (food, animal feed, medicines and books).',
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kgs',
    kiloOrLiter: 'kg/liter',
    kiloOrLiter_plural: 'kgs/liters',
    liter: 'liter',
    liter_plural: 'liters',
    unit: 'unit',
    unit_plural: 'units',
    gram: 'gram',
    gram_plural: 'grams',
  },
};
