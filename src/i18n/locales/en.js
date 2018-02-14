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
    recordedOn: 'recorded on {{value}}',
    addQuantities: 'Add quantities',
    enterQuantities: 'Enter the quantities of all {{value}} here',
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
    entryInfo:
      'You can only cross the border within the specified period with the goods registered here.',
  },
  receipt: {
    dutyAndVat: 'Customs duty: {{duty}}  |  vat: {{vat}}',
    paidOn: 'Paid on {{date}} at {{time}}:',
    transactionId: 'Transaction-ID (SIX): {{value}}',
    receiptValidUntilText: 'This receipt is valid until:',
    receiptValidUntilTime: '{{date}} | {{time}}:',
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
  legalNoticeInformation: {
    navigationHeaderTitle: 'Information about using the app',
    conditions: 'Framework Conditions',
    importantSoon: 'Brief summary',
    importantSoonText:
      'You may use the app for the same person(s) only once a day (calendar day).\n' +
      'You may use the app only for goods that you import for your personal use or as gifts.\n' +
      'By using the app, you accept that the VAT rate of 7.7% is applied; including for goods that are actually subject to the reduced tax rate (food, animal feed, medications and books).\n' +
      'Only credit card payment (Visa, MasterCard) is possible (no refund option). The goods are cleared through customs after payment of the duties.\n' +
      'Customs clearance must take place before crossing the border or at the latest at the border crossing point. However, this is only possible 48 hours before crossing the border at the earliest.\n' +
      'After customs clearance, you may also use the following border crossings:' +
      'border crossing points where Customs staff are not present;\n' +
      'the green channel at airports.\n' +
      'The Customs receipt must be presented to Swiss Customs staff upon request. Customs staff take a photo of the receipt if necessary.\n',
    howToDeclareYourGoods: 'How to clear your goods through customs:',
    howToDeclareYourGoodsText:
      'Declare all transported goods (except personal effects and travelling provisions).\n' +
      'The applicable duty-free allowances and the tax-free limit are automatically deducted during customs clearance.\n' +
      "Enter the value in the foreign currency according to the payment document. The value is converted using the preceding day's (last working day) exchange rate (forex sell rate).\n" +
      'Set a two-hour timeframe for your border crossing. The receipt is valid only during this timeframe. If you are unable to comply with the selected timeframe, you must report to a border crossing manned by Swiss Customs staff and explain why you were unable to enter during the validity period. Duties will be levied again without credible justification.\n' +
      'If the customs clearance applies to you and fellow travellers or to another person, you must enter together with these persons.\n' +
      'You can correct your declaration at any time before paying. No further corrections are possible in the app after paying. After paying for additional foreign goods purchased, you must declare them at a border crossing manned by Swiss Customs staff.\n' +
      'The Swiss Customs receipt must be retained for at least one year. You can also save the receipt as an image.\n' +
      'If customs clearance with the app is not possible (e.g. no internet connection or payment by credit card is not possible), you must declare the goods at a border crossing manned by Swiss Customs staff or via a declaration box.\n' +
      'You must declare the following goods at a border crossing manned by Swiss Customs staff in any case:\n' +
      'goods which are subject to restrictions or bans and which require a certificate or authorisation (e.g. weapons, live animals and products governed by species protection); further information;\n' +
      'goods for private use or as gifts worth a total of CHF 20,000.00 or more;\n' +
      'goods that you are not importing for your personal use or as gifts (e.g. goods that are intended for trade);\n' +
      'vehicles, vehicle repairs and fuel;\n' +
      'household effects, wedding trousseaux and inherited property;\n' +
      'goods that are only temporarily imported into Switzerland;\n' +
      'goods intended for transit through Switzerland.\n' +
      'Goods that are exported cannot be declared with the app. Information on tax-free shopping in Switzerland can be found here.\n',
    legal: 'Legal aspects',
    usage: 'Usage',
    legalText:
      'Customs clearance with the app is binding (Art. 33 of the Customs Act, SR 631.0). You commit a criminal offence if you do not declare or falsely declare prohibited or dutiable goods or ones that require authorisation.\n' +
      'The person who presents the receipt for customs control is responsible for the correct clearance of the goods transported. That person also incurs criminal law liability in the event of undeclared or falsely declared goods being found.\n' +
      'When using the app, make sure that:\n' +
      'You have an internet connection during the payment process in order to be able to complete customs clearance.\n' +
      'You have a valid receipt for the goods you are importing.\n' +
      'You can display the receipt on your mobile device during controls when crossing the border.\n' +
      'Please note that, during the validity period of the receipt, a picture of the receipt that is forwarded to third parties via WhatsApp, iMessage, SMS or email will not be accepted as a receipt.\n',
    privacyAndLiability: 'Data protection and liability',
    dataProtection: 'Data protection',
    dataProtectionText:
      'Based on Article 13 of the Swiss Constitution and the federal data protection provisions, all persons are entitled to have their individual privacy preserved and to be protected against misuse of their personal data. The federal authorities comply with these provisions. Personal data is treated strictly confidentially and is neither disclosed nor sold to third parties.\n' +
      'In close cooperation with our hosting providers, we strive to protect the databases insofar as possible from unauthorised access, loss, misuse or falsification.\n' +
      'When our web pages are accessed, the following data is stored in log files: IP address, date, time, browser query and general information transmitted about the operating system or browser.\n' +
      'This usage data forms the basis for anonymous statistical evaluations so that trends can be identified, thereby enabling the federal authorities to improve their offering accordingly. According to the Federal Act on the Surveillance of Postal and Telecommunications Traffic (SPTA), there is a statutory obligation to retain connection data for six months.\n' +
      'In the case of the voluntary establishment of contact, your email address is stored in a separate database that is not linked to the anonymous log files. You can cancel your registration at any time.\n' +
      'The federal authorities expressly reserve the right to change some or all content at any time without prior notice, as well as to delete or occasionally not publish such content.\n' +
      'The federal authorities accept no liability whatsoever for material or immaterial losses resulting from access to or use/non-use of the information published, from the misuse of links or from technical faults.\n',
    referencesAndLinks: 'References and links',
    referencesAndLinksText:
      'References and links to third-party websites lie outside the scope of responsibility of the federal authorities. Users who access and/or use such websites do so at their own risk. The federal authorities explicitly declare that they have no influence whatsoever on the design, content or offers of linked sites. The relevant third party is entirely responsible for the information and services of third-party websites.\n' +
      'Any responsibility in respect of such websites is declined.\n',
    copyright: 'Copyright',
    copyrightText:
      'Copyright, federal authorities of the Swiss Confederation, 2007.\n' +
      'The information contained on the websites of the federal authorities is made publicly accessible. Downloading or copying content, illustrations, photos or any other data does not entail any transfer of rights concerning the content.\n' +
      'Copyright and all other rights to content, illustrations, photos or other data on the websites of the federal authorities belong exclusively to the federal authorities or to any specifically named right holders. The reproduction of any components requires the prior written consent of the copyright holder.\n',
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
  },
};
