// @flow
import type { Locale } from '../types/locale';

export const de: Locale = {
  categories: {
    Meat: 'Fleisch & Fleischzubereitungen',
    Butter: 'Butter & Rahm',
    Oils: 'Öle/Fette/Margarine',
    OtherFood: 'Sonstige Lebensmittel & alkoholfreie Getränke',
    AlcSoft: 'Alkoholische Getränke bis 18% Vol.',
    AlcHard: 'Alkoholische Getränke über 18% Vol.',
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
    Meat: 'Fleisch & Fleischzubereitungen',
    Butter: 'Butter & Rahm',
    Oil: 'Öle/Fette/Margarine',
    Alcohol: `Alkohol`,
    TobaccoProducts: 'Tabak',
    OtherGoods: 'Andere Waren',
  },
  general: {
    declareGoods: 'Waren anmelden',
    pleaseSelect: 'Bitte auswählen',
    receipts: 'Quittungen Schweizer Zoll',
    guideline: 'Einreise, was gilt es zu beachten?',
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
    note: 'Hinweis',
    underConstruction: 'In Bearbeitung',
  },
  snackBar: {
    limitExceeded:
      'Warenwert für die App überschritten. Bitte melden Sie Ihre Waren mündlich beim Grenzübergang an.',
    offline: 'Sie sind offline. Bitte überprufen Sie Ihre Verbindung.',
    showBorder: 'Grenzübergang anzeigen',
  },
  onBoarding: {
    welcome: 'Willkommen zu',
    onBoardingMessage:
      'Wir haben Ihre Sprache basierend auf Ihren aktuellen Systemeinstellungen festgelegt',
    currentLanguageMessage: 'Ihre aktuell ausgewählte Sprache ist',
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
    mainCategoriesNotYetAnswered:
      'Warenkategorien - muss noch beantwortet werden',
  },
  quantityInput: {
    quantityInput: 'Mengeneingabe',
    recordedOn: 'erfasst am {{value}}',
    addQuantities: 'Mengen hinzufügen',
    enterQuantities: 'Erfassen Sie hier die Mengen aller {{value}}',

    enterQuantity: 'Menge eingeben',

    enterQuantitiesButter: 'Erfassen Sie hier die Mengen von {{value}}',
    enterQuantitiesAlcohol:
      'Erfassen Sie hier die Mengen aller alkoholischen Getränke',
  },
  amountInput: {
    amountInput:
      'Bitte erfassen Sie hier den Wert sämtlicher mitgeführter Ware.',
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
    currencyPickerTitle: 'Wert sämtlicher mitgeführter Waren erfassen',
    currencyPickerLargeAmountTitle:
      'Wert sämtlicher mitgeführter Waren mit mehr als CHF {{value}} erfassen',
    currencyPickerSubTitle:
      'Erfassen Sie den Nettowert der Waren in der Original-Währung:',
    currencyPickerRate: 'Kurs vom',
    currencyPickerInvalidInput: 'Ungültige/leere Eingabe',
    currencyPickerNoOffsettingInput: 'Kein entsprechender Betrag',
    currencyPickerTooSmallLargeAmount: 'Betrag zu gering',
    savedBasketDoYoWantToContinue:
      'Möchten Sie mit dem bereits bestehenden Warenkorb fortfahren oder mit einem leeren Warenkorb neu starten?',
    savedBasketTotalCost: 'Gesamtkosten: CHF {{value}}',
    savedBasketNewShoppingCart: 'Neuer Warenkorb',
    closeModalText: 'Schliessen',
    timePickerTitle: 'Zeitraum der Einreise wählen',
    timePickerSubTitle: 'Wann möchten Sie die Grenze überqueren?',
    timePickerRegistrationValidUntilSameDay:
      'Bitte achten Sie darauf, innerhalb von zwei Stunden mit dieser Anmeldung einzureisen. Diese Anmeldung ist am {{date}} von {{startTime}} bis zum {{endTime}} Uhr gültig.',
    timePickerRegistrationValidUntilDifferentDay:
      'Bitte achten Sie darauf, innerhalb von zwei Stunden mit dieser Anmeldung einzureisen. Diese Anmeldung ist am {{startDate}} von {{startTime}} bis {{endDate}} um {{endTime}} Uhr gültig.',

    timePickerTakeOverThePeriod: 'Zeitraum übernehmen',
    timePickerTimePrefix: 'Uhr',
    recordTheAmountOfMeat:
      'Erfassen Sie die Fleischmenge, die Sie mit sich führen:',
    recordTheAmountOfTobacco:
      'Erfassen Sie Tabakmenge, die Sie mit sich führen:',
  },
  payment: {
    overViewTitle: 'Übersicht Ihrer Anmeldung',
    dutyColumn: 'Zollabgabe in CHF',
    sumText: 'Summe (CHF)',
    entryInfo:
      'Sie können nur innerhalb des angegebenen Zeitraums mit den hier angemeldeten Waren die Grenze überqueren.',
  },
  receipt: {
    dutyAndVat: 'Zollabgabe: {{duty}}  |  Mehrwertsteuer: {{vat}}',
    paidOn: 'Bezahlt am {{date}} um {{time}} Uhr mit:',
    transactionId: 'Transaktions-ID (SIX): {{value}}',
    receiptValidFrom: 'Diese Quittung ist gültig am:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} bis {{endDate}} | {{endTime}}',
    receiptValidOn: 'Diese Quittung ist gültig am:',
    receiptValidOnDate: '{{date}} von {{startTime}} bis {{endTime}}',
    sumText: 'Summe: CHF {{value}}',
    vatColumn: 'Mehrwertsteuer in CHF:',
    normalAmountsTitle: 'Gesamtwert der Waren',
    normalAmountsSubtitle: 'Summe aller Kaufbelege',
    largeAmountsTitle: 'Einzelne Gegenstände',
    largeAmountsSubtitle: 'im Wert von über CHF 300',
    receiptStorageNotification:
      'Diese Quittung wird ein Jahr lang gespeichert. Solange können Sie die Quittung jederzeit in der App aufrufen.',
    allReceiptsNavigationHeaderTitle: 'Quittungen Schweizer Zoll',
    allReceiptsCurrentReceipt: 'Aktuelle Quittung:',
    allReceiptsOlderReceipts: 'Ältere Quittungen:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'vom {{value}}',
    entryTime: 'Zeitraum der Einreise',
    chooseOtherEntryTime: 'Anderen Zeitraum wählen',
    until: 'bis',
  },
  information: {
    informationTitle: 'Wissenswertes',
    informationSubCategoryTitle: 'Ich habe Waren dabei:',

    customsProceduresMainText: 'Vorgehen am Zoll',
    customsProceduresSubText:
      'Als Privatperson müssen Sie bei der Einreise in die Schweiz ...',
    customsProceduresText1:
      'Als Privatperson müssen Sie bei der Einreise in die Schweiz alle mitgeführten Waren und Tiere unaufgefordert anmelden.',
    customsProceduresText2:
      'Führen Sie nur Waren mit, die abgabenfrei (mehrwertsteuer- und zollfrei) sind und keinen Beschränkungen und Verboten unterliegen, so können Sie die Grenze passieren, ohne etwas formell anzumelden. In diesem Fall können Sie auch:',
    customsProceduresText3: 'in Flughäfen den grünen Durchgang wählen oder;',
    customsProceduresText4:
      'im Auto die grüne Sichtzollanmeldung beim Armaturenbrett anbringen;',
    customsProceduresText5:
      'Das Passieren des grünen Durchgangs oder das Anbringen einer Sichtzollanmeldung sind für Sie verbindlich. Das Personal des Schweizer Zolls kann ohne Befragung eine Kontrolle durchführen.',
    customsProceduresText6:
      'Nähere Informationen zu den abgabenfreien Waren finden Sie unter den folgenden Rubriken:',
    customsProceduresText7: 'Wertfreigrenze CHF 300',
    customsProceduresText8: 'Freimengen: Lebensmittel, Alkohol und Tabak',
    customsProceduresText9:
      'Persönliche Gebrauchsgegenstände und Reiseproviant',
    customsProceduresText10:
      'Mündliche Zollanmeldung oder Benutzen des roten Durchgangs in Flughäfen',
    customsProceduresText11:
      'Wenn der Grenzübergang durch Personal des Schweizer Zolls besetzt ist, melden Sie alle Waren mündlich und unaufgefordert an.Informationen zu den wichtigsten Grenzübergängen finden Sie unter der Rubrik Grenzübergänge.',
    customsProceduresText12: 'Zollanmeldung mit der App QuickZoll',
    customsProceduresText13:
      'Sie können Ihre Waren mit der App QuickZoll der EZV anmelden. Die Waren müssen vor dem Grenzübertritt oder beim Grenzübergang mit der App verzollt werden. D.h. die Abgaben müssen bezahlt sein. Haben Sie die Abgaben mit der App bezahlt, dürfen Sie auch Grenzübergänge, bei denen kein Personal des Zolls anwesend ist, und in Flughäfen den grünen Durchgang benutzen.',
    customsProceduresText14:
      'Diese Form der Zollanmeldung ist nur für Waren zulässig, die für Ihren privaten Gebrauch oder zum Verschenken bestimmt sind. Sie dürfen keinen Beschränkungen oder Verboten unterliegen und nicht zeugnis- oder bewilligungspflichtig sein. ',
    customsProceduresText15:
      'Andere Waren müssen bei einem durch Personal des Schweizer Zolls besetzten Grenzübergang mündlich angemeldet werden.',
    customsProceduresText16: 'Anmeldebox',
    customsProceduresText17:
      'An gewissen Grenzübergängen stehen Ihnen noch sogenannte Anmeldeboxen zur Verfügung, bei denen Sie Ihre Waren schriftlich anmelden können. Informationen dazu finden Sie unter www.ezv.admin.ch/Anmeldebox [Link: https://www.ezv.admin.ch/ezv/de/home/zollanmeldung/anmeldung-private/schriftliche-selbstanmeldung-mit-den-anmeldeboxen.html]',
    customsProceduresText18:
      'Diese Form der Zollanmeldung ist nur für Waren zulässig, die nicht für den Handel bestimmt sind. Sie dürfen keinen Beschränkungen oder Verboten unterliegen und weder zeugnis- noch bewilligungspflichtig sein.',
    customsProceduresText19:
      'Handelswaren müssen Sie bei einer dafür zuständigen Zollstelle anmelden.',
    customsProceduresText20: 'Bitte beachten:',
    customsProceduresText21:
      'Die mündliche Anmeldung sowie die Anmeldung mit der App oder via Anmeldebox sind verbindlich. Wir nehmen Zollkontrollen auch im Landesinneren vor. Eine nachträgliche Zollanmeldung ist nicht möglich. Sie machen sich strafbar, wenn Sie verbotene, bewilligungs- oder abgabenpflichtige Waren nicht oder falsch anmelden.',

    travelDocumentsMainText: 'Reisedokumente',
    travelDocumentsSubText:
      'Zur Einreise in die Schweiz benötigen ausländische Staatsangehörige ein gültiges ...',
    travelDocumentsText1:
      'Zur Einreise in die Schweiz benötigen ausländische Staatsangehörige ein gültiges und von der Schweiz anerkanntes Reisepapier. In gewissen Fällen ist zudem ein Visum erforderlich.\n' +
      'Über die Einreise in die Schweiz und den Aufenthalt (Vorschriften zu Reisedokumenten und Visa) gibt Ihnen die Website des Staatssekretariats für Migration Auskunft:',
    travelDocumentsText2:
      'Die Vorschriften zu den Reisepapieren im Ausland finden Sie bei den entsprechenden ausländischen Behörden, über den Link der Weltzollorganisation:',

    declarationMainText: 'Ich habe Waren dabei',
    declarationSubText:
      'Waren, die Sie für Ihren privaten Gebrauch oder zum Verschenken ...',
    animalsAndPlantsMainText: 'Ich habe Tiere oder Pflanzen dabei',
    animalsAndPlantsSubText:
      'Für Hunde, Katzen, weitere Heimtiere sowie Pferde finden Sie die ...',
    vehiclesMainText: 'Ich bin mit einem Fahrzeug unterwegs',
    vehiclesSubText:
      'Die Benutzung der Autobahnen und Autostrassen mit Motorfahrzeugen und Anhängern ...',
    entryByTrainMainText: 'Einreise per Bahn',
    entryByTrainSubText:
      'Ist im Zug Zollpersonal anwesend, müssen Sie alle mitgeführten Waren ...',
    prohibitionsAndRestrictionsMainText: 'Verbote und Beschränkungen',
    prohibitionsAndRestrictionsSubText:
      'Es ist verboten, Marken- und Designfälschungen einzuführen. Der Schweizer Zoll ...',

    vatAllowanceMainText: 'Wertfreigrenze CHF 300',
    vatAllowanceSubText:
      'Waren, die Sie für Ihren privaten Gebrauch oder zum Verschenken ...',
    vatAllowanceText1:
      'Waren, die Sie für Ihren privaten Gebrauch oder zum Verschenken einführen, sind bis zu einem Wert von CHF 300 mehrwertsteuerfrei. Zu berücksichtigen ist der Wert aller Waren. Dies schliesst auch den Wert der erhaltenen Geschenke, Lebensmittel, Tabakfabrikate, alkoholischen Getränke, vom Ausland mitgebrachten Haustiere und im Ausland ausgeführten Reparatur- und Unterhaltsarbeiten am eigenen Fahrzeug mit ein.',
    vatAllowanceText2:
      'Nicht dazu gerechnet wird hingegen der Wert der persönlichen Gebrauchsgegenstände, des Reiseproviants und des Treibstoffs für Ihr Fahrzeug.',
    vatAllowanceText3:
      'Massgebend ist der Wert nach Abzug der ausländischen Mehrwertsteuer, sofern diese auf der Quittung/Rechnung ausgewiesen ist. Die Wertangaben in ausländischer Währung werden zum Devisenkurs (Verkauf) des Vortages in Schweizer Franken umgerechnet.',
    vatAllowanceText4:
      'Die Wertfreigrenze kann von der gleichen Person nur einmal täglich in Anspruch genommen werden. Sie wird nur gewährt, wenn Sie die Waren selber mitführen. Die Wertfreigrenze gilt auch für Kinder.',
    vatAllowanceText5:
      'Was passiert, wenn der Warenwert 300 Franken übersteigt?',
    vatAllowanceText6:
      'Führen Sie Waren mit, welche die Wertfreigrenze von CHF 300 übersteigen, müssen Sie die Mehrwertsteuer auf dem Gesamtwert aller Waren bezahlen.',
    vatAllowanceText7:
      'Beispiel: Der Gesamtwert beträgt 800 Franken. Die 300 Franken sind überschritten. Somit wird die Mehrwertsteuer auf 800 Franken berechnet.',
    vatAllowanceText8: 'Weitere Beispiele zur Anwendung der Wertfreigrenze',
    vatAllowanceText9: 'Mehrwertsteuer',
    vatAllowanceText10:
      'Die Mehrwertsteuer berechnet sich vom Warenwert. Der Normalsatz beträgt 7,7 %. Für gewisse Waren gilt ein reduzierter Steuersatz von 2,5 % (z. B. für Lebensmittel, alkoholfreie Getränke, Bücher, Zeitschriften oder Medikamente). Bei der Verzollung mit der App «xxx» gelangt immer der Normalsatz zur Anwendung.',
    vatAllowanceText11:
      'Das Vorweisen einer Quittung oder eines anderen Wertnachweises (z. B. bei Internetkäufen) erleichtert die Zollveranlagung. Fehlen Wertangaben oder wird die Richtigkeit dieser Angaben bezweifelt, kann die Zollstelle den Warenwert schätzen.',
    vatAllowanceText12: 'Zollanmeldung',
    vatAllowanceText13:
      'Bei der Einreise müssen Sie alle mitgeführten Waren beim Zollpersonal mündlich anmelden.',
    vatAllowanceText14:
      'Sie können die Waren auch mit der App «xxxx» oder bei Grenzübergängen, die nicht durch Zollpersonal besetzt sind, schriftlich via Anmeldebox anmelden. Informationen dazu finden Sie hier',
    vatAllowanceText15:
      'Bitte beachten Sie: Werden die so genannten Freimengen von alkoholischen Getränken, Tabakfabrikaten und gewissen Lebensmitteln überschritten, müssen Sie in jedem Fall Zoll bezahlen. Mehr Informationen',
    vatAllowanceText16:
      'Bitte beachten Sie zudem, dass bestimmte Waren (z.B. Fälschungen, Waffen sowie gewisse Pflanzen, Tiere, Tierprodukte und Waren, die dem Artenschutz unterliegen) zur Einfuhr verboten sein können oder gewissen Beschränkungen unterliegen. Mehr Informationen',
    vatAllowanceText17: 'Anwendung der Wertfreigrenze für Einzelpersonen',
    vatAllowanceText18: 'Anwendung der Wertfreigrenze bei mehreren Personen',
    vatAllowanceText19:
      'Eine Person kann für mehrere Personen, die zusammen reisen (z.B. Familien, Freunde, Bekannte), eine gemeinsame Zollanmeldung abgeben. Die anmeldende Person übernimmt damit die Verantwortung für die Zollanmeldung. Sie muss somit allfällige Abgaben bezahlen und übernimmt auch die strafrechtliche Verantwortung, wenn nicht angemeldete Ware entdeckt und ein Strafverfahren eingeleitet werden muss.',
    vatAllowanceText20:
      'Bitte beachten Sie: Wenn der Gesamtwert aller mitgeführten Waren die addierten Wertfreigrenzen der Personen, die zusammen reisen, übersteigt, hat die anmeldende Person keinen Anspruch auf die Wertfreigrenze.',
    vatAllowanceText21:
      'Einzelne Gegenstände, die einen Wert von über 300 Franken haben, sind auch bei mehreren Personen immer mehrwertsteuerpflichtig.',
    vatAllowanceText22: 'Einzelne Gegenstände über CHF 300',
    vatAllowanceText23:
      'Bei der Beurteilung, ob es sich um einen Gegenstand im Einzelwert von mehr als CHF 300 oder um mehrere Gegenstände unter CHF 300 handelt, gilt',
    vatAllowanceText24:
      'bei nicht montierten oder nicht zusammengesetzten Waren: \n' +
      'eine Verkaufseinheit = ein Gegenstand',
    vatAllowanceText25:
      'bei montierten oder zusammengesetzten Waren: \n' +
      'montierte oder zusammengesetzte Waren = ein Gegenstand (auch wenn die einzelnen Komponenten auf der Rechnung separat ausgewiesen sind)',
    vatAllowanceText26: 'Beispiele:',
    vatAllowanceText27:
      '1.\tBeim Einkauf eines Computers lautet die Rechnung wie folgt:',
    vatAllowanceText28: '1 Desktop PC\t\tCHF\t\t700',
    vatAllowanceText29: '1 Bildschirm\t\tCHF\t\t200 ',
    vatAllowanceText30: '1 Tastatur\t\tCHF\t\t20',
    vatAllowanceText31: 'Total\tCHF 920',
    vatAllowanceText32: '= 3 Gegenstände (drei Verkaufseinheiten)',
    vatAllowanceText33:
      '2.\tBeim Einkauf eines Computers lautet die Rechnung wie folgt:',
    vatAllowanceText34: '1 Computer',
    vatAllowanceText35: 'Desktop PC',
    vatAllowanceText36: 'Bildschirm',
    vatAllowanceText37: 'Tastatur',
    vatAllowanceText38: 'Total\tCHF 920',
    vatAllowanceText39: '= 1 Gegenstand (eine Verkaufseinheit)',
    vatAllowanceText40:
      '3.\tBeim Einkauf einer Brille lautet die Rechnung wie folgt:',
    vatAllowanceText41: '2 Gläser\t\t2 Stk. à CHF 200\t\tCHF 400',
    vatAllowanceText42: '1 Gestell\t\tCHF 300',
    vatAllowanceText43: 'Total\t\tCHF 700',
    vatAllowanceText44: '',

    dutyAllowanceMainText: 'Freimengen: Lebensmittel, Alkohol und Tabak',
    dutyAllowanceSubText: 'Führen Sie für Ihren privaten Gebrauch oder zum ...',
    personalEffectsMainText:
      'Persönliche Gebrauchsgegenstände und Reiseproviant',
    personalEffectsSubText:
      'Persönliche Gebrauchsgegenstände und Reiseproviant können ...',
    foreignVatMainText: 'Rückerstattung der ausländischen Mehrwertsteuer',
    foreignVatSubText:
      'Die Schweizer Zollverwaltung kann Ihnen die ausländische ...',

    animalsMainText: 'Tiere: Heimtiere, Hunde, Katzen und Pferde',
    animalsSubText:
      'Für Hunde, Katzen, weitere Heimtiere sowie Pferde finden ...',
    plantsMainText: 'Pflanzen',
    plantsSubText:
      'Die Einfuhr von folgenden Pflanzen ist verboten, da sie Träger von Schadorganismen ...',
    souvenirsAndSpeciesProtectionMainText: 'Souvenirs und Artenschutz (CITES)',
    souvenirsAndSpeciesProtectionSubText:
      'Ein Gurt aus Elefantenleder, ein Traumfänger mit Vogelfedern ...',

    highwayVignetteMainText: 'Autobahnvignette',
    highwayVignetteSubText:
      'Die Benutzung der Autobahnen und Autostrassen mit Motorfahrzeugen ...',
    roadTaxMainText: 'Strassenverkehrsabgabe über 3,5 T (PSVA)',
    roadTaxSubText:
      'In der Schweiz wird für Fahrzeuge und Anhänger mit einem Gesamtgewicht von über 3,5 ...',
    fuelAndRepairsMainText: 'Treibstoff und Reparaturen',
    fuelAndRepairsSubText:
      'Der Tankinhalt ist abgabenfrei. In einem Reservekanister können Sie zudem bis 25 Liter ...',

    forgeryMainText: 'Fälschungen',
    forgerySubText:
      'Es ist verboten, Marken- und Designfälschungen einzuführen. Der Schweizer ...',
    cashMainText: 'Barmittel',
    cashSubText:
      'Bei der Ein-, Durch- und Ausfuhr von Barmitteln (Bargeld, Wertpapieren u.a.) im ...',
    foodMainText: 'Beschränkungen für Lebensmittel',
    foodSubText: 'Aus EU-Staaten, Island und Norwegen können Waren ...',
    authorisationRequirementsMainText: 'Bewilligungspflichtig / Beschränkungen',
    authorisationRequirementsSubText:
      'Die Einfuhr von bestimmten Waren ist beschränkt und nur unter ...',
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
    generalCustomsDirectorate: `Monbijoustrasse 40\n3003 Bern\nhttp://www.ezv.admin.ch`,
    designAndDevelopment: 'Design & Entwicklung',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Disclaimer',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informationen zum Gebrauch der App',
    conditions: 'Nutzungsbedingungen',
    importantSoon: 'Wichtiges in Kürze',
    importantSoonText1:
      'Sie dürfen die App für die gleiche Person bzw. die gleichen Personen nur einmal täglich (Kalendertag) einsetzen.',
    importantSoonText2:
      'Sie dürfen die App nur für Waren benützen, die Sie zu Ihrem privaten Gebrauch oder zum Verschenken einführen.',
    importantSoonText3:
      'Mit der Verwendung der App akzeptieren Sie, dass der MWST Satz 7,7 %; auch für Waren angewendet wird, die eigentlich dem reduzierten Steuersatz unterliegen (Lebensmittel, Tierfutter, Medikamente und Bücher).',
    importantSoonText4:
      'Es ist nur Kreditkartenzahlung (Visa, Mastercard) möglich (ohne Rückerstattungsmöglichkeit). Nach der Bezahlung der Abgaben sind die Waren verzollt.',
    importantSoonText5:
      'Die Verzollung muss vor dem Grenzübertritt oder spätestens bei der Grenzübergangsstelle erfolgen. Sie ist aber frühestens 48 Stunden vor dem Grenzübertritt möglich.',
    importantSoonText6:
      'Nach der Verzollung dürfen Sie auch folgende Grenzübergänge benutzen:',
    importantSoonText7:
      'Grenzübergangsstellen, bei denen kein Personal des Zolls anwesend ist;',
    importantSoonText8: 'den grünen Durchgang in Flughäfen.',
    importantSoonText9:
      'Die Quittung des Zolls ist dem Personal des Schweizer Zolls auf Verlangen vorzuweisen. Das Zollpersonal fotografiert die Quittung bei Bedarf.',

    howToDeclareYourGoods: 'So verzollen Sie ihre Waren:',
    howToDeclareYourGoodsText1:
      'Melden Sie sämtliche mitgeführten Waren (ausgenommen persönliche Gebrauchsgegenstände und Reiseproviant) an. Die zustehenden Freimengen und die Wertfreigrenze werden während der Verzollung automatisch abgezogen.',
    howToDeclareYourGoodsText2:
      'Geben Sie den Wert in der Fremdwährung gemäss Zahlungsbeleg ein. Der Wert wird mit dem Devisenkurs (Verkauf) des Vortages (letzter Arbeitstag) umgerechnet.',
    howToDeclareYourGoodsText3:
      'Legen Sie ein Zeitfenster von zwei Stunden für Ihren Grenzübertritt fest. Die Quittung ist nur während dieses Zeitfensters gültig. Können Sie den gewählten Zeitraum nicht einhalten, müssen Sie sich bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang melden und erklären, warum Sie nicht innerhalb der Gültigkeitsfrist einreisen konnten. Ohne glaubhafte Begründung werden die Abgaben erneut erhoben.',
    howToDeclareYourGoodsText4:
      'Gilt die Verzollung für Sie und Mitreisende oder für eine andere Person, müssen Sie mit diesen Personen gemeinsam einreisen.',
    howToDeclareYourGoodsText5:
      'Vor der Bezahlung können Sie Ihre Anmeldung jederzeit korrigieren. Nach der Bezahlung sind in der App keine Korrekturen mehr möglich. Nach dem Bezahlen zusätzlich gekaufte ausländische Waren müssen Sie bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang anmelden.',
    howToDeclareYourGoodsText6:
      'Die erhaltene Quittung des Schweizer Zolls müssen Sie mindestens ein Jahr aufbewahren. Die Quittung können Sie auch als Bild speichern.',
    howToDeclareYourGoodsText7:
      'Ist die Verzollung mit der App nicht möglich (z. B. keine Internetverbindung oder Bezahlung mit Kreditkarte nicht möglich) müssen Sie die Waren bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang oder via Anmeldebox anmelden.',
    howToDeclareYourGoodsText8:
      'Folgende Waren müssen Sie in jedem Fall bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang anmelden.',
    howToDeclareYourGoodsText9:
      'Waren, die Beschränkungen oder Verboten unterliegen und die zeugnis- oder bewilligungspflichtig sind (z. B. Waffen, lebende Tiere und Artenschutzwaren);',
    howToDeclareYourGoodsText10:
      'Waren für den privaten Gebrauch oder zum Verschenken mit einem Gesamtwert von CHF 20 000.00 oder mehr;',
    howToDeclareYourGoodsText11:
      'Waren, die Sie nicht zu Ihrem privaten Gebrauch oder zum Verschenken einführen (z. B. Waren, die für den Handel bestimmt sind);',
    howToDeclareYourGoodsText12:
      'Fahrzeuge, Reparaturen an Fahrzeugen und Treibstoffe;',
    howToDeclareYourGoodsText13:
      'Übersiedlungs-, Ausstattungs- (Heirat) und Erbschaftsgut;',
    howToDeclareYourGoodsText14:
      'Waren, die nur vorübergehend in die Schweiz eingeführt werden;',
    howToDeclareYourGoodsText15:
      'Waren, die für den Transit durch die Schweiz bestimmt sind.',
    howToDeclareYourGoodsText16:
      'Waren, die ausgeführt werden, können nicht mit der App angemeldet werden. Informationen zum steuerfreien Einkauf in der Schweiz (Tax free) finden Sie hier.',

    legal: 'Rechtliches',
    usage: 'Benutzung',

    legalText1:
      'Die Verzollung mit der App ist verbindlich (Artikel 33 Zollgesetz, SR 631.0). Sie machen sich strafbar, wenn Sie verbotene, bewilligungs- oder abgabenpflichtige Waren nicht oder falsch anmelden.',
    legalText2:
      'Diejenige Person, die die Quittung bei der Zollkontrolle vorweist, ist für die korrekte Verzollung der mitgeführten Waren verantwortlich. Sie übernimmt auch die strafrechtliche Verantwortung, wenn nicht oder falsch angemeldete Ware entdeckt werden.',
    legalText3: 'Stellen Sie bei der Verwendung der App sicher, dass',
    legalText4:
      'Sie während des Zahlungsvorgangs eine Internetverbindung haben, um die Verzollung abschliessen zu können.',
    legalText5:
      'Sie eine gültige Quittung für die Waren haben, die Sie einführen.',
    legalText6:
      'Sie die Quittung bei Kontrollen anlässlich des Grenzübertritts auf Ihrem mobilen Endgerät anzeigen können.',
    legalText7:
      'Bitte beachten Sie, dass während der Gültigkeitsfrist der Quittung ein Bild der Quittung, welches via WhatsApp, iMessage, SMS oder E-Mail an Drittpersonen weitergeleitet wird, nicht als Quittung akzeptiert wird.',

    privacyAndLiability: 'Datenschutz und Haftung',
    dataProtection: 'Datenschutz',
    dataProtectionText1:
      'Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Bundesbehörden halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben.',
    dataProtectionText2:
      'In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Miss-brauch oder vor Fälschung zu schützen.',
    dataProtectionText3:
      'Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser.',
    dataProtectionText4:
      'Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer die Bundesbehörden ihr Angebot entsprechend verbessern können. Gemäss Bundesgesetz betreffend die Überwachung des Post- und Fernmeldeverkehrs (BÜPF) besteht eine gesetzliche Aufbewahrungspflicht für Verbindungsdaten der letzten sechs Monate.',
    dataProtectionText5:
      'Bei der freiwilligen Kontaktaufnahme wird Ihre Email-Adresse in eine separate Datenbank aufgenommen, welche nicht mit den anonymen Logfiles verknüpft wird. Sie haben jederzeit die Möglichkeit, Ihre Registrierung wieder rückgängig zu machen.',

    liability: 'Haftung',
    liabilityText1:
      'Die Bundesbehörden behalten sich ausdrücklich vor, jederzeit Inhalte ohne Ankündigung ganz oder teilweise zu ändern, zu löschen oder zeitweise nicht zu veröffentlichen.',
    liabilityText2:
      'Haftungsansprüche gegen die Bundesbehörden wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nicht-nutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.',

    referencesAndLinks: 'Verweise und Links',
    referencesAndLinksText1:
      'Verweise und Links auf Webseiten Dritter liegen ausserhalb des Verantwortungsbereichs der Bundesbehörden. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin. Die Bundesbehörden erklären ausdrücklich, dass sie keinerlei Einfluss auf die Gestaltung, den Inhalt und die Angebote der verknüpften Seiten haben. Informationen und Dienstleistungen von verknüpften Webseiten liegen vollumfänglich in der Verantwortung des jeweiligen Dritten.',
    referencesAndLinksText2:
      'Es wird jegliche Verantwortung für solche Webseiten abgelehnt.',

    copyright: 'Copyright',
    copyrightText1:
      'Copyright, Bundesbehörden der Schweizerischen Eidgenossenschaft, 2007.',
    copyrightText2:
      'Die auf den Websites der Bundesbehörden enthaltenen Informationen werden der Öffentlichkeit zugänglich gemacht. Durch das Herunterladen oder Kopieren von Inhalten, Bildern, Fotos oder anderen Dateien werden keinerlei Rechte bezüglich der Inhalte übertragen.',
    copyrightText3:
      'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf den Websites der Bundesbehörden gehören ausschliesslich diesen oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.',
  },
  overview: {
    declared: 'Angemeldet',
    dutyFree: 'Zollfrei',
    details: 'Details',
  },
  legalNoticeModal: {
    importantNote: 'Wichtiger Hinweis',
    vatRateInfo:
      'Bitte berücksichtigen Sie, dass bei der Benutzung dieser App keine Rückerstattung möglich ist. Deklarierte Waren werden mit dem einheitlichen Mehrwertsteuersatz von 7.7% verzollt. Weitere Informationen finden Sie hier:',
    termsOfService: 'Allgemeine Geschäftsbedingungen',
    acceptance:
      'Hiermit akzeptiere ich die Allgemeinen Geschäftsbedingungen, die ich gelesen und verstanden habe.',
    confirm: 'Bestätigen',
    abort: 'Abbrechen',
  },
  furtherInformationModal: {
    furtherInformation: 'Weitere Informationen:',
    acceptance:
      'Mit der Verwendung der App akzeptieren Sie, dass der MWST Satz 7,7 %; auch für Waren angewendet wird, die eigentlich dem reduzierten Steuersatz unterliegen (Lebensmittel, Tierfutter, Medikamente und Bücher).',
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kgs',
    kiloOrLiter: 'kg/Liter',
    kiloOrLiter_plural: 'kgs/Liter',
    liter: 'Liter',
    liter_plural: 'Liter',
    unit: 'Stück',
    unit_plural: 'Stücke',
    gram: 'Gramm',
    gram_plural: 'Gramm',
  },
};
