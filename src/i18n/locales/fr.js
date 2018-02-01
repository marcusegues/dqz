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
    information: "Informations relatives à l'utilisation de l'application",
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
    peopleInputQuestion:
      'Combien de voyageurs sont concernés par le dédouanement?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Quelles marchandises souhaitez-vous déclarer?',
  },
  quantityInput: {
    quantityInput: 'Saisie des quantités',
  },
  amountInput: {
    amountInput:
      'Veuillez saisir ici la valeur de toutes les marchandises transportées.',
    amountInputLargeItem:
      "Transportez-vous des biens individuels d'une valeur supérieure à {{value}} francs? ",
    amountInputLargeItemGreyBox:
      "Saisissez ici chaque bien d'une valeur supérieure à 300 francs.",
    amountInputAddItem: 'Ajouter la valeur',
    amountInputAddItemLarge: 'Ajouter un bien',
    amountInputEnterValue:
      'Saisissez la valeur sans la TVA étrangère (valeur nette).',
    currentTotalValue: '🈯',
    lastExchangeRate: '🈯',
  },
  qaFlow: {
    declareGoods: 'Déclarer des marchandises',
    toOverview: "Retour à la vue d'ensemble",
    adult: 'Adultes',
    adultInfo: 'Âge supérieur à 17 ans',
    adultCount: '{{value}} adulte',
    adultCount_plural: '{{value}} adultes',
    minor: 'Enfants et adolescents',
    minorInfo: 'âge inférieur à 17 ans',
    minorCount: '{{value}} enfant (âgé de moins de 17 ans)',
    minorCount_plural: '{{value}} enfants (âgés de moins de 17 ans)',
    validateNoAdultsTitle: 'Aucun adulte',
    validateNoAdultsSubtitle:
      'Veuillez vérifier que les données fournies sont exactes.',
    validateGenericYes: 'Oui',
    validateGenericNo: 'Non',
    validateMainCategoryRemoveTitle:
      'Êtes-vous sûr de vouloir supprimer cette catégorie principale?',
    validateMainCategoryRemoveSubtitle:
      'Les quantités suivantes figurent actuellement dans certaines sous-catégories: {{value}}.',
    validateMainCategoryRemoveYes:
      "Oui, j'aimerais supprimer les quantités en question.",
  },
  modal: {
    confirmPicker: 'Reprendre {{value}}',
    standardCategoryPicker: 'Quantités standard',
    individualCategoryPicker: 'Quantités exactes',
    currencyPickerTitle: 'Saisir un bien',
    currencyPickerLargeAmountTitle:
      " Saisir un bien d'une valeur supérieure à {{value}} francs.",
    currencyPickerSubTitle:
      "Saisissez la valeur nette du bien dans sa devise d'origine.",
    currencyPickerRate: 'Taux de change du:',
    currencyPickerInvalidInput: 'Saisie invalide/vide',
    currencyPickerNoOffsettingInput: "Aucun montant adéquat n'est disponible.",
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
    overViewTitle: "Vue d'ensemble de votre déclaration",
    dutyColumn: 'Droits de douane en francs',
    sumText: 'Total (en francs)',
  },
  receipt: {
    dutyAndVat: 'Droits de douane: {{duty}} |  TVA: {{vat}}',
    paidOn: 'Payé le {{date}} à {{time}} h avec:',
    transactionId: 'ID de transaction (SIX): {{value}}',
    receiptValidUntilText: "La présente quittance est valable jusqu'à:",
    receiptValidUntilTime: '{{date}}  |  {{time}} h',
    sumText: 'Total (en francs): {{value}}',
    vatColumn: 'TVA en francs:',
    amountsTitle: 'Valeur totale des marchandises:',
    amountsSubtitle: 'Montant total de tous les tickets de caisse',
    receiptStorageNotification:
      "La présente quittance sera conservée pendant un an. Vous pourrez la consulter à tout moment dans l'application durant ce laps de temps.",
    allReceiptsNavigationHeaderTitle: 'Quittances de la douane suisse',
    allReceiptsCurrentReceipt: 'Aktuelle Quittung:',
    allReceiptsOlderReceipts: 'Ältere Quittungen:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'à {{value}}',
    entryTime: '',
    chooseOtherEntryTime: '',
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
    appInfoTitle: "Informations relatives à l'application",
    leftTabText: 'Impressum',
    rightTabText: 'Développement',
    publisher: 'Édition',
    customsAdministrationAddressTitle:
      'Administration fédérale des douanes AFD',
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
    legalNoticeInformation: {
        navigationHeaderTitle: 'Informations importantes relatives à l\'utilisation de l\'application',
        conditions: 'Conditions-cadres',
        importantSoon: 'L\'essentiel en bref',
        importantSoonText:
        'Vous ne pouvez utiliser l\'application qu\'une fois par jour (jour civil) pour la même personne ou les mêmes personnes.\n'+
        'Vous ne pouvez utiliser l\'application que pour les marchandises que vous importez pour votre usage privé ou pour en faire cadeau.\n'+
        'En utilisant l\'application, vous acceptez que le taux de TVA de 7,7 % soit appliqué même aux marchandises qui sont en réalité soumises au taux réduit (denrées alimentaires, aliments pour animaux, médicaments et livres).\n'+
        'Les redevances ne peuvent être payées que par carte de crédit (Visa, Mastercard) (sans possibilité de remboursement). Les marchandises sont dédouanées une fois que les redevances ont été payées.\n'+
        'Le dédouanement doit être effectué avant le franchissement de la frontière ou, au plus tard, au point de passage frontalier. Il est cependant possible d\'y procéder au plus tôt 48 heures avant le franchissement de la frontière.\n'+
        'À l\'issue du dédouanement, vous pouvez notamment emprunter les passages frontières suivants:\n'+
        'les points de passage frontaliers non occupés par du personnel douanier;\n'+
        'la voie verte des aéroports.\n'+
        'La quittance de la douane doit être présentée sur demande au personnel douanier suisse. Celui-ci la photographie si nécessaire.\n',
    howToDeclareYourGoods: 'Marche à suivre pour dédouaner vos marchandises:',
        howToDeclareYourGoodsText:
        'Déclarez toutes les marchandises que vous transportez (à l\'exception des effets personnels et des provisions de voyage). Les franchises quantitatives et les franchises-valeur auxquelles vous avez droit seront déduites automatiquement lors du dédouanement.\n'+
        'Saisissez la valeur en devise étrangère figurant sur le justificatif de paiement. Celle-ci sera convertie en francs selon le taux de change (vente) de la veille (dernier jour ouvrable).\n'+
        'Définissez un délai de deux heures pour vous permettre de franchir la frontière. La quittance établie n\'est valable que pendant ce délai. Si vous ne pouvez pas respecter le délai choisi, vous devez vous rendre à un passage frontière occupé par du personnel douanier suisse et expliquer pourquoi vous n\'avez pas pu entrer en Suisse dans le délai de validité de la quittance. En l\'absence de justification crédible, les redevances seront perçues une nouvelle fois.\n'+
        'Si le dédouanement vous concerne vous-même ainsi que les personnes avec qui vous voyagez ou une autre personne, vous devez entrer en Suisse avec ces personnes.\n'+
        'Vous pouvez corriger votre déclaration à tout moment avant le paiement. Après le paiement, aucune correction ne peut plus être effectuée dans l\'application. Vous devez déclarer à un passage frontière occupé par du personnel douanier suisse les marchandises étrangères supplémentaires achetées après le paiement.\n'+
        'Vous devez conserver pendant au moins un an la quittance reçue de la douane suisse. Vous pouvez aussi l\'enregistrer sous forme d\'image.\n'+
        'S\'il n\'est pas possible d\'effectuer le dédouanement à l\'aide de l\'application (par ex. absence de connexion à Internet ou impossibilité de payer les redevances avec une carte de crédit), vous devez déclarer les marchandises auprès d\'un passage frontière occupé par du personnel douanier suisse ou par l\'intermédiaire d\'une boîte à déclarations.\n'+
        'Vous devez dans tous les cas déclarer les marchandises suivantes auprès d\'un passage frontière occupé par du personnel douanier suisse:\n'+
        'les marchandises soumises à des restrictions ou des interdictions et les marchandises assujetties à un certificat ou un permis (par ex. armes, animaux vivants et marchandises soumises aux dispositions sur la conservation des espèces); informations complémentaires;\n'+
        'les marchandises d\'une valeur totale supérieure ou égale à 20 000 francs qui sont destinées à l\'usage privé ou à être offertes en cadeau;\n'+
        'les marchandises que vous n\'importez ni pour votre usage privé ni pour en faire cadeau (par ex. marchandises destinées au commerce);\n'+
        'les véhicules, les réparations de véhicule et les carburants;\n'+
        'les effets de déménagement, les trousseaux de mariage et les effets de succession;\n'+
        'les marchandises qui ne sont importées que temporairement en Suisse;\n'+
        'les marchandises destinées à transiter par la Suisse.\n'+
        'Les marchandises qui sont exportées ne peuvent pas être déclarées à l\'aide de l\'application. Vous trouverez ici des informations relatives aux achats effectués en Suisse en franchise de redevances (tax free).\n',

legal: 'Informations juridiques',
        usage: 'L\'usage',
        legalText:
        'Le dédouanement effectué avec l\'application lie la personne assujettie à l\'obligation de déclarer (art. 33 de la loi sur les douanes; RS 631.0). Vous êtes donc punissable si vous omettez de déclarer ou déclarez de façon inexacte des marchandises prohibées, soumises à un permis ou soumises à des redevances.\n'+
        'La personne qui présente la quittance lors du contrôle douanier est responsable du dédouanement correct des marchandises transportées. Elle assume également la responsabilité pénale en cas de découverte de marchandises non déclarées ou déclarées de façon inexacte.\n'+
        'Lorsque vous utilisez l\'application, assurez-vous\n'+
        'd\'être connecté à Internet pendant le processus de paiement afin de pouvoir terminer le dédouanement;\n'+
        'de disposer d\'une quittance valable pour les marchandises que vous importez;\n'+
        'de pouvoir afficher la quittance sur votre terminal mobile en cas de contrôle lors du franchissement de la frontière.\n'+
        'Veuillez noter que pendant le délai de validité de la quittance, une image de celle-ci transmise à des tiers par WhatsApp, iMessage, SMS ou courriel ne sera pas acceptée comme quittance.\n',

    privacyAndLiability: 'Protection des données et responsabilité',
        dataProtection: 'Protection des données',
        dataProtectionText:
        'L\'art. 13 de la Constitution fédérale et les dispositions légales de la Confédération suisse sur la protection des données disposent que toute personne a droit à la protection de sa sphère privée ainsi qu\'à la protection contre l\'emploi abusif des données qui la concernent. Les autorités fédérales observent strictement ces dispositions. Les données personnelles sont traitées de façon parfaitement confidentielle et ne sont ni vendues, ni transmises à des tiers.\n'+
        'Nous nous efforçons, en collaboration étroite avec nos hébergeurs, de protéger au mieux possible nos banques de données des intrusions externes, des pertes, du mauvais usage et de la falsification.\n'+
        'Lors de l\'accès à notre site Web, les données suivantes sont enregistrées dans des fichiers journaux: l\'adresse IP, la date, l\'heure, les requêtes du navigateur ainsi que des informations généralement transmises au système d\'exploitation ou au navigateur.\n'+
        'Ces données permettent aux autorités fédérales de procéder à des évaluations statistiques anonymisées, afin de reconnaître des tendances servant à améliorer l\'offre. Selon la loi fédérale sur la surveillance de la correspondance par poste et télécommunication (LSCPT), il existe une obligation légale de conserver durant au moins six mois les données de connexion.\n'+
        'En cas de prise de contact volontaire, votre adresse électronique est enregistrée dans une banque de données séparée, qui n\'est pas reliée aux fichiers journaux anonymes. Vous avez à tout moment la possibilité d\'annuler votre enregistrement.\n'+
        'Les autorités fédérales se réservent expressément le droit de modifier en partie ou en totalité le contenu du présent site, de le supprimer ou d\'en suspendre temporairement la diffusion, et ce à tout moment et sans avertissement préalable.\n'+
        'Les autorités fédérales ne sauraient être tenues pour responsables des dommages matériels ou immatériels qui pourraient être causés par l\'accès aux informations diffusées ou par leur utilisation ou non-utilisation, par le mauvais usage de la connexion ou par des problèmes techniques.\n',

    referencesAndLinks: 'Renvois et liens',
        referencesAndLinksText:
        'Les renvois et liens vers d\'autres sites Internet ne sont pas de la responsabilité des autorités fédérales. L\'accès à ces sites et leur utilisation se font aux risques des utilisateurs. Les autorités fédérales déclarent expressément qu\'elles n\'ont aucune influence sur la forme, le contenu et les offres des sites auxquels elles renvoient. Les informations et services offerts par ces sites sont entièrement de la responsabilité de leurs auteurs.\n'+
        'Les autorités fédérales rejettent toute responsabilité pour de tels sites Internet.\n',
        copyright: 'Droits d\'auteur',
        copyrightText:
        'Droits d\'auteur: autorités de la Confédération suisse, 2007.\n'+
        'Les informations que recèlent les sites Web des autorités fédérales sont mises à la disposition du public. Le téléchargement ou la copie de textes, d\'illustrations, de photographies ou d\'autres données n\'entraîne aucun transfert de droits sur les contenus.\n'+
        'Les droits d\'auteur et tous les autres droits liés aux textes, illustrations, photographies et autres données placés sur les sites Web des autorités fédérales sont leur propriété exclusive ou celle des détenteurs expressément cités. Toute reproduction est subordonnée à l\'autorisation écrite préalable du détenteur des droits.\n',
    },
};
