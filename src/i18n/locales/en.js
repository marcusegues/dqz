// @flow
import type { Locale } from '../types/locale';

export const en: Locale = {
  categories: {
    Meat: 'Meat and meat products',
    Butter: 'Butter and cream',
    Oils: 'Oils/fats/margarine',
    OtherFood: 'Other food and non-alcoholic beverages',
    AlcSoft: 'Alcoholic beverages of up to 18% vol.',
    AlcHard: 'Alcoholic beverages of more than 18% vol.',
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
    Alcohol: 'Alcoholic beverages',
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
    note: 'Note:',
    underConstruction: 'Under construction',
  },
  snackBar: {
    limitExceeded:
      'Declaration value limit exceeded. Please report your goods at the border crossing',
    offline:
      'You are offline. Except for the payment feature, you are able to use all other features of the app.',
    paymentAborted: 'Payment canceled.',
    paymentFailed: 'Payment failed',
    paymentAbortedRightText: 'OK',
    paymentFailedRightText: 'OK',
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
    standardInputSubText:
      'Record the amount of {{category}} you carry with you:',
  },
  amountInput: {
    amountInput: 'Please enter here the value of all transported goods.',
    amountInputLargeItem:
      'Capture individual items worth more than {{value}} francs.',
    amountInputLargeItemGreyBox:
      'Again, capture every item that is worth more than CHF 300.00.',
    amountInputAddItem: 'Add value',
    amountInputAddItemLarge: 'Add item',
    amountInputEnterValue:
      'Enter the value excluding foreign VAT (net value), including value of gifts received, food, tobacco products and alcoholic beverages.',
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
    travellers:
      'Travellers: {{adults}} Adults, {{minors}} Kids/Teens (under 17 years)',
    paidOn: 'Paid on {{date}} at {{time}}:',
    transactionId: 'Transaction-ID (SIX): {{value}}',
    receiptValidFrom: 'This receipt is valid for the border crossing from:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} to {{endDate}} | {{endTime}}',
    receiptValidOn: 'This receipt is valid for the border crossing on',
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
    entryTime: 'Time of entry:',
    chooseOtherEntryTime: 'To change',
    until: 'until',
  },

  customsProcedures: {
    customsProceduresMainText: 'Customs procedures',
    customsProceduresText1:
      'When entering Switzerland as a private individual, you must spontaneously declare all goods and animals that you are bringing with you.',
    customsProceduresText2:
      'If you are only bringing goods which are exempt from customs duty and VAT and are not subject to any restrictions or bans, you may proceed across the border without declaring anything. In this case, you may also:',
    customsProceduresText3: 'select the green channel in airports; or',
    customsProceduresText4:
      'place the green "nothing to declare" sign on the dashboard of the car.',
    customsProceduresText5:
      'Passing through the green channel or placing a green "nothing to declare" sign on the dashboard is binding on you. Swiss Customs staff may carry out checks without asking.',
    customsProceduresText6:
      'You can find more detailed information on duty-free goods in the following sections: ',
    customsProceduresText7: 'Tax-free limit CHF 300 ',
    customsProceduresText8:
      'Duty-free allowances: foodstuffs, alcohol and tobacco',
    customsProceduresText9: 'Personal effects and travel provisions',
    customsProceduresText10:
      'Verbal customs declaration or use of the red channel in airports',
    customsProceduresText11:
      'If the border crossing is manned by Swiss Customs staff, all goods must be declared verbally without you being solicited to do so. Information on the main border crossings can be found in the border crossings section.',
    customsProceduresText12: 'Customs declaration with the app QuickZoll',
    customsProceduresText13:
      "You can also declare your goods with the FCA's app QuickZoll. The goods must be cleared through customs with the app before crossing the border or when doing so. In other words, duties must be paid. If you paid the duties with the app, you may also use border crossings where no Customs staff are present and the green channel in airports.",
    customsProceduresText14:
      'This form of customs declaration is permitted only for goods intended for your personal use or as gifts. They must not be subject to any restrictions or bans and must not require a certificate or authorisation.',
    customsProceduresText15:
      'Other goods must be declared at a border crossing manned by Swiss Customs staff.',
    customsProceduresText16: 'Written customs declaration (declaration box)',
    customsProceduresText17:
      'At certain border crossings, so-called declaration boxes are still available for you to declare your goods in writing. Information on these can be found at www.ezv.admin.ch/Anmeldebox.',
    customsProceduresText18:
      'This form of customs declaration is permitted only for goods not intended for trade. They must not be subject to any restrictions or bans and must not require a certificate or authorisation.',
    customsProceduresText19:
      'Merchandise must be declared at a competent customs office.',
    customsProceduresText20: 'Please note:',
    customsProceduresText21:
      'Verbal declarations as well as declarations with the app or via a declaration box are binding. We also carry out customs inspections in Switzerland itself. It is not possible to make a customs declaration later on. You commit a criminal offence if you do not declare or falsely declare prohibited or dutiable goods or ones that require authorisation.',
    customsProceduresExtLink1: '',
  },

  travelDocuments: {
    travelDocumentsMainText: 'Travel documents',
    travelDocumentsText1:
      'To enter Switzerland, foreign citizens must be in possession of a valid travel document that is recognised by Switzerland. In certain cases, a visa is also required. Information on entering and staying in Switzerland (regulations on travel documents and visas) can be found on the website of the State Secretariat for Migration:',
    travelDocumentsText2:
      'The provisions on travel documents abroad can be obtained from the relevant foreign authorities via the link to the World Customs Organization:',
  },

  vatAllowance: {
    vatAllowanceMainText: 'Tax-free limit CHF 300',
    vatAllowanceText1:
      'Goods that you import for your personal use or as gifts are VAT-free up to a value of CHF 300. The value of all goods has to be taken into account. This also includes the value of gifts received, foodstuffs, tobacco goods, alcoholic beverages, household pets brought from abroad and repairs and maintenance work performed abroad on your own vehicle.',
    vatAllowanceText2:
      'However, it does not include the value of your personal effects, travel provisions and fuel for your vehicle.',
    vatAllowanceText3:
      "The value after deduction of foreign value added tax is decisive, provided this is indicated on the receipt/invoice. Value details in foreign currencies are converted into Swiss francs at the preceding day's exchange rate (forex sell rate).",
    vatAllowanceText4:
      'The tax-free limit can be claimed only once per day by the same person. It is granted only if you have the goods with you. The tax-free limit applies also for children.',
    vatAllowanceText5:
      'What happens if the value of the goods exceeds CHF 300?',
    vatAllowanceText6:
      'If you have goods that exceed the tax-free limit of CHF 300, you must pay VAT on the total value of all of the goods.',
    vatAllowanceText7:
      'Example: The total value is CHF 800. The threshold of CHF 300 is exceeded. The value added tax calculation is therefore based on CHF 800.',
    vatAllowanceText8: 'Further examples of application of the tax-free limit',
    vatAllowanceText9: 'Value added tax',
    vatAllowanceText10:
      'VAT is based on the value of the goods. The normal VAT rate is 7.7%. A reduced rate of 2.5% applies for certain goods (e.g. foodstuffs, non-alcoholic beverages, books, magazines and medications). The normal rate is always applied in the case of customs clearance with the app QuickZoll.',
    vatAllowanceText11:
      'Producing a receipt or any other proof of value (e.g. in the case of online purchases) facilitates customs clearance. If value details are not provided or if there is doubt concerning the accuracy of this information, the value of the goods can be estimated by the customs office.',
    vatAllowanceText12: 'Customs declaration',
    vatAllowanceText13:
      'Upon entry into Switzerland, you must verbally declare all the goods you have to Customs staff.',
    vatAllowanceText14:
      'You can also declare the goods using the app QuickZoll or in writing via the declaration box in the case of unmanned border crossings. You can find information about this here.',
    vatAllowanceText15:
      'Please note: If the so-called duty-free allowances for alcoholic beverages, tobacco products and certain foodstuffs are exceeded, you must pay customs duty in any case.',
    vatAllowanceText16:
      'Please also note that certain goods (e.g. counterfeits, weapons and certain plants, animals, animal products and goods subject to species protection) may also be subject to import bans or to specific restrictions. More information.',
    vatAllowanceText17: 'Application of the tax-free limit for individuals',
    vatAllowanceText18:
      'Application of the tax-free limit for more than one person',
    vatAllowanceText19:
      'One person can submit a joint customs declaration for several people travelling together (e.g. relatives, friends or acquaintances). The person making the declaration thus assumes responsibility for the customs declaration. He or she must therefore pay any duties and taxes due and incurs criminal law liability in the event of undeclared goods being found and criminal proceedings being initiated subsequently.',
    vatAllowanceText20:
      'Please note: If the total value of all of the goods being carried exceeds the sum of the tax-free limits of the people travelling together, the person making the declaration is not entitled to the tax-free limit.',
    vatAllowanceText21:
      'Individual items worth more than CHF 300 are always subject to VAT also when carried by several people.',
    vatAllowanceText22: 'Individual items worth more than CHF 300',
    vatAllowanceText23:
      'The following applies when determining whether an item with an individual value of more than CHF 300 or several items under CHF 300 are involved:',
    vatAllowanceText24:
      'For unmounted or non-assembled goods: \none sales unit = one item',
    vatAllowanceText25:
      'For mounted or assembled goods:\n' +
      'mounted or assembled goods = one item (even if the individual components are shown separately on the invoice)',
    vatAllowanceText26: 'Examples:',
    vatAllowanceText27:
      '1.\tThe invoice for the purchase of a computer is as follows:',
    vatAllowanceText28: '1 desktop PC\t\tCHF\t\t700',
    vatAllowanceText29: '1 screen\t\tCHF\t\t200 ',
    vatAllowanceText30: '1 keyboard\t\tCHF\t\t20',
    vatAllowanceText31: 'Total\tCHF 920',
    vatAllowanceText32: '= 3 items (three sales units)',
    vatAllowanceText33:
      '2.\tThe invoice for the purchase of a computer is as follows:',
    vatAllowanceText34: '1 computer',
    vatAllowanceText35: 'desktop PC',
    vatAllowanceText36: 'screen',
    vatAllowanceText37: 'keyboard',
    vatAllowanceText38: 'Total\tCHF 920',
    vatAllowanceText39: '= 1 item (one sales unit)',
    vatAllowanceText40:
      '3.\tThe invoice for the purchase of a pair of glasses is as follows:',
    vatAllowanceText41: '2 lenses\t\t2 units à CHF 200\t\tCHF 400',
    vatAllowanceText42: '1 frame\t\tCHF 300',
    vatAllowanceText43: 'Total\t\tCHF 700',
    vatAllowanceText44: '1 item (one assembled item)',
  },

  dutyAllowance: {
    dutyAllowanceMainText:
      'Duty-free allowances: foodstuffs, alcohol and tobacco',
    dutyAllowanceText1:
      'Goods that you import for your personal use or as gifts are duty-free, except in the case of so-called sensitive goods, excess quantities of which are subject to customs duty for agricultural or health policy reasons (see table below). Duty-free allowances are applied per person per day.',
    dutyAllowanceText2:
      'Please note: If the total value of the goods you have (including the value of all foodstuffs) exceeds CHF 300, you will have to pay VAT in any case. More information.',
    dutyAllowanceText3:
      'Please also note that additional restrictions exist for certain animal products, as well as for certain plant products.',
    dutyAllowanceText4: 'Meat and meat preparations',
    dutyAllowanceText5:
      'Derived from all animal species, excluding game, fish, crustaceans, molluscs and other aquatic invertebrates. These include:',
    dutyAllowanceText6: 'all edible animal body parts (with or without bones)',
    dutyAllowanceText7: 'sausages made from meat or blood',
    dutyAllowanceText8: 'other meat products',
    dutyAllowanceText9:
      'food preparations containing more than 20% sausage, meat or blood by weight',
    dutyAllowanceText10:
      'Bone marrow, bones for stock, and dog and cat food in individual packets designated as animal feed are not included.',
    dutyAllowanceText11:
      'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited',
    dutyAllowanceText12: 'Duty-free allowances per person per day:',
    dutyAllowanceText13: 'total 1kg',
    dutyAllowanceText14: 'Customs duties in CHF for excess quantities',
    dutyAllowanceText15: 'up to 10kg: CHF 17 per kg',
    dutyAllowanceText16: 'more than 10kg: CHF 23 per kg',
    dutyAllowanceText17: 'Butter and cream',
    dutyAllowanceText18:
      'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.',
    dutyAllowanceText19: 'Duty-free allowances per person per day:',
    dutyAllowanceText20: 'total 1kg/litre',
    dutyAllowanceText21: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText22: 'CHF 16 per kg/litre',
    dutyAllowanceText23: 'Oils, fats, margarine for human consumption',
    dutyAllowanceText24:
      'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.',
    dutyAllowanceText25: 'Duty-free allowances per person per day:',
    dutyAllowanceText26: 'total 5kg/litre',
    dutyAllowanceText27: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText28: 'CHF 2 per kg/litre',
    dutyAllowanceText29: 'Alcoholic beverages',
    dutyAllowanceText30:
      'Duty-free allowances per person per day:\n' +
      '(only for people aged 17 or older)',
    dutyAllowanceText31:
      'alcohol content by volume of up to 18%: total 5 litres and',
    dutyAllowanceText32:
      'alcohol content by volume of more than 18%: total 1 litre',
    dutyAllowanceText33: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText34:
      'alcohol content by volume of up to 18%: CHF 2 per litre',
    dutyAllowanceText35:
      'alcohol content by volume of more than 18%: CHF 15 per litre',
    dutyAllowanceText35a:
      'Beverages with an alcohol content by volume of not more than 0.5% are not considered as alcoholic beverages.',
    dutyAllowanceText36: 'Tobacco products',
    dutyAllowanceText37:
      'Duty-free allowances per person per day:\n' +
      '(only for people aged 17 or older',
    dutyAllowanceText38: 'cigarettes/cigars: total 250 units or',
    dutyAllowanceText39: 'other tobacco goods: total 250g',
    dutyAllowanceText40: 'or a proportional selection of these products',
    dutyAllowanceText41: 'Customs duties in CHF for excess quantities:',
    dutyAllowanceText42: 'cigarettes/cigars: CHF 0.25 per unit',
    dutyAllowanceText43: 'other tobacco goods: CHF 0.10 per gram',
    dutyAllowanceText44: 'Other foodstuffs and goods',
    dutyAllowanceText45:
      'The importation of animal products from countries other than EU member states, Iceland and Norway is prohibited.\n' +
      'Duty-free',
    dutyAllowanceText46:
      'Items ordered abroad that are delivered by post or courier',
    dutyAllowanceText47:
      'Other provisions apply for goods that are ordered abroad (e.g. online) and are delivered by post or courier. More information.',
    dutyAllowanceText48: 'More information',
  },

  personalEffects: {
    personalEffectsMainText: 'Personal effects and travel provisions',
    personalEffectsText1:
      'You can import personal effects and travel provisions duty-free:',
    personalEffectsText2: 'Personal effects',
    personalEffectsText3: 'These include personal effects which:',
    personalEffectsText4:
      'travellers living in Switzerland take along when going abroad;',
    personalEffectsText5:
      'travellers who live abroad use during their stay in Switzerland and take back when they leave. Included are items of clothing, underwear, toiletries, sports gear, photo and film cameras, camcorders, mobile phones, portable computers, musical instruments and other personal consumer items.',
    personalEffectsText6: 'Travel provisions',
    personalEffectsText7:
      'The term travel provisions refers to foodstuffs that are ready to eat and non-alcoholic beverages for the day of travelling.',
  },

  foreignVat: {
    foreignVatMainText: 'Refund of foreign VAT',
    foreignVatText1:
      "Switzerland's Customs Administration cannot refund foreign VAT to you.",
    foreignVatText2:
      'If you are personally bringing goods purchased abroad to Switzerland, you often have the option of having the foreign VAT refunded by the foreign seller or a tax refund company. These service companies have nothing to do with the Federal Customs Administration; in particular, they do not operate on our behalf.',
    foreignVatText3:
      'Different rules apply to VAT refunds in different countries. If need be, the seller completes a refund form, on which the foreign customs authority confirms exportation to Switzerland.',
    foreignVatText4:
      'Unfortunately, we are unable to provide you with more detailed information concerning the refund of foreign VAT. If need be, the relevant foreign customs authority will be able to assist you. Foreign customs authorities can be found at the following link to the World Customs Organization:',
    foreignVatText5:
      'Swiss VAT must be paid even if foreign VAT is not refunded. There are no double taxation agreements in the area of value added tax.',
  },

  animals: {
    animalsMainText: 'Animals: pets, dogs, cats and horses',
    animalsText1:
      'For dogs, cats, other pets and horses, you can obtain information from the Federal Food Safety and Veterinary Office FSVO:',
    animalsText2: 'Duties',
    animalsText3:
      'If the tax-free limit of CHF 300 is exceeded, you have to pay VAT for animals. More detailed information can be found at:',
    animalsText4: 'Tax-free limit CHF 300',
  },

  plants: {
    plantsMainText: 'Plants',
    plantsText1:
      '1.\tProhibited plants and plant products\n' +
      'The importation of the following plants is prohibited because they could be carriers of harmful organisms (fireblight, chestnut blight, viral diseases, etc.):',
    plantsText2: 'a) Importation from all countries prohibited',
    plantsText3: 'Miniature medlars (Cotoneaster)',
    plantsText4: 'Photinias – Photinia davidiana (syn. Stranvaesia davidiana)',
    plantsText5:
      'b) Importation prohibited from all states except for EU member states, Iceland and Norway',
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
    plantsText20:
      'Drupaceous trees (apricot, cherry, almond, peach, plum and damson) and all flowering types of the prunus variety',
    plantsText21: 'Hawthorns (Crataegus) all types and varieties',
    plantsText22: 'Loquats (Eriobotrya)',
    plantsText23: 'Flowering quince or quince (Chaenomeles)',
    plantsText24: 'Citrus plants (Citrus)',
    plantsText25:
      '2.\tOther plants and plant products (also fruits and vegetables)',
    plantsText26:
      'a) Importation from EU member states, Norway and Iceland\n' +
      'You can import plants without authorisation provided these are imported in tourist traffic and are intended for personal use.',
    plantsText27:
      'Importation from all states other than EU member states, Norway and Iceland\n' +
      'Plants (living or as plant products) may be subject to an import permit obligation.',
    plantsText28:
      'If you wish to import plants from these countries, first clarify the regulations with the Federal Office for Agriculture: www.blw.admin.ch.',
    plantsText29:
      'Exception: cut flowers and bouquets up to 3 kg maximum per person and fruits and vegetables (excluding potatoes) up to 10kg overall can be imported without the application of phytosanitary measures.',
    plantsText30: 'Duties',
    plantsText31:
      'If the tax-free limit of CHF 300 is exceeded, you have to pay VAT for plants. Detailed information can be found at: Tax-free limit CHF 300.',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText:
      'Souvenirs and species protection (CITES)',
    souvenirsAndSpeciesProtectionText1: 'Souvenirs',
    souvenirsAndSpeciesProtectionText2:
      'Elephant leather belts, dream catchers with bird-feathers or sandalwood joss sticks – there are all sorts of souvenirs. People do not always realise that the items are made using protected animals or plants (e.g. tropical timber). Yet many things may not be brought into Switzerland at all. Even before going away, it is worth clarifying which souvenirs are suitable and which are best left behind at the holiday resort.',
    souvenirsAndSpeciesProtectionText3: 'Species protection – animals',
    souvenirsAndSpeciesProtectionText4:
      'The importation of protected animals or products thereof is either completely prohibited or is subject to authorisation (this includes e.g. snakes, lizards, tortoises, parrots, ivory, tortoise-shell and various fur skins).',
    souvenirsAndSpeciesProtectionText5:
      'Upon importation, an export permit or a re-exportation certificate issued by the CITES authority in the country of origin must be submitted to the CITES control office.',
    souvenirsAndSpeciesProtectionText6: 'Species protection – plants',
    souvenirsAndSpeciesProtectionText7:
      'The importation of protected plants or products thereof is either completely prohibited or is subject to authorisation (e.g. orchids, cacti, certain types of wood and medicinal plants).',
    souvenirsAndSpeciesProtectionText8:
      'Information and authorisations are provided by the Federal Food Safety and Veterinary Office FSVO: www.blv.admin.ch',
  },

  highwayVignette: {
    highwayVignetteMainText: 'Motorway tax sticker',
    highwayVignetteText1:
      'A charge is payable for using motor vehicles and trailers of up to 3.5 tonnes each on motorways. The price of the motorway tax sticker is CHF 40.',
    highwayVignetteText2: 'Points of sale',
    highwayVignetteText3:
      'In Switzerland, the motorway tax sticker can be obtained at post offices and petrol stations, for example.',
    highwayVignetteText4:
      'You can get a motorway tax sticker from Customs staff at manned border crossings. You can pay with a credit card or cash (CHF, EUR, USD, GBP).',
    highwayVignetteText5:
      'The motorway tax sticker is obtainable abroad from motoring organisations; in the vicinity of the Swiss border, it is also available at motorway petrol stations and kiosks or "Trafiken" in Austria.',
    highwayVignetteText6: 'Affixing the motorway tax sticker',
    highwayVignetteText7:
      'The motorway tax sticker is valid only if it is affixed to the vehicle:',
    highwayVignetteText8:
      'In the case of passenger cars, to the inside of the windscreen (not behind the tinted section)',
    highwayVignetteText9:
      'In the case of trailers and motor bikes, to an easily accessible and non-replaceable part.',
    highwayVignetteText10:
      'Motorway tax stickers which have only been affixed using sticky tape or in any other way are invalid. You will be fined CHF 200 if you travel on the motorway with an invalid motorway tax sticker or without one. You will also have to purchase a motorway tax sticker and affix it to the vehicle.',
  },

  roadTax: {
    roadTaxMainText:
      'Road traffic fees over 3.5T (lump-sum heavy vehicle charge, or PSVA)',
    roadTaxText1:
      'In Switzerland, a heavy vehicle charge is levied for vehicles and trailers with a total weight of over 3.5 tonnes. The charge is levied as a daily lump sum for buses, heavy motorhomes, heavy passenger vehicles and their trailers over 3.5 tonnes.',
    roadTaxText2:
      'Unlike the motorway tax sticker for passenger cars, the heavy vehicle charge is payable on the entire road network, and not only on motorways.',
    roadTaxText3: 'For heavy goods vehicles and their trailers, see:',
    roadTaxText4:
      'Please note: The vehicle is subject to the lump-sum heavy vehicle charge even if it is only parked and not driven (e.g. motorhome on a campsite).',
    roadTaxText5: 'Payment and rates',
    roadTaxText6:
      'The calculation is based on the total weight and/or the towing weight of the tractor unit (in accordance with the vehicle registration document) and the applicable period.',
    roadTaxText7: 'The following PSVA payment options exist:',
    roadTaxText8: 'Between one and thirty consecutive days',
    roadTaxText9: 'Ten freely chosen days during a given year',
    roadTaxText10: 'Between one and eleven consecutive months',
    roadTaxText11: 'One year',
    roadTaxText12:
      'The rates can be found in form number 15.91. You can obtain the form from customs offices. In the case of foreign vehicles, we collect the heavy vehicle charge at the border when entering Switzerland. The stamped form serves as proof of payment. If you extend your stay in Switzerland, report to a Swiss customs office.',
    roadTaxText13: 'Please note:',
    roadTaxText14: 'Minimum charge per proof of payment: CHF 25.',
    roadTaxText15:
      'Monthly and annual rates in accordance with form number 15.91.',
    roadTaxCategory1: 'Company cars, coaches and articulated buses',
    roadTaxCategory2: 'Motor caravan or camper',
    roadTaxCategory3: 'Caravan',
    roadTaxCategory4: 'Heavy passenger cars',
    roadTaxCategory5:
      'Trailers of over 3.5 tonnes pulled by the above vehicles or light motor vehicles',
    costPerDay: 'Cost per day:',
    commonRates: 'The most common rates',
    vehicleTariffs: 'For the following vehicles these tariffs apply:',
    per100kgTrailerLoad: 'per 100 kg trailer load',
    till: 'up to',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: 'Fuel and repairs',
    fuelAndRepairsText1: 'Fuel for vehicles',
    fuelAndRepairsText2:
      'The contents of the fuel tank are tax and duty-free. In addition, you can import up to 25 litres of fuel tax and duty-free in a spare fuel container. You will have to pay CHF 0.75 customs duty for each additional litre, as well as VAT on the value of the fuel.',
    fuelAndRepairsText3: 'Repair and maintenance costs',
    fuelAndRepairsText4:
      'If the duty-free limit of CHF 300 is exceeded, you have to pay VAT for all repair and maintenance costs (repairs to vehicles, electronic devices, furniture, jewellery, etc.). More detailed information can be found at:',
    fuelAndRepairsText5: 'Tax-free limit CHF 300',
  },

  entryByTrain: {
    entryByTrainMainText: 'Entry by train',
    entryByTrainText1:
      'If there are Customs agents on the train, all goods you are carrying must be spontaneously declared for customs clearance. You can clear goods intended for your personal use or as gifts with the app QuickZoll before crossing the border. These declarations are binding.',
    entryByTrainText2:
      'If no Customs staff are present and you do not want to use the app QuickZoll for customs clearance, you can do the following:',
    entryByTrainText3:
      'get off the train at the border train station and declare your personal goods in writing (written self-declaration at a declaration box); or',
    entryByTrainText4:
      'declare the goods later on (within 7 days) at any customs office during opening hours.',
    entryByTrainText5:
      'Please note: On certain regional trains, you may only bring with you personal goods that:',
    entryByTrainText6:
      'are within the duty-free allowances and the tax-free limit of CHF 300; or',
    entryByTrainText7: 'you cleared with the app QuickZoll.',
    entryByTrainText8:
      'In both cases, the goods must not be subject to any restrictions and bans, and they must not require a certificate or authorisation.',
    entryByTrainText9:
      'Please pay attention to the symbols on the train or the loudspeaker announcements.',
  },

  forgery: {
    forgeryMainText: 'Forgeries',
    forgeryText1:
      'It is prohibited to import counterfeited brands and designs. Swiss Customs agents are obliged to confiscate and destroy fakes. It does not matter whether the items are new or used.',
    forgeryText2: 'Buying jewellery and watches abroad',
    forgeryText3:
      'Be particularly careful when buying jewellery or watches abroad. Upon inspection, apparent bargains often turn out to be defective or even forgeries.',
    forgeryText4: 'Identifying counterfeit jewellery and counterfeit watches',
    forgeryText5:
      'Even an expensive piece of jewellery can prove to be a forgery. An indication of the fineness does not guarantee that the goods are genuine. Buy jewellery and watches only in authorised specialist shops.',
    forgeryText6:
      'Further information on product piracy and counterfeits can be obtained from the Swiss Anti-Counterfeiting and Piracy Platform STOP PIRACY:',
  },

  cash: {
    cashMainText: 'Liquid funds',
    cashText1:
      'In the case of the importation, transit and exportation of liquid funds (cash and securities, etc.) worth more than CHF 10,000, you must supply information upon request on the origin, the intended use and the beneficial owner.',
    cashText2:
      'The right is reserved to take further measures to combat crime.',
  },

  food: {
    foodMainText: 'Restrictions for foodstuffs',
    foodText1:
      'Goods of animal origin for personal use may be imported from EU member states, Iceland and Norway without controls by a border vet. The goods may not be put on sale.',
    foodText2:
      'The importation of goods of animal origin from other countries is generally prohibited.\n' +
      'Exceptions for certain foodstuffs can be found on the FSVO website:',
    foodText3: 'Foodstuffs in tourist traffic',
    foodText4: 'Additional restrictions for protected animal species',
    foodText5:
      'The importation of products of animal origin from protected animal species is prohibited from all countries. In tourist traffic, there is an import tolerance of 125g per person per day for sturgeon caviar.',
    foodText6: 'Customs duties and VAT',
    foodText7:
      'If the tax-free limit of CHF 300 or the duty-free allowances for certain foodstuffs are exceeded, you must pay VAT and/or customs duty. More detailed information can be found at:',
    foodText8: 'Tax-free limit CHF 300',
    foodText9: 'Duty-free allowances: foodstuffs, alcohol and tobacco',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText:
      'Authorisation requirement / restrictions',
    authorisationRequirementsText1:
      'The importation of certain goods is restricted and is possible only under certain conditions (e.g. with prior authorisation), and even complete import bans are applicable in the case of some products.',
    authorisationRequirementsText2:
      'The following goods in particular are subject to restrictions (non-exhaustive list):',
    authorisationRequirementsText3:
      'Weapons (e.g. firearms, knives, stun guns, tear gas sprays, truncheons, etc.)',
    authorisationRequirementsText4: 'Speed camera warning devices',
    authorisationRequirementsText5: 'Narcotics',
    authorisationRequirementsText6:
      "Medications amounting to more than a month's personal supply",
    authorisationRequirementsText7: 'Doping substances',
    authorisationRequirementsText8: 'Goods containing depictions of violence',
    authorisationRequirementsText9:
      'Goods containing prohibited depictions of pornography',
    authorisationRequirementsText10:
      'Counterfeited branded and designer articles, pirated copies',
    authorisationRequirementsText11: 'Cultural property',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText:
      'Online shopping, postal and courier consignments',
    purchasesOnlineOfflineText1:
      'Consignments from abroad are generally subject to customs duty and value added tax (VAT). We show you below how you can roughly calculate the costs and what to consider when importing.',
    purchasesOnlineOfflineText2:
      'Please note that a definitive calculation is not possible, as the costs of the transporter, e.g. Swiss Post, are not known in advance. The costs are generally billed to the recipient together with the customs duty and taxes (e.g. VAT). This should be clarified with the corresponding transporter.',
    purchasesOnlineOfflineText3:
      'Gift items sent by private individuals abroad to private individuals in Switzerland are exempt from duties and tax up to a merchandise value of CHF 100, but not in the case of tobacco products and alcoholic beverages. The sender must label the outside of the parcel or letter accordingly.',
    purchasesOnlineOfflineText4: 'Sample calculation – taxable value of goods',
    purchasesOnlineOfflineText5:
      'You ordered a handheld vacuum cleaner from a German online shop. The purchase price was EUR 150.00 (net amount, excluding foreign VAT). An additional EUR 12.50 had to be paid to the online shop for dispatch to Switzerland. The overall payment to the online shop was EUR 162.50.',
    purchasesOnlineOfflineText6:
      'Total amount according to the online shop invoice',
    purchasesOnlineOfflineText7: 'Amount in CHF: 198.25',
    purchasesOnlineOfflineText8:
      'Comments: EUR 162.50 converted into CHF at a rate of 1.22.',
    purchasesOnlineOfflineText9: 'Swiss Post costs for customs declaration',
    purchasesOnlineOfflineText10: 'Amount in CHF: 17.95',

    purchasesOnlineOfflineText11:
      'Swiss Post costs for opening the consignment',
    purchasesOnlineOfflineText12: 'Amount in CHF: 13.00',

    purchasesOnlineOfflineText13:
      'The sender did not provide sufficient details on the contents of the parcel, which is why Swiss Post had to open it for clearance.',
    purchasesOnlineOfflineText14: 'Total taxable value of goods',
    purchasesOnlineOfflineText15: 'Amount in CHF: 229.00',

    purchasesOnlineOfflineText16:
      'VAT is calculated based on this amount (rounded to the nearest franc).',
    purchasesOnlineOfflineText17:
      'Please note: This sample calculation is a general calculation for duty-free goods.',
  },

  information: {
    informationTitle: 'Information',
    informationSubCategoryTitle: 'I have animals or plants with me',
    customsProceduresMainText: 'Proceeding at the customs',
    travelDocumentsMainText: 'Travel documents',
    declarationMainText: 'I have goods with me',
    animalsAndPlantsMainText: 'I have animals or plants with me',
    vehiclesMainText: 'I am driving a vehicle',
    entryByTrainMainText: 'Entry by train',
    prohibitionsAndRestrictionsMainText: 'Bans and restrictions',
    highwayVignetteMainText: 'Motorway tax sticker',
    roadTaxMainText:
      'Road traffic fees over 3.5T (lump-sum heavy vehicle charge, or PSVA)',
    fuelAndRepairsMainText: 'Fuel and repairs',
    forgeryMainText: 'Forgeries',
    cashMainText: 'Liquid funds',
    foodMainText: 'Restrictions for foodstuffs',
    authorisationRequirementsMainText:
      'Authorisation requirement / restrictions',
    purchasesOnlineOfflineMainText:
      'Online shopping, postal and courier consignments',
  },
  appInformation: {
    appInfoTitle: 'About the app',
    leftTabText: 'Imprint',
    rightTabText: 'Development',
    publisher: 'Publisher',
    customsAdministrationAddressTitle: 'Federal Customs Administration',
    contact: 'Contact',
    customsInfoCenter: 'Customs Information Center\n058 467 15 15',
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
    toContactForm: 'To contact form',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Information about using the app',
    conditions: 'Framework Conditions',
    importantSoon: 'Brief summary',
    importantSoonText1: 'The app can be used entirely offline until payment.',
    importantSoonText2:
      'You may enter Switzerland once per calendar day with goods which you have cleared using QuickZoll.',
    importantSoonText3:
      'You may use QuickZoll only for goods that you import for your personal use or as gifts.',
    importantSoonText4:
      'By using QuickZoll, you accept that the VAT rate of 7.7% is applied including for goods that are subject to the reduced tax rate (2.5%, in particular food, animal feed, medications and books). If you would like the reduced tax rate to be applied, you must declare the goods verbally at a border crossing manned by Federal Customs Administration (FCA) staff.',
    importantSoonText5:
      'Payment is only possible using a credit card (Visa, MasterCard). The goods are cleared through customs after payment of the duties.',
    importantSoonText6:
      'Customs clearance is only possible 48 hours before crossing the border at the earliest and must take place at the latest at the border crossing point.',
    importantSoonText7:
      'After customs clearance with QuickZoll, you may enter Switzerland using any official border crossing, regardless of whether or not FCA staff are present. In airports, you may use the green channel at airports.',
    importantSoonText8:
      'The receipt must be presented to FCA staff upon request. The staff take a photo of the receipt if necessary.',
    importantSoonText9: 'No registration is required. No data is collected.',
    importantSoonBoldText1: 'Duties paid with the app will not be refunded.',

    howToDeclareYourGoods: 'How to clear your goods through customs:',
    howToDeclareYourGoodsText1:
      'Declare all transported goods (except personal effects and travelling provisions). The applicable duty-free allowances and the tax-free limit are automatically deducted during customs clearance.',
    howToDeclareYourGoodsText2:
      "Enter the value in the foreign currency according to the payment document. The value is converted using the preceding day's (last working day) exchange rate (forex sell rate).",
    howToDeclareYourGoodsText3:
      'Set a two-hour timeframe for your border crossing. The receipt is valid only during this timeframe. If you are unable to comply with the selected timeframe, you must report to a border crossing manned by FCA staff and explain why you were unable to enter during the validity period. Duties will be levied again without credible justification.',
    howToDeclareYourGoodsText4:
      'All persons to whom the receipt applies must enter together.',
    howToDeclareYourGoodsText5:
      'You can correct your declaration at any time before paying. No further corrections are possible in QuickZoll after paying. After paying for additional foreign goods purchased, you must declare them at a border crossing manned by FCA staff.',
    howToDeclareYourGoodsText6:
      'To successfully complete the payment process, an internet connection is required. If customs clearance with QuickZoll is not possible (e.g. no internet connection or payment by credit card is not possible), you must declare the goods at a border crossing manned by FCA staff or via a declaration box.',
    howToDeclareYourGoodsText7:
      'Please make sure that you can display the receipt on your mobile device during controls when crossing the border. Please note that, during the validity period of the receipt, a picture of the receipt that is forwarded to third parties via WhatsApp, iMessage, SMS or email will not be accepted as a receipt. The receipt must be retained for at least one year.',

    specialCases: 'Special cases',
    specialCasesText1:
      'The following goods cannot be cleared using QuickZoll. You must declare the goods at a border crossing manned by FCA staff in any case.',
    specialCasesText2:
      'Goods which are subject to restrictions or bans and which require a certificate or authorisation (e.g. weapons, live animals and products governed by species protection);',
    specialCasesText3: 'further information',
    specialCasesText4:
      'Goods for private use or as gifts worth a total of CHF 20,000.00 or more;',
    specialCasesText5:
      'Goods that you wish to declare at the reduced VAT rate;',
    specialCasesText6:
      'Goods that you are not importing for your personal use or as gifts (e.g. goods that are intended for trade);',
    specialCasesText7: 'Vehicles, vehicle repairs and fuel;',
    specialCasesText8:
      'Household effects, wedding trousseaux and inherited property;',
    specialCasesText9:
      'Goods that are only temporarily imported into Switzerland;',
    specialCasesText10: 'Goods intended for transit through Switzerland.',
    specialCasesText11:
      'Goods that are being exported from Switzerland and for which you require export confirmation',
    specialCasesText12:
      '(information concerning the refund of Swiss VAT and tax-free shopping in Switzerland can be found here ).',

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
      'Please note that\n' +
      '• you may enter Switzerland once per calendar day with goods which you have cleared using QuickZoll;\n' +
      '• declared goods are cleared using the single VAT rate of 7.7%;\n' +
      '• duties paid with the app will not be refunded.\n' +
      'Further information can be found here:',
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
