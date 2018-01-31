// @flow
import type { Locale } from '../types/locale';

export const fr: Locale = {
  categories: {
    Meat: 'Viande et préparations de viande',
    Butter: 'Beurre et crème',
    Oils: 'Huiles/graisses/margarine',
    OtherFood: 'Autres denrées alimentaires et boissons sans alcool',
    AlcSoft: 'Teneur en alcool comprise entre 0,5 et 18 % du volume',
    AlcHard: 'Teneur en alcool supérieure à 18 % du volume',
    Cigarettes: 'Cigarettes et cigares',
    Tobacco: 'Autres tabacs manufacturés',
    Meds: 'Médicaments',
    Books: 'Livres',
    Magazines: 'Revues',
    Flowers: 'Fleurs coupées et plantes',
    AnimalFeed: 'Aliments pour animaux',
    Fertilizer: 'Engrais',
    Other: 'Autres marchandises',
  },
  mainCategories: {
    Meat: 'Viande et préparations de viande',
    Butter: 'Beurre et crème',
    Oil: 'Huiles/graisses/margarine',
    Alcohol: 'Teneur en alcool',
    TobaccoProducts: 'Tabacs manufacturés',
    OtherGoods: 'Autres marchandises',
  },
  general: {
    declareGoods: 'Déclarer des marchandises',
    pleaseSelect: 'Veuillez sélectionner ce qui convient',
    receipts: 'Quittances de la douane suisse',
    guideline: 'Votre passage à la douane suisse',
    information: 'Informations relatives à l\'utilisation de l\'application',
    navbarFirst: 'Votre voyage',
    navbarSecond: 'Paiement',
    navbarThird: 'Quittance',
    customsDuty: 'Droits de douane',
    customsVat: 'TVA',
    goodCategories: 'Catégories de marchandises',
    confirm: 'Reprendre',
    toPayment: 'Paiement',
    buttonContinue: 'Étape suivante',
    buttonBack: 'Retour',
  },
  snackBar: {
    limitExceeded: '🈯',
    showBorder: '🈯',
  },
  onBoarding: {
    welcome: 'Bienvenue à',
    onBoardingMessage:
      'Nous avons défini votre langue en nous basant sur vos paramètres actuels.',
    selectLanguage: 'Sélectionnez une autre langue',
    confirmationVat: 'Je confirme accepter le taux unique de TVA de',
    confirmationVat2: 'pour le dédouanement des marchandises.',
    vatInformation: 'Informations complémentaires',
  },
  peopleInput: {
    peopleInputQuestion: 'Combien de voyageurs sont concernés par le dédouanement?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Quelles marchandises souhaitez-vous déclarer?',
  },
  quantityInput: {
    quantityInput: 'Saisie des quantités',
  },
  amountInput: {
    amountInput: 'Veuillez saisir ici la valeur de toutes les marchandises transportées.',
    amountInputLargeItem: 'Transportez-vous des biens individuels d\'une valeur supérieure à {{value}} francs? ',
      amountInputLargeItemGreyBox: 'Saisissez ici chaque bien d\'une valeur supérieure à 300 francs.',
    amountInputAddItem: 'Ajouter la valeur',
      amountInputAddItemLarge: 'Ajouter un bien',
    amountInputEnterValue: 'Saisissez la valeur sans la TVA étrangère (valeur nette).',
    currentTotalValue: '🈯',
    amountInputLargeItemGreyBox: '🈯',
    amountInputAddItemLarge: '🈯',
    lastExchangeRate: '🈯',
  },
    qaFlow: {
        declareGoods: 'Déclarer des marchandises',
        toOverview: 'Retour à la vue d\'ensemble',
        adult: 'Adultes',
        adultInfo: 'Âge supérieur à 17 ans',
        adultCount: '{{value}} adulte',
        adultCount_plural: '{{value}} adultes',
        minor: 'Enfants et adolescents',
        minorInfo: 'âge inférieur à 17 ans',
        minorCount: '{{value}} enfant (âgé de moins de 17 ans)',
        minorCount_plural: '{{value}} enfants (âgés de moins de 17 ans)',
        validateNoAdultsTitle: 'Aucun adulte',
        validateNoAdultsSubtitle: 'Veuillez vérifier que les données fournies sont exactes.',
        validateGenericYes: 'Oui',
        validateGenericNo: 'Non',
        validateMainCategoryRemoveTitle:
            'Êtes-vous sûr de vouloir supprimer cette catégorie principale?',
        validateMainCategoryRemoveSubtitle:
            'Les quantités suivantes figurent actuellement dans certaines sous-catégories: {{value}}.',
        validateMainCategoryRemoveYes: 'Oui, j\'aimerais supprimer les quantités en question.',
    },
    modal: {
        confirmPicker: 'Reprendre {{value}}',
        standardCategoryPicker: 'Quantités standard',
        individualCategoryPicker: 'Quantités exactes',
        currencyPickerTitle: 'Saisir un bien',
        currencyPickerLargeAmountTitle:
            ' Saisir un bien d\'une valeur supérieure à {{value}} francs.',
        currencyPickerSubTitle:
            'Saisissez la valeur nette du bien dans sa devise d\'origine.',
        currencyPickerRate: 'Taux de change du:',
        currencyPickerInvalidInput: 'Saisie invalide/vide',
        currencyPickerNoOffsettingInput: 'Aucun montant adéquat n\'est disponible.',
        currencyPickerTooSmallLargeAmount: 'Betrag zu gering',
        savedBasketDoYoWantToContinue:
            'Souhaitez-vous continuer avec le panier actuel ou recommencer avec un panier vide?',
        savedBasketTotalCost: 'Coût total: {{value}} francs',
        savedBasketNewShoppingCart: 'Nouveau panier',
        closeModalText: 'Schliessen',
        timePickerTitle: 'Zeitraum der Einreise wählen',
        timePickerSubTitle: 'Wann möchten Sie die Grenze überqueren?',
        timePickerRegistrationValidUntil:
            'Bitte achten Sie darauf, innherhalb von zwei Stunden mit dieser Anmeldung einzureisen. Diese Anmeldung ist bis zum {{date}} um {{time}} Uhr gültig.',
        timePickerTakeOverThePeriod: 'Zeitraum übernehmen',
        timePickerTimePrefix: 'Uhr',
    },
    payment: {
        overViewTitle: 'Vue d\'ensemble de votre déclaration',
        dutyColumn: 'Droits de douane en francs',
        sumText: 'Total (en francs)',
    },
    receipt: {
        dutyAndVat: 'Droits de douane: {{duty}} |  TVA: {{vat}}',
        paidOn: 'Payé le {{date}} à {{time}} h avec:',
        transactionId: 'ID de transaction (SIX): {{value}}',
        receiptValidUntilText: 'La présente quittance est valable jusqu\'à:',
        receiptValidUntilTime: '{{date}}  |  {{time}} h',
        sumText: 'Total (en francs): {{value}}',
        vatColumn: 'TVA en francs:',
        amountsTitle: 'Valeur totale des marchandises:',
        amountsSubtitle: 'Montant total de tous les tickets de caisse',
        receiptStorageNotification:
            'La présente quittance sera conservée pendant un an. Vous pourrez la consulter à tout moment dans l\'application durant ce laps de temps.',
        allReceiptsNavigationHeaderTitle: 'Quittances de la douane suisse',
        allReceiptsCurrentReceipt: 'Aktuelle Quittung:',
        allReceiptsOlderReceipts: 'Ältere Quittungen:',
        allReceiptsSumInFranks: 'CHF {{value}}',
        allReceiptsDate: 'à {{value}}',
    },
    information: {
        informationTitle: 'Informations utiles',
        proceedinAtTheCustoms: 'Marche à suivre lors du passage à la douane',
        proceedinAtTheCustomsSubText:
            'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
        travelDocuments: 'Documents de voyage',
        travelDocumentsSubText:
            'Weit hinten, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
        haveGoodsWithMe: 'Je transporte des marchandises.',
        haveGoodsWithMeSubText:
            'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
        haveAnimalsOrPlantsWithMe: 'Je transporte des animaux ou des plantes.',
        haveAnimalsOrPlantsWithMeSubText: 'Weit hinten leben die Blindtexte.',
        travelingWithVehicle: 'Je voyage avec un véhicule.',
        travelingWithVehicleSubText: 'Weit hinten leben die Blindtexte.',
        entryByTrain: 'Entrée en Suisse par voie ferroviaire',
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
        appInfoTitle: 'Informations relatives à l\'application',
        leftTabText: 'Impressum',
        rightTabText: 'Développement',
        publisher: 'Édition',
        customsAdministrationAddressTitle: 'Administration fédérale des douanes AFD',
        contact: 'Contact',
        customsInfoCenter:
            'Centrale de renseignement de la douane\n058 467 15 15\nzollauskunft@ezv.admin.ch',
        reachability: 'Joignabilité:',
        workingHours: 'Lundi – Vendredi, 8.00 – 11.30 et 13.30 a 17.00',
        generalCustomsDirectorate:
        'Oberzolldirektion\nMonbijoustrasse 40\n' +
        '3003 Bern\n' +
        'http://www.ezv.admin.ch',
        designAndDevelopment: 'Conception et développement',
        ambriteAddress:
            'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
        disclaimerTitle: 'Avis de non-responsabilité',
        disclaimerText:
            'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
    },
};