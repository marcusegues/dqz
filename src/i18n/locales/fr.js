// @flow
import type { Locale } from '../types/locale';

export const fr: Locale = {
  categories: {
    Meat: 'Viande et préparations de viande',
    Butter: 'Beurre et crème',
    Oils: 'Huiles/graisses/margarine',
    OtherFood: 'Autres denrées alimentaires et boissons sans alcool',
    AlcSoft: 'Boissons alcoolisées comprise entre 0,5 et 18 % du volume',
    AlcHard: 'Boissons alcoolisées supérieure à 18 % du volume',
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
    Alcohol: 'Boissons alcoolisées',
    TobaccoProducts: 'Tabacs manufacturés',
    OtherGoods: 'Autres marchandises',
  },
  general: {
    declareGoods: 'Déclarer des marchandises',
    pleaseSelect: 'Veuillez sélectionner ce qui convient',
    receipts: 'Quittances de la douane suisse',
    guideline: 'Entrée en Suisse, à quoi faut-il prêter attention',
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
    note: 'Allusion',
    underConstruction: 'En cours',
  },
  snackBar: {
    limitExceeded:
      "Valeur des biens pour l'application dépassée. S'il vous plaît signaler vos marchandises oralement au poste-frontière.",
    offline: "Vous êtes hors ligne S'il vous plaît vérifier votre connexion.",
    showBorder: 'Afficher le passage frontalier',
  },
  onBoarding: {
    welcome: 'Bienvenue à',
    onBoardingMessage:
      'Nous avons défini votre langue en nous basant sur vos paramètres actuels.',
    currentLanguageMessage: 'Votre langue actuellement sélectionnée est',
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
    mainCategoriesNotYetAnswered:
      'Catégorie de marchandises : données manquantes',
  },
  quantityInput: {
    quantityInput: 'Entrée de quantité',
    recordedOn: 'enregistré sur',
    addQuantities: 'Ajouter des quantités',
    enterQuantities: 'Entrez les quantités de tous {{value}} ici',
    enterQuantity: 'Entrer la quantité',
    enterQuantitiesButter: 'Entrez les quantités de tous {{value}} ici',
    enterQuantitiesAlcohol: 'Entrez les quantités de tous {{value}} ici',
    standardInputSubText: '⚡️',
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
    currentTotalValue: 'Valeur totale actuelle',
    lastExchangeRate:
      'Basé sur le dernier taux de change disponible, qui est mis à jour lors du paiement.',
  },
  qaFlow: {
    declareGoods: 'Déclarer des marchandises',
    toOverview: "Retour à la vue d'ensemble",
    adult: 'Adultes',
    adultInfo: 'âge 17 ans et supérieur',
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
    currencyPickerTitle:
      'Saisir la valeur de toutes les marchandises transportées',
    currencyPickerLargeAmountTitle:
      " Saisir un bien d'une valeur supérieure à {{value}} francs.",
    currencyPickerSubTitle:
      'Veuillez saisir ici la valeur hors taxes de toutes les marchandises transportées dans leur devise d’origine.',
    currencyPickerRate: 'Taux de change du:',
    currencyPickerInvalidInput: 'Saisie invalide/vide',
    currencyPickerNoOffsettingInput: "Aucun montant adéquat n'est disponible.",
    currencyPickerTooSmallLargeAmount: 'Quantité trop faible',
    savedBasketDoYoWantToContinue:
      'Souhaitez-vous continuer avec le panier actuel ou recommencer avec un panier vide?',
    savedBasketTotalCost: 'Coût total: {{value}} francs',
    savedBasketNewShoppingCart: 'Nouveau panier',
    closeModalText: 'Fermer',
    timePickerTitle: "Choix de l'heure du passage de la frontière",
    timePickerSubTitle: 'Quand souhaitez-vous traverser la frontière?',
    timePickerRegistrationValidUntilSameDay:
      'La quittance douane est valable le {{date}} de {{startTime}} à {{endTime}}.',
    timePickerRegistrationValidUntilDifferentDay:
      'La quittance douane est valable le {{startDate}} de {{startTime}} à {{endDate}} à {{endTime}}.',

    timePickerTakeOverThePeriod: 'Reprendre la période selectionnée',
    timePickerTimePrefix: 'Heure',

    savedBasket: 'Panier actuel',
  },
  payment: {
    overViewTitle: "Vue d'ensemble de votre déclaration",
    dutyColumn: 'Droits de douane en francs',
    sumText: 'Total (en francs)',
    entryInfo:
      'Vous ne pouvez traverser la frontière que dans la période spécifiée avec les marchandises enregistrées ici.',
  },
  receipt: {
    dutyAndVat: 'Droits de douane: {{duty}} |  TVA: {{vat}}',
    paidOn: 'Payé le {{date}} à {{time}} h avec:',
    transactionId: 'ID de transaction (SIX): {{value}}',

    receiptValidFrom: 'La présente quittance est valable à partir de:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} à {{endDate}} | {{endTime}}',
    receiptValidOn: 'La présente quittance est valable sur',
    receiptValidOnDate: '{{date}} de {{startTime}} à {{endTime}}',

    sumText: 'Total (en francs): {{value}}',
    vatColumn: 'TVA en francs:',
    normalAmountsTitle: 'Valeur totale des marchandises:',
    normalAmountsSubtitle: 'Montant total de tous les tickets de caisse',
    largeAmountsTitle: 'Objets individuels',
    largeAmountsSubtitle: "d'une valeur de plus de 300 CHF",
    receiptStorageNotification:
      "La présente quittance sera conservée pendant un an. Vous pourrez la consulter à tout moment dans l'application durant ce laps de temps.",
    allReceiptsNavigationHeaderTitle: 'Quittances de la douane suisse',
    allReceiptsCurrentReceipt: 'Quittance actuelle:',
    allReceiptsOlderReceipts: 'Anciennes quittances:',
    allReceiptsSumInFranks: 'CHF {{value}}',
    allReceiptsDate: 'à {{value}}',
    entryTime: "Période d'entrée",
    chooseOtherEntryTime: 'Choisissez une autre période',
    until: "jusqu'à",
  },

  customsProcedures: {
    customsProceduresMainText: 'Procédant à la douane',
    customsProceduresSubText:
      'En tant que particulier, vous devez entrer en Suisse ...',
    customsProceduresText1:
      "En tant que particulier, vous devez déclarer spontanément, lors de l'entrée en Suisse, toutes les marchandises et tous les animaux que vous transportez.",
    customsProceduresText2:
      'Si vous ne transportez que des marchandises qui sont admises en franchise de redevances (TVA et droits de douane) et qui ne sont soumises à aucune restriction ni interdiction, vous pouvez franchir la frontière sans déclarer formellement quoi que ce soit. Dans un tel cas, vous pouvez:',
    customsProceduresText3: 'emprunter la voie verte des aéroports ou;',
    customsProceduresText4:
      'apposer la déclaration à vue verte sur le tableau de bord de votre voiture.',
    customsProceduresText5:
      "L'utilisation de la voie verte ou l'apposition de la déclaration à vue verte sur le tableau de bord de votre voiture sont contraignantes. Le personnel de la douane suisse peut donc effectuer un contrôle sans autre interrogation.",
    customsProceduresText6:
      'Vous trouverez de plus amples informations concernant les marchandises admises en franchise de redevances dans les rubriques suivantes:',
    customsProceduresText7: 'Franchise-valeur de 300 francs',
    customsProceduresText8:
      'Franchises quantitatives: denrées alimentaires, alcool et tabac',
    customsProceduresText9: 'Effets personnels et provisions de voyage',
    customsProceduresText10:
      'Déclaration en douane verbale ou utilisation de la voie rouge des aéroports',
    customsProceduresText11:
      'Si le passage frontière est occupé par du personnel de la douane suisse, vous devez déclarer verbalement et spontanément toutes les marchandises. Des informations relatives aux principaux passages frontières sont disponibles dans la rubrique «Passages frontières».',
    customsProceduresText12:
      "Établissement de la déclaration en douane au moyen de l'application QuickZoll",
    customsProceduresText13:
      "Vous pouvez également déclarer vos marchandises au moyen de l'application QuickZoll de l'Administration fédérale des douanes (AFD). Les marchandises doivent être dédouanées avec l'application et les redevances payées avant le franchissement de la frontière ou au passage frontière. Si vous avez payé les redevances avec l'application, vous pouvez aussi emprunter des passages frontières non occupés par du personnel de la douane [OU: des passages frontières auprès desquels il est possible d'effectuer une déclaration écrite], ou la voie verte des aéroports.",
    customsProceduresText14:
      "Cette forme de déclaration en douane n'est admise que pour les marchandises destinées à votre usage privé ou à être offertes en cadeau. Les marchandises ne doivent être soumises à aucune restriction ni interdiction et ne doivent être assujetties à aucun certificat ni permis.",
    customsProceduresText15:
      "Les autres marchandises doivent être déclarées verbalement auprès d'un passage frontière occupé par du personnel de la douane suisse.",
    customsProceduresText16:
      'Déclaration en douane écrite (boîte à déclarations)',
    customsProceduresText17:
      "Des boîtes à déclarations vous permettant de déclarer vos marchandises par écrit sont encore disponibles à certains passages frontières. Vous trouverez des informations à ce sujet à l'adresse suivante: www.ezv.admin.ch/boîte à déclarations",
    customsProceduresText18:
      "Cette forme de déclaration en douane n'est admise que pour les marchandises qui ne sont pas destinées au commerce. Les marchandises ne doivent être soumises à aucune restriction ni interdiction et ne doivent être assujetties à aucun certificat ni permis.",
    customsProceduresText19:
      "Vous devez déclarer les marchandises commerciales auprès d'un bureau de douane compétent à cet égard.",
    customsProceduresText20: 'Attention:',
    customsProceduresText21:
      "Qu'elle soit verbale, effectuée au moyen de l'application ou par l'intermédiaire d'une boîte à déclarations, la déclaration lie son auteur. Nous effectuons également des contrôles douaniers à l'intérieur du pays. Une déclaration en douane subséquente n'est pas possible. Vous êtes donc punissable si vous omettez de déclarer ou déclarez de façon inexacte des marchandises prohibées, soumises à un permis ou soumises à des redevances.",
  },

  travelDocuments: {
    travelDocumentsMainText: 'Documents de voyage',
    travelDocumentsSubText:
      "Pour entrer en Suisse, les étrangers ont besoin d'un ...",
    travelDocumentsText1:
      "Pour entrer en Suisse, les ressortissants étrangers ont besoin d'un document de voyage valable et reconnu par la Suisse. Dans certains cas, un visa est en outre nécessaire. Vous pouvez obtenir des informations sur les modalités d'entrée et de séjour en Suisse (prescriptions relatives aux documents de voyage et visas) sur le site Internet du Secrétariat d'État aux migrations:",
    travelDocumentsText2:
      "Pour connaître les prescriptions en matière de documents de voyage qui sont applicables à l'étranger, il faut s'adresser aux autorités étrangères correspondantes, via le lien de l'OMD:",
  },

  vatAllowance: {
    vatAllowanceMainText: 'Franchise-valeur de 300 francs',
    vatAllowanceSubText:
      'Les marchandises que vous importez pour votre usage privé ou pour ...',
    vatAllowanceText1:
      "Les marchandises que vous importez pour votre usage privé ou pour en faire cadeau sont exemptées de la TVA jusqu'à une valeur de 300 francs. C'est la valeur de toutes les marchandises qui est déterminante, c'est-à-dire également celle des cadeaux reçus, des denrées alimentaires, des tabacs manufacturés, des boissons alcooliques, des animaux domestiques amenés depuis l'étranger et des travaux de réparation et d'entretien effectués à l'étranger sur votre propre véhicule.",
    vatAllowanceText2:
      "En revanche, la valeur des effets personnels, des provisions de voyage et du carburant destiné à votre véhicule n'est en l'occurrence pas prise en compte.",
    vatAllowanceText3:
      'La valeur après déduction de la TVA étrangère est déterminante, pour autant que cette dernière soit indiquée sur la quittance ou la facture. Les valeurs libellées en monnaie étrangère sont converties en francs suisses selon le taux de change (vente) de la veille.',
    vatAllowanceText4:
      "La franchise-valeur n'est accordée qu'une fois par jour à la même personne et à condition que celle-ci transporte les marchandises elle-même. La franchise-valeur vaut également pour les enfants.",
    vatAllowanceText5:
      'Que se passe-t-il si la valeur des marchandises dépasse 300 francs?',
    vatAllowanceText6:
      'Si vous transportez des marchandises qui dépassent la franchise-valeur de 300 francs, vous devrez payer la TVA sur la valeur totale de toutes les marchandises.',
    vatAllowanceText7:
      "Exemple: la valeur totale des marchandises s'élève à 800 francs. La franchise-valeur de 300 francs est dépassée. La TVA est donc calculée sur la base d'une valeur de 800 francs.",
    vatAllowanceText8: "Autres exemples d'octroi de la franchise-valeur",
    vatAllowanceText9: 'TVA',
    vatAllowanceText10:
      "La TVA est calculée sur la base de la valeur des marchandises. Le taux normal est de 7,7 %. Un taux réduit d'impôt de 2,5 % est appliqué à certaines marchandises (par ex. denrées alimentaires, boissons sans alcool, livres, revues ou médicaments). Le taux normal s'applique toujours en cas de dédouanement avec l'application «xxx».",
    vatAllowanceText11:
      "La présentation d'une quittance ou d'un autre justificatif de valeur (par ex. pour les marchandises acquises sur Internet) facilite le dédouanement. Si les indications de valeur font défaut ou si leur exactitude suscite des doutes, le bureau de douane peut estimer la valeur des marchandises.",
    vatAllowanceText12: 'Déclaration en douane',
    vatAllowanceText13:
      "Lors de l'entrée en Suisse, vous devez déclarer verbalement au personnel douanier toutes les marchandises que vous transportez.",
    vatAllowanceText14:
      "Vous pouvez également déclarer les marchandises au moyen de l'application «xxxx» ou par écrit, par l'intermédiaire des boîtes à déclarations, aux passages frontières non occupés par du personnel douanier. Vous trouverez ici des informations à ce sujet. Veuillez noter qu'en cas de dépassement des franchises quantitatives pour les boissons alcooliques, les tabacs manufacturés et certaines denrées alimentaires, vous devrez payer des droits de douane dans tous les cas. Informations complémentaires",
    vatAllowanceText15:
      "Nous attirons en outre votre attention sur le fait que certaines marchandises (par ex. contrefaçons, armes, plantes, animaux, produits animaux, marchandises soumises aux dispositions sur la conservation des espèces) peuvent être interdites à l'importation ou soumises à des restrictions. Informations complémentaires",
    vatAllowanceText16:
      "Exemples d'octroi de la franchise-valeur Octroi de la franchise-valeur à des personnes seules",
    vatAllowanceText17:
      "Exemples d'octroi de la franchise-valeur\n" +
      'Octroi de la franchise-valeur à des personnes seules',
    vatAllowanceText18: 'Octroi de la franchise-valeur à plusieurs personnes',
    vatAllowanceText19:
      'Une personne peut remettre une déclaration en douane commune pour plusieurs personnes qui voyagent ensemble (par ex. familles, amis, connaissances). La personne qui effectue la déclaration assume la responsabilité de celle-ci. Elle doit donc payer les éventuelles redevances et assumer la responsabilité pénale si une procédure pénale doit être ouverte en raison de la découverte de marchandises non déclarées.',
    vatAllowanceText20:
      "Veuillez noter que si la valeur totale de toutes les marchandises transportées est supérieure à la somme des franchises-valeur accordées aux personnes qui voyagent ensemble, la personne qui effectue la déclaration n'a pas droit à la franchise-valeur.",
    vatAllowanceText21:
      "Les biens individuels d'une valeur dépassant 300 francs sont toujours soumis à la TVA, même s'ils sont transportés par plusieurs personnes.",
    vatAllowanceText22: "Biens individuels d'une valeur dépassant 300 francs:",
    vatAllowanceText23:
      "Pour déterminer si l'on est en présence d'un bien d'une valeur individuelle supérieure à 300 francs ou de plusieurs biens d'une valeur inférieure à 300 francs, il faut tenir compte des principes suivants:",
    vatAllowanceText24:
      'pour les marchandises non montées ou non assemblées: \n' +
      'une unité de vente = un bien;',
    vatAllowanceText25:
      'pour les marchandises montées ou assemblées: \n' +
      'marchandises montées ou assemblées = un bien (même si les différents composants sont indiqués séparément sur la facture).',
    vatAllowanceText26: 'Exemples:',
    vatAllowanceText27:
      "1.\tUne facture est établie comme suit pour l'achat d'un ordinateur:",
    vatAllowanceText28: '1 ordinateur de bureau\t\tfr. 700',
    vatAllowanceText29: '1 écran\t\t\t\t\tfr. 200',
    vatAllowanceText30: '1 clavier\t\t\t\t\tfr. 20',
    vatAllowanceText31: 'Total\tfr. 920',
    vatAllowanceText32: '= 3 biens (trois unités de vente)',
    vatAllowanceText33:
      "2.\tUne facture est établie comme suit pour l'achat d'un ordinateur:",
    vatAllowanceText34: '1 ordinateur',
    vatAllowanceText35: 'ordinateur de bureau',
    vatAllowanceText36: 'écran',
    vatAllowanceText37: 'clavier',
    vatAllowanceText38: 'Total\tfr. 920',
    vatAllowanceText39: '= 1 bien (une unité de vente)',
    vatAllowanceText40:
      "3. Une facture est établie comme suit pour l'achat de lunettes:",
    vatAllowanceText41: '2 verres\t\t2 pièces à fr. 200\t\tfr. 400',
    vatAllowanceText42: '1 monture\t\t\t  fr. 300',
    vatAllowanceText43: 'Total\tfr. 700',
    vatAllowanceText44: '= 1 bien (un bien assemblé)',
  },

  dutyAllowance: {
    dutyAllowanceMainText:
      'Franchises quantitatives: denrées alimentaires, alcool et tabac',
    dutyAllowanceSubText:
      'Les marchandises que vous importez pour votre usage privé ou pour ...',
    dutyAllowanceText1:
      "Les marchandises que vous importez pour votre usage privé ou pour en faire cadeau sont admises en franchise de droits de douane. Font exception, pour des raisons de politique agricole ou de politique sanitaire, les marchandises dites sensibles pour lesquelles vous devez payer des droits de douane au-delà d'une certaine quantité (voir tableau ci-dessous). Les franchises quantitatives ne sont accordées qu'une fois par personne et par jour.",
    dutyAllowanceText2:
      'Attention: si la valeur totale des marchandises que vous transportez (y c. la valeur de toutes les denrées alimentaires) dépasse 300 francs, vous devrez payer la TVA dans tous les cas. Informations complémentaires',
    dutyAllowanceText3:
      "Veuillez noter en outre qu'il existe des restrictions supplémentaires pour certains produits animaux et végétaux.",
    dutyAllowanceText4: 'Viande et préparations de viande',
    dutyAllowanceText5:
      "de toutes les espèces animales, à l'exception du gibier, des poissons, des crustacés, des mollusques et des autres invertébrés aquatiques. Appartiennent à cette catégorie:",
    dutyAllowanceText6:
      "toutes les parties comestibles du corps d'animaux (avec ou sans os);",
    dutyAllowanceText7: 'les saucisses à base de viande ou de sang;',
    dutyAllowanceText8: 'les autres produits à base de viande;',
    dutyAllowanceText9:
      'les préparations alimentaires contenant plus de 20 % en poids de saucisse, viande ou sang.',
    dutyAllowanceText10:
      "N'appartiennent pas à cette catégorie la moelle et les os à sauce ainsi que les aliments pour chiens et chats désignés comme aliments pour animaux sur les emballages pour la vente au détail.",
    dutyAllowanceText11:
      "L'importation de produits animaux en provenance de pays autres que les États membres de l'UE, l'Islande ou la Norvège est interdite.",
    dutyAllowanceText12: 'Franchises quantitatives par personne et par jour:',
    dutyAllowanceText13: '1 kg au total',
    dutyAllowanceText14:
      'Droits de douane pour les quantités excédentaires, en francs:',
    dutyAllowanceText15: "jusqu'à 10 kg: 17.- par kg",
    dutyAllowanceText16: 'plus de 10 kg: 23.- par kg',
    dutyAllowanceText17: 'Beurre et crème',
    dutyAllowanceText18:
      "L'importation de produits animaux en provenance de pays autres que les États membres de l'UE, l'Islande ou la Norvège est interdite.",
    dutyAllowanceText19: 'Franchises quantitatives par personne et par jour:',
    dutyAllowanceText20: '1 kg/l au total',
    dutyAllowanceText21:
      'Droits de douane pour les quantités excédentaires, en francs:',
    dutyAllowanceText22: '16.- par kg/l',
    dutyAllowanceText23:
      "Huiles, graisses et margarine pour l'alimentation humaine",
    dutyAllowanceText24:
      "L'importation de produits animaux en provenance de pays autres que les États membres de l'UE, l'Islande ou la Norvège est interdite.",
    dutyAllowanceText25: 'Franchises quantitatives par personne et par jour:',
    dutyAllowanceText26: '5 kg/l au total',
    dutyAllowanceText27:
      'Droits de douane pour les quantités excédentaires, en francs:',
    dutyAllowanceText28: '2.- par kg/l',
    dutyAllowanceText29: 'Boissons alcooliques',
    dutyAllowanceText30:
      'Franchises quantitatives par personne et par jour:\n' +
      "(pour personnes âgées d'au moins 17 ans)",
    dutyAllowanceText31:
      "teneur en alcool n'excédant pas 18 % du volume: 5 l au total et",
    dutyAllowanceText32:
      'teneur en alcool excédant 18 % du volume: 1 l au total',
    dutyAllowanceText33:
      'Droits de douane pour les quantités excédentaires, en francs:',
    dutyAllowanceText34:
      "teneur en alcool n'excédant pas 18 % du volume: 2.- par l",
    dutyAllowanceText35:
      ' teneur en alcool excédant 18 % du volume: 15.- par l',
    dutyAllowanceText36: 'Tabacs manufacturés',
    dutyAllowanceText37:
      'Franchises quantitatives par personne et par jour:\n' +
      "(pour personnes âgées d'au moins 17 ans)",
    dutyAllowanceText38: 'cigarettes/cigares: 250 pièces au total ou',
    dutyAllowanceText39: 'autres tabacs manufacturés: 250 g au total ou',
    dutyAllowanceText40: ' un assortiment proportionnel de ces produits',
    dutyAllowanceText41:
      'Droits de douane pour les quantités excédentaires, en francs:',
    dutyAllowanceText42: 'cigarettes/cigares: 0.25 par pièce',
    dutyAllowanceText43: 'autres tabacs manufacturés: 0.10 par g',
    dutyAllowanceText44: 'Autres denrées alimentaires et marchandises',
    dutyAllowanceText45:
      "L'importation de produits animaux en provenance de pays autres que les États membres de l'UE, l'Islande ou la Norvège est interdite.\n" +
      'En franchise de droits de douane',
    dutyAllowanceText46:
      "Marchandises commandées à l'étranger et livrées par la Poste ou un service de courrier rapide",
    dutyAllowanceText47:
      "D'autres dispositions sont applicables aux marchandises que vous commandez à l'étranger (par ex. sur Internet) et qui vous sont expédiées par la Poste ou par un service de courrier rapide. Informations complémentaires",
  },

  personalEffects: {
    personalEffectsMainText: 'Effets personnels et dispositions de voyage',
    personalEffectsSubText: '',
    personalEffectsText1: '',
    personalEffectsText2: '',
    personalEffectsText3: '',
    personalEffectsText4: '',
    personalEffectsText5: '',
    personalEffectsText6: '',
    personalEffectsText7: '',
  },

  foreignVat: {
    foreignVatMainText: 'Remboursement de la TVA étrangère',
    foreignVatSubText: '',
    foreignVatText1: '',
    foreignVatText2: '',
    foreignVatText3: '',
    foreignVatText4: '',
    foreignVatText5: '',
  },

  animals: {
    animalsMainText: '',
    animalsSubText: '',
    animalsText1: '',
    animalsText2: '',
    animalsText3: '',
    animalsText4: '',
  },

  plants: {
    plantsMainText: '',
    plantsSubText: '',
    plantsText1: '',
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
    souvenirsAndSpeciesProtectionSubText: '',
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
    highwayVignetteSubText: '',
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
    roadTaxSubText: '',
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
    fuelAndRepairsSubText: '',
    fuelAndRepairsText1: '',
    fuelAndRepairsText2: '',
    fuelAndRepairsText3: '',
    fuelAndRepairsText4: '',
    fuelAndRepairsText5: '',
  },

  entryByTrain: {
    entryByTrainMainText: '',
    entryByTrainSubText: '',
    entryByTrainText1: '',
    entryByTrainText2: '',
    entryByTrainText3: '',
    entryByTrainText4: '',
    entryByTrainText5: '',
    entryByTrainText6: '',
    entryByTrainText7: '',
    entryByTrainText8: '',
    entryByTrainText9: '',
  },

  forgery: {
    forgeryMainText: '',
    forgerySubText: '',
    forgeryText1: '',
    forgeryText2: '',
    forgeryText3: '',
    forgeryText4: '',
    forgeryText5: '',
    forgeryText6: '',
  },

  cash: {
    cashMainText: '',
    cashSubText: '',
    cashText1: '',
    cashText2: '',
  },

  food: {
    foodMainText: '',
    foodSubText: '',
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
    authorisationRequirementsSubText: '',
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
    purchasesOnlineOfflineSubText: '',
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
    informationTitle: 'Informations utiles',
    informationSubCategoryTitle: "J'ai des biens avec vous:",

    customsProceduresMainText: 'Procédant à la douane',
    customsProceduresSubText:
      'En tant que particulier, vous devez entrer en Suisse ...',

    travelDocumentsMainText: 'Documents de voyage',
    travelDocumentsSubText:
      "Pour entrer en Suisse, les étrangers ont besoin d'un ...",

    declarationMainText: "J'ai des biens avec moi",
    declarationSubText: 'Marchandises pour votre usage privé ou en cadeau ...',
    animalsAndPlantsMainText: "J'ai des animaux ou des plantes avec moi",
    animalsAndPlantsSubText:
      'Pour les chiens, les chats, les autres animaux domestiques et les chevaux, vous trouverez ...',
    vehiclesMainText: 'Je voyage avec un véhicule',
    vehiclesSubText:
      "L'utilisation des autoroutes et des autoroutes avec des véhicules à moteur et des remorques ...",
    entryByTrainMainText: 'Entrée en train',
    entryByTrainSubText:
      'Si le personnel des douanes est présent dans le train, vous devez prendre toutes les marchandises ...',
    prohibitionsAndRestrictionsMainText: 'Interdictions et restrictions',
    prohibitionsAndRestrictionsSubText:
      "Il est interdit d'introduire des contrefaçons de marque et de design. Les douanes suisses ...",

    vatAllowanceMainText: 'Franchise-valeur de 300 francs',
    vatAllowanceSubText:
      'Les marchandises que vous importez pour votre usage privé ou pour ...',

    dutyAllowanceMainText:
      'Franchises quantitatives: denrées alimentaires, alcool et tabac',
    dutyAllowanceSubText:
      'Les marchandises que vous importez pour votre usage privé ou pour ...',

    personalEffectsMainText: 'Effets personnels et dispositions de voyage',
    personalEffectsSubText: '',

    foreignVatMainText: 'Remboursement de la TVA étrangère',
    foreignVatSubText: '',

    animalsMainText: '',
    animalsSubText: '',

    plantsMainText: '',
    plantsSubText: '',

    souvenirsAndSpeciesProtectionMainText: '',
    souvenirsAndSpeciesProtectionSubText: '',

    highwayVignetteMainText: '',
    highwayVignetteSubText: '',
    roadTaxMainText: '',
    roadTaxSubText: '',
    fuelAndRepairsMainText: '',
    fuelAndRepairsSubText: '',

    forgeryMainText: '',
    forgerySubText: '',
    cashMainText: '',
    cashSubText: '',
    foodMainText: '',
    foodSubText: '',
    authorisationRequirementsMainText: '',
    authorisationRequirementsSubText: '',
    purchasesOnlineOfflineMainText: '',
    purchasesOnlineOfflineSubText: '',
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
      'Monbijoustrasse 40\n3003 Bern\nhttp://www.ezv.admin.ch',
    designAndDevelopment: 'Conception et développement',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Avis de non-responsabilité',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
  },
  legalNoticeInformation: {
    navigationHeaderTitle: 'Info importantes',
    conditions: 'Conditions-cadres',
    importantSoon: "L'essentiel en bref",
    importantSoonText1:
      "Vous ne pouvez utiliser l'application qu'une fois par jour (jour civil) pour la même personne ou les mêmes personnes.",
    importantSoonText2:
      "Vous ne pouvez utiliser l'application que pour les marchandises que vous importez pour votre usage privé ou pour en faire cadeau.",
    importantSoonText3:
      "En utilisant l'application, vous acceptez que le taux de TVA de 7,7 % soit appliqué même aux marchandises qui sont en réalité soumises au taux réduit (denrées alimentaires, aliments pour animaux, médicaments et livres).",
    importantSoonText4:
      'Les redevances ne peuvent être payées que par carte de crédit (Visa, Mastercard) (sans possibilité de remboursement). Les marchandises sont dédouanées une fois que les redevances ont été payées.',
    importantSoonText5:
      "Le dédouanement doit être effectué avant le franchissement de la frontière ou, au plus tard, au point de passage frontalier. Il est cependant possible d'y procéder au plus tôt 48 heures avant le franchissement de la frontière.",
    importantSoonText6:
      "À l'issue du dédouanement, vous pouvez notamment emprunter les passages frontières suivants:",
    importantSoonText7:
      'les points de passage frontaliers non occupés par du personnel douanier;',
    importantSoonText8: 'la voie verte des aéroports.',
    importantSoonText9:
      'La quittance de la douane doit être présentée sur demande au personnel douanier suisse. Celui-ci la photographie si nécessaire.',

    howToDeclareYourGoods: 'Marche à suivre pour dédouaner vos marchandises:',
    howToDeclareYourGoodsText1:
      "Déclarez toutes les marchandises que vous transportez (à l'exception des effets personnels et des provisions de voyage). Les franchises quantitatives et les franchises-valeur auxquelles vous avez droit seront déduites automatiquement lors du dédouanement.",
    howToDeclareYourGoodsText2:
      'Saisissez la valeur en devise étrangère figurant sur le justificatif de paiement. Celle-ci sera convertie en francs selon le taux de change (vente) de la veille (dernier jour ouvrable).',
    howToDeclareYourGoodsText3:
      "Définissez un délai de deux heures pour vous permettre de franchir la frontière. La quittance établie n'est valable que pendant ce délai. Si vous ne pouvez pas respecter le délai choisi, vous devez vous rendre à un passage frontière occupé par du personnel douanier suisse et expliquer pourquoi vous n'avez pas pu entrer en Suisse dans le délai de validité de la quittance. En l'absence de justification crédible, les redevances seront perçues une nouvelle fois.",
    howToDeclareYourGoodsText4:
      'Si le dédouanement vous concerne vous-même ainsi que les personnes avec qui vous voyagez ou une autre personne, vous devez entrer en Suisse avec ces personnes.',
    howToDeclareYourGoodsText5:
      "Vous pouvez corriger votre déclaration à tout moment avant le paiement. Après le paiement, aucune correction ne peut plus être effectuée dans l'application. Vous devez déclarer à un passage frontière occupé par du personnel douanier suisse les marchandises étrangères supplémentaires achetées après le paiement.",
    howToDeclareYourGoodsText6:
      "Vous devez conserver pendant au moins un an la quittance reçue de la douane suisse. Vous pouvez aussi l'enregistrer sous forme d'image.",
    howToDeclareYourGoodsText7:
      "S'il n'est pas possible d'effectuer le dédouanement à l'aide de l'application (par ex. absence de connexion à Internet ou impossibilité de payer les redevances avec une carte de crédit), vous devez déclarer les marchandises auprès d'un passage frontière occupé par du personnel douanier suisse ou par l'intermédiaire d'une boîte à déclarations.",
    howToDeclareYourGoodsText8:
      "Vous devez dans tous les cas déclarer les marchandises suivantes auprès d'un passage frontière occupé par du personnel douanier suisse:",
    howToDeclareYourGoodsText9:
      'les marchandises soumises à des restrictions ou des interdictions et les marchandises assujetties à un certificat ou un permis (par ex. armes, animaux vivants et marchandises soumises aux dispositions sur la conservation des espèces); informations complémentaires;',
    howToDeclareYourGoodsText10:
      "les marchandises d'une valeur totale supérieure ou égale à 20 000 francs qui sont destinées à l'usage privé ou à être offertes en cadeau;",
    howToDeclareYourGoodsText11:
      "les marchandises que vous n'importez ni pour votre usage privé ni pour en faire cadeau (par ex. marchandises destinées au commerce);",
    howToDeclareYourGoodsText12:
      'les véhicules, les réparations de véhicule et les carburants;',
    howToDeclareYourGoodsText13:
      'les effets de déménagement, les trousseaux de mariage et les effets de succession;',
    howToDeclareYourGoodsText14:
      'les marchandises qui ne sont importées que temporairement en Suisse;',
    howToDeclareYourGoodsText15:
      'les marchandises destinées à transiter par la Suisse.',
    howToDeclareYourGoodsText16:
      "Les marchandises qui sont exportées ne peuvent pas être déclarées à l'aide de l'application. Vous trouverez ici des informations relatives aux achats effectués en Suisse en franchise de redevances (tax free).",

    legal: 'Informations juridiques',
    usage: "L'usage",
    legalText1:
      "Le dédouanement effectué avec l'application lie la personne assujettie à l'obligation de déclarer (art. 33 de la loi sur les douanes; RS 631.0). Vous êtes donc punissable si vous omettez de déclarer ou déclarez de façon inexacte des marchandises prohibées, soumises à un permis ou soumises à des redevances.",
    legalText2:
      'La personne qui présente la quittance lors du contrôle douanier est responsable du dédouanement correct des marchandises transportées. Elle assume également la responsabilité pénale en cas de découverte de marchandises non déclarées ou déclarées de façon inexacte.',
    legalText3: "Lorsque vous utilisez l'application, assurez-vous",
    legalText4:
      "d'être connecté à Internet pendant le processus de paiement afin de pouvoir terminer le dédouanement;",
    legalText5:
      "de disposer d'une quittance valable pour les marchandises que vous importez;",
    legalText6:
      'de pouvoir afficher la quittance sur votre terminal mobile en cas de contrôle lors du franchissement de la frontière.',
    legalText7:
      'Veuillez noter que pendant le délai de validité de la quittance, une image de celle-ci transmise à des tiers par WhatsApp, iMessage, SMS ou courriel ne sera pas acceptée comme quittance.',

    privacyAndLiability: 'Protection des données et responsabilité',
    dataProtection: 'Protection des données',
    dataProtectionText1:
      "L'art. 13 de la Constitution fédérale et les dispositions légales de la Confédération suisse sur la protection des données disposent que toute personne a droit à la protection de sa sphère privée ainsi qu'à la protection contre l'emploi abusif des données qui la concernent. Les autorités fédérales observent strictement ces dispositions. Les données personnelles sont traitées de façon parfaitement confidentielle et ne sont ni vendues, ni transmises à des tiers.",
    dataProtectionText2:
      'Nous nous efforçons, en collaboration étroite avec nos hébergeurs, de protéger au mieux possible nos banques de données des intrusions externes, des pertes, du mauvais usage et de la falsification.',
    dataProtectionText3:
      'In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Miss-brauch oder vor Fälschung zu schützen.',
    dataProtectionText4:
      "En cas de prise de contact volontaire, votre adresse électronique est enregistrée dans une banque de données séparée, qui n'est pas reliée aux fichiers journaux anonymes. Vous avez à tout moment la possibilité d'annuler votre enregistrement.",
    dataProtectionText5:
      "Les autorités fédérales se réservent expressément le droit de modifier en partie ou en totalité le contenu du présent site, de le supprimer ou d'en suspendre temporairement la diffusion, et ce à tout moment et sans avertissement préalable. Les autorités fédérales ne sauraient être tenues pour responsables des dommages matériels ou immatériels qui pourraient être causés par l'accès aux informations diffusées ou par leur utilisation ou non-utilisation, par le mauvais usage de la connexion ou par des problèmes techniques.",

    liability: 'Responsabilité',
    liabilityText1:
      'Les autorités fédérales se réservent expressément le droit de modifier, supprimer ou temporairement ne pas publier tout ou partie du contenu à tout moment sans préavis.',
    liabilityText2:
      "Les recours en responsabilité contre les autorités fédérales pour des dommages de nature matérielle ou immatérielle résultant de l'accès ou de l'utilisation ou de la non-utilisation des informations publiées, d'une mauvaise utilisation de la connexion ou de défauts techniques sont exclus.",

    referencesAndLinks: 'Renvois et liens',
    referencesAndLinksText1:
      "Les renvois et liens vers d'autres sites Internet ne sont pas de la responsabilité des autorités fédérales. L'accès à ces sites et leur utilisation se font aux risques des utilisateurs. Les autorités fédérales déclarent expressément qu'elles n'ont aucune influence sur la forme, le contenu et les offres des sites auxquels elles renvoient. Les informations et services offerts par ces sites sont entièrement de la responsabilité de leurs auteurs.",
    referencesAndLinksText2:
      'Les autorités fédérales rejettent toute responsabilité pour de tels sites Internet.',

    copyright: "Droits d'auteur",
    copyrightText1:
      "Droits d'auteur: autorités de la Confédération suisse, 2007.",
    copyrightText2:
      "Les informations que recèlent les sites Web des autorités fédérales sont mises à la disposition du public. Le téléchargement ou la copie de textes, d'illustrations, de photographies ou d'autres données n'entraîne aucun transfert de droits sur les contenus.",
    copyrightText3:
      "Les droits d'auteur et tous les autres droits liés aux textes, illustrations, photographies et autres données placés sur les sites Web des autorités fédérales sont leur propriété exclusive ou celle des détenteurs expressément cités. Toute reproduction est subordonnée à l'autorisation écrite préalable du détenteur des droits.",
  },
  overview: {
    declared: 'inscrit',
    dutyFree: 'en franchise',
    details: 'détails',
  },
  legalNoticeModal: {
    importantNote: 'Note importante',
    vatRateInfo:
      "S'il vous plaît prendre en compte qu'aucun remboursement est possible en utilisant cette application. Les marchandises déclarées sont dédouanées au taux de TVA uniforme de 7,7%. Plus d'informations peuvent être trouvées ici:",
    termsOfService: 'Termes et Conditions',
    acceptance: "J'accepte les termes et conditions que j'ai lus et compris.",
    confirm: 'Confirmer',
    abort: 'Abandonner',
  },
  furtherInformationModal: {
    furtherInformation: "Plus d'informations:",
    acceptance:
      "En utilisant l'application, vous acceptez que le taux de TVA est de 7,7%; est également appliqué aux biens effectivement soumis au taux d'imposition réduit (aliments, aliments pour animaux, médicaments et livres).",
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kgs',
    kiloOrLiter: 'kg/litre',
    kiloOrLiter_plural: 'kgs/litres',
    liter: 'litre',
    liter_plural: 'litres',
    unit: 'unité',
    unit_plural: 'unités',
    gram: 'gramme',
    gram_plural: 'grammes',
  },
};
