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
    note: '🈯',
  },
  snackBar: {
    limitExceeded:
      "Il valore dei beni per l'app è stato superato. Si prega di segnalare le vostre merci per via orale al valico di frontiera.",
    showBorder: 'Mostra il valico di frontiera',
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
    timePickerRegistrationValidUntil:
      'Si assicuri di attraversare la frontiera entro due ore. La quietanza doganale è valevole alle ore {{time}} del {{date}}.',
    timePickerTakeOverThePeriod: 'Prendi il controllo del periodo',
    timePickerTimePrefix: 'ora',
  },
  payment: {
    overViewTitle: ' Riepilogo della dichiarazione',
    dutyColumn: 'Tributi doganali in CHF',
    sumText: 'Totale (CHF)',
    entryInfo: '🈯',
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
    allReceiptsCurrentReceipt: 'Ricevuta corrente:',
    allReceiptsOlderReceipts: 'Ricevute più vecchie:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'da {{value}}',
    entryTime: 'Periodo di entrata',
    chooseOtherEntryTime: 'Scegli un altro periodo',
  },
  information: {
    informationTitle: 'Informazioni utili',
    proceedinAtTheCustoms: 'Modo di procedere in dogana ',
    proceedinAtTheCustomsSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    travelDocuments: 'Documenti di viaggio',
    travelDocumentsSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    haveGoodsWithMe: 'Trasporto merci',
    haveGoodsWithMeSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    haveAnimalsOrPlantsWithMe: 'Trasporto animali o piante',
    haveAnimalsOrPlantsWithMeSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    travelingWithVehicle: 'Sono in viaggio con un veicolo',
    travelingWithVehicleSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    entryByTrain: 'Entrata nel paese con il treno',
    entryByTrainSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
    allowancesFoodAlcoholTobacco: 'Indennità: cibo, alcol e tabacco',
    allowancesFoodAlcoholTobaccoText:
      'Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein, sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren, für die Sie aus agrar- oder gesundheits-politischen Gründen ab einer gewissen Amount Zoll bezahlen müssen (siehe nachstehende Tabelle). Die Freimengen gelten pro Person und pro Tag.',
    prohibitions: 'Divieti e restrizioni',
    prohibitionsSubText:
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
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
      'Molto indietro, dietro la parola montagne, lontano dalle terre del vocabolario e delle consonanti vivono i testi ciechi.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informazioni importanti sull’utilizzo dell’app',
    conditions: 'Condizioni quadro',
    importantSoon: 'L’essenziale in breve',
    importantSoonText:
      'L’app può essere impiegata per la stessa persona o persone solo una volta al giorno (giorno solare).\n' +
      'L’app può essere utilizzata solo per merci importate per uso privato o come regali.\n' +
      'L’utilizzo dell’app comporta l’accettazione della condizione che l’aliquota IVA del 7,7 % viene applicata anche alle merci in realtà soggette all’aliquota ridotta (derrate alimentari, alimenti per animali, medicamenti e libri).\n' +
      'Il pagamento è possibile solo mediante carta di credito (Visa, Mastercard; senza possibilità di rimborso). Dopo il pagamento dei tributi le merci sono imposte.\n' +
      'L’imposizione deve avvenire prima del passaggio del confine (al più presto 48 ore prima) o al più tardi al valico di confine.\n' +
      'Dopo l’imposizione possono essere utilizzati anche i seguenti valichi di confine:\n' +
      'valichi presso i quali è presente il personale doganale;\n' +
      'il passaggio verde della dogana negli aeroporti.\n' +
      'Il giustificativo rilasciato dalla dogana deve essere presentato al personale della dogana svizzera se richiesto. Il personale doganale fotografa il giustificativo se necessario.\n',

    howToDeclareYourGoods: 'Come imporre le merci:',
    howToDeclareYourGoodsText:
      'Dichiarare tutte le merci trasportate (salvo gli oggetti d’uso personale e provviste da viaggio). Le quantità ammesse in franchigia e il limite di franchigia secondo il valore a cui si ha diritto vengono detratti automaticamente.\n' +
      'Inserire il valore nella valuta estera in base alla ricevuta. Il valore viene determinato applicando il corso del cambio (vendita) del giorno precedente (ultimo giorno lavorativo).\n' +
      'Stabilire un intervallo di tempo di due ore per il passaggio del confine. Il giustificativo è valido solo durante questo arco di tempo. Se non è possibile rispettarlo, occorre rivolgersi a un valico di confine in cui è presente il personale della dogana svizzera per spiegare il motivo per cui non è stato possibile varcare il confine nell’intervallo di tempo della validità. Senza motivazione credibile i tributi vengono riscossi una seconda volta.\n' +
      'Se l’imposizione concerne se stessi e le persone con cui si viaggia oppure un’altra persona il passaggio del confine deve avvenire congiuntamente.\n' +
      'Prima del pagamento la dichiarazione può essere corretta in qualsiasi momento, mentre dopo non è più possibile correggerla. Una volta effettuato il pagamento, le merci estere acquistate successivamente devono essere dichiarate presso un valico di confine occupato da personale doganale svizzero.\n' +
      'Il giustificativo rilasciato dalla dogana svizzera va conservato almeno per un anno e può essere conservato anche sotto forma di immagine.\n' +
      'Se l’imposizione con l’app non è possibile (p. es. connessione Internet mancante o pagamento con carta di credito non possibile), la merce va dichiarata presso un valico di confine occupato dal personale doganale svizzero oppure mediante cassetta delle dichiarazioni.\n' +
      'È d’obbligo dichiarare le seguenti merci presso un valico di confine occupato dal personale doganale svizzero.\n' +
      'Merci soggette a limitazioni o divieti e che soggiacciono all’obbligo di certificato o di autorizzazione (p. es. armi, animali vivi e merci protette); ulteriori informazioni.\n' +
      'Merci destinate all’uso privato o da regalare aventi un valore complessivo di 20 000.00 franchi o superiore.\n' +
      'Merci non importate per uso privato o come regali (p. es. merci destinate al commercio).\n' +
      'Veicoli, riparazioni di veicoli e carburanti.\n' +
      'Masserizie di trasloco, corredi nuziali e oggetti ereditati.\n' +
      'Merci temporaneamente importate in Svizzera.\n' +
      'Merci destinate al transito attraverso la Svizzera.\n' +
      'Le merci esportate non possono essere dichiarate con l’app. Le informazioni sugli acquisti esenti da imposta in Svizzera (Tax free) sono disponibili qui.\n',

    legal: 'Aspetti legali',
    usage: 'Uso',
    legalText:
      'L’imposizione con l’app è vincolante (art. 33 della legge del 18 marzo 2005 sulle dogane, RS 631.0). L’omessa oppure errata dichiarazione di merci vietate, soggette all’obbligo di autorizzazione o soggette al pagamento di tributi è dunque punibile.\n' +
      'La persona che presenta il giustificativo al momento del controllo doganale è responsabile della corretta imposizione della merce che trasporta. Si assume anche la responsabilità penale qualora vengano scoperte merci non dichiarate o dichiarate erroneamente.\n' +
      'Al momento dell’utilizzo dell’app accertarsi che:\n' +
      'durante l’operazione di pagamento vi sia un collegamento a Internet affinché l’imposizione possa essere portata a termine;\n' +
      'si disponga di un giustificativo valido per le merci importate;\n' +
      'si sia in grado di presentare sul proprio terminale mobile il giustificativo al momento del controllo in occasione del passaggio del confine.\n' +
      'Attenzione: durante il termine di validità del giustificativo, un’immagine dello stesso inoltrata a terzi tramite WhatsApp, iMessage, SMS o e-mail non è accettata come giustificativo.\n',

    privacyAndLiability: 'Protezione dei dati e responsabilità',
    dataProtection: 'Protezione dei dati',
    dataProtectionText:
      'Ai sensi dell’articolo 13 della Costituzione federale svizzera e delle disposizioni legali della Confederazione sulla protezione dei dati, ognuno ha diritto al rispetto della sua vita privata nonché d’essere protetto da un impiego abusivo dei suoi dati personali. Le autorità federali si attengono a queste disposizioni. I dati personali sono trattati in modo strettamente confidenziale e non vengono venduti né trasmessi a terzi.\n' +
      'In stretta collaborazione con il nostro fornitore di hosting ci impegniamo ad adottare tutte le misure necessarie per proteggere le nostre banche dati da accessi non autorizzati, perdite, abusi o falsificazioni.\n' +
      'Accedendo ai nostri siti vengono salvati in log file i seguenti dati: indirizzo IP, data, ora, richiesta del browser e le informazioni generali sul sistema operativo o sul browser che sono state trasmesse.\n' +
      'I dati di navigazione formano la base per le valutazioni statistiche anonime che permettono di identificare tendenze, grazie alle quali le autorità federali possono migliorare la loro offerta. Secondo la legge federale del 6 ottobre 2000 sulla sorveglianza della corrispondenza postale e del traffico delle telecomunicazioni (LSCPT; RS 780.1) esiste un obbligo di conservazione legale per i dati di collegamento degli ultimi sei mesi.\n' +
      'In caso di presa di contatto spontanea, l’indirizzo di posta elettronica viene salvato in una banca dati separata, non collegata con i log file anonimi. La propria registrazione può essere revocata in ogni momento.\n' +
      'Le autorità federali si riservano espressamente il diritto di modificare o cancellare determinati contenuti, in parte o nella loro interezza, o di sospenderne temporaneamente la pubblicazione in qualsiasi momento e senza darne annuncio preventivo.\n' +
      'Le autorità federali declinano ogni responsabilità per danni materiali o immateriali derivanti dall’accesso alle informazioni pubblicate, dal loro utilizzo o mancato utilizzo oppure riconducibili a un abuso del collegamento o a guasti tecnici.\n',

    referencesAndLinks: 'Riferimenti e link',
    referencesAndLinksText:
      'I riferimenti e i link che rimandano a siti web di terzi non rientrano negli ambiti di responsabilità delle autorità federali. L’utente si assume i rischi connessi all’accesso a questi siti e al loro utilizzo. Le autorità federali dichiarano espressamente di non avere alcuna influenza sull’impostazione, sui contenuti e sulle offerte dei siti web a cui rimanda. La responsabilità per le informazioni e i servizi offerti in tali siti web ricade esclusivamente sui relativi terzi.\n' +
      'Si declina ogni responsabilità legata a tali siti web.\n',

    copyright: 'Copyright',
    copyrightText:
      'Copyright, autorità federali della Confederazione Svizzera, 2007.\n' +
      'Le informazioni contenute nel sito web delle autorità federali sono rese accessibili al pubblico. Scaricando o copiando contenuti, immagini, fotografie o altri dati non vengono trasferiti in alcun modo i relativi diritti.\n' +
      'I diritti d’autore e tutti gli altri diritti riguardanti contenuti, immagini, fotografie o altri dati pubblicati sul sito web delle autorità federali sono di proprietà esclusiva di quest’ultime o, eventualmente, del titolare dei diritti debitamente citato. La riproduzione di qualsiasi elemento è permessa previo consenso scritto del titolare dei diritti d’autore.\n',
  },
};
