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
    recordedOn: 'erfasst am {{value}}',
    addQuantities: 'Mengen hinzufügen',
    enterQuantities: 'Erfassen Sie hier die Mengen aller {{value}}',
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
    timePickerTitle: 'Zeitraum der Einreise wählen',
    timePickerSubTitle: 'Wann möchten Sie die Grenze überqueren?',
    timePickerRegistrationValidUntil:
      'Bitte achten Sie darauf, innerhalb von zwei Stunden mit dieser Anmeldung einzureisen. Diese Anmeldung ist bis zum {{date}} um {{time}} Uhr gültig.',
    timePickerTakeOverThePeriod: 'Zeitraum übernehmen',
    timePickerTimePrefix: 'Uhr',
    recordTheAmountOfMeat:
      'Erfassen Sie die Fleischmenge, die Sie mit sich führen:',
    recordTheAmountOfTobacco:
      'Erfassen Sie Tabakmenge, die Sie mit sich führen:',
  },
  payment: {
    overViewTitle: 'Übersicht ihrer Anmeldung',
    dutyColumn: 'Zollabgabe in CHF',
    sumText: 'Summe (CHF)',
    entryInfo:
      'Sie können nur innerhalb des angegebenen Zeitraums mit den hier angemeldeten Waren die Grenze überqueren.',
  },
  receipt: {
    dutyAndVat: 'Zollabgabe: {{duty}}  |  Mehrwertsteuer: {{vat}}',
    paidOn: 'Bezahlt am {{date}} um {{time}} Uhr mit:',
    transactionId: 'Transaktions-ID (SIX): {{value}}',
    receiptValidUntilText: 'Diese Quittung ist gültig bis:',
    receiptValidUntilTime: '{{date}}  |  {{time}} Uhr',
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
    prohibitions: 'Verbote und Beschränkungen',
    prohibitionsSubText:
      'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
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
      'Eidgenössische Zollverwaltung\nMonbijoustrasse 40\n' +
      '3003 Bern\n' +
      'http://www.ezv.admin.ch',
    designAndDevelopment: 'Design & Entwicklung',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Disclaimer',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informationen zum Gebrauch der App',
    conditions: 'Rahmenbedingungen',
    importantSoon: 'Wichtiges in Kürze',
    importantSoonText:
      'Sie dürfen die App für die gleiche Person bzw. die gleichen Personen nur einmal täglich (Kalendertag) einsetzen.\n' +
      'Sie dürfen die App nur für Waren benützen, die Sie zu Ihrem privaten Gebrauch oder zum Verschenken einführen. \n' +
      'Mit der Verwendung der App akzeptieren Sie, dass der MWST Satz 7,7 %; auch für Waren angewendet wird, die eigentlich dem reduzierten Steuersatz unterliegen (Lebensmittel, Tierfutter, Medikamente und Bücher). \n' +
      'Es ist nur Kreditkartenzahlung (Visa, Mastercard) möglich (ohne Rückerstattungsmöglichkeit). Nach der Bezahlung der Abgaben sind die Waren verzollt.\n' +
      'Die Verzollung muss vor dem Grenzübertritt oder spätestens bei der Grenzübergangsstelle erfolgen. Sie ist aber frühestens 48 Stunden vor dem Grenzübertritt möglich.\n' +
      'Nach der Verzollung dürfen Sie auch folgende Grenzübergänge benutzen:\n' +
      'Grenzübergangsstellen, bei denen kein Personal des Zolls anwesend ist;\n' +
      'den grünen Durchgang in Flughäfen.\n' +
      'Die Quittung des Zolls ist dem Personal des Schweizer Zolls auf Verlangen vorzuweisen. Das Zollpersonal fotografiert die Quittung bei Bedarf.\n',
    howToDeclareYourGoods: 'So verzollen Sie ihre Waren:',
    howToDeclareYourGoodsText:
      'Melden Sie sämtliche mitgeführten Waren (ausgenommen persönliche Gebrauchsgegenstände und Reiseproviant) an. Die zustehenden Freimengen und die Wertfreigrenze werden während der Verzollung automatisch abgezogen.\n' +
      'Geben Sie den Wert in der Fremdwährung gemäss Zahlungsbeleg ein. Der Wert wird mit dem Devisenkurs (Verkauf) des Vortages (letzter Arbeitstag) umgerechnet.\n' +
      'Legen Sie ein Zeitfenster von zwei Stunden für Ihren Grenzübertritt fest. Die Quittung ist nur während dieses Zeitfensters gültig. Können Sie den gewählten Zeitraum nicht einhalten, müssen Sie sich bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang melden und erklären, warum Sie nicht innerhalb der Gültigkeitsfrist einreisen konnten. Ohne glaubhafte Begründung werden die Abgaben erneut erhoben.\n' +
      'Gilt die Verzollung für Sie und Mitreisende oder für eine andere Person, müssen Sie mit diesen Personen gemeinsam einreisen.\n' +
      'Vor der Bezahlung können Sie Ihre Anmeldung jederzeit korrigieren. Nach der Bezahlung sind in der App keine Korrekturen mehr möglich. Nach dem Bezahlen zusätzlich gekaufte ausländische Waren müssen Sie bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang anmelden.\n' +
      'Die erhaltene Quittung des Schweizer Zolls müssen Sie mindestens ein Jahr aufbewahren. Die Quittung können Sie auch als Bild speichern.\n' +
      'Ist die Verzollung mit der App nicht möglich (z. B. keine Internetverbindung oder Bezahlung mit Kreditkarte nicht möglich) müssen Sie die Waren bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang oder via Anmeldebox anmelden.\n' +
      'Folgende Waren müssen Sie in jedem Fall bei einem durch das Personal des Schweizer Zolls besetzten Grenzübergang anmelden.\n' +
      'Waren, die Beschränkungen oder Verboten unterliegen und die zeugnis- oder bewilligungspflichtig sind (z. B. Waffen, lebende Tiere und Artenschutzwaren); Waren für den privaten Gebrauch oder zum Verschenken mit einem Gesamtwert von CHF 20 000.00 oder mehr;\n' +
      'Waren, die Sie nicht zu Ihrem privaten Gebrauch oder zum Verschenken einführen (z. B. Waren, die für den Handel bestimmt sind);\n' +
      'Fahrzeuge, Reparaturen an Fahrzeugen und Treibstoffe;\n' +
      'Übersiedlungs-, Ausstattungs- (Heirat) und Erbschaftsgut;\n' +
      'Waren, die nur vorübergehend in die Schweiz eingeführt werden;\n' +
      'Waren, die für den Transit durch die Schweiz bestimmt sind.\n' +
      'Waren, die ausgeführt werden, können nicht mit der App angemeldet werden. Informationen zum steuerfreien Einkauf in der Schweiz (Tax free) finden Sie hier.\n',
    legal: 'Rechtliches',
    usage: 'Benutzung',
    legalText:
      'Die Verzollung mit der App ist verbindlich (Artikel 33 Zollgesetz, SR 631.0). Sie machen sich strafbar, wenn Sie verbotene, bewilligungs- oder abgabenpflichtige Waren nicht oder falsch anmelden.\n' +
      'Diejenige Person, die die Quittung bei der Zollkontrolle vorweist, ist für die korrekte Verzollung der mitgeführten Waren verantwortlich. Sie übernimmt auch die strafrechtliche Verantwortung, wenn nicht oder falsch angemeldete Ware entdeckt werden.\n' +
      'Stellen Sie bei der Verwendung der App sicher, dass\n' +
      'Sie während des Zahlungsvorgangs eine Internetverbindung haben, um die Verzollung abschliessen zu können.\n' +
      'Sie eine gültige Quittung für die Waren haben, die Sie einführen.\n' +
      'Sie die Quittung bei Kontrollen anlässlich des Grenzübertritts auf Ihrem mobilen Endgerät anzeigen können.\n' +
      'Bitte beachten Sie, dass während der Gültigkeitsfrist der Quittung ein Bild der Quittung, welches via WhatsApp, iMessage, SMS oder E-Mail an Drittpersonen weitergeleitet wird, nicht als Quittung akzeptiert wird.\n',
    privacyAndLiability: 'Datenschutz und Haftung',
    dataProtection: 'Datenschutz',
    dataProtectionText:
      'Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Bundesbehörden halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben.\n' +
      'In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Miss-brauch oder vor Fälschung zu schützen.\n' +
      'Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser.\n' +
      'Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer die Bundesbehörden ihr Angebot entsprechend verbessern können. Gemäss Bundesgesetz betreffend die Überwachung des Post- und Fernmeldeverkehrs (BÜPF) besteht eine gesetzliche Aufbewahrungspflicht für Verbindungsdaten der letzten sechs Monate.\n' +
      'Bei der freiwilligen Kontaktaufnahme wird Ihre Email-Adresse in eine separate Datenbank aufgenommen, welche nicht mit den anonymen Logfiles verknüpft wird. Sie haben jederzeit die Möglichkeit, Ihre Registrierung wieder rückgängig zu machen.\n' +
      'Die Bundesbehörden behalten sich ausdrücklich vor, jederzeit Inhalte ohne Ankündigung ganz oder teilweise zu ändern, zu löschen oder zeitweise nicht zu veröffentlichen.\n' +
      'Haftungsansprüche gegen die Bundesbehörden wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nicht-nutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.\n',
    referencesAndLinks: 'Verweise und Links',
    referencesAndLinksText:
      'Verweise und Links auf Webseiten Dritter liegen ausserhalb des Verantwortungsbereichs der Bundesbehörden. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin. Die Bundesbehörden erklären ausdrücklich, dass sie keinerlei Einfluss auf die Gestaltung, den Inhalt und die Angebote der verknüpften Seiten haben. Informationen und Dienstleistungen von verknüpften Webseiten liegen vollumfänglich in der Verantwortung des jeweiligen Dritten.\n' +
      'Es wird jegliche Verantwortung für solche Webseiten abgelehnt.\n',
    copyright: 'Copyright',
    copyrightText:
      'Copyright, Bundesbehörden der Schweizerischen Eidgenossenschaft, 2007.\n' +
      'Die auf den Websites der Bundesbehörden enthaltenen Informationen werden der Öffentlichkeit zugänglich gemacht. Durch das Herunterladen oder Kopieren von Inhalten, Bildern, Fotos oder anderen Dateien werden keinerlei Rechte bezüglich der Inhalte übertragen.\n' +
      'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf den Websites der Bundesbehörden gehören ausschliesslich diesen oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.\n',
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
      'Mit der Verwendung der App akzeptieren Sie, dass der MWST Satz 7,7 %; auch für Waren angewendet wird, die eigentlich dem redu-zierten Steuersatz unterliegen (Lebensmittel, Tierfutter, Medikamente und Bücher).',
  },
};
