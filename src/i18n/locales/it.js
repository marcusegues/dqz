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
    standardInputSubText: '⚡️',
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
  },

  travelDocuments: {
    travelDocumentsMainText: 'Documenti di viaggio',
    travelDocumentsText1:
      'Per entrare in Svizzera i cittadini stranieri devono disporre di un documento di viaggio (passaporto o carta d’identità) valido e riconosciuto in Svizzera. In determinati casi è necessario anche un visto.Il sito della Segreteria di Stato della migrazione fornisce informazioni sull’entrata e sul soggiorno in Svizzera (documenti di viaggio e visti):',
    travelDocumentsText2:
      'Le prescrizioni relative a documenti di viaggio all’estero sono consultabili presso le relative autorità estere al link dell’Organizzazione mondiale delle dogane:',
  },

  vatAllowance: {
    vatAllowanceMainText: 'Limite di franchigia secondo il valore di 300 franchi',
    vatAllowanceText1: 'Le merci importate per uso privato o come regali sono esenti da IVA fino a un valore di 300 franchi. Va tenuto conto del valore complessivo di tutte le merci, incluso quello dei regali ricevuti, delle derrate alimentari, dei tabacchi manufatti, delle bevande alcoliche, degli animali domestici nonché dei lavori di riparazione e di manutenzione fatti eseguire all’estero sul proprio veicolo.',
    vatAllowanceText2: 'Non vi rientra invece il valore degli oggetti d’uso personale, delle provviste da viaggio e del carburante per il proprio veicolo.',
    vatAllowanceText3: 'Determinante è il valore risultante dopo la detrazione dell’IVA estera, a condizione che questa sia indicata sulla ricevuta o fattura. Le indicazioni del valore in valuta estera sono convertite in franchi svizzeri al corso del cambio (vendita) del giorno precedente.',
    vatAllowanceText4: 'Il limite di franchigia secondo il valore può essere applicato dalla stessa persona solo una volta al giorno. È concesso solo nel caso in cui le merci vengono effettivamente trasportate con sé. Il limite di franchigia secondo il valore vale anche per i bambini.',
    vatAllowanceText5: 'Cosa succede se il valore della merce supera i 300 franchi?',
    vatAllowanceText6: 'Se si trasportano merci che superano il limite di franchigia secondo il valore di 300 franchi, l’IVA è dovuta sul valore complessivo di tutta la merce',
    vatAllowanceText7: 'Esempio: il valore complessivo è di 800 franchi. Il limite di franchigia di 300 franchi è superato, quindi l’IVA viene calcolata sull’importo di 800 franchi.',
    vatAllowanceText8: 'Ulteriori esempi di applicazione del limite di franchigia secondo il valore.',
    vatAllowanceText9: 'IVA',
    vatAllowanceText10: 'L’IVA viene calcolata in base al valore della merce. L’aliquota normale è pari al 7,7 per cento. A determinate merci si applica l’aliquota ridotta del 2,5 per cento (p. es. derrate alimentari, bevande analcoliche, libri, riviste o medicamenti). L’imposizione con l’app «xxx» prevede sempre l’applicazione dell’aliquota normale.',
    vatAllowanceText11: 'La presentazione di una fattura o di un altro giustificativo del valore (p. es. per acquisti in Internet) agevola la procedura d’imposizione doganale. Se mancano indicazioni relative al valore o vi sono dubbi sulla correttezza di questi dati, l’ufficio doganale può procedere alla stima del valore.',
    vatAllowanceText12: 'Dichiarazione doganale',
    vatAllowanceText13: 'All’entrata in Svizzera tutte le merci trasportate devono essere dichiarate verbalmente al personale doganale.',
    vatAllowanceText14: 'Le merci possono essere dichiarate anche con l’app QuickZoll o in forma scritta mediante la cassetta delle dichiarazioni presso i valichi di confine non occupati da personale doganale. Per informazioni a riguardo cliccare qui.',
    vatAllowanceText15: 'Attenzione: Se la quantità ammessa in franchigia di bevande alcoliche, tabacchi manufatti e alcune derrate alimentari è superata, il dazio deve essere versato in ogni caso. Per maggiori informazioni.',
    vatAllowanceText16: 'Attenzione: Determinate merci (p. es. contraffazioni, armi, nonché alcune piante, animali, prodotti animali e merci che soggiacciono alla protezione delle specie) sottostanno al divieto di importazione o a certe limitazioni. Per maggiori informazioni cliccare qui.',
    vatAllowanceText17: 'Applicazione del limite di franchigia secondo il valore per persone che viaggiano individualmente',
    vatAllowanceText18: 'Applicazione del limite di franchigia secondo il valore per persone che viaggiano in gruppo',
      vatAllowanceText19: 'Una persona può presentare un’unica dichiarazione doganale per più persone che viaggiano in gruppo con lei (p. es. con familiari, parenti, amici o conoscenti). Il dichiarante si assume quindi la responsabilità della dichiarazione doganale e deve versare eventuali tributi nonché assumersi la responsabilità penale qualora vengano constatate merci non dichiarate e si rende necessario avviare una procedura penale.',
    vatAllowanceText20: 'Attenzione: Se il valore complessivo di tutte le merci trasportate dai viaggiatori supera la somma dei limiti di franchigia secondo il valore delle persone che viaggiano in gruppo, il dichiarante non ha diritto al limite di franchigia secondo il valore.',
    vatAllowanceText21: 'Singoli oggetti il cui valore supera i 300 franchi sono soggetti all’IVA anche per le persone che viaggiano in gruppo.',
    vatAllowanceText22: 'Singoli oggetti di un valore superiore a 300 franchi',
    vatAllowanceText23: 'Nel valutare se si tratta di un oggetto con un valore unitario superiore a 300 franchi o di più oggetti con un valore inferiore a 300 franchi, vale quanto segue:',
    vatAllowanceText24: 'per merci non montate o non scomponibili:\n' +
      'un’unità di vendita = un oggetto',
    vatAllowanceText25: 'per merci montate o scomponibili:\n' +
      'merci montate o scomponibili = un oggetto (anche se i singoli componenti sono indicati separatamente sulla fattura)',
    vatAllowanceText26: 'Esempi',
    vatAllowanceText27: '1.\tLa fattura d’acquisto per un computer è la seguente:',
      vatAllowanceText28: '1 PC desktop\t\tCHF\t\t700',
      vatAllowanceText29: '1 schiermo\t\tCHF\t\t200 ',
      vatAllowanceText30: '1 tastiera\t\tCHF\t\t20',
      vatAllowanceText31: 'Totale\tCHF 920',
    vatAllowanceText32: '= 3 oggetti (tre unità di vendita)',
    vatAllowanceText33: '2.\tLa fattura d’acquisto per un computer è la seguente:',
      vatAllowanceText34: '1 Computer',
      vatAllowanceText35: 'PC desktop',
      vatAllowanceText36: 'schiermo',
      vatAllowanceText37: 'tastiera',
      vatAllowanceText38: 'Totale\tCHF 920',
    vatAllowanceText39: '= 1 oggetto (un’unità di vendita)',
    vatAllowanceText40: '3.\tLa fattura d’acquisto per un paio di occhiali è la seguente:',
      vatAllowanceText41: '2 lenti\t\t2 unità a CHF 200\t\tCHF 400',
      vatAllowanceText42: '1 montatura\t\tCHF 300',
      vatAllowanceText43: 'Totale\t\tCHF 700',
      vatAllowanceText44: '= 1 oggetto (un oggetto scomponibile)',
  },

  dutyAllowance: {
    dutyAllowanceMainText: 'Quantità ammesse in franchigia: derrate alimentari, alcol e tabacco',
    dutyAllowanceText1: 'Le merci importate per uso privato o come regali sono esenti da dazio. Costituiscono un’eccezione le cosiddette «merci sensibili» che, per motivi di politica agricola o sanitaria sono soggette a dazio a partire da una determinata quantità (vedi tabella sottostante). Le quantità ammesse in franchigia valgono per persona e al giorno.',
    dutyAllowanceText2: 'Attenzione: Se il valore complessivo delle merci trasportate supera 300 franchi (compreso il valore di tutte le derrate alimentari), l’IVA è dovuta in ogni caso. Per maggiori informazioni cliccare qui.',
    dutyAllowanceText3: 'Attenzione: Per determinati prodotti animali e alcuni prodotti vegetali esistono limitazioni supplementari.',
    dutyAllowanceText4: 'Carne e preparazioni di carne',
    dutyAllowanceText5: 'Ad eccezione di selvaggina, pesci, crostacei, molluschi e altri invertebrati acquatici rientrano in questa categoria:',
    dutyAllowanceText6: 'tutte le parti di animali idonee all’alimentazione umana (con o senza ossa);',
    dutyAllowanceText7: 'salsicce a base di carne o sangue;',
    dutyAllowanceText8: 'altri prodotti a base di carne;',
    dutyAllowanceText9: 'preparazioni alimentari contenenti oltre il 20 per cento in peso di salsicce, carne o sangue.',
    dutyAllowanceText10: 'Non rientrano in questa categoria il midollo e le ossa impiegate per produrre salse nonché gli alimenti per cani e gatti confezionati come tali in imballaggi per la vendita al minuto.',
    dutyAllowanceText11: 'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText12: 'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText13: 'complessivamente 1 kg',
    dutyAllowanceText14: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText15: 'fino a 10 kg: 17.- al kg',
    dutyAllowanceText16: 'oltre i 10 kg: 23.- al kg',
    dutyAllowanceText17: 'Burro e crema di latte',
    dutyAllowanceText18: 'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText19: 'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText20: 'complessivamente 1 kg/l',
    dutyAllowanceText21: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText22: '16.- al kg/l',
    dutyAllowanceText23: 'Oli, grassi e margarina per l’alimentazione umana',
    dutyAllowanceText24: 'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE.',
    dutyAllowanceText25: 'Quantità ammesse in franchigia (per persona e giorno):',
    dutyAllowanceText26: 'complessivamente 5 kg/l',
    dutyAllowanceText27: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText28: '2.- al kg/l',
    dutyAllowanceText29: 'Bevande alcoliche',
    dutyAllowanceText30: 'Quantità ammesse in franchigia (per persona e giorno):\n'+
    '(età minima: 17 anni)'
    dutyAllowanceText31: 'con tenore alcolico fino a 18 % vol.: 5 litri',
    dutyAllowanceText32: 'con tenore alcolico superiore a 18 % vol.: 1 litro',
    dutyAllowanceText33: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText34: 'con tenore alcolico fino a 18 % vol.: 2.- al litro',
    dutyAllowanceText35: 'con tenore alcolico superiore a 18 % vol.: 15.- al litro',
    dutyAllowanceText36: 'Tabacchi manufatti',
    dutyAllowanceText37: 'Quantità ammesse in franchigia (per persona e giorno):\n' +
    '(età minima: 17 anni)',
    dutyAllowanceText38: 'sigarette/sigari: 250 pezzi o',
    dutyAllowanceText39: 'altri tabacchi manufatti : 250 g',
    dutyAllowanceText40: 'oppure una scelta di questi prodotti in quantità proporzionate',
    dutyAllowanceText41: 'Tributi doganali per le quantità eccedenti (in CHF):',
    dutyAllowanceText42: 'sigarette/sigari: 0.25 al pezzo',
    dutyAllowanceText43: 'sigarette/sigari: 0.25 al pezzo',
    dutyAllowanceText44: 'Altre derrate alimentari o merci',
    dutyAllowanceText45: 'È vietata l’importazione di prodotti animali provenienti da Paesi diversi da Islanda, Norvegia o Stati membri dell’UE. Esenti da dazio',
    dutyAllowanceText46: 'Merci ordinate all’estero e recapitate per posta o corriere',
    dutyAllowanceText47: 'Per le merci ordinate all’estero (p. es. in Internet) e recapitate per posta o corriere valgono altre disposizioni. Per ulteriori informazioni cliccare qui.',
  },

  personalEffects: {
    personalEffectsMainText: 'Oggetti d’uso personale e provviste da viaggio',
    personalEffectsText1: 'Gli oggetti d’uso personale e le provviste da viaggio possono essere importate in esenzione da tributi.',
    personalEffectsText2: 'Oggetti d’uso personale',
    personalEffectsText3: 'Come tali si intendono gli oggetti d’uso personale che:',
    personalEffectsText4: 'le persone domiciliate in Svizzera hanno portato con sé all’atto dell’uscita;',
    personalEffectsText5: 'le persone domicialiate all’estero utilizzano durante il soggiorno in Svizzera e poi riesportano. Tra questi rientrano abiti, biancheria, articoli da toeletta, articoli sportivi, apparecchi fotografici, cineprese, videocamere, telefoni cellulari, computer portatili, strumenti musicali e altri oggetti personali d’uso corrente.',
    personalEffectsText6: 'Provviste da viaggio',
    personalEffectsText7: 'Come tali sono intese le derrate alimentari e le bevande analcoliche pronte per l’uso durante il viaggio.',
  },

  foreignVat: {
    foreignVatMainText: 'Restituzione dell’IVA estera',
    foreignVatText1: 'L’Amministrazione federale delle dogane non può restituire l’IVA estera.',
    foreignVatText2: 'Durante il trasporto in Svizzera di merci acquistate all’estero e destinate all’uso privato, si ha spesso la possibilità di farsi restituire l’IVA estera dal venditore o da una società «Tax Refund». Queste società di servizio non hanno nulla a che vedere con l’Amministrazione federale delle dogane, in particolare non lavorano su nostro incarico.',
    foreignVatText3: 'Per quanto riguarda la restituzione ogni Stato applica le proprie condizioni. Se del caso, il venditore compila un modulo di restiuzione sul quale l’autorità doganale estera conferma l’esportazione in Svizzera.',
    foreignVatText4: 'Non siamo in grado di fornire ulteriori informazioni in merito alla restituzione dell’IVA estera. A tale proposito occorre rivolgersi alla rispettiva autorità doganale. Le autorità doganali estere sono reperibili al seguente link dell’Organizzazione mondiale delle dogane: www.wcoomd.org',
    foreignVatText5: 'L’IVA svizzera è dovuta anche nel caso in cui quella estera non viene restituita. Nell’ambito dell’IVA non esiste una convenzione di doppia imposizione.',
  },

  animals: {
    animalsMainText: 'Animali: animali da compagnia, cani, gatti e cavalli',
    animalsText1: 'Ulteriori informazioni in merito a cani, gatti e altri animali da compagnia nonché ai cavalli sono disponibili presso l’Ufficio federale della sicurezza alimentare e di veterinaria (USAV): https://www.blv.admin.ch',
    animalsText2: 'Tributi',
    animalsText3: 'Se si supera il limite di franchigia secondo il valore di 300 franchi, per gli animali è dovuta l’IVA. Per informazioni dettagliate consultare la rubrica:',
    animalsText4: 'Limite di franchigia secondo il valore di 300 franchi',
  },

  plants: {
    plantsMainText: 'Piante',
    plantsText1: '1.\tPiante e prodotti vegetali vietati',
    plantsText2: '',
    plantsText3: '',
    plantsText4: '',
    plantsText5: '',
    plantsText6: '',
    plantsText7: '',
    plantsText8: '',
    plantsText9: '',
    plantsText10: '',
    plantsText11: '',
    plantsText12: '',
    plantsText13: '',
    plantsText14: '',
    plantsText15: '',
    plantsText16: '',
    plantsText17: '',
    plantsText18: '',
    plantsText19: '',
    plantsText20: '',
    plantsText21: '',
    plantsText22: '',
    plantsText23: '',
    plantsText24: '',
    plantsText25: '',
    plantsText26: '',
    plantsText27: '',
    plantsText28: '',
    plantsText29: '',
    plantsText30: '',
    plantsText31: '',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText: '',
    souvenirsAndSpeciesProtectionText1: '',
    souvenirsAndSpeciesProtectionText2: '',
    souvenirsAndSpeciesProtectionText3: '',
    souvenirsAndSpeciesProtectionText4: '',
    souvenirsAndSpeciesProtectionText5: '',
    souvenirsAndSpeciesProtectionText6: '',
    souvenirsAndSpeciesProtectionText7: '',
    souvenirsAndSpeciesProtectionText8: '',
  },

  highwayVignette: {
    highwayVignetteMainText: '',
    highwayVignetteText1: '',
    highwayVignetteText2: '',
    highwayVignetteText3: '',
    highwayVignetteText4: '',
    highwayVignetteText5: '',
    highwayVignetteText6: '',
    highwayVignetteText7: '',
    highwayVignetteText8: '',
    highwayVignetteText9: '',
    highwayVignetteText10: '',
  },

  roadTax: {
    roadTaxMainText: '',
    roadTaxText1: '',
    roadTaxText2: '',
    roadTaxText3: '',
    roadTaxText4: '',
    roadTaxText5: '',
    roadTaxText6: '',
    roadTaxText7: '',
    roadTaxText8: '',
    roadTaxText9: '',
    roadTaxText10: '',
    roadTaxText11: '',
    roadTaxText12: '',
    roadTaxText13: '',
    roadTaxText14: '',
    roadTaxText15: '',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: '',
    fuelAndRepairsText1: '',
    fuelAndRepairsText2: '',
    fuelAndRepairsText3: '',
    fuelAndRepairsText4: '',
    fuelAndRepairsText5: '',
  },

  entryByTrain: {
    entryByTrainMainText: 'Entrata in Svizzera con il treno',
    entryByTrainText1:
      'Se sul treno è presente personale doganale, le merci trasportate vanno dichiarate spontaneamente per il trattamento doganale. Merci destinate all’uso privato o da regalare possono essere imposte anche prima del passaggio del confine con la app «xxxx». Tali dichiarazioni sono vincolanti.',
    entryByTrainText2:
      'Se non è presente personale doganale e non si desidera imporre le merci con l’app «xxx» è possibile:',
    entryByTrainText3:
      'scendere dal treno alla stazione di confine e dichiarare per scritto (presso una cassetta delle dichiarazioni) le merci;',
    entryByTrainText4:
      'dichiarare le merci in un secondo tempo, entro 7 giorni, presso qualsiasi ufficio doganale durante gli orari d’apertura.',
    entryByTrainText5:
      'Su determinati treni regionali è possibile trasportare solo merci private:',
    entryByTrainText6:
      'che rientrano nelle quantità ammesse in franchigia o nel limite di franchigia secondo il valore di 300 franchi e che quindi sono esenti da tributi;',
    entryByTrainText7: 'che sono state imposte con l’app «xxx».',
    entryByTrainText8:
      'In entrambi i casi le merci non devono essere soggette a limitazioni e divieti né all’obbligo di certificazione o di autorizzazione.',
    entryByTrainText9:
      'Si prega di prestare attenzione alle indicazioni sul treno o agli annunci!',
  },

  forgery: {
    forgeryMainText: '',
    forgeryText1: '',
    forgeryText2: '',
    forgeryText3: '',
    forgeryText4: '',
    forgeryText5: '',
    forgeryText6: '',
  },

  cash: {
    cashMainText: '',
    cashText1: '',
    cashText2: '',
  },

  food: {
    foodMainText: '',
    foodText1: '',
    foodText2: '',
    foodText3: '',
    foodText4: '',
    foodText5: '',
    foodText6: '',
    foodText7: '',
    foodText8: '',
    foodText9: '',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText: '',
    authorisationRequirementsText1: '',
    authorisationRequirementsText2: '',
    authorisationRequirementsText3: '',
    authorisationRequirementsText4: '',
    authorisationRequirementsText5: '',
    authorisationRequirementsText6: '',
    authorisationRequirementsText7: '',
    authorisationRequirementsText8: '',
    authorisationRequirementsText9: '',
    authorisationRequirementsText10: '',
    authorisationRequirementsText11: '',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText: '',
    purchasesOnlineOfflineText1: '',
    purchasesOnlineOfflineText2: '',
    purchasesOnlineOfflineText3: '',
    purchasesOnlineOfflineText4: '',
    purchasesOnlineOfflineText5: '',
    purchasesOnlineOfflineText6: '',
    purchasesOnlineOfflineText7: '',
    purchasesOnlineOfflineText8: '',
    purchasesOnlineOfflineText9: '',
    purchasesOnlineOfflineText10: '',
    purchasesOnlineOfflineText11: '',
    purchasesOnlineOfflineText12: '',
    purchasesOnlineOfflineText13: '',
    purchasesOnlineOfflineText14: '',
    purchasesOnlineOfflineText15: '',
    purchasesOnlineOfflineText16: '',
    purchasesOnlineOfflineText17: '',
  },

  information: {
    informationTitle: 'Informazioni utili',
    informationSubCategoryTitle: 'Ho dei beni con voi:',

    customsProceduresMainText: 'Entrata in Svizzera',

    travelDocumentsMainText: 'Documenti di viaggio',

    declarationMainText: 'Ho dei beni con me',

    animalsAndPlantsMainText: 'Ho animali o piante con me',

    vehiclesMainText: 'Sto viaggiando con un veicolo',

    entryByTrainMainText: 'Entrata in Svizzera con il treno',

    prohibitionsAndRestrictionsMainText: 'Verbote und Beschränkungen',

    vatAllowanceMainText: '',

    dutyAllowanceMainText: '',

    personalEffectsMainText: '',

    foreignVatMainText: '',

    animalsMainText: '',

    plantsMainText: '',

    souvenirsAndSpeciesProtectionMainText: '',

    highwayVignetteMainText: '',

    roadTaxMainText: '',

    fuelAndRepairsMainText: '',

    forgeryMainText: '',

    cashMainText: '',

    foodMainText: '',

    authorisationRequirementsMainText: '',

    purchasesOnlineOfflineMainText: '',
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
