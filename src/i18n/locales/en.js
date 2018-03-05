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
    standardInputSubText: 'Record the amount of {category} you carry with you:',
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
    chooseOtherEntryTime: 'To adjust',
    until: 'until',
  },

  customsProcedures: {
    customsProceduresMainText: 'Customs procedures',
    customsProceduresSubText: '',
    customsProceduresText1: 'When entering Switzerland as a private individual, you must spontaneously declare all goods and animals that you are bringing with you.',
    customsProceduresText2: 'If you are only bringing goods which are exempt from customs duty and VAT and are not subject to any restrictions or bans, you may proceed across the border without declaring anything. In this case, you may also:',
    customsProceduresText3: 'select the green channel in airports; or',
    customsProceduresText4: 'place the green "nothing to declare" sign on the dashboard of the car.',
    customsProceduresText5: 'Passing through the green channel or placing a green "nothing to declare" sign on the dashboard is binding on you. Swiss Customs staff may carry out checks without asking.',
    customsProceduresText6: 'You can find more detailed information on duty-free goods in the following sections: ',
    customsProceduresText7: 'Tax-free limit CHF 300 ',
    customsProceduresText8: 'Duty-free allowances: foodstuffs, alcohol and tobacco',
    customsProceduresText9: 'Personal effects and travel provisions',
    customsProceduresText10: 'Verbal customs declaration or use of the red channel in airports',
    customsProceduresText11: 'If the border crossing is manned by Swiss Customs staff, all goods must be declared verbally without you being solicited to do so. Information on the main border crossings can be found in the border crossings section.',
    customsProceduresText12: 'Customs declaration with the app "QuickZoll"',
    customsProceduresText13: 'You can also declare your goods with the FCA\'s app "QuickZoll". The goods must be cleared through customs with the app before crossing the border or when doing so. In other words, duties must be paid. If you paid the duties with the app, you may also use border crossings where no Customs staff are present and the green channel in airports.',
    customsProceduresText14: 'This form of customs declaration is permitted only for goods intended for your personal use or as gifts. They must not be subject to any restrictions or bans and must not require a certificate or authorisation.',
    customsProceduresText15: 'Other goods must be declared verbally at a border crossing manned by Swiss Customs staff.',
    customsProceduresText16: 'Written customs declaration (declaration box)',
    customsProceduresText17: 'At certain border crossings, so-called declaration boxes are still available for you to declare your goods in writing. Information on these can be found at www.ezv.admin.ch/Anmeldebox.',
    customsProceduresText18: 'This form of customs declaration is permitted only for goods not intended for trade. They must not be subject to any restrictions or bans and must not require a certificate or authorisation.',
    customsProceduresText19: 'Merchandise must be declared at a competent customs office.',
    customsProceduresText20: 'Please note:',
    customsProceduresText21: 'Verbal declarations as well as declarations with the app or via a declaration box are binding. We also carry out customs inspections in Switzerland itself. It is not possible to make a customs declaration later on. You commit a criminal offence if you do not declare or falsely declare prohibited or dutiable goods or ones that require authorisation.',
  },

  travelDocuments: {
    travelDocumentsMainText: 'Travel documents',
    travelDocumentsSubText: '',
    travelDocumentsText1: 'To enter Switzerland, foreign citizens must be in possession of a valid travel document that is recognised by Switzerland. In certain cases, a visa is also required. Information on entering and staying in Switzerland (regulations on travel documents and visas) can be found on the website of the State Secretariat for Migration: www.sem.admin.ch',
    travelDocumentsText2: 'The provisions on travel documents abroad can be obtained from the relevant foreign authorities via the link to the World Customs Organization: www.wcoomd.org',
  },

  vatAllowance: {
    vatAllowanceMainText: 'Tax-free limit CHF 300',
    vatAllowanceSubText: '',
    vatAllowanceText1: 'Goods that you import for your personal use or as gifts are VAT-free up to a value of CHF 300. The value of all goods has to be taken into account. This also includes the value of gifts received, foodstuffs, tobacco goods, alcoholic beverages, household pets brought from abroad and repairs and maintenance work performed abroad on your own vehicle.',
    vatAllowanceText2: 'However, it does not include the value of your personal effects, travel provisions and fuel for your vehicle.',
    vatAllowanceText3: 'The value after deduction of foreign value added tax is decisive, provided this is indicated on the receipt/invoice. Value details in foreign currencies are converted into Swiss francs at the preceding day\'s exchange rate (forex sell rate).',
    vatAllowanceText4: 'The tax-free limit can be claimed only once per day by the same person. It is granted only if you have the goods with you. The tax-free limit applies also for children.',
    vatAllowanceText5: 'What happens if the value of the goods exceeds CHF 300?',
    vatAllowanceText6: 'If you have goods that exceed the tax-free limit of CHF 300, you must pay VAT on the total value of all of the goods.',
    vatAllowanceText7: 'Example: The total value is CHF 800. The threshold of CHF 300 is exceeded. The value added tax calculation is therefore based on CHF 800.',
    vatAllowanceText8: 'Further examples of application of the tax-free limit',
    vatAllowanceText9: 'Value added tax',
    vatAllowanceText10: 'VAT is based on the value of the goods. The normal VAT rate is 7.7%. A reduced rate of 2.5% applies for certain goods (e.g. foodstuffs, non-alcoholic beverages, books, magazines and medications). The normal rate is always applied in the case of customs clearance with the app "QuickZoll".',
    vatAllowanceText11: 'Producing a receipt or any other proof of value (e.g. in the case of online purchases) facilitates customs clearance. If value details are not provided or if there is doubt concerning the accuracy of this information, the value of the goods can be estimated by the customs office.',
    vatAllowanceText12: 'Customs declaration',
    vatAllowanceText13: 'Upon entry into Switzerland, you must verbally declare all the goods you have to Customs staff.',
    vatAllowanceText14: 'You can also declare the goods using the app "QuickZoll" or in writing via the declaration box in the case of unmanned border crossings. You can find information about this here.',
    vatAllowanceText15: 'Please note: If the so-called duty-free allowances for alcoholic beverages, tobacco products and certain foodstuffs are exceeded, you must pay customs duty in any case. More information.',
    vatAllowanceText16: 'Please also note that certain goods (e.g. counterfeits, weapons and certain plants, animals, animal products and goods subject to species protection) may also be subject to import bans or to specific restrictions. More information.',
    vatAllowanceText17: 'Application of the tax-free limit for individuals',
    vatAllowanceText18: 'Application of the tax-free limit for more than one person',
    vatAllowanceText19: 'One person can submit a joint customs declaration for several people travelling together (e.g. relatives, friends or acquaintances). The person making the declaration thus assumes responsibility for the customs declaration. He or she must therefore pay any duties and taxes due and incurs criminal law liability in the event of undeclared goods being found and criminal proceedings being initiated subsequently.',
    vatAllowanceText20: 'Please note: If the total value of all of the goods being carried exceeds the sum of the tax-free limits of the people travelling together, the person making the declaration is not entitled to the tax-free limit.',
    vatAllowanceText21: 'Individual items worth more than CHF 300 are always subject to VAT also when carried by several people.',
    vatAllowanceText22: 'Individual items worth more than CHF 300',
    vatAllowanceText23: 'The following applies when determining whether an item with an individual value of more than CHF 300 or several items under CHF 300 are involved:',
    vatAllowanceText24: 'For unmounted or non-assembled goods: \n' +
    'one sales unit = one item',
    vatAllowanceText25: 'For mounted or assembled goods:\n' + ,
    'mounted or assembled goods = one item (even if the individual components are shown separately on the invoice)',
    vatAllowanceText26: 'Examples:',
    vatAllowanceText27: '1.\tThe invoice for the purchase of a computer is as follows:',
      vatAllowanceText28: '1 desktop PC\t\tCHF\t\t700',
    vatAllowanceText29: '1 screen\t\tCHF\t\t200 ',
    vatAllowanceText30: '1 keyboard\t\tCHF\t\t20',
      vatAllowanceText31: 'Total\tCHF 920',
      vatAllowanceText32: '= 3 items (three sales units)',
    vatAllowanceText33: '2.\tThe invoice for the purchase of a computer is as follows:',
      vatAllowanceText34: '1 computer',
    vatAllowanceText35: 'desktop PC',
    vatAllowanceText36: 'screen',
    vatAllowanceText37: 'keyboard',
    vatAllowanceText38: 'Total\tCHF 920',
    vatAllowanceText39: '= 1 item (one sales unit)',
    vatAllowanceText40: '3.\tThe invoice for the purchase of a pair of glasses is as follows:',
      vatAllowanceText41: '2 lenses\t\t2 units à CHF 200\t\tCHF 400',
      vatAllowanceText42: '1 frame\t\tCHF 300',
      vatAllowanceText43: 'Total\t\tCHF 700',
      vatAllowanceText44: '1 item (one assembled item)',
  },

  dutyAllowance: {
    dutyAllowanceMainText: 'Duty-free allowances: foodstuffs, alcohol and tobacco',
    dutyAllowanceSubText: '',
    dutyAllowanceText1: 'Goods that you import for your personal use or as gifts are duty-free, except in the case of so-called sensitive goods, excess quantities of which are subject to customs duty for agricultural or health policy reasons (see table below). Duty-free allowances are applied per person per day.',
    dutyAllowanceText2: 'Please note: If the total value of the goods you have (including the value of all foodstuffs) exceeds CHF 300, you will have to pay VAT in any case. More information.',
    dutyAllowanceText3: 'Please also note that additional restrictions exist for certain animal products, as well as for certain plant products.',
    dutyAllowanceText4: 'Meat and meat preparations',
    dutyAllowanceText5: 'Derived from all animal species, excluding game, fish, crustaceans, molluscs and other aquatic invertebrates. These include:',
    dutyAllowanceText6: 'all edible animal body parts (with or without bones)',
    dutyAllowanceText7: 'sausages made from meat or blood',
    dutyAllowanceText8: 'other meat products',
    dutyAllowanceText9: 'food preparations containing more than 20% sausage, meat or blood by weight',
    dutyAllowanceText10: 'Bone marrow, bones for stock, and dog and cat food in individual packets designated as animal feed are not included.',
    dutyAllowanceText11: 'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited',
    dutyAllowanceText12: 'Duty-free allowances per person per day:',
    dutyAllowanceText13: 'total 1kg',
    dutyAllowanceText14: 'Customs duties in CHF for excess quantities',
    dutyAllowanceText15: 'up to 10kg: CHF 17 per kg',
    dutyAllowanceText16: 'more than 10kg: CHF 23 per kg',
    dutyAllowanceText17: 'Butter and cream',
    dutyAllowanceText18: 'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.',
    dutyAllowanceText19: 'Duty-free allowances per person per day:',
    dutyAllowanceText20: 'total 1kg/litre',
    dutyAllowanceText21: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText22: 'CHF 16 per kg/litre',
    dutyAllowanceText23: 'Oils, fats, margarine for human consumption',
    dutyAllowanceText24: 'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.',
    dutyAllowanceText25: 'Duty-free allowances per person per day:',
    dutyAllowanceText26: 'total 5kg/litre',
    dutyAllowanceText27: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText28: 'CHF 2 per kg/litre',
    dutyAllowanceText29: 'Alcoholic beverages',
    dutyAllowanceText30: 'Duty-free allowances per person per day:\n' +
    '(only for people aged 17 or older)',
    dutyAllowanceText31: 'alcohol content by volume of up to 18%: total 5 litres and',
    dutyAllowanceText32: 'alcohol content by volume of more than 18%: total 1 litre',
    dutyAllowanceText33: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText34: 'alcohol content by volume of up to 18%: CHF 2 per litre',
    dutyAllowanceText35: 'alcohol content by volume of more than 18%: CHF 15 per litre',
    dutyAllowanceText36: 'Tobacco products',
    dutyAllowanceText37: 'Duty-free allowances per person per day:\n' +
    '(only for people aged 17 or older',
    dutyAllowanceText38: 'cigarettes/cigars: total 250 units or',
    dutyAllowanceText39: 'other tobacco goods: total 250g',
    dutyAllowanceText40: 'or a proportional selection of these products',
    dutyAllowanceText41: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText42: 'cigarettes/cigars: CHF 0.25 per unit',
    dutyAllowanceText43: 'other tobacco goods: CHF 0.10 per gram',
    dutyAllowanceText44: 'Other foodstuffs and goods',
    dutyAllowanceText45: 'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.\n' +
    'Duty-free',
    dutyAllowanceText46: 'Items ordered abroad that are delivered by post or courier',
    dutyAllowanceText47: 'Other provisions apply for goods that are ordered abroad (e.g. online) and are delivered by post or courier. More information.',
  },

  personalEffects: {
    personalEffectsMainText: 'Personal effects and travel provisions',
    personalEffectsSubText: '',
    personalEffectsText1: 'You can import personal effects and travel provisions duty-free:',
    personalEffectsText2: 'Personal effects',
    personalEffectsText3: 'These include personal effects which:',
    personalEffectsText4: 'travellers living in Switzerland take along when going abroad;',
    personalEffectsText5: 'travellers who live abroad use during their stay in Switzerland and take back when they leave. Included are items of clothing, underwear, toiletries, sports gear, photo and film cameras, camcorders, mobile phones, portable computers, musical instruments and other personal consumer items.',
    personalEffectsText6: 'Travel provisions',
    personalEffectsText7: 'The term travel provisions refers to foodstuffs that are ready to eat and non-alcoholic beverages for the day of travelling.',
  },

  foreignVat: {
    foreignVatMainText: 'Refund of foreign VAT',
    foreignVatSubText: '',
    foreignVatText1: 'Switzerland\'s Customs Administration cannot refund foreign VAT to you.',
    foreignVatText2: 'If you are personally bringing goods purchased abroad to Switzerland, you often have the option of having the foreign VAT refunded by the foreign seller or a tax refund company. These service companies have nothing to do with the Federal Customs Administration; in particular, they do not operate on our behalf.',
    foreignVatText3: 'Different rules apply to VAT refunds in different countries. If need be, the seller completes a refund form, on which the foreign customs authority confirms exportation to Switzerland.',
    foreignVatText4: 'Unfortunately, we are unable to provide you with more detailed information concerning the refund of foreign VAT. If need be, the relevant foreign customs authority will be able to assist you. Foreign customs authorities can be found at the following link to the World Customs Organization:\n' +
    'www.wcoomd.org',
    foreignVatText5: 'Swiss VAT must be paid even if foreign VAT is not refunded. There are no double taxation agreements in the area of value added tax.',
  },

  animals: {
    animalsMainText: 'Animals: pets, dogs, cats and horses',
    animalsSubText: '',
    animalsText1: 'For dogs, cats, other pets and horses, you can obtain information from the Federal Food Safety and Veterinary Office FSVO:\n' +
    'http://www.blv.admin.ch',
    animalsText2: 'Duties',
    animalsText3: 'If the tax-free limit of CHF 300 is exceeded, you have to pay VAT for animals. More detailed information can be found at:',
    animalsText4: 'Tax-free limit CHF 300',
  },

  plants: {
    plantsMainText: 'Plants',
    plantsSubText: '',
    plantsText1: '1.\tProhibited plants and plant products\n' +
    'The importation of the following plants is prohibited because they could be carriers of harmful organisms (fireblight, chestnut blight, viral diseases, etc.):'
    plantsText2: 'a) Importation from all countries prohibited',
    plantsText3: 'Miniature medlars (Cotoneaster)',
    plantsText4: 'Photinias – Photinia davidiana (syn. Stranvaesia davidiana)',
    plantsText5: 'b) Importation prohibited from all states except for EU member states, Iceland and Norway',
    plantsText6: 'Apple trees (Malus)',
    plantsText7: 'Pear trees (Pyrus)',
    plantsText8: 'Bitter oranges (Poncirus)',
    plantsText9: 'Oak trees (Quercus)',
    plantsText10: 'Mountain ash, or hawthorn and rowan trees (Sorbus)',
    plantsText11: 'Firethorns (Pyracantha)',
    plantsText12: 'Potatoes and similar solanums (Solanacea)',
    plantsText13: 'Real, edible chestnuts (Castanea)',
    plantsText14: 'Kumquats (Fortunella)',
    plantsText15: 'Medlars (Mespilus)',
    plantsText16: 'Coniferous woods (conifers)',
    plantsText17: 'Quince trees (Cydonia)',
    plantsText18: 'Vines (Vitis)',
    plantsText19: 'Roses',
    plantsText20: 'Drupaceous trees (apricot, cherry, almond, peach, plum and damson) and all flowering types of the prunus variety',
    plantsText21: 'Hawthorns (Crataegus) all types and varieties',
    plantsText22: 'Loquats (Eriobotrya)',
    plantsText23: 'Flowering quince or quince (Chaenomeles)',
    plantsText24: 'Citrus plants (Citrus)',
    plantsText25: '2.\tOther plants and plant products (also fruits and vegetables)',
    plantsText26: 'a) Importation from EU member states, Norway and Iceland\n' +
    'You can import plants without authorisation provided these are imported in tourist traffic and are intended for personal use.',
    plantsText27: 'Importation from all states other than EU member states, Norway and Iceland\n' +
    'Plants (living or as plant products) may be subject to an import permit obligation.'
    plantsText28: 'If you wish to import plants from these countries, first clarify the regulations with the Federal Office for Agriculture: www.blw.admin.ch.',
    plantsText29: 'Exception: cut flowers and bouquets up to 3 kg maximum per person and fruits and vegetables (excluding potatoes) up to 10kg overall can be imported without the application of phytosanitary measures.',
    plantsText30: 'Duties',
    plantsText31: 'If the tax-free limit of CHF 300 is exceeded, you have to pay VAT for plants. Detailed information can be found at: Tax-free limit CHF 300.',
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
