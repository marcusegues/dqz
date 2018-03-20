// @flow
import type { Locale } from '../types/locale';

export const de: Locale = {
  categories: {
    Meat: 'Fleisch & Fleischzubereitungen',
    Butter: 'Butter & Rahm',
    Oils: 'Öle/Fette/Margarine',
    OtherFood: 'Sonstige Lebensmittel & alkoholfreie Getränke',
    AlcSoft: 'Alkoholische Getränke bis 18% Vol.',
    AlcHard: 'Alkoholische Getränke von über 18% Vol.',
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
    Alcohol: `Alkoholische Getränke`,
    TobaccoProducts: 'Tabakfabrikate',
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
    customsVat: 'MWST',
    goodCategories: 'Warenkategorien',
    confirm: 'Übernehmen',
    toPayment: 'Zur Bezahlung',
    buttonContinue: 'Weiter',
    buttonBack: 'Zurück',
    note: 'Hinweis:',
    underConstruction: 'In Bearbeitung',
  },
  snackBar: {
    limitExceeded:
      'Warenwert für die App überschritten. Bitte melden Sie Ihre Waren mündlich beim Grenzübergang an.',
    limitExceededRightText: 'Grenzübergänge anzeigen',
    offline:
      'Sie sind offline. Ausser der Bezahlfunktion können Sie jedoch alle anderen Funktionen der App benutzen.',
    paymentAborted: 'Zahlung storniert',
    paymentFailed: 'Zahlung fehlgeschlagen',
    paymentAbortedRightText: 'OK',
    paymentFailedRightText: 'OK',
    showBorder: 'Grenzübergänge anzeigen',
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
    skipThisStep: 'Diesen Schritt überspringen',
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
    enterQuantitiesAlcohol: 'Erfassen Sie hier die Mengen aller {{value}}',
    enterQuantitiesMeat: 'Erfassen Sie hier die Mengen von {{value}}',
    enterQuantitiesTobacco: 'Erfassen Sie hier die Mengen aller {{value}}',
    enterQuantitiesCigarettes: 'Erfassen Sie hier die Mengen aller {{value}}',
    enterQuantitiesOil: 'Erfassen Sie hier die Mengen aller {{value}}',
    standardInputSubText:
      'Erfassen Sie die Menge von {{category}}, die Sie mit sich führen:',
    meatInput: 'Fleisch sowie Fleischzubereitungen.',
    butterInput: 'Butter und Rahm.',
    oilInput: 'Öle, Fette, oder Margarine.',
    alcSoftInput: 'alkoholischen Getränke bis 18% Vol.',
    alcHardInput: 'alkoholischen Getränke von über 18% Vol.',
    cigarettesInput: 'Zigaretten und Zigarren.',
    tobaccoInput: 'anderen Tabakfabrikate.',
  },
  amountInput: {
    amountInput:
      'Bitte erfassen Sie hier den Wert sämtlicher mitgeführter Waren.',
    amountInputLargeItem:
      'Erfassen Sie einzelne Gegenstände mit einem Wert von über {{value}} Franken.',
    amountInputLargeItemGreyBox:
      'Erfassen Sie hier nochmals jeden Gegenstand, der mehr als CHF 300 netto wert ist.',
    amountInputAddItem: 'Wert hinzufügen',
    amountInputAddItemLarge: 'Gegenstand hinzufügen',
    amountInputEnterValueBeginning: 'Erfassen Sie den Wert',
    amountInputEnterValueBoldText:
      ' ohne ausländische Mehrwertsteuer (Nettowert)',
    amountInputEnterValueEnd:
      ' inkl. Wert der erhaltenen Geschenke, Lebensmittel, Tabakfabrikate und alkoholische Getränke.',
    currentTotalValue: 'Aktueller Gesamtwert:',
    lastExchangeRate:
      'Basierend auf dem letzten verfügbaren Wechsel-kurs, welcher beim Bezahlen aktualisiert wird.',
  },
  qaFlow: {
    declareGoods: 'Waren anmelden',
    toOverview: 'Zur Übersicht',
    adult: 'Erwachsene',
    adultInfo: '17+ Jahre',
    adultCount: '{{value}} Erwachsener',
    adultCount_plural: '{{value}} Erwachsene',
    minor: 'Kinder & Jugendliche',
    minorInfo: 'unter 17 Jahre',
    minorCount: '{{value}} Kind (unter 17 Jahre)',
    minorCount_plural: '{{value}} Kinder (unter 17 Jahre)',
    validateNoPeopleTitle: 'Muss mindestens eine Person sein',
    validateNoPeopleSubtitle: 'Bitte Rechtmässigkeit sicherstellen.',
    validateGenericYes: 'Ja',
    validateGenericNo: 'Nein',
    validateGenericOk: 'Ok',
    validateMainCategoryRemoveTitle:
      'Sind Sie sicher, dass Sie diese Hauptkategorie entfernen möchten?',
    validateMainCategoryRemoveSubtitle:
      'Im Moment enthalten gewisse Unterkategorien Mengen, nämlich: {{value}}',
      validateMainCategoryAndVatRemoveSubTitle: '🔥',
    validateMainCategoryRemoveYes: 'Ja - ich möchte dies löschen',
    itemsGreaterThan300CHF: 'Gegenstände > 300 CHF',
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
    timePickerRegistrationTimeInPast:
      'Der von ihnen gewählte Zeitraum liegt in der Vergangenheit. Bitte überprüfen Sie Ihre Eingabe, um fortfahren zu können.',
    timePickerTakeOverThePeriod: 'Zeitraum übernehmen',
    timePickerTimePrefix: 'Uhr',

    savedBasket: 'Aktueller Warenkorb',
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
    travellers:
      'Reisende: {{adults}} Erwachsene, {{minors}} Kinder (unter 17 Jahre)',
    paidOn: 'Bezahlt am {{date}} um {{time}} Uhr mit:',
    transactionId: 'Transaktions-ID (SIX): {{value}}',
    receiptValidFrom: 'Diese Quittung ist gültig für den Grenzübertritt am:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} bis {{endDate}} | {{endTime}}',
    receiptValidOn: 'Diese Quittung ist gültig für den Grenzübertritt am:',
    receiptValidOnDate: '{{date}}, von {{startTime}} bis {{endTime}}',
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
    entryTime: 'Zeitraum der Einreise:',
    chooseOtherEntryTime: 'Ändern',
    until: 'bis',
  },

  customsProcedures: {
    customsProceduresMainText: 'Vorgehen am Zoll',
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
      'Wenn der Grenzübergang durch Personal des Schweizer Zolls besetzt ist, melden Sie alle Waren mündlich und unaufgefordert an. Informationen zu den wichtigsten Grenzübergängen finden Sie unter der Rubrik Grenzübergänge.',
    customsProceduresText12: 'Zollanmeldung mit der App QuickZoll',
    customsProceduresText13:
      'Sie können Ihre Waren mit der App QuickZoll der EZV anmelden. Die Waren müssen vor dem Grenzübertritt oder beim Grenzübergang mit der App verzollt werden. D.h. die Abgaben müssen bezahlt sein. Haben Sie die Abgaben mit der App bezahlt, dürfen Sie auch Grenzübergänge, bei denen kein Personal des Zolls anwesend ist, und in Flughäfen den grünen Durchgang benutzen.',
    customsProceduresText14:
      'Diese Form der Zollanmeldung ist nur für Waren zulässig, die für Ihren privaten Gebrauch oder zum Verschenken bestimmt sind. Sie dürfen keinen Beschränkungen oder Verboten unterliegen und nicht zeugnis- oder bewilligungspflichtig sein. ',
    customsProceduresText15:
      'Andere Waren müssen bei einem durch Personal des Schweizer Zolls besetzten Grenzübergang angemeldet werden.',
    customsProceduresText16: 'Anmeldebox',
    customsProceduresText17:
      'An gewissen Grenzübergängen stehen Ihnen noch sogenannte Anmeldeboxen zur Verfügung, bei denen Sie Ihre Waren schriftlich anmelden können. Informationen dazu finden Sie unter',
    customsProceduresText18:
      'Diese Form der Zollanmeldung ist nur für Waren zulässig, die nicht für den Handel bestimmt sind. Sie dürfen keinen Beschränkungen oder Verboten unterliegen und weder zeugnis- noch bewilligungspflichtig sein.',
    customsProceduresText19:
      'Handelswaren müssen Sie bei einer dafür zuständigen Zollstelle anmelden.',
    customsProceduresText20: 'Bitte beachten:',
    customsProceduresText21:
      'Die mündliche Anmeldung sowie die Anmeldung mit der App oder via Anmeldebox sind verbindlich. Wir nehmen Zollkontrollen auch im Landesinneren vor. Eine nachträgliche Zollanmeldung ist nicht möglich. Sie machen sich strafbar, wenn Sie verbotene, bewilligungs- oder abgabenpflichtige Waren nicht oder falsch anmelden.',
    customsProceduresExtLink1: 'Anmeldebox',
  },

  travelDocuments: {
    travelDocumentsMainText: 'Reisedokumente',
    travelDocumentsSubText: '',
    travelDocumentsText1:
      'Zur Einreise in die Schweiz benötigen ausländische Staatsangehörige ein gültiges und von der Schweiz anerkanntes Reisepapier. In gewissen Fällen ist zudem ein Visum erforderlich.\n' +
      'Über die Einreise in die Schweiz und den Aufenthalt (Vorschriften zu Reisedokumenten und Visa) gibt Ihnen die Website des Staatssekretariats für Migration Auskunft:',
    travelDocumentsText2:
      'Die Vorschriften zu den Reisepapieren im Ausland finden Sie bei den entsprechenden ausländischen Behörden, über den Link der Weltzollorganisation:',
  },

  vatAllowance: {
    vatAllowanceMainText: 'Wertfreigrenze CHF 300',
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
      'Die Mehrwertsteuer berechnet sich vom Warenwert. Der Normalsatz beträgt 7,7 %. Für gewisse Waren gilt ein reduzierter Steuersatz von 2,5 % (z.B. für Lebensmittel, alkoholfreie Getränke, Bücher, Zeitschriften oder Medikamente). Bei der Verzollung mit der App QuickZoll gelangt immer der Normalsatz zur Anwendung.',
    vatAllowanceText11:
      'Das Vorweisen einer Quittung oder eines anderen Wertnachweises (z.B. bei Internetkäufen) erleichtert die Zollveranlagung. Fehlen Wertangaben oder wird die Richtigkeit dieser Angaben bezweifelt, kann die Zollstelle den Warenwert schätzen.',
    vatAllowanceText12: 'Zollanmeldung',
    vatAllowanceText13:
      'Bei der Einreise müssen Sie alle mitgeführten Waren beim Zollpersonal mündlich anmelden.',
    vatAllowanceText14:
      'Sie können die Waren auch mit der App QuickZoll oder bei Grenzübergängen, die nicht durch Zollpersonal besetzt sind, schriftlich via Anmeldebox anmelden. Informationen dazu finden Sie hier',
    vatAllowanceText15:
      'Bitte beachten Sie: Werden die so genannten Freimengen von alkoholischen Getränken, Tabakfabrikaten und gewissen Lebensmitteln überschritten, müssen Sie in jedem Fall Zoll bezahlen.',
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
      '1. Beim Einkauf eines Computers lautet die Rechnung wie folgt:',
    vatAllowanceText28: '1 Desktop PC\t\t\t\t\t\tCHF\t\t700',
    vatAllowanceText29: '1 Bildschirm\t\t\t\t\t\tCHF\t\t200 ',
    vatAllowanceText30: '1 Tastatur\t\t\t\t\t\tCHF\t\t  20',
    vatAllowanceText31: 'Total\t\t\t\t\t\t\tCHF\t\t920',
    vatAllowanceText32: '= 3 Gegenstände (drei Verkaufseinheiten)',
    vatAllowanceText33:
      '2. Beim Einkauf eines Computers lautet die Rechnung wie folgt:',
    vatAllowanceText34: '1 Computer\t\t\t\t\t\tCHF\t\t920',
    vatAllowanceText35: 'Desktop PC',
    vatAllowanceText36: 'Bildschirm',
    vatAllowanceText37: 'Tastatur',
    vatAllowanceText38: 'Total\t\t\t\t\t\t\tCHF\t\t920',
    vatAllowanceText39: '= 1 Gegenstand (eine Verkaufseinheit)',
    vatAllowanceText40:
      '3. Beim Einkauf einer Brille lautet die Rechnung wie folgt:',
    vatAllowanceText41: '2 Gläser\t\t\t2 Stk. à CHF 200\t\tCHF 400',
    vatAllowanceText42: '1 Gestell\t\t\t\t\t\t\tCHF\t\t300',
    vatAllowanceText43: 'Total\t\t\t\t\t\t\tCHF\t\t700',
    vatAllowanceText44: '1 Gegenstand',
  },

  dutyAllowance: {
    dutyAllowanceMainText: 'Freimengen: Lebensmittel, Alkohol und Tabak',
    dutyAllowanceText1:
      'Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein, sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren, für die Sie aus agrar- oder gesundheitspolitischen Gründen ab einer gewissen Menge Zoll bezahlen müssen (siehe nachstehende Tabelle). Die Freimengen gelten pro Person und pro Tag.',
    dutyAllowanceText2:
      'Bitte beachten Sie: Übersteigt der Gesamtwert Ihrer mitgeführten Waren (inkl. Wert aller Lebensmittel) 300 Franken, müssen Sie in jedem Fall die Mehrwertsteuer bezahlen. Mehr Informationen',
    dutyAllowanceText3:
      'Bitte beachten Sie zudem, dass für gewisse Tierprodukte sowie für bestimmte pflanzliche Erzeugnisse zusätzliche Beschränkungen bestehen.',
    dutyAllowanceText4: 'Fleisch und Fleischzubereitungen',
    dutyAllowanceText5:
      'von allen Tierarten, mit Ausnahme von Wild, Fischen, Krebstieren, Weichtieren und anderen wirbellosen Wassertieren. Dazu gehören:',
    dutyAllowanceText6:
      'alle geniessbaren Tierkörperteile (mit oder ohne Knochen)',
    dutyAllowanceText7: 'Würste aus Fleisch oder Blut',
    dutyAllowanceText8: 'andere Fleischerzeugnisse',
    dutyAllowanceText9:
      'Lebensmittelzubereitungen mit einem Gehalt von mehr als 20 Gewichtsprozenten an Wurst, Fleisch oder Blut',
    dutyAllowanceText10:
      'Nicht dazu gehören Markbein und Saucen-Knochen, Hunde- und Katzenfutter in als Tierfutter gekennzeichneten Einzelverkaufspackungen.',
    dutyAllowanceText11:
      'Die Einfuhr von Tierprodukten aus anderen als EU-Mitgliedstaaten, als Island und als Norwegen ist verboten.',
    dutyAllowanceText12: 'Freimengen pro Person und pro Tag:',
    dutyAllowanceText13: 'insgesamt 1 kg',
    dutyAllowanceText14: 'Zollabgaben für Mehrmenge in CHF',
    dutyAllowanceText15: 'bis 10 kg: 17.- je kg',
    dutyAllowanceText16: 'mehr als 10 kg: 23.- je kg',
    dutyAllowanceText17: 'Butter und Rahm',
    dutyAllowanceText18:
      'Die Einfuhr von Tierprodukten aus anderen als EU-Mitgliedstaaten, als Island und als Norwegen ist verboten.',
    dutyAllowanceText19: 'Freimengen pro Person und pro Tag:',
    dutyAllowanceText20: 'insgesamt 1 kg/Liter',
    dutyAllowanceText21: 'Zollabgaben für Mehrmenge in CHF:',
    dutyAllowanceText22: '16.- je kg/Liter',
    dutyAllowanceText23: 'Öle, Fette, Margarine zu Speisezwecken',
    dutyAllowanceText24:
      'Die Einfuhr von Tierprodukten aus anderen als EU-Mitgliedstaaten, als Island und als Norwegen ist verboten.',
    dutyAllowanceText25: 'Freimengen pro Person und pro Tag:',
    dutyAllowanceText26: 'insgesamt 5 kg/Liter',
    dutyAllowanceText27: 'Zollabgaben für Mehrmenge in CHF:',
    dutyAllowanceText28: '2.- je kg/Liter',
    dutyAllowanceText29: 'Alkoholische Getränke',
    dutyAllowanceText30:
      'Freimengen pro Person und pro Tag:\n' +
      '(nur für Personen, die mindestens 17 Jahre alt sind)',
    dutyAllowanceText31: 'Alkoholgehalt bis 18 % Vol.: insgesamt 5 Liter und',
    dutyAllowanceText32: 'Alkoholgehalt über 18 % Vol.: insgesamt 1 Liter',
    dutyAllowanceText33: 'Zollabgaben für Mehrmenge in CHF:',
    dutyAllowanceText34: 'Alkoholgehalt bis 18 % Vol.: 2.- je Liter',
    dutyAllowanceText35: 'Alkoholgehalt über 18 % Vol.: 15.- je Liter',
    dutyAllowanceText35a:
      'Getränke mit einem Alkoholgehalt bis 0,5 % Vol. gelten nicht als alkoholische Getränke.',
    dutyAllowanceText36: 'Tabakfabrikate',
    dutyAllowanceText37:
      'Freimengen pro Person und pro Tag:\n' +
      '(nur für Personen, die mindestens 17 Jahre alt sind)',
    dutyAllowanceText38: 'Zigaretten/Zigarren: insgesamt 250 Stück oder',
    dutyAllowanceText39: 'andere Tabakfabrikate: insgesamt 250 g',
    dutyAllowanceText40: 'oder eine anteilmässige Auswahl dieser Erzeugnisse',
    dutyAllowanceText41: 'Zollabgaben für Mehrmenge in CHF:',
    dutyAllowanceText42: 'Zigaretten/Zigarren: 0.25 je Stück',
    dutyAllowanceText43: 'andere Tabakfabrikate: 0.10 je Gramm',
    dutyAllowanceText44: 'Andere Lebensmittel und andere Waren',
    dutyAllowanceText45:
      'Die Einfuhr von Tierprodukten aus anderen als EU-Mitgliedstaaten, als Island und als Norwegen ist verboten.\n' +
      'Zollfrei',
    dutyAllowanceText46:
      'Im Ausland bestellt und per Post/Kurierdienst geliefert',
    dutyAllowanceText47:
      'Für Waren, die Sie im Ausland bestellen (z.B. im Internet) und die Ihnen per Post oder Kurierdienst zugestellt werden, gelten andere Bestimmungen.',
    dutyAllowanceText48: 'Mehr Informationen',
  },

  personalEffects: {
    personalEffectsMainText:
      'Persönliche Gebrauchsgegenstände und Reiseproviant',
    personalEffectsText1:
      'Persönliche Gebrauchsgegenstände und Reiseproviant können Sie abgabenfrei einführen:',
    personalEffectsText2: 'Persönliche Gebrauchsgegenstände',
    personalEffectsText3: 'Darunter fallen Gebrauchsgegenstände, welche:',
    personalEffectsText4:
      'in der Schweiz wohnhafte Reisende bei der Ausreise mitgenommen haben.',
    personalEffectsText5:
      'im Ausland wohnhafte Reisende während des Aufenthaltes in der Schweiz benützen und wieder ausführen. Dazu gehören Kleider, Wäsche, Toilettenartikel, Sportgeräte, Foto-, Film- und Videokameras, Mobiltelefone, tragbare Computer, Musikinstrumente und sonstige Gebrauchsgegenstände persönlicher Natur.',
    personalEffectsText6: 'Reiseproviant',
    personalEffectsText7:
      'Als Reiseproviant gelten genussfertige Nahrungsmittel und alkoholfreie Getränke für den Reisetag.',
  },

  foreignVat: {
    foreignVatMainText: 'Rückerstattung der ausländischen Mehrwertsteuer',
    foreignVatText1:
      'Die Schweizer Zollverwaltung kann Ihnen die ausländische MWST nicht zurückerstatten.',
    foreignVatText2:
      'Wenn Sie im Ausland gekaufte Waren persönlich in die Schweiz bringen, haben Sie häufig die Möglichkeit, sich die ausländische MWST durch den ausländischen Verkäufer oder ein Tax-Refund-Unternehmen erstatten zu lassen. Diese Serviceunternehmen haben nichts mit der eidgenössischen Zollverwaltung zu tun; sie arbeiten insbesondere nicht in unserem Auftrag.',
    foreignVatText3:
      'Für die Rückerstattung bestehen je nach Staat unterschiedliche Voraussetzungen. Allenfalls füllt der Verkäufer ein Rückerstattungsformular aus, auf dem die ausländische Zollbehörde den Export in die Schweiz bestätigt.',
    foreignVatText4:
      'Weitere Informationen zur Rückerstattung der ausländischen MWST können wir Ihnen nicht geben. Allenfalls erteilt Ihnen die entsprechende Zollbehörde Auskünfte. Die ausländischen Zollbehörden finden Sie unter folgendem Link der Weltzollorganisation:',
    foreignVatText5:
      'Die schweizerische MWST ist auch zu bezahlen, wenn die ausländische MWST nicht zurückerstattet wird. Im Bereich der Mehrwertsteuern gibt es kein Doppelbesteuerungsabkommen.',
  },

  animals: {
    animalsMainText: 'Tiere: Heimtiere, Hunde, Katzen und Pferde',
    animalsText1:
      'Für Hunde, Katzen, weitere Heimtiere sowie Pferde finden Sie die Informationen beim Bundesamt für Lebensmittelsicherheit und Veterinärwesen BLV:',
    animalsText2: 'Abgaben',
    animalsText3:
      'Wird die Wertfreigrenze von CHF 300 überschritten, müssen Sie für Tiere die MWST bezahlen. Detailliertere Informationen finden Sie unter:',
    animalsText4: 'Wertfreigrenze CHF 300',
  },

  plants: {
    plantsMainText: 'Pflanzen',
    plantsText1:
      '1.\tVerbotene Pflanzen und Pflanzenerzeugnisse\n' +
      'Die Einfuhr von folgenden Pflanzen ist verboten, da sie Träger von Schadorganismen (Feuerbrand, Kastanienrindenkrebs, Virenerkrankungen, etc.) sein können:',
    plantsText2: 'a) Einfuhr aus allen Ländern verboten',
    plantsText3: 'Zwergmispel (Cotoneaster)',
    plantsText4:
      'Lorbeer-Glanzmispel - Photinia davidiana (sync. Stranvaesia davidiana)',
    plantsText5:
      'b) Einfuhr aus allen Staaten ausser EU-Staaten, Island und Norwegen verboten',
    plantsText6: 'Apfelbaum (Malus)',
    plantsText7: 'Birnenbaum (Pyrus)',
    plantsText8: 'Bitterorangen (Poncirus)',
    plantsText9: 'Eiche (Quercus)',
    plantsText10: 'Eberesche, bzw. Vogelund Mehlbeere (Sorbus)',
    plantsText11: 'Feuerdorn (Pyracantha)',
    plantsText12: 'Kartoffeln und ähnliche Nachtschattengewächse (Solanacea)',
    plantsText13: 'echte, essbare Kastanie (Castanea)',
    plantsText14: 'Kumquats (Fortunella)',
    plantsText15: 'Mispel (Mespilus)',
    plantsText16: 'Nadelgehölze (Koniferen)',
    plantsText17: 'Quittenbaum (Cydonia)',
    plantsText18: 'Reben (Vitis)',
    plantsText19: 'Rosen',
    plantsText20:
      'Steinobstbäume (Aprikose, Kirsche, Mandel, Pfirsich, Pflaume und Zwetschge) und alle Zierformen der Gattung Prunus',
    plantsText21: 'Weissdorn (Crataegus) alle Arten und Sorten',
    plantsText22: 'Wollmispel (Eriobotyra)',
    plantsText23: 'Zier- und Scheinquitte (Chaenomeles)',
    plantsText24: 'Zitrusgewächse (Citrus)',
    plantsText25:
      '2.\tAndere Pflanzen und Pflanzenerzeugnisse (auch Früchte und Gemüse)',
    plantsText26:
      'a) Einfuhr aus EU-Staaten, Norwegen und Island\n' +
      'Sie können Pflanzen ohne Bewilligung einführen, sofern diese im Reiseverkehr und für den privaten Gebrauch eingeführt werden.',
    plantsText27:
      'b) Einfuhr aus allen Staaten ausser EU, Norwegen und Island\n' +
      'Pflanzen (lebend oder als Pflanzenerzeugnisse) können einer Einfuhrbewilligungspflicht unterliegen.',
    plantsText28:
      'Wollen Sie aus diesen Staaten Pflanzen einführen, klären Sie vorgängig die Bestimmungen beim Bundesamt für Landwirtschaft ab:',
    plantsText29:
      'Ausnahme: pro Person können Schnittblumen und Blumensträusse bis max. 3 kg sowie Früchte und Gemüse (ausgenommen Kartoffeln) bis insgesamt 10 kg ohne Anwendung von Pflanzenschutzmassnahmen eingeführt werden.',
    plantsText30: 'Abgaben',
    plantsText31:
      'Wird die Wertfreigrenze von CHF 300 überschritten, müssen Sie für Pflanzen die MWST bezahlen. Detaillierte Informationen finden Sie unter: Wertfreigrenze CHF 300',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText: 'Souvenirs und Artenschutz (CITES)',
    souvenirsAndSpeciesProtectionText1: 'Souvenirs',
    souvenirsAndSpeciesProtectionText2:
      'Ein Gurt aus Elefantenleder, ein Traumfänger mit Vogelfedern oder Räucherstäbchen aus Sandelholz - das Angebot an Souvenirs ist vielfältig. Vielen Gegenständen sieht man nicht an, dass sie aus geschützten Tieren oder Pflanzen (z.B. Tropenholz) hergestellt worden sind. Doch vieles darf gar nicht in die Schweiz eingeführt werden.\n' +
      'Es lohnt sich, schon vor den Ferien abzuklären, welche Souvenirs geeignet sind und welche Sie besser am Ferienort zurücklassen.',
    souvenirsAndSpeciesProtectionText3: 'Artenschutz Tiere',
    souvenirsAndSpeciesProtectionText4:
      'Die Einfuhr geschützter Tiere oder deren Erzeugnisse ist entweder ganz verboten oder bewilligungspflichtig (dazu gehören z.B. Schlangen, Echsen, Schildkröten, Papageien, Elfenbein, Schildpatt, diverse Pelzfelle).',
    souvenirsAndSpeciesProtectionText5:
      'Der CITES-Kontrollstelle ist bei der Einfuhr eine Ausfuhrbewilligung oder Wiederausfuhrbescheinigung vorzulegen, ausgestellt von der CITES-Behörde des Herkunftslandes.',
    souvenirsAndSpeciesProtectionText6: 'Artenschutz Pflanzen',
    souvenirsAndSpeciesProtectionText7:
      'Die Einfuhr geschützter Pflanzen oder deren Erzeugnisse ist entweder ganz verboten oder bewilligungspflichtig (z.B. Orchideen, Kakteen, gewisse Hölzer und Medizinalpflanzen).',
    souvenirsAndSpeciesProtectionText8:
      'Auskünfte und Bewilligungen erteilt das Bundesamt für Lebensmittelsicherheit und Veterinärwesen BLV: www.blv.admin.ch',
  },

  highwayVignette: {
    highwayVignetteMainText: 'Autobahnvignette',
    highwayVignetteText1:
      'Die Benutzung der Autobahnen und Autostrassen mit Motorfahrzeugen und Anhängern bis je 3,5 Tonnen ist abgabepflichtig. Der Verkaufspreis der Vignette beträgt CHF 40.',
    highwayVignetteText2: 'Verkaufsstellen',
    highwayVignetteText3:
      'In der Schweiz erhalten Sie die Vignette z.B. bei Poststellen oder Tankstellen.',
    highwayVignetteText4:
      'Bei den besetzten Grenzübergängen erhalten Sie die Vignette vom Zollpersonal. Sie können mit Kreditkarte oder bar (CHF, EUR, USD, GBP) bezahlen.',
    highwayVignetteText5:
      'Im Ausland ist die Vignette bei Automobilclubs, in Grenznähe zur Schweiz auch an Autobahntankstellen sowie Kiosken oder Trafiken (Österreich) erhältlich.',
    highwayVignetteText6: 'Anbringen der Vignette',
    highwayVignetteText7:
      'Die Vignette ist nur gültig, wenn sie am Fahrzeug aufgeklebt ist:',
    highwayVignetteText8:
      'bei Motorwagen auf der Innenseite der Windschutzscheibe (nicht im Tönungsstreifen);',
    highwayVignetteText9:
      'bei Anhängern und Motorrädern an einem nicht auswechselbaren, leicht zugänglichen Teil.',
    highwayVignetteText10:
      'Lediglich mit Klebstreifen oder anders angebrachte Vignetten sind ungültig. Fahren Sie auf Autobahnen und Autostrassen ohne oder mit ungültiger Vignette werden Sie mit CHF 200 gebüsst. Zusätzlich müssen Sie eine Vignette kaufen und am Fahrzeug anbringen.',
  },

  roadTax: {
    roadTaxMainText: 'Strassenverkehrsabgabe über 3,5 T (PSVA)',
    roadTaxText1:
      'In der Schweiz wird für Fahrzeuge und Anhänger mit einem Gesamtgewicht von über 3,5 Tonnen eine Schwerverkehrsabgabe erhoben. Für Busse, schwere Wohnmobile, schwere Personenwagen und deren Anhänger über 3,5 Tonnen wird die Abgabe pauschal pro Tag erhoben.',
    roadTaxText2:
      'Im Gegensatz zur Autobahnvignette für Personenwagen wird die Schwerverkehrsabgabe nicht nur auf den Autobahnen sondern auf dem gesamten Strassennetz fällig.',
    roadTaxText3: 'Für LKWs und deren Anhänger siehe:',
    roadTaxText4:
      'Bitte beachten: PSVA-pflichtig ist das Fahrzeug auch, wenn es nur abgestellt ist und nicht bewegt wird (z.B. Wohnmobil auf Campingplatz).',
    roadTaxText5: 'Bezahlung und Tarife',
    roadTaxText6:
      'Berechnungsgrundlage bilden das Gesamtgewicht bzw. die Anhängelast des Zugfahrzeugs gemäss Fahrzeugausweis und die Abgabeperiode.',
    roadTaxText7: 'Es bestehen folgende Möglichkeiten, die PSVA zu entrichten:',
    roadTaxText8: 'für 1 bis 30 aufeinander folgende Tage',
    roadTaxText9: 'für 10 frei wählbare Tage innerhalb eines Jahres',
    roadTaxText10: 'für 1 bis 11 aufeinander folgende Monate',
    roadTaxText11: 'für 1 Jahr',
    roadTaxText12:
      'Die Tarife finden Sie im Formular 15.91. Sie erhalten das Formular bei den Zollstellen. Für ausländische Fahrzeuge erheben wir die Schwerverkehrsabgabe bei der Einreise beim Grenzübergang. Das gestempelte Formular gilt als Zahlungsnachweis. Verlängern Sie den Aufenthalt in der Schweiz, melden Sie sich bei einer Schweizer Zollstelle.',
    roadTaxText13: 'Bitte beachten:',
    roadTaxText14: 'Mindestabgabe pro Zahlungsnachweis: CHF 25.',
    roadTaxText15: 'Monats- und Jahrestarife gemäss Formular 15.91.',
    roadTaxCategory1: 'Gesellschaftswagen, Reisebusse und Gelenkbusse',
    roadTaxCategory2: 'Wohnmotorwagen oder Wohnmobil',
    roadTaxCategory3: 'Wohnanhänger',
    roadTaxCategory4: 'Schwere Personenwagen',
    roadTaxCategory5:
      'Von obigen Fahrzeugen oder leichten Motorfahrzeugen gezogene Anhänger von über 3,5 Tonnen',
    costPerDay: 'Kosten pro Tag:',
    commonRates: 'Die häufigsten Tarife',
    vehicleTariffs: 'Für die folgenden Fahrzeuge gelten diese Tarife:',
    per100kgTrailerLoad: 'pro 100 kg Anhängelast',
    till: 'bis',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: 'Treibstoff und Reparaturen',
    fuelAndRepairsText1: 'Treibstoff für Fahrzeuge',
    fuelAndRepairsText2:
      'Der Tankinhalt ist abgabenfrei. In einem Reservekanister können Sie zudem bis 25 Liter Treibstoff abgabenfrei einführen. Jeder weitere Liter kostet CHF -.75 Zoll - zudem müssen Sie die Mehrwertsteuer auf den Wert des Treibstoffs bezahlen.',
    fuelAndRepairsText3: 'Reparatur und Unterhaltskosten',
    fuelAndRepairsText4:
      'Wird die Wertfreigrenze von CHF 300 überschritten, müssen Sie für alle Reparatur- und Unterhaltskosten (Reparaturen an Fahrzeugen, elektronischen Geräten, Möbel, Schmuck usw.) MWST bezahlen.  Detailliertere Informationen finden Sie unter:',
    fuelAndRepairsText5: 'Wertfreigrenze CHF 300',
  },

  entryByTrain: {
    entryByTrainMainText: 'Einreise per Bahn',
    entryByTrainText1:
      'Ist im Zug Zollpersonal anwesend, müssen Sie alle mitgeführten Waren unaufgefordert zur Zollbehandlung anmelden. Waren zu Ihrem privaten Gebrauch oder zum Verschenken können Sie auch vor dem Grenzübertritt mit der App QuickZoll verzollen. Diese Anmeldungen sind verbindlich.',
    entryByTrainText2:
      'Ist kein Zollpersonal anwesend und wollen Sie die Waren nicht mit der App QuickZoll verzollen, können Sie:',
    entryByTrainText3:
      'den Zug beim Grenzbahnhof verlassen und Ihre privaten Waren schriftlich anmelden (schriftliche Selbstanmeldung bei einer Anmeldebox) oder;',
    entryByTrainText4:
      'die Waren nachträglich, innerhalb von 7 Tagen, bei jeder Zollstelle während der Öffnungszeiten anmelden.',
    entryByTrainText5:
      'Bitte beachten Sie: In gewissen regionalen Zügen dürfen Sie nur Privatwaren mitführen;',
    entryByTrainText6:
      'die innerhalb der Freimengen oder der Wertfreigrenze von 300 Franken abgabenfrei sind oder;',
    entryByTrainText7: 'die Sie mit der App QuickZoll verzollt haben.',
    entryByTrainText8:
      'In beiden Fällen dürfen die Waren keinen Beschränkungen und Verboten unterliegen sowie weder zeugnis- noch bewilligungspflichtig sein.',
    entryByTrainText9:
      'Achten Sie auf die entsprechende Beschriftung am Zug oder die Lautsprecherdurchsage!',
  },

  forgery: {
    forgeryMainText: 'Fälschungen',
    forgeryText1:
      'Es ist verboten, Marken- und Designfälschungen einzuführen. Der Schweizer Zoll ist verpflichtet, Fälschungen einzuziehen und zu vernichten. Es spielt keine Rolle, ob die Gegenstände neu oder gebraucht sind.',
    forgeryText2: 'Schmuck und Uhren im Ausland kaufen',
    forgeryText3:
      'Seien Sie beim Kauf von Schmuck oder Uhren vorsichtig: Oft entpuppen sich vermeintliche Schnäppchen bei einer Kontrolle als mangelhaft oder sogar als Fälschungen.',
    forgeryText4: 'Erkennen von gefälschtem Schmuck und gefälschten Uhren',
    forgeryText5:
      'Selbst ein teuer bezahltes Schmuckstück kann sich als Fälschung erweisen. Eine Angabe zum Feingehalt garantiert nicht, dass die Ware echt ist. Kaufen Sie Schmuck und Uhren nur in anerkannten Fachgeschäften.',
    forgeryText6:
      'Weitere Informationen zu Produktepiraterie und Markenfälschungen erhalten Sie bei der Schweizer Plattform gegen Fälschung und Piraterie STOP PIRACY:',
  },

  cash: {
    cashMainText: 'Barmittel',
    cashText1:
      "Bei der Ein-, Durch- und Ausfuhr von Barmitteln (Bargeld, Wertpapieren u.a.) im Wert von über CHF 10'000 muss auf Befragung hin Auskunft über die Herkunft, den Verwendungszweck und die wirtschaftlich berechtigte Person erteilt werden.",
    cashText2:
      'Weitere Massnahmen zur Verbrechensbekämpfung bleiben vorbehalten.',
  },

  food: {
    foodMainText: 'Beschränkungen für Lebensmittel',
    foodText1:
      'Aus EU-Staaten, Island und Norwegen können Waren tierischer Herkunft zum privaten Gebrauch ohne Kontrolle durch den Grenztierarzt eingeführt werden. Die Waren dürfen nicht in den Verkauf gelangen.',
    foodText2:
      'Die Einfuhr von Waren tierischer Herkunft aus anderen Staaten ist grundsätzlich verboten.\n' +
      'Ausnahmen für bestimmte Lebensmittel finden Sie auf der Internetseite des BLV:',
    foodText3: 'Lebensmittel im privaten Reiseverkehr',
    foodText4: 'Zusätzliche Beschränkungen für geschützte Tierarten',
    foodText5:
      'Die Einfuhr von Waren tierischer Herkunft  von geschützten Tierarten  ist aus allen Staaten verboten. Für Kaviar vom Stör besteht im Reiseverkehr eine Einfuhrtoleranz von 125 g pro Person und Tag.',
    foodText6: 'Zollabgaben und Mehrwertsteuer',
    foodText7:
      'Wird die Wertfreigrenze von CHF 300 oder die Freimengen für bestimmte Lebensmittel überschritten, müssen Sie MWST und/oder Zoll bezahlen. Detailliertere Informationen finden Sie unter:',
    foodText8: 'Wertfreigrenze CHF 300',
    foodText9: 'Freimengen: Lebensmittel, Alkohol und Tabak',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText: 'Bewilligungspflichtig / Beschränkungen',
    authorisationRequirementsText1:
      'Die Einfuhr von bestimmten Waren ist beschränkt und nur unter besonderen Voraussetzungen (z.B. mit vorheriger Bewilligung) möglich, bei einigen Produkten gelten sogar absolute Einfuhrverbote.',
    authorisationRequirementsText2:
      'Insbesondere folgende Waren unterliegen Beschränkungen (nicht abschliessend):',
    authorisationRequirementsText3:
      'Waffen (z.B. Feuerwaffen, Messer, Elektroschockgeräte, Tränengassprays, Schlagstöcke usw.)',
    authorisationRequirementsText4: 'Radarwarngeräte',
    authorisationRequirementsText5: 'Betäubungsmittel',
    authorisationRequirementsText6:
      'Medikamente über dem persönlichen Monatsbedarf',
    authorisationRequirementsText7: 'Dopingmittel',
    authorisationRequirementsText8: 'Waren, die Gewaltdarstellungen enthalten',
    authorisationRequirementsText9:
      'Waren, die verbotene pornographische Darstellungen enthalten',
    authorisationRequirementsText10:
      'Fälschungen von Marken und Designartikeln, Raubkopien',
    authorisationRequirementsText11: 'Kulturgüter',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText:
      'Interneteinkauf, Post- und Kuriersendungen',
    purchasesOnlineOfflineText1:
      'Sendungen aus dem Ausland sind grundsätzlich zoll- und mehrwertsteuerpflichtig. Nachfolgend zeigen wir Ihnen, wie Sie eine grobe Berechnung der Kosten vornehmen können und was bei der Einfuhr zu beachten ist.',
    purchasesOnlineOfflineText2:
      'Bitte beachten Sie, dass eine definitive Berechnung nicht möglich ist, da uns die Kosten der Transporteure, z.B. der Post nicht im Voraus bekannt sind. Die Kosten werden in der Regel dem Empfänger zusammen mit den Zollabgaben und Steuern (z.B. Mehrwertsteuer) in Rechnung gestellt. Klären Sie diese beim entsprechenden Transportunternehmen ab.',
    purchasesOnlineOfflineText3:
      'Geschenksendungen von Privatpersonen im Ausland an Privatpersonen in der Schweiz sind bis zu einem Warenwert von CHF 100 abgabenfrei, ausgenommen sind jedoch Tabakfabrikate und alkoholische Getränke. Der Absender muss zwingend aussen auf dem Paket oder Brief einen entsprechenden Vermerk anbringen.',
    purchasesOnlineOfflineText4: 'Berechnungsbeispiel – Steuerbarer Warenwert',
    purchasesOnlineOfflineText5:
      'Über einen deutschen Onlineshop haben Sie einen Handstaubsauger bestellt. Der Kaufpreis beträgt € 150.00 (Nettobetrag ohne ausländische MWST). Für den Versand in die Schweiz müssen Sie dem Onlineshop zusätzlich €12.50 bezahlen. Gesamthaft entrichten Sie dem Onlineshop €162.50.',
    purchasesOnlineOfflineText6: 'Gesamtbetrag laut Rechnung Onlineshop',
    purchasesOnlineOfflineText7: 'Betrag in CHF: 198.25',
    purchasesOnlineOfflineText8:
      'Bemerkungen: € 162.50 umgerechnet zu 1.22 in CHF.',
    purchasesOnlineOfflineText9: 'Kosten der Post für die Zollanmeldung',
    purchasesOnlineOfflineText10: 'Betrag in CHF: 17.95',
    purchasesOnlineOfflineText11: 'Kosten der Post für das Öffnen der Sendung',
    purchasesOnlineOfflineText12: 'Betrag in CHF: 13.00',
    purchasesOnlineOfflineText13:
      'Der Versender hat aussen auf dem Paket den Inhalt nicht ausreichend bezeichnet, weshalb die Post das Paket für die Verzollung öffnen musste.',
    purchasesOnlineOfflineText14: 'Total steuerbarer Warenwert',
    purchasesOnlineOfflineText15: 'Betrag in CHF: 229.00',
    purchasesOnlineOfflineText16:
      'Von diesem Betrag (ohne Rappen) berechnet sich die MWST.',
    purchasesOnlineOfflineText17:
      'Bitte beachten: Bei diesem Berechnungsbeispiel handelt es sich um eine allgemeine Berechnung von zollfreier Ware.',
  },

  information: {
    informationTitle: 'Wissenswertes',
    informationSubCategoryTitle: 'Ich habe Waren dabei',
    customsProceduresMainText: 'Vorgehen am Zoll',
    travelDocumentsMainText: 'Reisedokumente',
    declarationMainText: 'Ich habe Waren dabei',
    animalsAndPlantsMainText: 'Ich habe Tiere oder Pflanzen dabei',
    vehiclesMainText: 'Ich bin mit einem Fahrzeug unterwegs',
    entryByTrainMainText: 'Einreise per Bahn',
    prohibitionsAndRestrictionsMainText: 'Verbote und Beschränkungen',
    highwayVignetteMainText: 'Autobahnvignette',
    roadTaxMainText: 'Strassenverkehrsabgabe über 3,5 T (PSVA)',
    fuelAndRepairsMainText: 'Treibstoff und Reparaturen',
    forgeryMainText: 'Fälschungen',
    cashMainText: 'Barmittel',
    foodMainText: 'Beschränkungen für Lebensmittel',
    authorisationRequirementsMainText: 'Bewilligungspflichtig / Beschränkungen',
    purchasesOnlineOfflineMainText:
      'Interneteinkauf, Post- und Kuriersendungen',
    borderCrossingsMainText: 'Grenzübergänge',
  },
  appInformation: {
    appInfoTitle: 'Über die App',
    leftTabText: 'Impressum',
    rightTabText: 'Entwicklung',
    publisher: 'Herausgeberin',
    customsAdministrationAddressTitle: 'Eidgenössische Zollverwaltung EZV',
    contact: 'Kontakt',
    customsInfoCenter: 'Auskunftszentrale Zoll',
    generalCustomsDirectorate: `Monbijoustrasse 40\n3003 Bern\nhttp://www.ezv.admin.ch`,
    designAndDevelopment: 'Design & Entwicklung',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Disclaimer',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
    toContactForm: 'Zum Kontaktformular',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informationen zum Gebrauch der App',
    conditions: 'Nutzungsbedingungen',
    importantSoon: 'Wichtiges in Kürze',
    importantSoonText1:
      'Die App ist bis zur Bezahlung vollumfänglich offline benutzbar',
    importantSoonText2:
      'Sie dürfen pro Kalendertag nur einmal mit Waren einreisen, die Sie mit QuickZoll verzollt haben. ',
    importantSoonText3:
      'Sie dürfen QuickZoll nur für Waren benützen, die Sie zu Ihrem privaten Gebrauch oder zum Verschenken einführen.',
    importantSoonText4:
      'Mit der Verwendung von QuickZoll akzeptieren Sie, dass der MWST Satz 7,7% auch für Waren angewendet wird, die dem reduzierten Steuersatz (2,5%) unterliegen (insbesondere Lebensmittel, Tierfutter, Medikamente und Bücher). Möchten Sie, dass der reduzierte Steuersatz angewendet wird, müssen Sie die Waren bei einem durch das Personal der Eidgenössischen Zollverwaltung (EZV) besetzten Grenzübergang mündlich anmelden.',
    importantSoonText5:
      'Die Bezahlung ist nur mit Kreditkarten (Visa, Mastercard) möglich. Nach der Bezahlung der Abgaben sind die Waren verzollt.',

    importantSoonText6:
      'Die Verzollung kann frühestens 48 Stunden vor dem Grenzübertritt und muss spätestens bei der Grenzübergangsstelle erfolgen.',
    importantSoonText7:
      'Nach der Verzollung mit QuickZoll dürfen Sie über alle offiziellen Grenzübergänge einreisen, unabhängig davon, ob Personal der EZV anwesend ist oder nicht. In Flughäfen dürfen Sie den grünen Durchgang benutzen.',
    importantSoonText8:
      'Die Quittung ist dem Personal der EZV auf Verlangen vorzuweisen. Dieses fotografiert die Quittung bei Bedarf.',
    importantSoonText9:
      'Eine Registrierung ist nicht nötig. Es werden keine Daten gesammelt.',
    importantSoonBoldText1:
      'Mit der App bezahlte Abgaben werden nicht zurück erstattet.',

    howToDeclareYourGoods: 'So verzollen Sie ihre Waren:',
    howToDeclareYourGoodsText1:
      'Melden Sie sämtliche mitgeführten Waren (ausgenommen persönliche Gebrauchsgegenstände und Reiseproviant) an. Die zustehenden Freimengen und die Wertfreigrenze werden während der Verzollung automatisch abgezogen.',
    howToDeclareYourGoodsText2:
      'Geben Sie den Wert in der Fremdwährung gemäss Zahlungsbeleg ein. Der Wert wird mit dem Devisenkurs (Verkauf) des Vortages (letzter Arbeitstag) umgerechnet.',
    howToDeclareYourGoodsText3:
      'Legen Sie ein Zeitfenster von zwei Stunden für Ihren Grenzübertritt fest. Die Quittung ist nur während dieses Zeitfensters gültig. Können Sie den gewählten Zeitraum nicht einhalten, müssen Sie sich bei einem durch das Personal der EZV besetzten Grenzübergang melden und erklären, warum Sie nicht innerhalb der Gültigkeitsfrist einreisen konnten. Ohne glaubhafte Begründung werden die Abgaben erneut erhoben.',
    howToDeclareYourGoodsText4:
      'Alle Personen, für welche die Quittung gilt, müssen gemeinsam einreisen.',
    howToDeclareYourGoodsText5:
      'Vor der Bezahlung können Sie Ihre Anmeldung jederzeit korrigieren. Nach der Bezahlung sind in QuickZoll keine Korrekturen mehr möglich. Nach dem Bezahlen zusätzlich gekauf-te ausländische Waren müssen Sie bei einem durch das Personal der EZV besetzten Grenzübergang anmelden.',
    howToDeclareYourGoodsText6:
      'Für den erfolgreichen Abschluss des Zahlungsvorgangs ist eine Internetverbindung nötig. Ist die Verzollung mit QuickZoll nicht möglich (z.B. keine Internetverbindung oder Bezahlung mit Kreditkarte nicht möglich) müssen Sie die Waren bei einem durch das Personal der EZV besetzten Grenzübergang oder via Anmeldebox anmelden.',
    howToDeclareYourGoodsText7:
      'Stellen Sie sicher, dass Sie die Quittung bei Kontrollen anlässlich des Grenzübertritts auf Ihrem mobilen Endgerät anzeigen können. Bitte beachten Sie, dass während der Gültigkeitsfrist der Quittung ein Bild der Quittung, welches via WhatsApp, iMessage, SMS oder E-Mail an Drittpersonen weitergeleitet wird, nicht als Quittung akzeptiert wird. Die erhaltene Quittung müssen Sie mindestens ein Jahr aufbewahren.',

    specialCases: 'Besondere Fälle',
    specialCasesText1:
      'Folgende Waren können Sie nicht mit QuickZoll verzollen. Sie müssen diese in jedem Fall bei einem durch das Personal der EZV besetzten Grenzübergang anmelden.',
    specialCasesText2:
      'Waren, die Beschränkungen oder Verboten unterliegen und die zeugnis- oder bewilligungspflichtig sind (z.B. Waffen, lebende Tiere und Artenschutzwaren);',
    specialCasesText3: 'Weitere Informationen',
    specialCasesText4:
      "Waren für den privaten Gebrauch oder zum Verschenken mit einem Gesamtwert von CHF 20'000.00 oder mehr;",
    specialCasesText5:
      'Waren, die Sie zum reduzierten Mehrwertsteuersatz anmelden möchten;',
    specialCasesText6:
      'Waren, die Sie nicht zu Ihrem privaten Gebrauch oder zum Verschenken einführen (z.B. Waren, die für den Handel bestimmt sind);',
    specialCasesText7: 'Fahrzeuge, Reparaturen an Fahrzeugen und Treibstoffe;',
    specialCasesText8:
      'Übersiedlungs-, Ausstattungs- (Heirat) und Erbschaftsgut;',
    specialCasesText9:
      'Waren, die nur vorübergehend in die Schweiz eingeführt werden;',
    specialCasesText10:
      'Waren, die für den Transit durch die Schweiz bestimmt sind;',
    specialCasesText11:
      'Waren, die aus der Schweiz ausgeführt werden und für die Sie eine Ausfuhrbestätigung benötigen',
    specialCasesText12:
      '(Informationen zur Rückerstattung der Schweizer Mehrwertsteuer und zum steuerfreien Einkauf in der Schweiz (Tax free) finden Sie hier).',

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
      'Beim Zugriff auf QuickZoll werden keine Daten sowie keine Informationen zum Betriebssystem oder Browser erfasst. Im Rahmen des Zahlungsvorgangs werden durch SIX die für den Vorgang notwendigen Daten bearbeitet. Bei Fragen zum Zahlungsvorgang wenden Sie sich bitte direkt an SIX.',
    dataProtectionText2: '',
    dataProtectionText3: '',
    dataProtectionText4: '',
    dataProtectionText5: '',
    liability: 'Haftung',
    liabilityText1:
      'Die EZV behält sich ausdrücklich vor, jederzeit Inhalte dieser App ohne Ankündigung ganz oder teilweise zu ändern oder zu löschen.',
    liabilityText2:
      'Haftungsansprüche gegen die EZV wegen Schäden materieller oder immaterieller Art, welche durch die Nutzung dieser App, durch technische Störungen, durch Missbrauch von «QuickZoll» oder anderen Gründen entstanden sind, werden ausgeschlossen.',
    culpability: 'Strafbarkeit',
    culpabilityText1:
      'Melden Sie die Waren vollständig und korrekt an. Verbotene und/oder bewilligungspflichtige Waren dürfen nicht angemeldet werden. Die Verzollung mit QuickZoll ist verbindlich (Art. 33 des Zollgesetzes, ZG; SR 631.0). Wer Waren nicht vollständig oder nicht korrekt anmeldet oder wer verbotene und/oder bewilligungspflichtige Waren anmeldet, macht sich strafbar (Art. 118 und 127 ZG).',
    referencesAndLinks: 'Verweise und Links',
    referencesAndLinksText1:
      'Verweise und Links auf Webseiten Dritter liegen ausserhalb des Verantwortungsbereichs der Bundesbehörden. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin. Die Bundesbehörden erklären ausdrücklich, dass sie keinerlei Einfluss auf die Gestaltung, den Inhalt und die Angebote der verknüpften Seiten haben. Informationen und Dienstleistungen von verknüpften Webseiten liegen vollumfänglich in der Verantwortung des jeweiligen Dritten.',
    referencesAndLinksText2:
      'Es wird jegliche Verantwortung für solche Webseiten abgelehnt.',

    copyright: 'Copyright',
    copyrightText1: 'Copyright, Schweizerische Eidgenossenschaft, EZV, 2018.',
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
    vatRateInfo: 'Bitte beachten Sie, dass',
    vatRateInfoText1:
      'Sie pro Kalendertag nur einmal mit Waren einreisen dürfen, die Sie mit QuickZoll verzollt haben;',
    vatRateInfoText2:
      'Angemeldete Waren mit dem einheitlichen Mehrwertsteuersatz von 7,7 % verzollt werden;',
    vatRateInfoText3:
      'Mit der App bezahlte Abgaben nicht zurückerstattet werden.',
    vatRateInfoText4: 'Weitere Informationen finden Sie hier:',
    termsOfService: 'Nutzungsbedingungen',
    acceptance:
      'Hiermit akzeptiere ich die Nutzungsbedingungen, die ich gelesen und verstanden habe.',
    confirm: 'Bestätigen',
    abort: 'Abbrechen',
  },
  furtherInformationModal: {
    furtherInformation: 'Weitere Informationen:',
    acceptance:
      'Mit der Verwendung von QuickZoll akzeptieren Sie, dass der MWST Satz 7,7% auch für Waren angewendet wird, die dem reduzierten Steuersatz (2,5%) unterliegen (insbesondere Lebensmittel, Tierfutter, Medikamente und Bücher). Möchten Sie, dass der reduzierte Steuersatz angewendet wird, müssen Sie die Waren bei einem durch das Personal der Eidgenössischen Zollverwaltung (EZV) besetzten Grenzübergang mündlich anmelden.',
  },
  updateTheApp: {
    title: 'Neue Version verfügbar!',
    subtitle:
      'Bitte führen Sie eine Aktualisierung von QuickZoll durch. Die neue Version ist ab sofort im App Store erhältlich.',
    buttonTextAndroid: 'Zum Play Store',
    buttonTextIos: 'Zum App Store',
  },
  SuccessfulPayment: {
    title:
      'Vielen Dank! Wir haben Ihre Bezahlung erhalten und wünschen eine gute Weiterreise!',
    navigationHeaderTitle: 'Bezahlung erfolgreich',
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kg',
    kiloOrLiter: 'kg/Liter',
    kiloOrLiter_plural: 'kg/Liter',
    liter: 'Liter',
    liter_plural: 'Liter',
    unit: 'Stück',
    unit_plural: 'Stück',
    gram: 'Gramm',
    gram_plural: 'Gramm',
  },
  acceptRateModal: {
    modalTitle: 'Mehrwertsteuersatz 7.7%',
    modalSubTitle:
      'Hiermit bestätige ich, dass ich den einheitlichen Mehrwertsteuersatz von 7.7% bei der Verzollung von Waren akzeptiere.',
    confirm: 'Bestätigen',
  },
};
