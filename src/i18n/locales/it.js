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
    note: 'Suggerimento',
    underConstruction: 'In corso',
  },
  snackBar: {
    limitExceeded:
      "Il valore dei beni per l'app è stato superato. Si prega di segnalare le vostre merci per via orale al valico di frontiera.",
    offline: 'Sei offline. Si prega di verificare la connessione.',
    showBorder: 'Mostra il valico di frontiera',
  },
  onBoarding: {
    welcome: 'Benvenuti a',
    onBoardingMessage:
      'La lingua è stata definita sulla base delle impostazioni attuali del sistema.',
    currentLanguageMessage: 'La tua lingua attualmente \n selezionata è',
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
    mainCategoriesNotYetAnswered: 'Categoria merceologica: dati mancanti',
  },
  quantityInput: {
    quantityInput: 'Ingresso quantità',
    recordedOn: 'registrato su {{value}}',
    addQuantities: 'Aggiungi quantità',
    enterQuantities: 'Inserisci le quantità di tutti {{value}} qui',
    enterQuantity: 'Inserisci la quantità',
    enterQuantitiesButter: 'Inserisci le quantità di tutti {{value}} qui',
    enterQuantitiesAlcohol: 'Inserisci le quantità di tutti {{value}} qui',
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
      'Sulla base dell’ultimo corso del cambio disponibile, aggiornato al momento del pagamento.',
  },
  qaFlow: {
    declareGoods: 'Dichiarare le merci',
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
    closeModalText: 'Chiudere',
    timePickerTitle: 'Scelta del passaggio in frontiera:',
    timePickerSubTitle: 'Quando desidera attraversare la frontiera?',
    timePickerRegistrationValidUntilSameDay:
      'Questa registrazione è valida per {{date}} da {{startTime}} a {{endTime}} in punto.',
    timePickerRegistrationValidUntilDifferentDay:
      'Questo accesso è valido per {{startDate}} da {{startTime}} a {{endDate}} al {{endTime}} in punto.',
    timePickerTakeOverThePeriod: 'Prendi il controllo del periodo',
    timePickerTimePrefix: 'ora',
    recordTheAmountOfMeat: 'Registra la quantità di carne che porti con te:',
    recordTheAmountOfTobacco: 'Registra la quantità di tabacco che porti:',
  },
  payment: {
    overViewTitle: ' Riepilogo della dichiarazione',
    dutyColumn: 'Tributi doganali in CHF',
    sumText: 'Totale (CHF)',
    entryInfo:
      'Puoi attraversare il confine solo entro il periodo specificato con i beni registrati qui.',
  },
  receipt: {
    dutyAndVat: 'Tributi doganali: {{duty}} | IVA: {{vat}}',
    paidOn: 'Pagamento effettuato in data {{date}} alle ore {{time}} con:',
    transactionId: 'ID della transazione (SIX): {{value}}',

    receiptValidFrom: 'Il giustificativo è valido da:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} fino al {{endDate}} | {{endTime}}',
    receiptValidOn: 'Il giustificativo è valido su:',
    receiptValidOnDate: '{{date}} dalle {{startTime}} alle {{endTime}}',

    sumText: 'Totale (CHF): {{value}}',
    vatColumn: 'IVA in CHF:',
    normalAmountsTitle: 'Valore complessivo delle merci',
    normalAmountsSubtitle: 'Totale di tutte le ricevute d’acquisto',
    largeAmountsTitle: 'Oggetti individuali',
    largeAmountsSubtitle: 'vale oltre CHF 300',
    receiptStorageNotification:
      'Il presente giustificativo rimane memorizzato per un anno. Durante questo periodo, può essere visualizzato in qualsiasi momento nell’app.',
    allReceiptsNavigationHeaderTitle: 'Giustificativi della dogana svizzera',
    allReceiptsCurrentReceipt: 'Ricevuta corrente:',
    allReceiptsOlderReceipts: 'Ricevute più vecchie:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'da {{value}}',
    entryTime: 'Periodo di entrata',
    chooseOtherEntryTime: 'Scegli un altro periodo',
    overviewRegistered: '⚠️',
    overviewDutyFree: '⚠️',
    until: 'fino a',
  },
  information: {
    informationTitle: 'Informazioni utili',
    customsProceduresMainText: 'Procedendo alla dogana',
    customsProceduresSubText: 'Come privato devi entrare in Svizzera ...',
    travelDocumentsMainText: 'Documenti di viaggio',
    travelDocumentsSubText:
      'Per entrare in Svizzera i cittadini stranieri hanno bisogno di un valido ...',
    declarationMainText: 'Ho dei beni con me',
    declarationSubText: 'Meriti per uso personale o come regalo ...',
    animalsAndPlantsMainText: 'Ho animali o piante con me',
    animalsAndPlantsSubText:
      'Per cani, gatti, altri animali domestici e cavalli troverai il ...',
    vehiclesMainText: 'Sto viaggiando con un veicolo',
    vehiclesSubText:
      "L'uso di autostrade e autostrade con veicoli a motore e rimorchi ...",
    entryByTrainMainText: 'Ingresso in treno',
    entryByTrainSubText:
      'Se il personale doganale è presente sul treno, è necessario prendere tutte le merci ...',
    prohibitionsAndRestrictionsMainText: 'Verbote und Beschränkungen',
    prohibitionsAndRestrictionsSubText:
      'È vietato introdurre contraffazioni di marchi e design. Le usanze svizzere ...',
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
      'Amministrazione federale delle dogane AFD\nMonbijoustrasse 40\n' +
      '3003 Bern\n' +
      'http://www.ezv.admin.ch',
    designAndDevelopment: 'Design e sviluppo',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Clausola di non responsabilità (disclaimer)',
    disclaimerText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informazioni importanti sull’utilizzo dell’app',
    conditions: 'Condizioni quadro',
    importantSoon: 'L’essenziale in breve',
    importantSoonText1:
      'L’app può essere impiegata per la stessa persona o persone solo una volta al giorno (giorno solare).',
    importantSoonText2:
      'L’app può essere utilizzata solo per merci importate per uso privato o come regali.',
    importantSoonText3:
      'L’utilizzo dell’app comporta l’accettazione della condizione che l’aliquota IVA del 7,7 % viene applicata anche alle merci in realtà soggette all’aliquota ridotta (derrate alimentari, alimenti per animali, medicamenti e libri).',
    importantSoonText4:
      'Il pagamento è possibile solo mediante carta di credito (Visa, Mastercard; senza possibilità di rimborso). Dopo il pagamento dei tributi le merci sono imposte.',
    importantSoonText5:
      'L’imposizione deve avvenire prima del passaggio del confine (al più presto 48 ore prima) o al più tardi al valico di confine.',
    importantSoonText6:
      'Dopo l’imposizione possono essere utilizzati anche i seguenti valichi di confine:',
    importantSoonText7:
      'valichi presso i quali è presente il personale doganale;',
    importantSoonText8: 'il passaggio verde della dogana negli aeroporti.',
    importantSoonText9:
      'Il giustificativo rilasciato dalla dogana deve essere presentato al personale della dogana svizzera se richiesto. Il personale doganale fotografa il giustificativo se necessario.',

    howToDeclareYourGoods: 'Come imporre le merci:',
    howToDeclareYourGoodsText1:
      'Dichiarare tutte le merci trasportate (salvo gli oggetti d’uso personale e provviste da viaggio). Le quantità ammesse in franchigia e il limite di franchigia secondo il valore a cui si ha diritto vengono detratti automaticamente.',
    howToDeclareYourGoodsText2:
      'Inserire il valore nella valuta estera in base alla ricevuta. Il valore viene determinato applicando il corso del cambio (vendita) del giorno precedente (ultimo giorno lavorativo).',
    howToDeclareYourGoodsText3:
      'Stabilire un intervallo di tempo di due ore per il passaggio del confine. Il giustificativo è valido solo durante questo arco di tempo. Se non è possibile rispettarlo, occorre rivolgersi a un valico di confine in cui è presente il personale della dogana svizzera per spiegare il motivo per cui non è stato possibile varcare il confine nell’intervallo di tempo della validità. Senza motivazione credibile i tributi vengono riscossi una seconda volta.',
    howToDeclareYourGoodsText4:
      'Se l’imposizione concerne se stessi e le persone con cui si viaggia oppure un’altra persona il passaggio del confine deve avvenire congiuntamente.',
    howToDeclareYourGoodsText5:
      'Prima del pagamento la dichiarazione può essere corretta in qualsiasi momento, mentre dopo non è più possibile correggerla. Una volta effettuato il pagamento, le merci estere acquistate successivamente devono essere dichiarate presso un valico di confine occupato da personale doganale svizzero.',
    howToDeclareYourGoodsText6:
      'Il giustificativo rilasciato dalla dogana svizzera va conservato almeno per un anno e può essere conservato anche sotto forma di immagine.',
    howToDeclareYourGoodsText7:
      'Se l’imposizione con l’app non è possibile (p. es. connessione Internet mancante o pagamento con carta di credito non possibile), la merce va dichiarata presso un valico di confine occupato dal personale doganale svizzero oppure mediante cassetta delle dichiarazioni.',
    howToDeclareYourGoodsText8:
      'È d’obbligo dichiarare le seguenti merci presso un valico di confine occupato dal personale doganale svizzero.',
    howToDeclareYourGoodsText9:
      'Merci soggette a limitazioni o divieti e che soggiacciono all’obbligo di certificato o di autorizzazione (p. es. armi, animali vivi e merci protette); ulteriori informazioni.',
    howToDeclareYourGoodsText10:
      'Merci destinate all’uso privato o da regalare aventi un valore complessivo di 20 000.00 franchi o superiore.',
    howToDeclareYourGoodsText11:
      'Merci non importate per uso privato o come regali (p. es. merci destinate al commercio).',
    howToDeclareYourGoodsText12:
      'Veicoli, riparazioni di veicoli e carburanti.',
    howToDeclareYourGoodsText13:
      'Masserizie di trasloco, corredi nuziali e oggetti ereditati.',
    howToDeclareYourGoodsText14: 'Merci temporaneamente importate in Svizzera.',
    howToDeclareYourGoodsText15:
      'Merci destinate al transito attraverso la Svizzera.',
    howToDeclareYourGoodsText16:
      'Le merci esportate non possono essere dichiarate con l’app. Le informazioni sugli acquisti esenti da imposta in Svizzera (Tax free) sono disponibili qui.',

    legal: 'Aspetti legali',
    usage: 'Uso',
    legalText1:
      'L’imposizione con l’app è vincolante (art. 33 della legge del 18 marzo 2005 sulle dogane, RS 631.0). L’omessa oppure errata dichiarazione di merci vietate, soggette all’obbligo di autorizzazione o soggette al pagamento di tributi è dunque punibile.',
    legalText2:
      'La persona che presenta il giustificativo al momento del controllo doganale è responsabile della corretta imposizione della merce che trasporta. Si assume anche la responsabilità penale qualora vengano scoperte merci non dichiarate o dichiarate erroneamente.',
    legalText3: 'Al momento dell’utilizzo dell’app accertarsi che:',
    legalText4:
      'durante l’operazione di pagamento vi sia un collegamento a Internet affinché l’imposizione possa essere portata a termine;',
    legalText5:
      'si disponga di un giustificativo valido per le merci importate;',
    legalText6:
      'si sia in grado di presentare sul proprio terminale mobile il giustificativo al momento del controllo in occasione del passaggio del confine.',
    legalText7:
      'Attenzione: durante il termine di validità del giustificativo, un’immagine dello stesso inoltrata a terzi tramite WhatsApp, iMessage, SMS o e-mail non è accettata come giustificativo.',

    privacyAndLiability: 'Protezione dei dati e responsabilità',
    dataProtection: 'Protezione dei dati',
    dataProtectionText1:
      'Ai sensi dell’articolo 13 della Costituzione federale svizzera e delle disposizioni legali della Confederazione sulla protezione dei dati, ognuno ha diritto al rispetto della sua vita privata nonché d’essere protetto da un impiego abusivo dei suoi dati personali. Le autorità federali si attengono a queste disposizioni. I dati personali sono trattati in modo strettamente confidenziale e non vengono venduti né trasmessi a terzi.',

    dataProtectionText2:
      'In stretta collaborazione con il nostro fornitore di hosting ci impegniamo ad adottare tutte le misure necessarie per proteggere le nostre banche dati da accessi non autorizzati, perdite, abusi o falsificazioni.',
    dataProtectionText3:
      'Accedendo ai nostri siti vengono salvati in log file i seguenti dati: indirizzo IP, data, ora, richiesta del browser e le informazioni generali sul sistema operativo o sul browser che sono state trasmesse.',
    dataProtectionText4:
      'I dati di navigazione formano la base per le valutazioni statistiche anonime che permettono di identificare tendenze, grazie alle quali le autorità federali possono migliorare la loro offerta. Secondo la legge federale del 6 ottobre 2000 sulla sorveglianza della corrispondenza postale e del traffico delle telecomunicazioni (LSCPT; RS 780.1) esiste un obbligo di conservazione legale per i dati di collegamento degli ultimi sei mesi.',
    dataProtectionText5:
      'In caso di presa di contatto spontanea, l’indirizzo di posta elettronica viene salvato in una banca dati separata, non collegata con i log file anonimi. La propria registrazione può essere revocata in ogni momento. Le autorità federali si riservano espressamente il diritto di modificare o cancellare determinati contenuti, in parte o nella loro interezza, o di sospenderne temporaneamente la pubblicazione in qualsiasi momento e senza darne annuncio preventivo. Le autorità federali declinano ogni responsabilità per danni materiali o immateriali derivanti dall’accesso alle informazioni pubblicate, dal loro utilizzo o mancato utilizzo oppure riconducibili a un abuso del collegamento o a guasti tecnici.',

    liability: 'Responsabilità',
    liabilityText1:
      'Le autorità federali si riservano espressamente il diritto di modificare, cancellare o non pubblicare temporaneamente i contenuti in toto o in parte in qualsiasi momento senza preavviso.',
    liabilityText2:
      "Sono escluse rivendicazioni di responsabilità nei confronti delle autorità federali per danni di natura materiale o immateriale derivanti dall'accesso o dall'uso o non uso delle informazioni pubblicate, in caso di uso improprio del collegamento o di errori tecnici.",

    referencesAndLinks: 'Riferimenti e link',
    referencesAndLinksText1:
      'I riferimenti e i link che rimandano a siti web di terzi non rientrano negli ambiti di responsabilità delle autorità federali. L’utente si assume i rischi connessi all’accesso a questi siti e al loro utilizzo. Le autorità federali dichiarano espressamente di non avere alcuna influenza sull’impostazione, sui contenuti e sulle offerte dei siti web a cui rimanda. La responsabilità per le informazioni e i servizi offerti in tali siti web ricade esclusivamente sui relativi terzi.',
    referencesAndLinksText2:
      'Si declina ogni responsabilità legata a tali siti web.',

    copyright: 'Copyright',
    copyrightText1:
      'Copyright, autorità federali della Confederazione Svizzera, 2007.',
    copyrightText2:
      'Le informazioni contenute nel sito web delle autorità federali sono rese accessibili al pubblico. Scaricando o copiando contenuti, immagini, fotografie o altri dati non vengono trasferiti in alcun modo i relativi diritti.',
    copyrightText3:
      'I diritti d’autore e tutti gli altri diritti riguardanti contenuti, immagini, fotografie o altri dati pubblicati sul sito web delle autorità federali sono di proprietà esclusiva di quest’ultime o, eventualmente, del titolare dei diritti debitamente citato. La riproduzione di qualsiasi elemento è permessa previo consenso scritto del titolare dei diritti d’autore.',
  },
  overview: {
    declared: 'Dichiarato',
    dutyFree: 'duty-free',
    details: 'Dettagli',
  },
  legalNoticeModal: {
    importantNote: 'Nota importante',
    vatRateInfo:
      "Si prega di tener conto che nessun rimborso è possibile quando si utilizza questa applicazione. Le merci dichiarate sono liquidate all'aliquota IVA uniforme del 7,7%. Ulteriori informazioni possono essere trovate qui:",
    termsOfService: 'Termini e condizioni',
    acceptance: 'Accetto i termini e le condizioni che ho letto e compreso.',
    confirm: 'Confermare',
    abort: 'Abortire',
  },
  furtherInformationModal: {
    furtherInformation: 'Ulteriori informazioni:',
    acceptance:
      "Utilizzando l'app, accetti che l'aliquota IVA sia pari al 7,7%; si applica anche alle merci che sono effettivamente soggette all'aliquota ridotta (alimenti, mangimi, medicinali e libri).",
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kgs',
    kiloOrLiter: 'kg/litro',
    kiloOrLiter_plural: 'kgs/litri',
    liter: 'litro',
    liter_plural: 'litri',
    unit: 'unità',
    unit_plural: 'unità',
    gram: 'grammo',
    gram_plural: 'grammi',
  },
};
