// @flow
import type { Locale } from '../types/locale';

export const it: Locale = {
  categories: {
    Meat: 'Carne e preparazioni di carne',
    Butter: 'Burro e panna',
    Oils: 'Oli, grassi e margarina',
    OtherFood: 'Altre derrate alimentari e bevande non alcoliche',
    AlcSoft: 'Tenore alcolico 0,5 %–18 % vol.',
    AlcHard: 'Tenore alcolico superiore al 18 % vol.',
    Cigarettes: 'Sigarette e sigari',
    Tobacco: 'Altri tabacchi manufatti',
    Meds: 'Medicamenti',
    Books: 'Libri',
    Magazines: 'Riviste',
    Flowers: 'Fiori recisi e piante',
    AnimalFeed: 'Alimenti per animali',
    Fertilizer: 'Concimi',
    Other: 'Altre merci',
  },
  mainCategories: {
    Meat: 'Carne e preparazioni di carne',
    Butter: 'Burro e panna',
    Oil: 'Oli, grassi e margarina',
    Alcohol: 'Tenore alcolico',
    TobaccoProducts: 'Tabacchi manufatti',
    OtherGoods: 'Altre merci',
  },
  general: {
    declareGoods: 'Dichiarare le merci',
    pleaseSelect: 'Selezionare',
    receipts: 'Giustificativi della dogana svizzera',
    guideline: 'Attraversare la dogana svizzera',
    information: 'Informazioni sull’utilizzo dell’app',
    navbarFirst: 'Il mio viaggio',
    navbarSecond: 'Pagamento',
    navbarThird: 'Giustificativi',
    customsDuty: 'Tributi doganali',
    customsVat: 'IVA',
    goodCategories: 'Categorie di merci',
    confirm: 'Riprendere',
    toPayment: 'Pagamento',
    buttonContinue: 'Avanti',
    buttonBack: 'Indietro',
  },
  snackBar: {
    limitExceeded: '🈯',
    showBorder: '🈯',
  },
  onBoarding: {
    welcome: 'Benvenuti a',
    onBoardingMessage:
      'La lingua è stata definita sulla base delle impostazioni attuali del sistema.',
    selectLanguage: 'Selezionare un’altra lingua',
    confirmationVat: ' Confermo di accettare l’aliquota IVA unica di',
    confirmationVat2: 'all’atto dell’imposizione delle merci',
    vatInformation: 'Maggiori informazioni',
  },
  peopleInput: {
    peopleInputQuestion: 'L’imposizione concerne quanti viaggiatori?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Quali merci si desidera dichiarare?',
  },
  quantityInput: {
    quantityInput: 'Inserimento delle quantità',
  },
  amountInput: {
    amountInput: 'Inserire qui il valore complessivo delle merci trasportate.',
    amountInputLargeItem:
      'Vengono trasportati singoli oggetti con valore superiore a {{value}} franchi?',
    amountInputLargeItemGreyBox:
      'Inserire qui tutti gli oggetti con valore superiore a 300 franchi.',
    amountInputAddItem: 'Aggiungere valore',
    amountInputAddItemLarge: 'Aggiungere oggetto',
    amountInputEnterValue:
      'Inserire il valore senza IVA estera (valore netto).',
    currentTotalValue: ' Valore complessivo attuale:',
    lastExchangeRate:
      ' Sulla base dell’ultimo corso del cambio disponibile, aggiornato al momento del pagamento.',
  },
  qaFlow: {
    declareGoods: ' Dichiarare le merci',
    toOverview: 'Tornare alla panoramica',
    adult: 'Adulti',
    adultInfo: 'Maggiori di 17 anni',
    adultCount: '{{value}} adulto',
    adultCount_plural: '{{value}} adulti',
    minor: 'Bambini e adolescenti',
    minorInfo: 'sotto i 17 anni',
    minorCount: '{{value}} bambino (sotto i 17 anni)',
    minorCount_plural: '{{value}} bambini (sotto i 17 anni)',
    validateNoAdultsTitle: 'Nessun adulto',
    validateNoAdultsSubtitle: 'Garantire la legittimità.',
    validateGenericYes: 'Sì',
    validateGenericNo: 'No',
    validateMainCategoryRemoveTitle:
      ' Confermare la cancellazione di questa categoria principale?',
    validateMainCategoryRemoveSubtitle:
      'Al momento determinate sottocategorie contengono delle quantità, ovvero: {{value}}',
    validateMainCategoryRemoveYes:
      'Sì, desidero eliminare le rispettive quantità.',
  },
  modal: {
    confirmPicker: 'Riprendere {{value}}',
    standardCategoryPicker: 'Quantità standard',
    individualCategoryPicker: 'Quantità esatte',
    currencyPickerTitle: 'Inserire un oggetto',
    currencyPickerLargeAmountTitle:
      'Inserire un oggetto con valore superiore a {{value}} franchi.',
    currencyPickerSubTitle:
      'Inserire il valore netto dell’oggetto nella valuta originale:',
    currencyPickerRate: 'Data del corso del cambio:',
    currencyPickerInvalidInput: 'Inserimento non valido o campo non compilato',
    currencyPickerNoOffsettingInput: 'Nessun importo corrispondente',
    currencyPickerTooSmallLargeAmount: 'Betrag zu gering',
    savedBasketDoYoWantToContinue:
      'Continuare con il carrello attuale o ricominciare con uno vuoto?',
    savedBasketTotalCost: 'Importo complessivo: CHF {{value}}',
    savedBasketNewShoppingCart: 'Nuovo carrello',
    closeModalText: 'Schliessen',
    timePickerTitle: 'Zeitraum der Einreise wählen',
    timePickerSubTitle: 'Wann möchten Sie die Grenze überqueren?',
    timePickerRegistrationValidUntil:
      'Bitte achten Sie darauf, innherhalb von zwei Stunden mit dieser Anmeldung einzureisen. Diese Anmeldung ist bis zum {{date}} um {{time}} Uhr gültig.',
    timePickerTakeOverThePeriod: 'Zeitraum übernehmen',
    timePickerTimePrefix: 'Uhr',
  },
  payment: {
    overViewTitle: ' Riepilogo della dichiarazione',
    dutyColumn: 'Tributi doganali in CHF',
    sumText: 'Totale (CHF)',
  },
  receipt: {
    dutyAndVat: 'Tributi doganali: {{duty}} | IVA: {{vat}}',
    paidOn: 'Pagamento effettuato in data {{date}} alle ore {{time}} con:',
    transactionId: 'ID della transazione (SIX): {{value}}',
    receiptValidUntilText: 'Il giustificativo è valido fino al:',
    receiptValidUntilTime: '{{date}}  |  {{time}} Orario',
    sumText: 'Totale (CHF): {{value}}',
    vatColumn: 'IVA in CHF:',
    amountsTitle: 'Valore complessivo delle merci',
    amountsSubtitle: 'Totale di tutte le ricevute d’acquisto',
    receiptStorageNotification:
      'Il presente giustificativo rimane memorizzato per un anno. Durante questo periodo, può essere visualizzato in qualsiasi momento nell’app.',
    allReceiptsNavigationHeaderTitle: 'Giustificativi della dogana svizzera',
    allReceiptsCurrentReceipt: 'Aktuelle Quittung:',
    allReceiptsOlderReceipts: 'Ältere Quittungen:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'vom {{value}}',
    entryTime: '',
    chooseOtherEntryTime: '',
  },
  information: {
    informationTitle: 'Informazioni utili',
    proceedinAtTheCustoms: 'Modo di procedere in dogana ',
    proceedinAtTheCustomsSubText:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    travelDocuments: 'Documenti di viaggio',
    travelDocumentsSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    haveGoodsWithMe: 'Trasporto merci',
    haveGoodsWithMeSubText:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    haveAnimalsOrPlantsWithMe: 'Trasporto animali o piante',
    haveAnimalsOrPlantsWithMeSubText: 'Weit hinten leben die Blindtexte.',
    travelingWithVehicle: 'Sono in viaggio con un veicolo',
    travelingWithVehicleSubText: 'Weit hinten leben die Blindtexte.',
    entryByTrain: 'Entrata nel paese con il treno',
    entryByTrainSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    allowancesFoodAlcoholTobacco: 'Freimengen: Lebensmittel, Alkohol und Tabak',
    allowancesFoodAlcoholTobaccoText:
      'Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein, sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren, für die Sie aus agrar- oder gesundheits-politischen Gründen ab einer gewissen Amount Zoll bezahlen müssen (siehe nachstehende Tabelle). Die Freimengen gelten pro Person und pro Tag.',
    prohibitions: 'Verbote und Beschränkungen',
    prohibitionsSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
  },
  appInformation: {
    appInfoTitle: 'Informazioni sull’app ',
    leftTabText: 'Colofone',
    rightTabText: 'Sviluppo',
    publisher: 'Editore',
    customsAdministrationAddressTitle:
      'Amministrazione federale delle dogane AFD',
    contact: 'Contatto',
    customsInfoCenter:
      'Centrale d’informazione dell’AFD\n058 467 15 15\nzollauskunft@ezv.admin.ch',
    reachability: 'Reperibilità:',
    workingHours: 'Montag – Freitag, 8.00 – 11.30 und 13.30 bis 17.00',
    generalCustomsDirectorate:
      'Oberzolldirektion\nMonbijoustrasse 40\n' +
      '3003 Bern\n' +
      'http://www.ezv.admin.ch',
    designAndDevelopment: 'Design e sviluppo',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Clausola di non responsabilità (disclaimer)',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: '',
    conditions: '',
    importantSoon: '',
    importantSoonText: '',
    howToDeclareYourGoods: '',
    howToDeclareYourGoodsText: '',
    legal: '',
    legalText: '',
    privacyAndLiability: '',
    dataProtection: '',
    dataProtectionText: '',
    referencesAndLinks: '',
    referencesAndLinksText: '',
    copyright: '',
    copyrightText: '',
  },
};
