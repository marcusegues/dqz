// @flow
import type { Locale } from '../types/locale';

export const de: Locale = {
  categories: {
    Meat: 'Fleisch & Fleischzub.',
    Butter: 'Butter & Rahm',
    Oils: 'Öle/Fette/Margarine',
    OtherFood: 'Sonstige Lebensmittel & alkoholfreie Getränke',
    AlcSoft: 'Alkoholgehalt 0.5% bis 18% Vol.',
    AlcHard: 'Alkoholgehalt über 18% Vol.',
    Cigarettes: 'Zigaretten & Zigarren',
    Tobacco: 'Andere Tabakfabrikate',
    Meds: 'Medikamente',
    Books: 'Bücher',
    Magazines: 'Zeitschriften',
    Flowers: 'Schnittblumen & Pflanzen',
    AnimalFeed: 'Tierfutter',
    Fertilizer: 'Dünger',
    Other: 'Sonstige Waren',
  },
  mainCategories: {
    Meat: 'Fleisch & -zub.',
    Butter: 'Butter & Rahm',
    Oil: 'Öle, Fette, Margarine',
    Alcohol: `Alkohol`,
    TobaccoProducts: 'Tabak',
    OtherGoods: 'Andere Waren',
  },
  general: {
    declareGoods: 'Waren anmelden',
    pleaseSelect: 'Bitte auswählen',
    receipts: 'Quittungen Schweizer Zoll',
    guideline: 'Ihr Weg durch den Schweizer Zoll',
    information: 'Informationen zum Gebrauch der App',
    navbarFirst: 'Ihre Reise',
    navbarSecond: 'Bezahlung',
    navbarThird: 'Quittung',
    customsDuty: 'Zollabgabe',
    customsVat: 'MWSt',
    goodCategories: 'Warenkategorien',
    confirm: 'Übernehmen',
    toPayment: 'Zur Bezahlung',
    buttonContinue: 'Weiter',
    buttonBack: 'Zurück',
  },
  onBoarding: {
    welcome: 'Willkommen zu',
    onBoardingMessage:
      'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
    selectLanguage: 'Wählen Sie eine andere Sprache',
    confirmationVat:
      'Hiermit bestätige ich, dass ich den einheitlichen Mehrwertsteuersatz von ',
    confirmationVat2: 'bei der Verzollung von Waren akzeptiere.',
    vatInformation: 'Weitere Informationen',
  },
  peopleInput: {
    peopleInputQuestion:
      'Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Welche Waren möchten Sie anmelden?',
  },
  quantityInput: {
    quantityInput: 'Mengeneingabe',
  },
  amountInput: {
    amountInput:
      'Bitte erfassen Sie hier den Wert sämtlicher mitgeführten Waren.',
    amountInputLargeItem:
      'Führen Sie einzelne Gegenstände mit einem Wert von über {{value}} Franken mit?',
    amountInputLargeItemGreyBox:
      'Erfassen Sie hier jeden Gegenstand, der mehr als CHF 300.00 wert ist.',
    amountInputAddItem: 'Wert hinzufügen',
    amountInputAddItemLarge: 'Gegenstand hinzufügen',
    amountInputEnterValue:
      'Erfassen Sie den Wert ohne ausländische Mehrwertsteuer (Nettowert).',
    currentTotalValue: 'Aktueller Gesamtwert:',
    lastExchangeRate:
      'Basierend auf dem letzten verfügbaren Wechsel-kurs, welcher beim Bezahlen aktualisiert wird.',
  },
  qaFlow: {
    declareGoods: 'Waren Deklarieren',
    toOverview: 'Zur Übersicht',
    adult: 'Erwachsene',
    adultInfo: '17+ Jahre',
    adultCount: '{{value}} Erwachsener',
    adultCount_plural: '{{value}} Erwachsene',
    minor: 'Kinder & Jugendliche',
    minorInfo: 'unter 17 Jahre',
    minorCount: '{{value}} Kind (unter 17 Jahre)',
    minorCount_plural: '{{value}} Kinder (unter 17 Jahre)',
    validateNoAdultsTitle: 'Keine Erwachsene',
    validateNoAdultsSubtitle: 'Bitte Rechtmässigkeit sicherstellen.',
    validateGenericYes: 'Ja',
    validateGenericNo: 'Nein',
    validateMainCategoryRemoveTitle:
      'Sind Sie sicher, dass Sie diese Hauptkategorie entfernen möchten?',
    validateMainCategoryRemoveSubtitle:
      'Im Moment enthalten gewisse Unterkategorien Mengen, nämlich: {{value}}',
    validateMainCategoryRemoveYes: 'Ja - ich möchte dies löschen',
  },
  modal: {
    confirmPicker: '{{value}} übernehmen',
    standardCategoryPicker: 'Standardmengen',
    individualCategoryPicker: 'Genaue Mengen',
    currencyPickerTitle: 'Gegenstand erfassen',
    currencyPickerLargeAmountTitle:
      'Gegenstand mit mehr als CHF {{value}} erfassen',
    currencyPickerSubTitle:
      'Erfassen Sie den Nettowert des Gegenstands in seiner Original-Währung: ',
    currencyPickerRate: 'Kurs vom',
    currencyPickerInvalidInput: 'Ungültige/leere Eingabe',
    currencyPickerNoOffsettingInput: 'Kein entsprechender Betrag',
    currencyPickerTooSmallLargeAmount: 'Betrag zu gering',
    savedBasketDoYoWantToContinue:
      'Möchten Sie mit dem bereits bestehenden Warenkorb fortfahren oder mit einem leeren Warenkorb neu starten?',
    savedBasketTotalCost: 'Gesamtkosten: CHF {{value}}',
    savedBasketNewShoppingCart: 'Neuer Warenkorb',
    closeModalText: 'Schliessen',
  },
  payment: {
    overViewTitle: 'Übersicht ihrer Anmeldung',
    dutyColumn: 'Zollabgabe in CHF',
    sumText: 'Summe (CHF)',
  },
  receipt: {
    dutyAndVat: 'Zollabgabe: {{duty}}  |  Mehrwertsteuer: {{vat}}',
    paidOn: 'Bezahlt am {{date}} um {{time}} Uhr mit:',
    transactionId: 'Transaktions-ID (SIX): {{value}}',
    receiptValidUntilText: 'Diese Quittung ist gültig bis:',
    receiptValidUntilTime: '{{date}}  |  {{time}} Uhr',
    sumText: 'Summe (CHF): {{value}}',
    vatColumn: 'Mehrwertsteuer in CHF:',
    amountsTitle: 'Gesamtwert der Waren',
    amountsSubtitle: 'Summe aller Kaufbelege',
    receiptStorageNotification:
      'Diese Quittung wird ein Jahr lang gespeichert. Solange können Sie die Quittung jederzeit in der App aufrufen.',
    allReceiptsNavigationHeaderTitle: 'Quittungen Schweizer Zoll',
    allReceiptsCurrentReceipt: 'Aktuelle Quittung:',
    allReceiptsOlderReceipts: 'Ältere Quittungen:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'vom {{value}}',
  },
  information: {
    informationTitle: 'Wissenswertes',
    proceedinAtTheCustoms: 'Vorgehen am Zoll',
    proceedinAtTheCustomsSubText:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    travelDocuments: 'Reisedokumente',
    travelDocumentsSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    haveGoodsWithMe: 'Ich habe Waren dabei',
    haveGoodsWithMeSubText:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    haveAnimalsOrPlantsWithMe: 'Ich habe Tiere oder Pflanzen dabei',
    haveAnimalsOrPlantsWithMeSubText: 'Weit hinten leben die Blindtexte.',
    travelingWithVehicle: 'Ich bin mit einem Fahrzeug unterwegs',
    travelingWithVehicleSubText: 'Weit hinten leben die Blindtexte.',
    entryByTrain: 'Einreise per Bahn',
    entryByTrainSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    allowancesFoodAlcoholTobacco: 'Freimengen: Lebensmittel, Alkohol und Tabak',
    allowancesFoodAlcoholTobaccoText:
      'Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein, sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren, für die Sie aus agrar- oder gesundheits-politischen Gründen ab einer gewissen Amount Zoll bezahlen müssen (siehe nachstehende Tabelle). Die Freimengen gelten pro Person und pro Tag.',
  },
  appInformation: {
    appInfoTitle: 'Über die App',
    leftTabText: 'Impressum',
    rightTabText: 'Entwicklung',
    publisher: 'Herausgeberin',
    customsAdministrationAddressTitle: 'Eidgenössische Zollverwaltung EZV',
    contact: 'Kontakt',
    customsInfoCenter:
      'Auskunftszentrale Zoll\n058 467 15 15\nzollauskunft@ezv.admin.ch',
    reachability: 'Erreichbarkeit:',
    workingHours: 'Montag – Freitag, 8.00 – 11.30 und 13.30 bis 17.00',
    generalCustomsDirectorate:
      'Oberzolldirektion\nMonbijoustrasse 40\n' +
      '3003 Bern\n' +
      'http://www.ezv.admin.ch',
    designAndDevelopment: 'Design & Entwicklung',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Disclaimer',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
  },
};
