// @flow
import type { LocaleType } from '../types/locale';
import {
  makeLocaleRecord,
  makeGeneralNSRecord,
  makeOnBoardingNSRecord,
  makeQAFlowNSRecord,
  makeModalNSRecord,
  makeCategoriesNSRecord,
  makeMainCategoriesNSRecord,
  makeMainCategoriesInputNSRecord,
  makeQuantityInputNSRecord,
  makePeopleInputNSRecord,
  makePaymentNSRecord,
  makeReceiptNSRecord,
  makeInformationNSRecord,
  makeAmountInputNSRecord,
} from '../types/locale';

export const de: LocaleType = makeLocaleRecord({
  categories: makeCategoriesNSRecord({
    Meat: 'Fleisch & Fleischzubereitung',
    Butter: 'Butter & Rahm',
    Oils: 'Öle/Fette/Margarine',
    OtherFood: 'Sonstige Lebensmittel & alkoholfreie Getränke',
    AlcSoft: 'Alkohol gehalt 0.5% bis 18% Vol.',
    AlcHard: 'Alkohol gehalt über 18% Vol.',
    Cigarettes: 'Zigaretten & Zigarren',
    Tobacco: 'Andere Tabakfabrikate',
    Meds: 'Medikamente',
    Books: 'Bücher',
    Magazines: 'Zeitschriften',
    Flowers: 'Schnittblumen & Pflanzen',
    AnimalFeed: 'Tierfutter',
    Fertilizer: 'Dünger',
    Other: 'Sonstige Waren',
  }),
  mainCategories: makeMainCategoriesNSRecord({
    Foods: 'Lebensmittel',
    Alcohol: `Alkohol`,
    TobaccoProducts: 'Tabak',
    OtherGoods: 'Anderes',
  }),
  general: makeGeneralNSRecord({
    declareGoods: 'Waren anmelden',
    pleaseSelect: 'Bitte auswählen',
    receipts: 'Quittungen Schweizer Zoll',
    guideline: 'Ihr Weg durch den Schweizer Zoll',
    information: 'Informationen zum Gebrauch der App',
    navbarFirst: 'Ihre Reise',
    navbarSecond: 'Bezahlung',
    navbarThird: 'Zollschein',
    customsDuty: 'Zollabgabe',
    customsVat: 'MWSt',
    goodCategories: 'Warenkategorien',
    confirm: 'Übernehmen',
    toPayment: 'Zur Bezahlung',
    buttonContinue: 'Weiter',
    buttonBack: 'Zurück',
  }),
  onBoarding: makeOnBoardingNSRecord({
    welcome: 'Willkommen zu',
    onBoardingMessage:
      'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
    selectLanguage: 'Wählen Sie eine andere Sprache',
    confirmationVat:
      'Hiermit bestätige ich, dass ich den einheitlichen Mehrwertsteuersatz von ',
    confirmationVat2: 'bei der Verzollung von Waren akzeptiere.',
    vatInformation: 'Weitere Informationen',
  }),
  peopleInput: makePeopleInputNSRecord({
    peopleInputQuestion:
      'Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?',
  }),
  mainCategoriesInput: makeMainCategoriesInputNSRecord({
    mainCategoriesQuestion: 'Welche Art Waren führen Sie mit sich?',
  }),
  quantityInput: makeQuantityInputNSRecord({
    quantityInput: 'Mengeneingabe',
  }),
  amountInput: makeAmountInputNSRecord({
    amountInput: 'Betragseingabe',
    amountInputLargeItem: 'Betragseingabe (Waren über CHF {{value}})',
    amountInputMoreThan300Text:
      'Erfassen Sie hier jeden Gegenstand, der mehr als 300.00 CHF wert ist.',
    amountInputAddItem: 'Gegenstand hinzufügen',
  }),
  qaFlow: makeQAFlowNSRecord({
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
    validateMainCategoryRemoveYes: 'Ja - löscht entsprechende Mengen',
  }),
  modal: makeModalNSRecord({
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
    savedBasketDoYoWantToContinue:
      'Möchten Sie mit dem bereits bestehenden Warenkorb fortfahren oder mit einem leeren Warenkorb neu starten?',
    savedBasketTotalCost: 'Gesamtkosten: CHF {{value}}',
    savedBasketNewShoppingCart: 'Neuer Warenkorb',
  }),
  payment: makePaymentNSRecord({
    overViewTitle: 'Übersicht ihrer Anmeldung',
    dutyColumn: 'Zollabgabe in CHF',
    sumText: 'Summe (CHF)',
  }),
  receipt: makeReceiptNSRecord({
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
  }),

  information: makeInformationNSRecord({
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
  }),
});
