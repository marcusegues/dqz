// @flow
import type { Locale } from '../types/locale';

export const it: Locale = {
  categories: {
    Meat: 'Carne e preparazioni di carne',
    Butter: 'Burro e panna',
    Oils: 'Oli, grassi e margarina',
    OtherFood: 'Altre derrate alimentari e bevande non alcoliche',
    AlcSoft: 'Bevande alcoliche fino al 18% vol.',
    AlcHard: 'Bevande alcoliche oltre il 18% vol.',
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
    Alcohol: 'Bevande alcoliche',
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
    note: 'Suggerimento:',
    underConstruction: 'In corso',
  },
  snackBar: {
    limitExceeded:
      "Il valore dei beni per l'app è stato superato. Si prega di segnalare le vostre merci per via orale al valico di frontiera.",
    limitExceededRightText: 'Mostra i valichi di confine',
    offline:
      "Sei offline. Ad eccezione della funzione di pagamento, tuttavia, puoi utilizzare tutte le altre funzionalità dell'app.",
    paymentAborted: 'Paiement annulé',
    paymentFailed: 'Pagamento annullato',
    paymentAbortedRightText: 'OK',
    paymentFailedRightText: 'OK',
    showBorder: 'Mostra il valico di frontiera',
  },
  onBoarding: {
    welcome: 'Benvenuti a',
    onBoardingMessage:
      'La lingua è stata definita sulla base delle impostazioni attuali del sistema.',
    currentLanguageMessage: 'La tua lingua attualmente \n selezionata è',
    selectLanguage: 'Selezionare un’altra lingua',
    confirmationVat: 'Confermo di accettare l’aliquota IVA unica di',
    confirmationVat2: 'all’atto dell’imposizione delle merci',
    vatInformation: 'Maggiori informazioni',
    skipThisStep: 'Salta questo passaggio',
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
    standardInputSubText: '⚡️',
    enterQuantitiesCigarettes: '',
    enterQuantitiesTobacco: '',
    enterQuantitiesOil: '',
    enterQuantitiesMeat: '',
    meatInput: '',
    butterInput: '',
    oilInput: '',
    alcSoftInput: '',
    alcHardInput: '',
    cigarettesInput: '',
    tobaccoInput: '',
  },
  amountInput: {
    amountInput: 'Inserire qui il valore complessivo delle merci trasportate.',
    amountInputLargeItem:
      'Cattura i singoli oggetti con chi ha oltre {{value}} franchi.',
    amountInputLargeItemGreyBox:
      'Ancora una volta, cattura ogni oggetto che vale più di CHF 300 (valore netto).',
    amountInputAddItem: 'Aggiungere valore',
    amountInputAddItemLarge: 'Aggiungere oggetto',
    amountInputEnterValueBeginning: 'Inserire il valore',
    amountInputEnterValueBoldText: 'senza IVA estera (valore netto)',
    amountInputEnterValueEnd:
      ', senza IVA estera (valore netto), compreso il valore dei regali ricevuti, cibo, prodotti del tabacco e bevande alcoliche.',
    currentTotalValue: 'Valore complessivo attuale:',
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
    validateNoPeopleTitle: 'Deve essere almeno una persona',
    validateNoPeopleSubtitle: 'Garantire la legittimità.',
    validateGenericYes: 'Sì',
    validateGenericNo: 'No',
    validateGenericOk: 'Ok',
    validateMainCategoryRemoveTitle:
      ' Confermare la cancellazione di questa categoria principale?',
    validateMainCategoryRemoveSubtitle:
      'Al momento determinate sottocategorie contengono delle quantità, ovvero: {{value}}',
    validateMainCategoryAndVatRemoveSubTitle: '🔥',
    validateMainCategoryRemoveYes:
      'Sì, desidero eliminare le rispettive quantità.',
    itemsGreaterThan300CHF: 'Articoli > 300 CHF',
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
    savedBasket: 'Carrello corrente',
  },
  payment: {
    overViewTitle: 'Riepilogo della dichiarazione',
    dutyColumn: 'Tributi doganali in CHF',
    sumText: 'Totale (CHF)',
    entryInfo:
      'Puoi attraversare il confine solo entro il periodo specificato con i beni registrati qui.',
  },
  receipt: {
    dutyAndVat: 'Tributi doganali: {{duty}} | IVA: {{vat}}',
    travellers:
      'Viaggiatori: {{adults}} Adulti, {{minors}} Bambini (meno di 17 anni)',
    paidOn: 'Pagamento effettuato in data {{date}} alle ore {{time}} con:',
    transactionId: 'ID della transazione (SIX): {{value}}',

    receiptValidFrom: 'Il giustificativo è valido per valico di frontiera da:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} fino al {{endDate}} | {{endTime}}',
    receiptValidOn: 'Il giustificativo è valido per valico di frontiera da:',
    receiptValidOnDate: '{{date}} dalle ore {{startTime}} alle ore {{endTime}}',

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
    entryTime: 'Periodo di entrata:',
    chooseOtherEntryTime: 'Regolare',
    overviewRegistered: '⚠️',
    overviewDutyFree: '⚠️',
    until: 'fino a',
  },

  customsProcedures: {
    customsProceduresMainText: 'Procedura in dogana',
    customsProceduresText1:
      'All’entrata in Svizzera i privati devono dichiarare spontaneamente tutte le merci e gli animali.',
    customsProceduresText2:
      'Se si trasportano merci esenti da tributi (IVA e dazio) e che non sono soggette a limitazioni e divieti, si può attraversare il confine senza dichiarazione formale. In tal caso è consentito anche:',
    customsProceduresText3: 'scegliere il passaggio verde all’aeroporto;',
    customsProceduresText4:
      'collocare all’interno del parabrezza del veicolo la dichiarazione doganale verde a vista.',
    customsProceduresText5:
      'L’utilizzo del passaggio verde o l’apposizione di una dichiarazione doganale a vista è vincolante e il personale doganale può effettuare controlli senza porre domande.',
    customsProceduresText6:
      'Informazioni più dettagliate sulle merci esenti da tributi sono disponibili alle seguenti rubriche:',
    customsProceduresText7:
      '«Limite di franchigia secondo il valore di 300 franchi»',
    customsProceduresText8:
      '«Quantità ammesse in franchigia: derrate alimentari, alcol e tabacco»',
    customsProceduresText9: '«Oggetti d’uso personale e provviste da viaggio»',
    customsProceduresText10:
      'Dichiarazione doganale verbale o scelta del passaggio rosso all’aeroporto',
    customsProceduresText11:
      'Se al valico di confine è presente il personale doganale svizzero, le merci vanno dichiarate spontaneamente e verbalmente.',
    customsProceduresText12:
      'Le informazioni sui valichi di confine più importanti sono disponibili alla rubrica «Valichi di confine».',
    customsProceduresText13: 'Dichiarazione doganale con l’app QuickZoll',
    customsProceduresText14:
      'Le merci possono essere dichiarate anche con l’app QuickZoll dell’AFD. Le merci devono essere imposte con l’app prima del passaggio del confine oppure al valico di confine. Ciò significa che i tributi devono essere pagati. Se il pagamento avviene mediante app è consentito utilizzare anche i valichi di confine in cui il personale doganale non è presente [OPPURE: valichi di confine dove è possibile effettuare la dichiarazione scritta], e negli aeroporti il passaggio verde.',
    customsProceduresText15:
      'Questa forma di dichiarazione doganale è autorizzata solo per merci destinate all’uso personale o da regalare. Non devono essere soggette a limitazioni o divieti né all’obbligo di certificazione o di autorizzazione.\nAltre merci devono essere dichiarate verbalmente presso un valico di confine in cui è presente il personale doganale svizzero.',
    customsProceduresText16:
      'Dichiarazione doganale scritta (cassetta delle dichiarazioni)',
    customsProceduresText17:
      'In alcuni valichi di confine sono anche a disposizione le cosiddette cassette delle dichiarazioni, dove è possibile dichiarare le proprie merci in forma scritta. Informazioni a riguardo sono disponibili su:\nwww.ezv.admin.ch/cassetta delle dichiarazioni',
    customsProceduresText18:
      'Questa forma di dichiarazione doganale è autorizzata solo per merci non destinate al commercio, non soggette a limitazioni o divieti né all’obbligo di certificazione o di autorizzazione.',
    customsProceduresText19:
      'Le merci commerciali vanno dichiarate all’ufficio doganale di competenza.',
    customsProceduresText20: 'Attenzione',
    customsProceduresText21:
      'La dichiarazione verbale nonché la dichiarazione con l’app o con la cassetta delle dichiarazioni è vincolante. I controlli doganali possono essere effettuati anche all’interno del Paese. Non è possibile effettuare la dichiarazione doganale a posteriori. L’omessa oppure errata dichiarazione di merci vietate, soggette all’obbligo di autorizzazione o soggette al pagamento di tributi è dunque punibile.',
    customsProceduresExtLink1: '',
  },

  travelDocuments: {
    travelDocumentsMainText: 'Documenti di viaggio',
    travelDocumentsText1:
      'Per entrare in Svizzera i cittadini stranieri devono disporre di un documento di viaggio (passaporto o carta d’identità) valido e riconosciuto in Svizzera. In determinati casi è necessario anche un visto.Il sito della Segreteria di Stato della migrazione fornisce informazioni sull’entrata e sul soggiorno in Svizzera (documenti di viaggio e visti):',
    travelDocumentsText2:
      'Le prescrizioni relative a documenti di viaggio all’estero sono consultabili presso le relative autorità estere al link dell’Organizzazione mondiale delle dogane:',
  },

  vatAllowance: {
    vatAllowanceMainText:
      'Limite di franchigia secondo il valore di 300 franchi',
    vatAllowanceText1:
      'Le merci importate per uso privato o come regali sono esenti da IVA fino a un valore di 300 franchi. Va tenuto conto del valore complessivo di tutte le merci, incluso quello dei regali ricevuti, delle derrate alimentari, dei tabacchi manufatti, delle bevande alcoliche, degli animali domestici nonché dei lavori di riparazione e di manutenzione fatti eseguire all’estero sul proprio veicolo.',
    vatAllowanceText2:
      'Non vi rientra invece il valore degli oggetti d’uso personale, delle provviste da viaggio e del carburante per il proprio veicolo.',
    vatAllowanceText3:
      'Determinante è il valore risultante dopo la detrazione dell’IVA estera, a condizione che questa sia indicata sulla ricevuta o fattura. Le indicazioni del valore in valuta estera sono convertite in franchi svizzeri al corso del cambio (vendita) del giorno precedente.',
    vatAllowanceText4:
      'Il limite di franchigia secondo il valore può essere applicato dalla stessa persona solo una volta al giorno. È concesso solo nel caso in cui le merci vengono effettivamente trasportate con sé. Il limite di franchigia secondo il valore vale anche per i bambini.',
    vatAllowanceText5:
      'Cosa succede se il valore della merce supera i 300 franchi?',
    vatAllowanceText6:
      'Se si trasportano merci che superano il limite di franchigia secondo il valore di 300 franchi, l’IVA è dovuta sul valore complessivo di tutta la merce',
    vatAllowanceText7:
      'Esempio: il valore complessivo è di 800 franchi. Il limite di franchigia di 300 franchi è superato, quindi l’IVA viene calcolata sull’importo di 800 franchi.',
    vatAllowanceText8:
      'Ulteriori esempi di applicazione del limite di franchigia secondo il valore.',
    vatAllowanceText9: 'IVA',
    vatAllowanceText10:
      'L’IVA viene calcolata in base al valore della merce. L’aliquota normale è pari al 7,7 per cento. A determinate merci si applica l’aliquota ridotta del 2,5 per cento (p. es. derrate alimentari, bevande analcoliche, libri, riviste o medicamenti). L’imposizione con l’app QuickZoll prevede sempre l’applicazione dell’aliquota normale.',
    vatAllowanceText11:
      'La presentazione di una fattura o di un altro giustificativo del valore (p. es. per acquisti in Internet) agevola la procedura d’imposizione doganale. Se mancano indicazioni relative al valore o vi sono dubbi sulla correttezza di questi dati, l’ufficio doganale può procedere alla stima del valore.',
    vatAllowanceText12: 'Dichiarazione doganale',
    vatAllowanceText13:
      'All’entrata in Svizzera tutte le merci trasportate devono essere dichiarate verbalmente al personale doganale.',
    vatAllowanceText14:
      'Le merci possono essere dichiarate anche con l’app QuickZoll o in forma scritta mediante la cassetta delle dichiarazioni presso i valichi di confine non occupati da personale doganale. Per informazioni a riguardo cliccare qui.',
    vatAllowanceText15:
      'Attenzione: Se la quantità ammessa in franchigia di bevande alcoliche, tabacchi manufatti e alcune derrate alimentari è superata, il dazio deve essere versato in ogni caso.',
    vatAllowanceText16:
      'Attenzione: Determinate merci (p. es. contraffazioni, armi, nonché alcune piante, animali, prodotti animali e merci che soggiacciono alla protezione delle specie) sottostanno al divieto di importazione o a certe limitazioni. Per maggiori informazioni cliccare qui.',
    vatAllowanceText17:
      'Applicazione del limite di franchigia secondo il valore per persone che viaggiano individualmente',
    vatAllowanceText18:
      'Applicazione del limite di franchigia secondo il valore per persone che viaggiano in gruppo',
    vatAllowanceText19:
      'Una persona può presentare un’unica dichiarazione doganale per più persone che viaggiano in gruppo con lei (p. es. con familiari, parenti, amici o conoscenti). Il dichiarante si assume quindi la responsabilità della dichiarazione doganale e deve versare eventuali tributi nonché assumersi la responsabilità penale qualora vengano constatate merci non dichiarate e si rende necessario avviare una procedura penale.',
    vatAllowanceText20:
      'Attenzione: Se il valore complessivo di tutte le merci trasportate dai viaggiatori supera la somma dei limiti di franchigia secondo il valore delle persone che viaggiano in gruppo, il dichiarante non ha diritto al limite di franchigia secondo il valore.',
    vatAllowanceText21:
      'Singoli oggetti il cui valore supera i 300 franchi sono soggetti all’IVA anche per le persone che viaggiano in gruppo.',
    vatAllowanceText22: 'Singoli oggetti di un valore superiore a 300 franchi',
    vatAllowanceText23:
      'Nel valutare se si tratta di un oggetto con un valore unitario superiore a 300 franchi o di più oggetti con un valore inferiore a 300 franchi, vale quanto segue:',
    vatAllowanceText24:
      'per merci non montate o non scomponibili:\n' +
      'un’unità di vendita = un oggetto',
    vatAllowanceText25:
      'per merci montate o scomponibili:\n' +
      'merci montate o scomponibili = un oggetto (anche se i singoli componenti sono indicati separatamente sulla fattura)',
    vatAllowanceText26: 'Esempi',
    vatAllowanceText27:
      '1.\tLa fattura d’acquisto per un computer è la seguente:',
    vatAllowanceText28: '1 PC desktop\t\tCHF\t\t700',
    vatAllowanceText29: '1 schiermo\t\tCHF\t\t200 ',
    vatAllowanceText30: '1 tastiera\t\tCHF\t\t20',
    vatAllowanceText31: 'Totale\tCHF 920',
    vatAllowanceText32: '= 3 oggetti (tre unità di vendita)',
    vatAllowanceText33:
      '2.\tLa fattura d’acquisto per un computer è la seguente:',
    vatAllowanceText34: '1 Computer',
    vatAllowanceText35: 'PC desktop',
    vatAllowanceText36: 'schiermo',
    vatAllowanceText37: 'tastiera',
    vatAllowanceText38: 'Totale\tCHF 920',
    vatAllowanceText39: '= 1 oggetto (un’unità di vendita)',
    vatAllowanceText40:
      '3.\tLa fattura d’acquisto per un paio di occhiali è la seguente:',
    vatAllowanceText41: '2 lenti\t\t2 unità a CHF 200\t\tCHF 400',
    vatAllowanceText42: '1 montatura\t\tCHF 300',
    vatAllowanceText43: 'Totale\t\tCHF 700',
    vatAllowanceText44: '= 1 oggetto (un oggetto scomponibile)',
  },

  dutyAllowance: {
    dutyAllowanceMainText:
      'Quantità ammesse in franchigia: derrate alimentari, alcol e tabacco',
    dutyAllowanceText1:
      'Le merci importate per uso privato o come regali sono esenti da dazio. Costituiscono un’eccezione le cosiddette «merci sensibili» che, per motivi di politica agricola o sanitaria sono soggette a dazio a partire da una determinata quantità (vedi tabella sottostante). Le quantità ammesse in franchigia valgono per persona e al giorno.',
    dutyAllowanceText2:
      'Attenzione: Se il valore complessivo delle merci trasportate supera 300 franchi (compreso il valore di tutte le derrate alimentari), l’IVA è dovuta in ogni caso. Per maggiori informazioni cliccare qui.',
    dutyAllowanceText3:
      'Attenzione: Per determinati prodotti animali e alcuni prodotti vegetali esistono limitazioni supplementari.',
    dutyAllowanceText4: 'Carne e preparazioni di carne',
    dutyAllowanceText5:
      'Ad eccezione di selvaggina, pesci, crostacei, molluschi e altri invertebrati acquatici rientrano in questa categoria:',
    dutyAllowanceText6:
      'tutte le parti di animali idonee all’alimentazione umana (con o senza ossa);',
    dutyAllowanceText7: 'salsicce a base di carne o sangue;',
    dutyAllowanceText8: 'altri prodotti a base di carne;',
    dutyAllowanceText9:
      'preparazioni alimentari contenenti oltre il 20 per cento in peso di salsicce, carne o sangue.',
    dutyAllowanceText10:
      'Non rientrano in questa categoria il midollo e le ossa impiegate per produrre salse nonché gli alimenti per cani e gatti confezionati come tali in imballaggi per la vendita al minuto.',
    dutyAllowanceText11:
      'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText12:
      'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText13: 'complessivamente 1 kg',
    dutyAllowanceText14: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText15: 'fino a 10 kg: 17.- al kg',
    dutyAllowanceText16: 'oltre i 10 kg: 23.- al kg',
    dutyAllowanceText17: 'Burro e crema di latte',
    dutyAllowanceText18:
      'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText19:
      'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText20: 'complessivamente 1 kg/l',
    dutyAllowanceText21: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText22: '16.- al kg/l',
    dutyAllowanceText23: 'Oli, grassi e margarina per l’alimentazione umana',
    dutyAllowanceText24:
      'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText25:
      'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText26: 'complessivamente 5 kg/l',
    dutyAllowanceText27: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText28: '2.- al kg/l',
    dutyAllowanceText29: 'Bevande alcoliche',
    dutyAllowanceText30:
      'Quantità ammesse in franchigia (per persona e giorno):\n' +
      '(età minima: 17 anni)',
    dutyAllowanceText31: 'con tenore alcolico fino a 18 % vol.: 5 litri',
    dutyAllowanceText32: 'con tenore alcolico superiore a 18 % vol.: 1 litro',
    dutyAllowanceText33: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText34: 'con tenore alcolico fino a 18 % vol.: 2.- al litro',
    dutyAllowanceText35:
      'con tenore alcolico superiore a 18 % vol.: 15.- al litro',
    dutyAllowanceText35a:
      'Bevande con un tenore alcolico fino a 0.5 % vol. non sono considerate bevande alcoliche.',
    dutyAllowanceText36: 'Tabacchi manufatti',
    dutyAllowanceText37:
      'Quantità ammesse in franchigia (per persona e giorno):\n' +
      '(età minima: 17 anni)',
    dutyAllowanceText38: 'sigarette/sigari: 250 pezzi o',
    dutyAllowanceText39: 'altri tabacchi manufatti : 250 g',
    dutyAllowanceText40:
      'oppure una scelta di questi prodotti in quantità proporzionate',
    dutyAllowanceText41: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText42: 'sigarette/sigari: 0.25 al pezzo',
    dutyAllowanceText43: 'sigarette/sigari: 0.25 al pezzo',
    dutyAllowanceText44: 'Altre derrate alimentari o merci',
    dutyAllowanceText45:
      'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE. Esenti da dazio',
    dutyAllowanceText46:
      'Merci ordinate all’estero e recapitate per posta o corriere',
    dutyAllowanceText47:
      'Per le merci ordinate all’estero (p. es. in Internet) e recapitate per posta o corriere valgono altre disposizioni. Per ulteriori informazioni cliccare qui.',
    dutyAllowanceText48: '',
  },

  personalEffects: {
    personalEffectsMainText: 'Oggetti d’uso personale e provviste da viaggio',
    personalEffectsText1:
      'Gli oggetti d’uso personale e le provviste da viaggio possono essere importate in esenzione da tributi.',
    personalEffectsText2: 'Oggetti d’uso personale',
    personalEffectsText3:
      'Come tali si intendono gli oggetti d’uso personale che:',
    personalEffectsText4:
      'le persone domiciliate in Svizzera hanno portato con sé all’atto dell’uscita;',
    personalEffectsText5:
      'le persone domicialiate all’estero utilizzano durante il soggiorno in Svizzera e poi riesportano. Tra questi rientrano abiti, biancheria, articoli da toeletta, articoli sportivi, apparecchi fotografici, cineprese, videocamere, telefoni cellulari, computer portatili, strumenti musicali e altri oggetti personali d’uso corrente.',
    personalEffectsText6: 'Provviste da viaggio',
    personalEffectsText7:
      'Come tali sono intese le derrate alimentari e le bevande analcoliche pronte per l’uso durante il viaggio.',
  },

  foreignVat: {
    foreignVatMainText: 'Restituzione dell’IVA estera',
    foreignVatText1:
      'L’Amministrazione federale delle dogane non può restituire l’IVA estera.',
    foreignVatText2:
      'Durante il trasporto in Svizzera di merci acquistate all’estero e destinate all’uso privato, si ha spesso la possibilità di farsi restituire l’IVA estera dal venditore o da una società «Tax Refund». Queste società di servizio non hanno nulla a che vedere con l’Amministrazione federale delle dogane, in particolare non lavorano su nostro incarico.',
    foreignVatText3:
      'Per quanto riguarda la restituzione ogni Stato applica le proprie condizioni. Se del caso, il venditore compila un modulo di restiuzione sul quale l’autorità doganale estera conferma l’esportazione in Svizzera.',
    foreignVatText4:
      'Non siamo in grado di fornire ulteriori informazioni in merito alla restituzione dell’IVA estera. A tale proposito occorre rivolgersi alla rispettiva autorità doganale. Le autorità doganali estere sono reperibili al seguente link dell’Organizzazione mondiale delle dogane:',
    foreignVatText5:
      'L’IVA svizzera è dovuta anche nel caso in cui quella estera non viene restituita. Nell’ambito dell’IVA non esiste una convenzione di doppia imposizione.',
  },

  animals: {
    animalsMainText: 'Animali: animali da compagnia, cani, gatti e cavalli',
    animalsText1:
      'Ulteriori informazioni in merito a cani, gatti e altri animali da compagnia nonché ai cavalli sono disponibili presso l’Ufficio federale della sicurezza alimentare e di veterinaria (USAV):',
    animalsText2: 'Tributi',
    animalsText3:
      'Se si supera il limite di franchigia secondo il valore di 300 franchi, per gli animali è dovuta l’IVA. Per informazioni dettagliate consultare la rubrica:',
    animalsText4: 'Limite di franchigia secondo il valore di 300 franchi',
  },

  plants: {
    plantsMainText: 'Piante',
    plantsText1:
      '1.\tPiante e prodotti vegetali vietati\n' +
      'Le piante qui di seguito possono essere vettori di organismi nocivi (fuoco batterico, cancro della corteccia del castagno, virosi ecc.), pertanto la loro importazione è vietata.',
    plantsText2: 'a) Importazione vietata da tutti i Paesi',
    plantsText3: 'Cotognastro (Cotoneaster)',
    plantsText4: 'Photinia davidiana (sin. Stranvaesia davidiana)',
    plantsText5:
      'b) È vietata l’importazione da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    plantsText6: 'Agazzino (Pyracantha)',
    plantsText7: 'Agrumi (Citrus)',
    plantsText8: 'Arancio trifogliato (Poncirus)',
    plantsText9: 'Biancospini (Crataegus) di ogni genere e sorta',
    plantsText10: 'Castagno con frutti commestibili (Castanea)',
    plantsText11: 'Conifera (Koniferen)',
    plantsText12: 'Cotogno (Cydonia)',
    plantsText13: 'Cotogno ornamentale (Chaenomeles)',
    plantsText14: 'Kumquat o mandarino cinese (Fortunella)',
    plantsText15: 'Melo (Malus)',
    plantsText16: 'Nespolo (Mespilus)',
    plantsText17: 'Nesposolo del Giappone (Eriobotrya japonica)',
    plantsText18: 'Patate e solanacee (Solanacea)',
    plantsText19: 'Pero (Pyrus)',
    plantsText20:
      'Piante da frutta a nocciolo (albicocco, ciliegio, mandorlo, pesco e prugno) e tutte le forme decorative della specie Prunus',
    plantsText21: 'Quercia (Quercus)',
    plantsText22: 'Rose',
    plantsText23: 'Sorbo o sorbo degli uccellatori e farinaccio (Sorbus)',
    plantsText24: 'Viti (Vitis)',
    plantsText25:
      '2.\tAltre piante e prodotti vegetali (comprese frutta e verdura)',
    plantsText26:
      'a) Importazione da Paesi diversi da Norvegia, Islanda o Stati membri dell’UE\n' +
      'È consentito importare piante senza autorizzazione, a condizione che siano importate nel traffico turistico e per uso personale.',
    plantsText27:
      'b) Importazione da tutti gli Stati non membri dell’UE, da Norvegia e Islanda\n' +
      'Le piante (vive o come prodotti vegetali) possono essere soggette all’obbligo del permesso d’importazione.',
    plantsText28:
      'Per l’importazione di piante da questi Stati occorre informarsi sulle disposizioni vigenti presso l’Ufficio federale dell’agricoltura: www.blw.admin.ch',
    plantsText29:
      'Eccezione: Per persona possono essere importati fiori recisi e mazzi di fiori fino a un massimo di 3 chilogrammi nonché frutta e verdura (tranne le patate) fino a un massimo di 10 chilogrammi senza adozione di provvedimenti fitosanitari',
    plantsText30: 'Tributi',
    plantsText31:
      'Se si supera il limite di franchigia secondo il valore di 300 franchi, per le piante è dovuta l’IVA. Per informazioni dettagliate consultare la rubrica: Limite di franchigia secondo il valore di 300 franchi',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText:
      'Souvenir e conservazione delle specie (CITES)',
    souvenirsAndSpeciesProtectionText1: 'Souvenir',
    souvenirsAndSpeciesProtectionText2:
      'Cinture in pelle d’elefante, acchiappasogni con piume di uccello o bastoncini d’incenso in legno di sandalo: la gamma di souvenir è varia. Nel caso di molti oggetti non è subito evidente che sono stati fabbricati con animali o piante protetti (p. es. legno tropicale). Molti oggetti non possono però essere importati in Svizzera. Si consiglia di informarsi già prima delle vacanze quali souvenir sono adeguati e quali invece è meglio lasciare nel luogo di vacanza.',
    souvenirsAndSpeciesProtectionText3: 'Animali protetti',
    souvenirsAndSpeciesProtectionText4:
      'L’importazione di animali protetti è vietata o soggetta ad autorizzazione (vi rientrano p. es. serpenti, lucertole, tartarughe, pappagalli, avorio, scaglie di tartaruga, varie pelli da pellicceria).',
    souvenirsAndSpeciesProtectionText5:
      'All’atto dell’importazione, al posto di controllo CITES deve essere presentata un’autorizzazione d’esportazione o un certificato di riesportazione rilasciati dall’autorità CITES del Paese di provenienza.',
    souvenirsAndSpeciesProtectionText6: 'Piante protette',
    souvenirsAndSpeciesProtectionText7:
      'L’importazione di piante protette o di loro prodotti è vietata o soggetta ad autorizzazione (p. es. orchidee, cactus, determinati legni e piante medicinali).',
    souvenirsAndSpeciesProtectionText8:
      'Informazioni e autorizzazioni sono rilasciate dall’USAV: www.blv.admin.ch',
  },

  highwayVignette: {
    highwayVignetteMainText: 'Contrassegno autostradale',
    highwayVignetteText1:
      'L’utilizzo di autostrade e semiautostrade con veicoli a motore e rimorchi fino a 3,5 tonnellate è soggetto al pagamento di una tassa. Il prezzo di vendita del contrassegno autostradale è di 40 franchi.',
    highwayVignetteText2: 'Punti vendita',
    highwayVignetteText3:
      'In Svizzera il contrassegno autostradale è in vendita per esempio presso gli uffici postali o le stazioni di servizio.',
    highwayVignetteText4:
      'Nei valichi di confine occupati il contrassegno può essere acquistato con carta di credito o in contanti (CHF, EUR, USD, GBP) presso il personale doganale.',
    highwayVignetteText5:
      'All’estero il contrassegno autostradale è in vendita presso i club automobilistici e nelle vicinanze del confine svizzero anche presso le stazioni di servizio sulle autostrade, nei chioschi o presso i tabaccai (Austria).',
    highwayVignetteText6: 'Fissazione del contrassegno autostradale',
    highwayVignetteText7:
      'Il contrassegno è valido solo se incollato sul veicolo come segue:',
    highwayVignetteText8:
      'negli autoveicoli sul lato interno del parabrezza (non nella fascia oscurante);',
    highwayVignetteText9:
      'per rimorchi e motoveicoli, su una parte non intercambiabile e facilmente accessibile.',
    highwayVignetteText10:
      'I contrassegni fissati solo con nastro adesivo o in altro modo non sono validi. Se sulle autostrade e le semiautostrade si circola senza contrassegno o con un contrassegno non valido viene inflitta una multa di 200 franchi. Inoltre deve essere acquistato un contrassegno e fissato al veicolo.',
  },

  roadTax: {
    roadTaxMainText:
      'Tassa sul traffico stradale per veicoli di peso superiore alle 3,5 t (TFTP)',
    roadTaxText1:
      'In Svizzera gli autoveicoli e i rimorchi con un peso totale eccedente le 3,5 tonnellate sono soggetti a una tassa sul traffico pesante. Per i pullman, i camper pesanti, le automobili pesanti e per i loro rimorchi eccedenti le 3,5 tonnellate, la tassa è forfetaria e riscossa al giorno.',
    roadTaxText2:
      'Contrariamente al contrassegno autostradale, la tassa sul traffico pesante è dovuta sull’intera rete stradale e non solo sulle autostrade.',
    roadTaxText3: 'Per gli autocarri e i loro rimorchi vedi:',
    roadTaxText4:
      'Attenzione: L’autoveicolo è soggetto alla TFTP anche se è spento e non viene spostato (p. es. camper in un campeggio).',
    roadTaxText5: 'Pagamento e tariffe',
    roadTaxText6:
      'Rappresentano la base di calcolo: il peso totale e il carico rimorchiabile del veicolo trattore come indicato nella licenza di circolazione nonché il periodo di tassazione.',
    roadTaxText7: 'Vi sono diverse possibilità di versare la TFTP:',
    roadTaxText8: 'per 1 fino a 30 giorni consecutivi;',
    roadTaxText9: 'per 10 giorni a scelta durante un anno;',
    roadTaxText10: 'per 1 fino a 11 mesi consecutivi;',
    roadTaxText11: 'per 1 anno.',
    roadTaxText12:
      'Le tariffe figurano sul modulo 15.91 disponibile presso gli uffici doganali. Per gli autoveicoli esteri la tassa sul traffico pesante viene riscossa all’entrata presso il valico di confine. Il modulo munito di timbro funge da prova dell’avvenuto pagamento. Se si desidera prolungare il soggiorno in Svizzera occorre rivolgersi a un ufficio doganale svizzero.',
    roadTaxText13: 'Attenzione',
    roadTaxText14: 'Tassa minima per prova del pagamento: 25 franchi.',
    roadTaxText15: 'Tariffe mensili e annuali secondo il modulo 15.91.',
    roadTaxCategory1: 'Auto aziendali, pullman e autobus articolati',
    roadTaxCategory2: 'Vivere automobile o camper',
    roadTaxCategory3: 'carovana',
    roadTaxCategory4: 'Autovetture pesanti',
    roadTaxCategory5:
      'Rimorchi di oltre 3,5 tonnellate trainati dai veicoli di cui sopra o veicoli a motore leggero',
    costPerDay: 'Costo al giorno:',
    commonRates: 'Le tariffe più comuni',
    vehicleTariffs: 'Per i seguenti veicoli si applicano le seguenti tariffe:',
    per100kgTrailerLoad: 'Carico del rimorchio ogni 100 kg',
    till: 'a',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: 'Carburante e riparazioni',
    fuelAndRepairsText1: 'Carburante per veicoli',
    fuelAndRepairsText2:
      'Il contenuto del serbatoio è esente da tributi. In bidoni di scorta possono essere importati esenti da tributi fino a 25 litri di carburante. Per ogni litro supplementare si applicano un dazio di 0.75 franchi nonché l’IVA sul valore del carburante.',
    fuelAndRepairsText3: 'Riparazione e costi di manutenzione',
    fuelAndRepairsText4:
      'Se il limite di franchigia secondo il valore di 300 franchi viene superato, l’IVA è dovuta per tutti i costi di riparazione e manutenzione (riparazioni di veicoli, apparecchi elettronici, mobili, gioielli ecc.). Per informazioni dettagliate consultare la rubrica:',
    fuelAndRepairsText5:
      'Limite di franchigia secondo il valore di 300 franchi',
  },

  entryByTrain: {
    entryByTrainMainText: 'Entrata in Svizzera con il treno',
    entryByTrainText1:
      'Se sul treno è presente personale doganale, le merci trasportate vanno dichiarate spontaneamente per il trattamento doganale. Merci destinate all’uso privato o da regalare possono essere imposte anche prima del passaggio del confine con la app QuickZoll. Tali dichiarazioni sono vincolanti.',
    entryByTrainText2:
      'Se non è presente personale doganale e non si desidera imporre le merci con l’app QuickZoll è possibile:',
    entryByTrainText3:
      'scendere dal treno alla stazione di confine e dichiarare per scritto (presso una cassetta delle dichiarazioni) le merci;',
    entryByTrainText4:
      'dichiarare le merci in un secondo tempo, entro 7 giorni, presso qualsiasi ufficio doganale durante gli orari d’apertura.',
    entryByTrainText5:
      'Su determinati treni regionali è possibile trasportare solo merci private:',
    entryByTrainText6:
      'che rientrano nelle quantità ammesse in franchigia o nel limite di franchigia secondo il valore di 300 franchi e che quindi sono esenti da tributi;',
    entryByTrainText7: 'che sono state imposte con l’app QuickZoll.',
    entryByTrainText8:
      'In entrambi i casi le merci non devono essere soggette a limitazioni e divieti né all’obbligo di certificazione o di autorizzazione.',
    entryByTrainText9:
      'Si prega di prestare attenzione alle indicazioni sul treno o agli annunci!',
  },

  forgery: {
    forgeryMainText: 'Contraffazioni',
    forgeryText1:
      'È vietata l’importazione di marchi e design contraffatti. La dogana svizzera è tenuta a sequestrare le contraffazioni e a provvedere alla loro distruzione. È irrilevante se gli oggetti sono nuovi o usati.',
    forgeryText2: 'Acquisto all’estero di gioielli e orologi',
    forgeryText3:
      'Chi acquista orologi o gioielli deve fare molta attenzione: spesso, in occasione di controlli, quello che sembrava essere un affare si rivela un oggetto difettoso o addirittura una contraffazione.',
    forgeryText4: 'Come riconoscere orologi e gioielli contraffatti',
    forgeryText5:
      'Anche un gioiello molto caro può essere contraffatto. Neanche l’indicazione del titolo ne garantisce l’autenticità. Si consiglia quindi di acquistare orologi e gioielli solo in negozi specializzati riconosciuti.',
    forgeryText6:
      'Ulteriori informazioni sulla pirateria dei prodotti e sullla contraffazione sono disponibili sulla Piattaforma svizzera di lotta alla contraffazione e alla pirateria STOP ALLA PIRATERIA:',
  },

  cash: {
    cashMainText: 'Contanti (liquidità)',
    cashText1:
      'All’atto dell’importazione, dell’esportazione e del transito di liquidità (denaro contante, titoli di credito ecc.), per importi superiori a 10 000 franchi, se richiesto occorre fornire informazioni su provenienza, scopo d’impiego e avente economicamente diritto.',
    cashText2:
      'Sono fatti salvi ulteriori provvedimenti in materia di lotta alla criminalità.',
  },

  food: {
    foodMainText: 'Limitazioni per derrate alimentari',
    foodText1:
      'Le merci di origine animale provenienti dagli Stati dell’UE, dall’Islanda e dalla Norvegia destinate all’uso privato possono essere importate senza il controllo da parte del veterinario di confine, ma non possono essere messe in vendita.',
    foodText2:
      'In linea di massima, l’importazione di merci di origine animale da altri Stati è vietata.\n' +
      'Le eccezioni per determinati alimenti sono disponibili sul sito Internet dell’USAV:',
    foodText3: 'Importazione di alimenti nel traffico turistico',
    foodText4: 'Ulteriori limitazioni per le specie animali protette',
    foodText5:
      'L’importazione di prodotti animali appartenenti a specie animali protette è vietata da tutti gli Stati. Per il caviale di storione vige una tolleranza d’importazione di 125 grammi per persona al giorno.',
    foodText6: 'Tributi doganali e IVA',
    foodText7:
      'Se il limite di franchigia secondo il valore di 300 franchi o la quantità ammessa in franchigia per determinati alimenti viene superato, occorre versare l’IVA e/o il dazio. Per informazioni dettagliate consultare le rubriche:',
    foodText8: 'Limite di franchigia secondo il valore di 300 franchi',
    foodText9:
      'Quantità ammesse in franchigia: derrate alimentari, alcol e tabacco',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText:
      'Merci soggette ad autorizzazione o limitazione',
    authorisationRequirementsText1:
      'L’importazione di alcune merci è limitata e possibile solo a determinate condizioni (p. es. previa autorizzazione); per alcuni prodotti vige addirittura il divieto assoluto d’importazione.',
    authorisationRequirementsText2:
      'In particolare sono soggette a limitazioni le seguenti merci (elenco non esaustivo):',
    authorisationRequirementsText3:
      'armi (armi da fuoco, coltelli, dispositivi che producono un elettrochoc, spray lacrimogeni, bastoni da combattimento ecc.);',
    authorisationRequirementsText4: 'rivelatori di radar;',
    authorisationRequirementsText5: 'stupefacenti;',
    authorisationRequirementsText6:
      'medicamenti che superano il fabbisogno personale di un mese;',
    authorisationRequirementsText7: 'prodotti dopanti;',
    authorisationRequirementsText8: 'merci con rappresentazioni violente;',
    authorisationRequirementsText9:
      'merci con rappresentazioni pornografiche vietate;',
    authorisationRequirementsText10:
      'articoli di marca e di design contraffatti, copie pirata;',
    authorisationRequirementsText11: 'beni culturali.',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText:
      'Acquisti in Internet, invii postali e di corriere',
    purchasesOnlineOfflineText1:
      'In linea di massima gli invii dall’estero sono soggetti a dazio e IVA. Qui di seguito un esempio di come eseguire un calcolo dei costi e di cosa bisogna tener conto al momento dell’importazione.',
    purchasesOnlineOfflineText2:
      'Un calcolo definitivo non è possibile in quanto non siamo a conoscenza a priori dei costi dei trasportatori, per esempio della posta. In genere i costi vengono fatturati al destinatario insieme ai tributi doganali e alle imposte (p. es. IVA). Si consiglia di informarsi presso la relativa impresa di trasporti.',
    purchasesOnlineOfflineText3:
      'Gli invii regalo spediti da privati all’estero a privati in Svizzera sono esenti da tributi fino a un valore di 100 franchi, ad eccezione dei tabacchi manufatti e delle bevande alcoliche. Il mittente deve obbligatoriamente apporre un’annotazione sul pacco o sulla lettera.',
    purchasesOnlineOfflineText4:
      'Esempi di calcolo – Valore imponibile della merce',
    purchasesOnlineOfflineText5:
      'In un negozio online tedesco è stato acquistato un aspirapolvere manuale. Il prezzo d’acquisto ammonta a 150.00 euro (importo netto senza IVA estera). Per l’invio in Svizzera occorre versare al negozio online altri 12.50 euro. Complessivamente il negozio online riceve quindi 162.50 euro.',
    purchasesOnlineOfflineText6:
      'Importo complessivo in base alla fattura del negozio online',
    purchasesOnlineOfflineText7: 'Importo in CHF: 198.25',
    purchasesOnlineOfflineText8:
      'Osservazioni: 162.50 euro convertiti in franchi alla valuta di cambio di 1.22.',
    purchasesOnlineOfflineText9: 'Spese postali per la dichiarazione',
    purchasesOnlineOfflineText10: 'Importo in CHF: 17.95',
    purchasesOnlineOfflineText11: 'Spese postali per l’apertura del pacco',
    purchasesOnlineOfflineText12: 'Importo in CHF: 13.00',
    purchasesOnlineOfflineText13:
      'La descrizione del contenuto apposta dal mittente all’esterno del pacco non era sufficiente, quindi la posta ha dovuto aprire il pacco per effetuare l’imposizione.',
    purchasesOnlineOfflineText14: 'Valore imponibile complessivo della merce',
    purchasesOnlineOfflineText15: 'Importo in CHF: 229.00',
    purchasesOnlineOfflineText16:
      'L’IVA viene calcolata in base a questo importo (senza centesimi).',
    purchasesOnlineOfflineText17:
      'Attenzione: Il presente esempio mostra un calcolo standard di merce ammessa in franchigia di dazio.',
  },

  information: {
    informationTitle: 'Informazioni utili',
    informationSubCategoryTitle: 'Trasporto merce',
    customsProceduresMainText: 'Procedura in dogana',
    travelDocumentsMainText: 'Documenti di viaggio',
    declarationMainText: 'Trasporto merce',
    animalsAndPlantsMainText: 'Trasporto animali o piante',
    vehiclesMainText: 'Viaggo in macchina',
    entryByTrainMainText: 'Entrata in Svizzera con il treno',
    prohibitionsAndRestrictionsMainText: 'Divieti e limitazioni',
    vatAllowanceMainText:
      'Limite di franchigia secondo il valore di 300 franchi',
    dutyAllowanceMainText:
      'Quantità ammesse in franchigia: derrate alimentari, alcol e tabacco',
    personalEffectsMainText: 'Oggetti d’uso personale e provviste da viaggio',
    foreignVatMainText: 'Restituzione dell’IVA estera',
    animalsMainText: 'Animali: animali da compagnia, cani, gatti e cavalli',
    plantsMainText: 'Piante',
    souvenirsAndSpeciesProtectionMainText:
      'Souvenir e conservazione delle specie (CITES)',
    highwayVignetteMainText: 'Contrassegno autostradale',
    roadTaxMainText:
      'Tassa sul traffico stradale per veicoli di peso superiore alle 3,5 t (TFTP)',
    fuelAndRepairsMainText: 'Carburante e riparazioni',
    forgeryMainText: 'Contraffazioni',
    cashMainText: 'Contanti (liquidità)',
    foodMainText: 'Limitazioni per derrate alimentari',
    authorisationRequirementsMainText:
      'Merci soggette ad autorizzazione o limitazione',
    purchasesOnlineOfflineMainText:
      'Acquisti in Internet, invii postali e di corriere',
    borderCrossingsMainText: 'valichi di confine',
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
      'Centrale d’informazione dell’AFD\n\nzollauskunft@ezv.admin.ch',
    reachability: 'Reperibilità:',
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
    toContactForm: '',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Informazioni importanti',
    conditions: 'Condizioni quadro',
    importantSoon: 'L’essenziale in breve',
    importantSoonText1:
      "L'app può essere utilizzata offline ad eccezione del modulo di pagamento.",
    importantSoonText2:
      'é consentito entrare in Svizzera una sola volta al giorno con merci imposte con QuickZoll.',
    importantSoonText3:
      'QuickZoll può essere utilizzata solo per merci importate per uso privato o come regali.',
    importantSoonText4:
      "L'utilizzo di QuickZoll comporta l'accettazione della condizione che l'aliquota IVA del 7,7 % viene applicata anche alle merci in realtà soggette all'aliquota ridotta del 2,5 % (in particolare derrate alimentari, alimenti per animali, medicamenti e libri). Se si desidera l'applicazione dell'aliquota ridotta, le merci devono essere dichiarate verbalmente presso un valico di confine occupato dal personale dell'Amministrazione federale delle dogane (AFD).",
    importantSoonText5:
      'Il pagamento è possibile solo con carta di credito (Visa, Mastercard). Dopo il pagamento dei tributi le merci sono imposte.',
    importantSoonText6:
      "L'imposizione deve avvenire al più presto 48 ore prima del passaggio del confine e al più tardi al valico di confine.",
    importantSoonText7:
      "Dopo l'imposizione con QuickZoll possono essere utilizzati tutti i valichi di confine ufficiali, indipendentemente dal fatto se è presente personale dell'AFD o meno. Negli aeroporti invece può essere utilizzato il passaggio verde della dogana.",
    importantSoonText8:
      "Se richiesto, il giustificativo deve essere presentato al personale dell'AFD, che in caso di necessità lo fotografa.",
    importantSoonText9:
      'Non è necessario registrarsi. Non vengono rilevati dati.',
    importantSoonBoldText1:
      "I tributi pagati con l'app non vengono rimborsati.",

    howToDeclareYourGoods: 'Come imporre le merci:',
    howToDeclareYourGoodsText1:
      "Dichiarare tutte le merci trasportate (salvo gli oggetti d'uso personale e provviste da viaggio). Le quantità ammesse in franchigia e il limite di franchigia secondo il valore a cui si ha diritto vengono detratti automaticamente.",
    howToDeclareYourGoodsText2:
      'Inserire il valore nella valuta estera in base alla ricevuta. Il valore viene determinato applicando il corso del cambio (vendita) del giorno precedente (ultimo giorno lavorativo).',
    howToDeclareYourGoodsText3:
      "Stabilire un intervallo di tempo di due ore per il passaggio del confine. Il giustificativo è valido solo durante questo arco di tempo. Se non è possibile rispettarlo, occorre rivolgersi a un valico di confine in cui è presente il personale dell'AFD per spiegare il motivo per cui non è stato possibile varcare il confine nell'intervallo di tempo della validità. Senza motivazione credibile i tributi vengono riscossi una seconda volta.",
    howToDeclareYourGoodsText4:
      'Se il giustificativo vale per più persone, queste devono passare il confine congiuntamente.',
    howToDeclareYourGoodsText5:
      "Prima del pagamento la dichiarazione può essere corretta in qualsiasi momento. Dopo aver effettuato il pagamento, in QuickZoll non è più possibile apportare modifiche. Una volta effettuato il pagamento, le merci estere acquistate successivamente devono essere dichiarate presso un valico di confine occupato da personale dell'AFD.",
    howToDeclareYourGoodsText6:
      "Affinché l'operazione di pagamento abbia buon esito è necessaria una connessione a Internet. Se l'imposizione con QuickZoll non è possibile (p. es. connessione Internet mancante o pagamento con carta di credito non possibile), la merce va dichiarata presso un valico di confine occupato dal personale dell'AFD oppure mediante cassetta delle dichiarazioni.",
    howToDeclareYourGoodsText7:
      "Accertarsi che il giustificativo possa essere presentato sul dispositivo mobile in occasione di un eventuale controllo al valico di confine. Durante il termine di validità non si accetta come giustificativo un'immagine dello stesso inoltrata a terzi tramite WhatsApp, iMessage, SMS o e-mail. Il giustificativo ricevuto va conservato almeno per un anno.",

    specialCases: 'Casi particolari',
    specialCasesText1:
      "Le seguenti merci non possono essere imposte con QuickZoll e devono obbligatoriamente essere dichiarate presso un valico di confine occupato dal personale dell'AFD.",
    specialCasesText2:
      "Merci soggette a limitazioni o divieti e che soggiacciono all'obbligo di certificato o di autorizzazione (p. es. armi, animali vivi e merci protette);",
    specialCasesText3: 'ulteriori informazioni',
    specialCasesText4:
      "Merci destinate all'uso privato o da regalare aventi un valore complessivo di 20 000.00 franchi o superiore.",
    specialCasesText5: "Merci da dichiarare all'aliquota ridotta.",
    specialCasesText6:
      'Merci non importate per uso privato o come regali (p. es. merci destinate al commercio).',
    specialCasesText7: 'Veicoli, riparazioni di veicoli e carburanti.',
    specialCasesText8:
      'Masserizie di trasloco, corredi nuziali e oggetti ereditati.',
    specialCasesText9: 'Merci temporaneamente importate in Svizzera.',
    specialCasesText10: 'Merci destinate al transito attraverso la Svizzera.',
    specialCasesText11:
      "Merci esportate dalla Svizzera e per le quali è necessaria un'attestazione d'esportazione",
    specialCasesText12:
      "(informazioni sulla restituzione dell'IVA e sugli acquisti esenti da imposta in Svizzera [Tax free] sono disponibili qui).",

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
    dataProtectionText2: '',
    dataProtectionText3: '',
    dataProtectionText4: '',
    dataProtectionText5: '',
    liability: 'Responsabilità',
    liabilityText1:
      'Le autorità federali si riservano espressamente il diritto di modificare, cancellare o non pubblicare temporaneamente i contenuti in toto o in parte in qualsiasi momento senza preavviso.',
    liabilityText2:
      "Sono escluse rivendicazioni di responsabilità nei confronti delle autorità federali per danni di natura materiale o immateriale derivanti dall'accesso o dall'uso o non uso delle informazioni pubblicate, in caso di uso improprio del collegamento o di errori tecnici.",
    culpability: 'Sanzioni penali',
    culpabilityText1:
      'Annunci la merce in modo completo e correttamente. Le merci vietate e/o soggette ad autorizzazione non possono essere annunciate. Lo sdoganamento con QuickZoll è vincolante (articolo 33 della Legge doganale, LD, SR 631.0). Chiunque omette di registrare i beni in modo completo o errato, o di registrare beni proibiti e/o merci soggetti ad autorizzazione, è passibile di sanzioni penali (articoli 118 e 127 LD).',
    referencesAndLinks: 'Riferimenti e link',
    referencesAndLinksText1:
      'I riferimenti e i link che rimandano a siti web di terzi non rientrano negli ambiti di responsabilità delle autorità federali. L’utente si assume i rischi connessi all’accesso a questi siti e al loro utilizzo. Le autorità federali dichiarano espressamente di non avere alcuna influenza sull’impostazione, sui contenuti e sulle offerte dei siti web a cui rimanda. La responsabilità per le informazioni e i servizi offerti in tali siti web ricade esclusivamente sui relativi terzi.',
    referencesAndLinksText2:
      'Si declina ogni responsabilità legata a tali siti web.',

    copyright: 'Copyright',
    copyrightText1:
      'Copyright, autorità federali della Confederazione Svizzera, 2018.',
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
    importantNote: 'Indicazione importante',
    vatRateInfo: 'Si prega di tener conto che',
    vatRateInfoText1:
      'giorno è consentito entrare in Svizzera una sola volta con merci imposte con QuickZoll;',
    vatRateInfoText2:
      'le merci dichiarate vengono imposte all’aliquota IVA unica del 7,7 %;',
    vatRateInfoText3: 'i tributi pagati con l’app non vengono rimborsati.',
    vatRateInfoText4: 'Ulteriori informazioni sono disponibili qui:',
    termsOfService: 'Termini e condizioni',
    acceptance: 'Accetto i termini e le condizioni che ho letto e compreso.',
    confirm: 'Confermare',
    abort: 'Abortire',
  },
  furtherInformationModal: {
    furtherInformation: 'Ulteriori informazioni:',
    acceptance:
      "L’utilizzo di QuickZoll comporta l’accettazione della condizione che l’aliquota IVA del 7,7 % viene applicata anche alle merci in realtà soggette all’aliquota ridotta del 2,5 % (in particolare derrate alimentari, alimenti per animali, medicamenti e libri). Se si desidera l’applicazione dell’aliquota ridotta, le merci devono essere dichiarate verbalmente presso un valico di confine occupato. Utilizzando l'app, accetti che l'aliquota IVA sia pari al 7,7%; si applica anche alle merci che sono effettivamente soggette all'aliquota ridotta (alimenti, mangimi, medicinali e libri).",
  },
  updateTheApp: {
    title: 'Nuova versione disponibile!',
    subtitle:
      'Si prega di aggiornare QuickZoll. La nuova versione è ora disponibile su App Store.',
    buttonTextAndroid: 'Al Play Store',
    buttonTextIos: "All'App Store",
  },
  SuccessfulPayment: {
    title:
      'Grazie! Abbiamo ricevuto il pagamento e ti auguriamo un buon viaggio!',
    navigationHeaderTitle: 'Pagamento riuscito',
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
  acceptRateModal: {
    modalTitle: 'IVA di 7.7%',
    modalSubTitle:
      'Confermo di accettare l’aliquota IVA unica di 7.7% all’atto dell’imposizione delle merci.',
    confirm: 'Riprendere',
  },
};
