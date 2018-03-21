// @flow
import type { Locale } from '../types/locale';

export const fr: Locale = {
  categories: {
    Meat: 'Viande et préparations de viande',
    Butter: 'Beurre et crème',
    Oils: 'Huiles/graisses/margarine',
    OtherFood: 'Autres denrées alimentaires et boissons sans alcool',
    AlcSoft: "Boissons alcoolisées jusqu'à 18% vol.",
    AlcHard: 'Boissons alcoolisées de plus de 18% vol.',
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
    note: 'Remarque importante:',
    underConstruction: 'En cours',
  },
  snackBar: {
    limitExceeded:
      "Valeur des biens pour l'application dépassée. S'il vous plaît signaler vos marchandises oralement au poste-frontière.",
    limitExceededRightText: 'Afficher les passages frontaliers',
    offline:
      "Vous êtes hors ligne. Sauf pour la fonction de paiement, cependant, vous pouvez utiliser toutes les autres fonctionnalités de l'application.",
    paymentAborted: 'Paiement annulé',
    paymentFailed: 'Paiement échoué',
    paymentAbortedRightText: 'OK',
    paymentFailedRightText: 'OK',
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
    skipThisStep: 'Passer cette étape',
  },
  peopleInput: {
    peopleInputQuestion:
      'Combien de voyageurs sont concernés par le dédouanement?',
  },
  mainCategoriesInput: {
    mainCategoriesQuestion: 'Quelles marchandises souhaitez-vous déclarer?',
    mainCategoriesNotYetAnswered:
      'Catégorie de marchandises:données manquantes',
  },
  quantityInput: {
    quantityInput: 'Saisie de quantité',
    recordedOn: 'enregistré sur {{value}}',
    addQuantities: 'Ajouter des quantités',
    enterQuantities: 'Saisissez toutes les quantités de {{value}} ici.',
    enterQuantity: 'Entrer la quantité',
    enterQuantitiesButter: 'Saisissez toutes les quantités de {{value}} ici.',
    enterQuantitiesTobacco: 'Saisissez toutes les quantités des {{value}} ici.',
    enterQuantitiesCigarettes:
      'Saisissez toutes les quantités des {{value}} ici.',
    enterQuantitiesOil: 'Saisissez toutes les quantités {{value}} ici.',
    enterQuantitiesAlcohol: 'Saisissez toutes les quantités des {{value}} ici.',
    enterQuantitiesMeat: 'Saisissez toutes les quantités de {{value}} ici.',
    standardInputSubText:
      'Saisissez toutes les quantités de {{category}} que vous emportez avec vous:',
    meatInput: 'viande et préparations de viande',
    butterInput: 'beurre et crème',
    oilInput: "d'huile/graisse/margarine",
    alcSoftInput: "boissons alcoolisées jusqu'à 18% vol.",
    alcHardInput: 'boissons alcoolisées de plus de 18% vol.',
    cigarettesInput: 'cigarettes et cigares',
    tobaccoInput: 'autres tabacs manufacturés',
  },
  amountInput: {
    amountInput:
      'Veuillez saisir ici la valeur de toutes les marchandises transportées.',
    amountInputLargeItem:
      "Transportez-vous des biens individuels d'une valeur supérieure à {{value}} francs?",
    amountInputLargeItemGreyBox:
      "Encore une fois, capturez chaque objet d'une valeur supérieure à CHF 300 (valeur nette).",
    amountInputAddItem: 'Ajouter la valeur',
    amountInputAddItemLarge: 'Ajouter un bien',
    amountInputEnterValueBeginning: 'Saisissez la valeur ',
    amountInputEnterValueBoldText: 'sans la TVA étrangère (valeur nette)',
    amountInputEnterValueEnd:
      ', y compris la valeur des cadeaux reçus, la nourriture, les produits du tabac et les boissons alcoolisées.',
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
    validateNoPeopleTitle: 'Doit être au moins une personne',
    validateNoPeopleSubtitle:
      'Veuillez vérifier que les données fournies sont exactes.',
    validateGenericYes: 'Oui',
    validateGenericNo: 'Non',
    validateGenericOk: 'Ok',
    validateMainCategoryRemoveTitle:
      'Êtes-vous sûr de vouloir supprimer cette catégorie principale?',
    validateMainCategoryRemoveSubtitle:
      'Les quantités suivantes figurent actuellement dans certaines sous-catégories: {{value}}.',
    validateMainCategoryAndVatRemoveSubTitle: '🔥',
    validateMainCategoryRemoveYes:
      "Oui, j'aimerais supprimer les quantités en question.",
    itemsGreaterThan300CHF: 'Articles > 300 CHF',
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
    timePickerRegistrationTimeInPast:
      "La période que vous avez choisie n'est pas autorisée. Veuillez vérifier votre entrée pour continuer.",
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
    travellers:
      'Voyageurs: {{adults}} Adultes, {{minors}} Enfants (moins de 17 ans)',
    paidOn: 'Payé le {{date}} à {{time}} h avec:',
    transactionId: 'ID de transaction (SIX): {{value}}',

    receiptValidFrom:
      'La présente quittance est valable pour un passage de la frontière suisse à partir de:',
    receiptValidFromDate:
      '{{startDate}} | {{startTime}} à {{endDate}} | {{endTime}}',
    receiptValidOn:
      'La présente quittance est valable pour un passage de la frontière suisse le:',
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
    entryTime: "Période d'entrée:",
    chooseOtherEntryTime: 'modifier',
    until: "jusqu'à",
  },

  customsProcedures: {
    customsProceduresMainText: 'Marche à suivre lors du passage à la douane',
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
      "Vous pouvez également déclarer vos marchandises au moyen de l'application QuickZoll de l'Administration fédérale des douanes (AFD). Les marchandises doivent être dédouanées avec l'application et les redevances payées avant le franchissement de la frontière ou au passage frontière. Si vous avez payé les redevances avec l'application, vous pouvez aussi emprunter des passages frontières non occupés par du personnel de la douane ou des passages frontières auprès desquels il est possible d'effectuer une déclaration écrite ou la voie verte des aéroports.",
    customsProceduresText14:
      "Cette forme de déclaration en douane n'est admise que pour les marchandises destinées à votre usage privé ou à être offertes en cadeau. Les marchandises ne doivent être soumises à aucune restriction ni interdiction et ne doivent être assujetties à aucun certificat ni permis.",
    customsProceduresText15:
      "Les autres marchandises doivent être déclarées auprès d'un passage frontière occupé par du personnel de la douane suisse.",
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
    customsProceduresExtLink1: 'boîte à déclarations',
  },

  travelDocuments: {
    travelDocumentsMainText: 'Documents de voyage',
    travelDocumentsText1:
      "Pour entrer en Suisse, les ressortissants étrangers ont besoin d'un document de voyage valable et reconnu par la Suisse. Dans certains cas, un visa est en outre nécessaire. Vous pouvez obtenir des informations sur les modalités d'entrée et de séjour en Suisse (prescriptions relatives aux documents de voyage et visas) sur le site Internet du Secrétariat d'État aux migrations:",
    travelDocumentsText2:
      "Pour connaître les prescriptions en matière de documents de voyage qui sont applicables à l'étranger, il faut s'adresser aux autorités étrangères correspondantes, via le lien de l'OMD:",
  },

  vatAllowance: {
    vatAllowanceMainText: 'Franchise-valeur de 300 francs',
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
      "La TVA est calculée sur la base de la valeur des marchandises. Le taux normal est de 7,7 %. Un taux réduit d'impôt de 2,5 % est appliqué à certaines marchandises (par ex. denrées alimentaires, boissons sans alcool, livres, revues ou médicaments). Le taux normal s'applique toujours en cas de dédouanement avec l'application QuickZoll.",
    vatAllowanceText11:
      "La présentation d'une quittance ou d'un autre justificatif de valeur (par ex. pour les marchandises acquises sur Internet) facilite le dédouanement. Si les indications de valeur font défaut ou si leur exactitude suscite des doutes, le bureau de douane peut estimer la valeur des marchandises.",
    vatAllowanceText12: 'Déclaration en douane',
    vatAllowanceText13:
      "Lors de l'entrée en Suisse, vous devez déclarer verbalement au personnel douanier toutes les marchandises que vous transportez.",
    vatAllowanceText14:
      "Vous pouvez également déclarer les marchandises au moyen de l'application QuickZoll ou par écrit, par l'intermédiaire des boîtes à déclarations, aux passages frontières non occupés par du personnel douanier. Vous trouverez ici des informations à ce sujet. Veuillez noter qu'en cas de dépassement des franchises quantitatives pour les boissons alcooliques, les tabacs manufacturés et certaines denrées alimentaires, vous devrez payer des droits de douane dans tous les cas. Informations complémentaires",
    vatAllowanceText15:
      "Nous attirons en outre votre attention sur le fait que certaines marchandises (par ex. contrefaçons, armes, plantes, animaux, produits animaux, marchandises soumises aux dispositions sur la conservation des espèces) peuvent être interdites à l'importation ou soumises à des restrictions.",
    vatAllowanceText16: '',
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
    dutyAllowanceText35a:
      "Les boissons dont la teneur en alcool n'excède pas 0,5 % vol ne sont pas réputées boissons alcooliques.",
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
    dutyAllowanceText48: 'More information',
  },

  personalEffects: {
    personalEffectsMainText: 'Effets personnels et dispositions de voyage',
    personalEffectsText1:
      'Vous pouvez importer vos effets personnels et vos provisions de voyage en franchise de redevances:',
    personalEffectsText2: 'Effets personnels',
    personalEffectsText3:
      'Relèvent de cette catégorie les effets personnels que:',
    personalEffectsText4:
      'des voyageurs domiciliés en Suisse ont emportés lors de leur sortie du pays;',
    personalEffectsText5:
      "des voyageurs domiciliés à l'étranger utilisent pendant leur séjour en Suisse avant de les réexporter. Font partie des effets personnels les vêtements, la lingerie, les articles de toilette, le matériel de sport, les appareils photographiques, les caméras cinématographiques et vidéo, les téléphones et ordinateurs portables, les instruments de musique et autres objets d'usage courant de nature personnelle.",
    personalEffectsText6: 'Provisions de voyage',
    personalEffectsText7:
      'Sont considérées comme des provisions de voyage les denrées alimentaires et boissons sans alcool, prêtes à la consommation, pour le jour du voyage.',
  },

  foreignVat: {
    foreignVatMainText: 'Remboursement de la TVA étrangère',
    foreignVatText1: "L'AFD ne peut pas vous rembourser la TVA étrangère.",
    foreignVatText2:
      "Lorsque vous acheminez personnellement en Suisse des marchandises achetées à l'étranger, vous avez souvent la possibilité de vous faire rembourser la TVA étrangère par le vendeur étranger ou une entreprise spécialisée dans le remboursement de l'impôt (tax refund). Ces entreprises n'ont aucun lien avec l'AFD et ne travaillent pas pour notre compte.",
    foreignVatText3:
      "Pour le remboursement, les conditions sont différentes en fonction de l'État concerné. Le cas échéant, le vendeur doit vous remettre un formulaire de remboursement rempli et l'autorité douanière étrangère doit y attester l'exportation en Suisse.",
    foreignVatText4:
      "Nous ne pouvons pas vous fournir de plus amples informations sur le remboursement de la TVA étrangère. Le cas échéant, veuillez vous adresser à l'autorité douanière compétente pour obtenir les renseignements nécessaires. Vous trouverez les coordonnées des autorités douanières étrangères sur le site de l'Organisation mondiale des douanes:",
    foreignVatText5:
      "La TVA suisse doit être payée même si la TVA étrangère n'est pas remboursée. Il n'existe aucune convention contre les doubles impositions en matière de TVA.",
  },

  animals: {
    animalsMainText:
      'Animaux: animaux domestiques, notamment chiens, chats et chevaux',
    animalsText1:
      "Vous trouverez les informations relatives à l'importation d'animaux domestiques, notamment de chiens, de chats et de chevaux, sur le site Internet de l'Office fédéral de la sécurité alimentaire et des affaires vétérinaires (OSAV):",
    animalsText2: 'Redevances',
    animalsText3:
      'Si la franchise-valeur de 300 francs est dépassée, vous devrez vous acquitter de la TVA pour les animaux transportés. Vous trouverez de plus amples informations à ce sujet dans la rubrique suivante:',
    animalsText4: 'Franchise-valeur de 300 francs',
  },

  plants: {
    plantsMainText: 'Plantes',
    plantsText1:
      '1.\tPlantes et produits végétaux interdits\n' +
      "L'importation des plantes suivantes est interdite, car elles peuvent être porteuses d'organismes nuisibles (feu bactérien, chancre de l'écorce du châtaignier, affections virales, etc.):",
    plantsText2: 'a) Importation interdite pour tous les pays de provenance',
    plantsText3: 'Cotonéaster',
    plantsText4: 'Photinia davidiana (synonyme Stranvaesia davidiana)',
    plantsText5:
      "b) Importation interdite pour tous les pays de provenance, à l'exception des États de l'UE, de l'Islande et de la Norvège",
    plantsText6:
      'Arbres fruitiers à noyau (abricotier, amandier, cerisier, pêcher, prunier) et toutes les formes ornementales du genre Prunus',
    plantsText7: 'Arbres du genre Citrus (agrumes)',
    plantsText8: 'Aubépine (Crataegus) de toutes espèces et variétés',
    plantsText9: 'Buisson ardent (Pyracantha)',
    plantsText10: 'Châtaignier à fruits comestibles (Castanea)',
    plantsText11: 'Chêne (Quercus)',
    plantsText12: 'Cognassier (Cydonia)',
    plantsText13: 'Cognassier du Japon (Chaenomeles)',
    plantsText14: 'Conifères',
    plantsText15: 'Kumquat (Fortunella)',
    plantsText16: 'Néflier (Mespilus)',
    plantsText17: 'Néflier du Japon (Eriobotrya)',
    plantsText18: 'Oranger amer ou bigaradier (Poncirus)',
    plantsText19: 'Poirier (Pyrus)',
    plantsText20: 'Pomme de terre et solanacées similaires (Solanacea)',
    plantsText21: 'Pommier (Malus)',
    plantsText22: 'Rosier',
    plantsText23: 'Sorbier, sorbier des oiseleurs, alisier blanc (Sorbus)',
    plantsText24: 'Vigne (Vitis)',
    plantsText25:
      '2.\tAutres plantes et produits végétaux (y compris fruits et légumes)',
    plantsText26:
      "a) Importation en provenance des États de l'UE, de Norvège et d'Islande Vous pouvez importer des plantes sans permis pour autant que cela soit dans le trafic touristique et pour votre usage privé.",
    plantsText27:
      "b) Importation en provenance de pays autres que les États de l'UE, la Norvège et l'Islande Les plantes (vivantes ou sous forme de produits végétaux) peuvent être assujetties à un permis d'importation.",
    plantsText28:
      "Si vous souhaitez importer des plantes en provenance de tels pays, veuillez vous informer préalablement auprès de l'Office fédéral de l'agriculture au sujet des dispositions en vigueur: www.blw.admin.ch.",
    plantsText29:
      "Exception: par personne, on peut importer des fleurs coupées et des bouquets de fleurs jusqu'à 3 kg au maximum ainsi que des fruits et légumes (hormis les pommes de terre) jusqu'à 10 kg au total sans application de mesures phytosanitaires.",
    plantsText30: 'Redevances',
    plantsText31:
      'Si la franchise-valeur de 300 francs est dépassée, vous devrez vous acquitter de la TVA pour les plantes transportées. Vous trouverez de plus amples informations à ce sujet dans la rubrique suivante: Franchise-valeur de 300 francs.',
  },

  souvenirsAndSpeciesProtection: {
    souvenirsAndSpeciesProtectionMainText:
      'Souvenirs et conservation des espèces (CITES)',
    souvenirsAndSpeciesProtectionText1: 'Souvenirs',
    souvenirsAndSpeciesProtectionText2:
      "Une ceinture en cuir d'éléphant, un capteur de rêves orné de plumes d'oiseau ou des bâtonnets d'encens en bois de santal: la palette des souvenirs proposés est extrêmement large. Au premier coup d'œil, il n'apparaît pas que ces objets sont fabriqués à partir d'espèces animales ou végétales protégées (par ex. bois tropical). Or beaucoup ne peuvent pas être importés en Suisse. Avant de partir en vacances, il vaut la peine de se renseigner sur les souvenirs qu'il est possible de rapporter et sur les objets qu'il est préférable de laisser sur place.",
    souvenirsAndSpeciesProtectionText3: 'Conservation des espèces animales',
    souvenirsAndSpeciesProtectionText4:
      "L'importation d'animaux protégés ou de produits fabriqués à partir de ceux-ci est soit totalement interdite, soit soumise à autorisation (c'est notamment le cas des serpents, des lézards, des tortues, des perroquets, de l'ivoire, de l'écaille de tortue et de diverses fourrures).",
    souvenirsAndSpeciesProtectionText5:
      "Lors de l'importation, il est nécessaire de présenter au poste de contrôle CITES une autorisation d'exportation ou un certificat de réexportation établi par l'autorité CITES du pays de provenance.",
    souvenirsAndSpeciesProtectionText6: 'Conservation des espèces végétales',
    souvenirsAndSpeciesProtectionText7:
      "L'importation de plantes protégées ou de produits fabriqués à partir de celles-ci est soit totalement interdite, soit soumise à autorisation (par ex. orchidées, cactées, certains bois et plantes médicinales).",
    souvenirsAndSpeciesProtectionText8:
      "Pour obtenir les renseignements et les autorisations nécessaires, veuillez vous adresser à l'OSAV: www.blv.admin.ch. ",
  },

  highwayVignette: {
    highwayVignetteMainText: 'Vignette autoroutière',
    highwayVignetteText1:
      "L'utilisation des autoroutes et semi-autoroutes avec des véhicules à moteur et des remorques n'excédant pas 3,5 tonnes chacun est soumise à une redevance. La vignette coûte 40 francs.",
    highwayVignetteText2: 'Points de vente',
    highwayVignetteText3:
      'En Suisse, la vignette est disponible notamment dans les bureaux de poste et les stations-service.',
    highwayVignetteText4:
      "Aux passages frontières occupés, vous pouvez l'acheter auprès du personnel douanier. Vous avez la possibilité de payer soit par carte de crédit, soit en espèces (CHF, EUR, USD, GBP).",
    highwayVignetteText5:
      "À l'étranger, la vignette est vendue dans les clubs automobiles. À proximité de la frontière suisse, elle est également disponible dans les stations-service situées au bord des autoroutes, dans les kiosques et dans les boutiques Trafik (Autriche).",
    highwayVignetteText6: 'Apposition de la vignette',
    highwayVignetteText7:
      "La vignette n'est valable que si elle est collée sur le véhicule:",
    highwayVignetteText8:
      'automobiles: sur la face interne du pare-brise (éviter le bandeau pare-soleil);',
    highwayVignetteText9:
      'remorques et motocycles: sur une partie non interchangeable aisément accessible.',
    highwayVignetteText10:
      "Les vignettes collées avec de simples rubans adhésifs ou d'autres moyens ne sont pas valables. Si vous circulez sur une autoroute ou une semi-autoroute sans vignette ou avec une vignette non valable, une amende de 200 francs vous sera infligée. De plus, vous devrez acheter une vignette et l'apposer sur votre véhicule.",
  },

  roadTax: {
    roadTaxMainText:
      'Redevance sur le trafic routier applicable aux véhicules de plus de 3,5 tonnes (RPLF)',
    roadTaxText1:
      "En Suisse, les véhicules et les remorques affichant un poids total supérieur à 3,5 tonnes sont soumis à une redevance sur le trafic des poids lourds. Pour les bus, les voitures d'habitation lourdes, les voitures de tourisme lourdes et leurs remorques d'un poids de plus de 3,5 tonnes, la redevance est perçue de façon forfaitaire en fonction du nombre de jours passés en Suisse.",
    roadTaxText2:
      "Contrairement à la vignette autoroutière destinée aux voitures de tourisme, la redevance sur le trafic des poids lourds ne concerne pas uniquement les autoroutes, mais bien l'ensemble du réseau routier.",
    roadTaxText3:
      'Le lien suivant fournit des informations au sujet des camions et de leurs remorques:',
    roadTaxText4:
      "Attention: le véhicule est également soumis à la redevance forfaitaire sur le trafic des poids lourds (RPLF) s'il est parqué et ne circule pas (par ex. une voiture d'habitation installée sur une place de camping).",
    roadTaxText5: 'Paiement et tarifs',
    roadTaxText6:
      'La base de calcul est constituée du poids total ou du poids remorquable du véhicule tracteur figurant dans le permis de circulation et de la période fiscale.',
    roadTaxText7: 'La RPLF peut être payée selon les modalités suivantes:',
    roadTaxText8: 'pour 1 à 30 jours consécutifs;',
    roadTaxText9:
      "pour 10 jours pouvant être choisis librement sur une période d'une année;",
    roadTaxText10: 'pour 1 à 11 mois consécutifs;',
    roadTaxText11: 'pour une année.',
    roadTaxText12:
      "Vous trouverez les tarifs dans le formulaire 15.91. Ce formulaire est distribué par les bureaux de douane. Pour les véhicules étrangers, nous percevons la redevance sur le trafic des poids lourds au passage frontière, au moment de l'entrée sur le territoire suisse. Le formulaire timbré par le bureau de douane fait office de preuve de paiement. Si vous prolongez votre séjour en Suisse, vous devez vous présenter à un bureau de douane suisse.",
    roadTaxText13: 'Attention:',
    roadTaxText14: 'Redevance minimale par preuve de paiement: 25 francs.',
    roadTaxText15:
      'Tarifs mensuels et annuels mentionnés dans le formulaire 15.91.',
    roadTaxCategory1: "Voitures d'entreprise, autocars et autobus articulés",
    roadTaxCategory2: 'Motor caravane ou camping-car',
    roadTaxCategory3: 'caravane',
    roadTaxCategory4: 'Voitures de tourisme lourdes',
    roadTaxCategory5:
      'Remorques de plus de 3,5 tonnes tirées par les véhicules ci-dessus ou les véhicules automobiles légers',
    costPerDay: 'Coût par jour:',
    commonRates: 'Les taux les plus courants',
    vehicleTariffs: "Pour les véhicules suivants, ces tarifs s'appliquent:",
    per100kgTrailerLoad: 'par 100 kg de charge de remorque',
    till: 'à',
  },

  fuelAndRepairs: {
    fuelAndRepairsMainText: 'Carburant et réparation',
    fuelAndRepairsText1: 'Carburant pour véhicules',
    fuelAndRepairsText2:
      "Le contenu du réservoir n'est pas soumis aux redevances. En outre, vous pouvez importer en franchise de redevances du carburant dans un jerrycan de réserve jusqu'à concurrence de 25 litres. Vous devrez payer 0 fr. 75 de droits de douane pour chaque litre supplémentaire ainsi que la TVA sur la valeur du carburant.",
    fuelAndRepairsText3: "Frais de réparation et d'entretien",
    fuelAndRepairsText4:
      "Si la franchise-valeur de 300 francs est dépassée, vous devrez vous acquitter de la TVA pour tous les frais de réparation et d'entretien occasionnés (réparation de véhicules, d'appareils électroniques, de meubles, de bijoux, etc.). Vous trouverez de plus amples informations à ce sujet dans la rubrique suivante:",
    fuelAndRepairsText5: 'Franchise-valeur de 300 francs',
  },

  entryByTrain: {
    entryByTrainMainText: 'Entrée en Suisse par voie ferroviaire',
    entryByTrainText1:
      "Si du personnel douanier se trouve dans le train, vous devez déclarer spontanément en vue du traitement douanier toutes les marchandises que vous transportez. Avant de franchir la frontière, vous pouvez également dédouaner au moyen de l'application QuickZoll les marchandises destinées à votre usage privé ou à être offertes en cadeau. Ces déclarations lient leur auteur.",
    entryByTrainText2:
      "Si aucun personnel douanier ne se trouve dans le train et si vous ne souhaitez pas dédouaner les marchandises avec l'application QuickZoll, vous pouvez",
    entryByTrainText3:
      "sortir du train à la gare frontière et déclarer par écrit vos marchandises privées (dépôt d'une autodéclaration écrite dans une boîte à déclarations), ou",
    entryByTrainText4:
      "déclarer vos marchandises a posteriori, dans un délai de 7 jours, auprès de n'importe quel bureau de douane, durant les heures d'ouverture de ce dernier.",
    entryByTrainText5:
      'Veuillez noter que, dans certains trains régionaux, vous pouvez transporter uniquement des marchandises privées:',
    entryByTrainText6:
      'qui ne sont soumises à aucune redevance dans le cadre des franchises quantitatives et de la franchise-valeur de 300 francs, ou',
    entryByTrainText7: "que vous avez dédouanées avec l'application QuickZoll.",
    entryByTrainText8:
      'Dans les deux cas, les marchandises ne doivent être soumises à aucune restriction ni interdiction et ne doivent être assujetties à aucun certificat ni permis.',
    entryByTrainText9:
      'Veuillez prêter attention aux inscriptions ad hoc figurant sur le train ou aux annonces faites par haut-parleur.',
  },

  forgery: {
    forgeryMainText: 'Contrefaçons',
    forgeryText1:
      "Il est interdit d'importer des contrefaçons d'articles de marque et d'articles protégés par le droit des designs. La douane suisse est tenue de confisquer ces contrefaçons et de les détruire. Il importe peu que les biens en question soient neufs ou usagés",
    forgeryText2: "Acheter des bijoux et des montres à l'étranger",
    forgeryText3:
      "Soyez prudent lorsque vous achetez des bijoux ou des montres: souvent, les contrôles révèlent que ce que l'on prenait pour une bonne affaire est en fait une marchandise de qualité médiocre ou même une contrefaçon.",
    forgeryText4: 'Identifier les contrefaçons de bijoux et de montres',
    forgeryText5:
      "Même un bijou vendu à un prix élevé peut se révéler être une contrefaçon. Une indication de titre ne garantit pas que la marchandise est authentique. N'achetez des bijoux et des montres que dans des commerces spécialisés reconnus.",
    forgeryText6:
      "Vous trouverez davantage d'informations sur le piratage de produits et les contrefaçons d'articles de marque sur STOP PIRACY, la plateforme suisse de lutte contre la contrefaçon et la piraterie:",
  },

  cash: {
    cashMainText: 'Argent liquide',
    cashText1:
      "Lors de l'importation, du transit et de l'exportation d'argent liquide (espèces, papiers-valeurs, etc.) d'une valeur supérieure à 10 000 francs, vous devez fournir sur demande des renseignements au sujet de l'origine, de l'affectation prévue et de l'ayant droit économique de cet argent.",
    cashText2:
      "D'autres mesures de lutte contre la criminalité sont réservées.",
  },

  food: {
    foodMainText: 'Restrictions applicables aux denrées alimentaires',
    foodText1:
      "Les marchandises d'origine animale provenant des États de l'UE, d'Islande ou de Norvège et destinées à l'usage privé peuvent être importées sans contrôle par le vétérinaire de frontière. Il est interdit de les mettre en vente.",
    foodText2:
      "L'importation de marchandises d'origine animale en provenance d'autres États est en principe interdite.",
    foodText3:
      "Vous trouverez les exceptions prévues pour certaines denrées alimentaires sur le site Internet de l'OSAV: Denrées alimentaires dans le trafic voyageurs à titre privé.",
    foodText4:
      'Restrictions supplémentaires applicables aux espèces animales protégées',
    foodText5:
      "L'importation de marchandises d'origine animale produites à partir d'espèces animales protégées est interdite, quel que soit l'État de provenance. Dans le trafic touristique, il existe une tolérance d'importation de 125 g par jour et par personne pour le caviar d'esturgeon.",
    foodText6: 'Droits de douane et TVA',
    foodText7:
      'Si la franchise-valeur de 300 francs ou les franchises quantitatives applicables à certaines denrées alimentaires sont dépassées, vous devrez payer la TVA et/ou les droits de douane correspondants. Vous trouverez de plus amples informations à ce sujet dans les rubriques suivantes:',
    foodText8: 'Franchise-valeur de 300 francs',
    foodText9:
      'Franchises quantitatives: denrées alimentaires, alcool et tabac',
  },

  authorisationRequirements: {
    authorisationRequirementsMainText:
      'Assujettissement à une autorisation / restrictions',
    authorisationRequirementsText1:
      "L'importation de certaines marchandises est soumise à des restrictions et n'est possible qu'à certaines conditions (par ex. moyennant une autorisation préalable). Certains produits sont même frappés d'une interdiction absolue d'importation.",
    authorisationRequirementsText2:
      'Les marchandises ci-après sont en particulier soumises à ces restrictions (liste non exhaustive):',
    authorisationRequirementsText3:
      'armes (par ex. armes à feu, couteaux, appareils à électrochocs, sprays lacrymogènes, matraques, etc.);',
    authorisationRequirementsText4: 'détecteurs de radar;',
    authorisationRequirementsText5: 'stupéfiants;',
    authorisationRequirementsText6:
      'médicaments en quantité supérieure au besoin mensuel; ',
    authorisationRequirementsText7: 'produits de dopage;',
    authorisationRequirementsText8:
      "marchandises contenant des représentations d'actes de violence;",
    authorisationRequirementsText9:
      'marchandises contenant des scènes pornographiques interdites;',
    authorisationRequirementsText10:
      "contrefaçons d'articles de marque ou d'articles protégés par le droit des designs, copies pirates;",
    authorisationRequirementsText11: 'biens culturels.',
  },

  purchasesOnlineOffline: {
    purchasesOnlineOfflineMainText:
      'Achats effectués sur Internet, envois expédiés par poste ou par courrier rapide',
    purchasesOnlineOfflineText1:
      "Les envois en provenance de l'étranger sont en principe soumis aux droits de douane et à la TVA. Ci-après, nous vous indiquons comment vous pouvez estimer les frais engendrés et ce dont vous devez tenir compte à l'importation.",
    purchasesOnlineOfflineText2:
      "Veuillez noter qu'il n'est pas possible de faire un calcul définitif, car nous ne connaissons pas à l'avance les frais réclamés par les entreprises de transport (par ex. la Poste). En général, ceux-ci sont facturés au destinataire en même temps que les droits de douane et les autres impôts (par ex. TVA). Veuillez vous informer à ce sujet auprès de l'entreprise de transport concernée.",
    purchasesOnlineOfflineText3:
      "Les cadeaux envoyés par des particuliers domiciliés à l'étranger à des particuliers résidant en Suisse sont admis en franchise si leur valeur ne dépasse pas 100 francs. Cette règle ne s'applique toutefois pas aux tabacs manufacturés et aux boissons alcooliques. L'expéditeur doit obligatoirement apposer une mention appropriée sur la face extérieure du paquet ou de la lettre.",
    purchasesOnlineOfflineText4:
      'Exemple de calcul de la valeur imposable de la marchandise',
    purchasesOnlineOfflineText5:
      "Vous avez commandé un aspirateur à main sur une boutique en ligne allemande. Le prix d'achat est de 150 euros (montant net sans TVA étrangère). Pour l'expédition en Suisse, vous devez payer 12.50 euros en plus. Votre paiement total sur la boutique en ligne s'élève à 162.50 euros.",
    purchasesOnlineOfflineText6:
      'Montant total facturé par la boutique en ligne ',
    purchasesOnlineOfflineText7: 'Montant en francs: 198.25',
    purchasesOnlineOfflineText8:
      'Remarque: 162.50 euros convertis en francs au taux de 1.22',
    purchasesOnlineOfflineText9:
      'Frais facturés par la Poste pour la déclaration en douane ',
    purchasesOnlineOfflineText10: 'Montant en francs: 17.95',
    purchasesOnlineOfflineText11:
      "Frais facturés par la Poste pour l'ouverture de l'envoi",
    purchasesOnlineOfflineText12: 'Montant en francs: 13.00',
    purchasesOnlineOfflineText13:
      "L'expéditeur n'a pas apposé sur la face extérieure du paquet une désignation suffisante du contenu, raison pour laquelle la Poste a dû ouvrir le paquet pour le dédouanement.",
    purchasesOnlineOfflineText14: 'Valeur imposable totale de la marchandise',
    purchasesOnlineOfflineText15: 'Montant en francs: 229.00',
    purchasesOnlineOfflineText16:
      'La TVA est calculée sur la base de ce montant (sans les centimes).',
    purchasesOnlineOfflineText17:
      'Veuillez noter que cet exemple présente un calcul général effectué pour des marchandises admises en franchise de droits de douane.',
  },

  information: {
    informationTitle: 'Informations utiles',
    informationSubCategoryTitle: 'Je transporte des marchandises',
    customsProceduresMainText: 'Marche à suivre lors du passage à la douane',
    travelDocumentsMainText: 'Documents de voyage',
    declarationMainText: 'Je transporte des marchandises',
    animalsAndPlantsMainText: 'Je transporte des animaux ou des plantes',
    vehiclesMainText: 'Je voyage avec un véhicule',
    entryByTrainMainText: 'Entrée en Suisse par voie ferroviaire',
    prohibitionsAndRestrictionsMainText: 'Interdictions et restrictions',
    vatAllowanceMainText: 'Franchise-valeur de 300 francs',
    dutyAllowanceMainText:
      'Franchises quantitatives: denrées alimentaires, alcool et tabac',
    personalEffectsMainText: 'Effets personnels et dispositions de voyage',
    foreignVatMainText: 'Remboursement de la TVA étrangère',
    animalsMainText: 'Animaux: animaux domestiques, chiens, chats et chevaux',
    plantsMainText: 'Plantes',
    souvenirsAndSpeciesProtectionMainText:
      'Souvenirs et protection des espèces (CITES)',
    highwayVignetteMainText: 'Vignette autoroutière',
    roadTaxMainText:
      'Redevance sur le trafic routier applicable aux véhicules de plus de 3,5 tonnes (RPLF)',
    fuelAndRepairsMainText: 'Carburant et réparation',
    forgeryMainText: 'Contrefaçons',
    cashMainText: 'Argent liquide',
    foodMainText: 'Restrictions applicables aux denrées alimentaires',
    authorisationRequirementsMainText:
      'Assujettissement à une autorisation / restrictions',
    purchasesOnlineOfflineMainText:
      'Achats effectués sur Internet, envois expédiés par poste ou par courrier rapide',
    borderCrossingsMainText: 'Passages frontaliers',
  },
  appInformation: {
    appInfoTitle: "Informations relatives à l'application",
    leftTabText: 'Impressum',
    rightTabText: 'Développement',
    publisher: 'Édition',
    customsAdministrationAddressTitle:
      'Administration fédérale des douanes AFD',
    contact: 'Contact',
    customsInfoCenter: 'Centrale de renseignement de la douane',
    generalCustomsDirectorate:
      'Monbijoustrasse 40\n3003 Bern\nhttp://www.ezv.admin.ch',
    designAndDevelopment: 'Conception et développement',
    ambriteAddress:
      'St. Gallerstrasse 49\n9100 Herisau\nSwitzerland\n\ninfo@ambrite.ch\nhttp://www.ambrite.ch',
    disclaimerTitle: 'Avis de non-responsabilité',
    disclaimerText:
      'Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich.',
    toContactForm: '',
  },
  legalNoticeInformation: {
    navigationHeaderTitle:
      'Informations relatives à l’utilisation de QuickZoll',
    conditions: 'Conditions-cadres',
    importantSoon: "L'essentiel en bref",
    importantSoonText1:
      "L'App peut être utilisée en mode offline à l'exception du module de paiement.",
    importantSoonText2:
      "Vous ne pouvez entrer en Suisse qu'une fois par jour civil avec des marchandises que vous avez dédouanées avec QuickZoll.",
    importantSoonText3:
      'Vous ne pouvez utiliser QuickZoll que pour les marchandises que vous importez pour votre usage privé ou pour en faire cadeau.',
    importantSoonText4:
      "En utilisant QuickZoll, vous acceptez que le taux de TVA de 7,7% soit également appliqué aux marchandises qui sont soumises au taux réduit (2,5 %), telles que par exemple les denrées alimentaires, les aliments pour animaux, les médicaments et les livres. Si vous souhaitez que le taux réduit soit appliqué, vous devez déclarer verbalement les marchandises à un passage frontière occupé par du personnel de l'Administration fédérale des douanes (AFD).",
    importantSoonText5:
      'Les redevances ne peuvent être payées que par carte de crédit (Visa, Mastercard). Les marchandises sont dédouanées une fois que les redevances ont été payées.',
    importantSoonText6:
      'Le dédouanement peut être effectué au plus tôt 48 heures avant le franchissement de la frontière et doit avoir lieu au plus tard au point de passage frontalier.',
    importantSoonText7:
      "À l'issue du dédouanement avec QuickZoll, vous pouvez entrer en Suisse par tous les passages frontières officiels, indépendamment du fait qu'ils soient occupés ou non par du personnel de l'AFD. Dans les aéroports, vous pouvez emprunter la voie verte.",
    importantSoonText8:
      "La quittance doit être présentée sur demande au personnel de l'AFD. Celui-ci la photographie si nécessaire.",
    importantSoonText9:
      "Il n'est pas nécessaire de s'enregistrer. Aucune donnée n'est collectée.",
    importantSoonBoldText1:
      "Les redevances payées avec l'application ne sont pas remboursées.",

    howToDeclareYourGoods: 'Marche à suivre pour dédouaner vos marchandises:',
    howToDeclareYourGoodsText1:
      "Déclarez toutes les marchandises que vous transportez (à l'exception des effets personnels et des provisions de voyage). Les franchises quantitatives et les franchises-valeur auxquelles vous avez droit seront déduites automatiquement lors du dé-douanement.",
    howToDeclareYourGoodsText2:
      'Saisissez la valeur en devise étrangère figurant sur le justificatif de paiement. Celle-ci sera convertie en francs selon le taux de change (vente) de la veille (dernier jour ouvrable).',
    howToDeclareYourGoodsText3:
      "Définissez un délai de deux heures pour vous permettre de franchir la frontière. La quittance établie n'est valable que pendant ce délai. Si vous ne pouvez pas respecter le délai choisi, vous devez vous rendre à un passage frontière occupé par du personnel de l'AFD et expliquer pourquoi vous n'avez pas pu entrer en Suisse dans le délai de validité de la quittance. En l'absence de justification crédible, les redevances seront perçues une nouvelle fois.",
    howToDeclareYourGoodsTextBold3: '',
    howToDeclareYourGoodsText3a: '',
    howToDeclareYourGoodsText4:
      'Toutes les personnes pour lesquelles la quittance est valable doivent entrer ensemble en Suisse.',
    howToDeclareYourGoodsText5:
      "Vous pouvez corriger votre déclaration à tout moment avant le paiement. Après le paiement, vous ne pouvez plus effectuer aucune correction dans QuickZoll. Vous devez déclarer à un passage frontière occupé par du personnel de l'AFD les marchandises étrangères supplémentaires achetées après le paiement.",
    howToDeclareYourGoodsText6:
      "Il est nécessaire d'être connecté à Internet pour mener à bien l'opération de paiement. S'il n'est pas possible d'effectuer le dédouanement à l'aide de QuickZoll (par ex. absence de connexion à Internet ou impossibilité de payer les redevances avec une carte de crédit), vous devez déclarer les marchandises auprès d'un passage frontière occupé par du personnel de l'AFD ou par l'intermédiaire d'une boîte à déclarations.",
    howToDeclareYourGoodsText7:
      'Assurez-vous de pouvoir afficher la quittance sur votre terminal mobile en cas de contrôle lors du franchissement de la frontière. Veuillez noter que pendant le délai de validité de la quittance, une image de celle-ci transmise à des tiers par WhatsApp, iMessage, SMS ou courriel ne sera pas acceptée comme quittance. Vous devez conserver pendant au moins un an la quittance reçue.',

    specialCases: 'Cas particuliers',
    specialCasesText1:
      "Les marchandises suivantes ne peuvent pas être dédouanées avec QuickZoll. Vous devez dans tous les cas les déclarer auprès d'un <1>passage frontière</1> occupé par du personnel de l'AFD:",
    specialCasesText2:
      'les marchandises soumises à des restrictions ou des interdictions et les marchandises assujetties à un certificat ou un permis (par ex. armes, animaux vivants et marchandises soumises aux dispositions sur la conservation des espèces);',
    specialCasesText3: 'informations complémentaires',
    specialCasesText4:
      "les marchandises d'une valeur totale supérieure ou égale à 20'000 francs qui sont destinées à l'usage privé ou à être offertes en cadeau;",
    specialCasesText5:
      'les marchandises que vous souhaitez déclarer au taux de TVA réduit;',
    specialCasesText6:
      "les marchandises que vous n'importez ni pour votre usage privé ni pour en faire cadeau (par ex. marchandises destinées au commerce);",
    specialCasesText7:
      'les véhicules, les réparations de véhicule et les carburants;',
    specialCasesText8:
      'les effets de déménagement, les trousseaux de mariage et les effets de succession;',
    specialCasesText9:
      'les marchandises qui ne sont importées que temporairement en Suisse;',
    specialCasesText10: 'les marchandises destinées à transiter par la Suisse;',
    specialCasesText11:
      "les marchandises qui sont exportées de Suisse et pour lesquelles vous avez besoin d'une attestation d'exportation",
    specialCasesText12:
      '(vous trouverez ici des informations relatives au remboursement de la TVA suisse et aux achats effectués en Suisse en franchise de redevances).',

    legal: 'Informations juridiques',
    usage: 'Utilisation',
    legalText1:
      "Le dédouanement effectué avec l'application lie la personne assujettie à l'obligation de déclarer (art. 33 de la loi sur les douanes; RS 631.0). Vous êtes donc punissable si vous omettez de déclarer ou déclarez de façon inexacte des marchandises prohibées, soumises à un permis ou soumises à des redevances.",
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
    "Lors de l'accès à QuickZoll, les données et les informations sur le système d'exploitation et le navigateur ne sont pas enregistrées. Les données nécessaires au processus de paiement sont traitées par SIX. Pour toute question relative au processus de paiement, veuillez vous adresser directement à SIX.",
    dataProtectionText2: '',
    dataProtectionText3: '',
    dataProtectionText4: '',
    dataProtectionText5: '',
    liability: 'Responsabilité',
    liabilityText1:
    "L'AFD se réserve expressément le droit de modifier en partie ou en totalité le contenu de l'application ou de le supprimer, et ce à tout moment.",
      liabilityText2:
      "L'AFD ne saurait être tenue pour responsable des dommages matériels ou immatériels qui pourraient être causés par l'utilisation de l'application, par des problèmes techniques, par le mauvais usage de QuickZoll ou pour d'autres raisons.",
      culpability: 'Punissabilité',
    culpabilityText1:
    "Déclarez les marchandises de manière complète et correcte. Les marchandises interdites ou assujetties à un permis ne peuvent pas être déclarées. Le dédouanement avec QuickZoll est contraignant (art. 33 de la loi sur les douanes, LD; RS 631.0). Quiconque déclare des marchandises de manière incomplète ou incorrecte ou déclare des marchandises interdites ou assujetties à un permis est punissable (art. 118 et 127 LD).",

    referencesAndLinks: 'Renvois et liens',
    referencesAndLinksText1:
    "Les renvois et liens vers des sites web de tiers ne sont pas de la responsabilité des autorités fédérales. L'accès à ces sites et leur utilisation se font aux risques des utilisateurs. Les autorités fédérales déclarent expressément qu'elles n'ont aucune influence sur la forme, le contenu et les offres des sites auxquels elles renvoient. Les informations et services offerts par ces sites sont entièrement de la responsabilité de leurs auteurs.",
    referencesAndLinksText2:
    "Les autorités fédérales rejettent toute responsabilité pour de tels sites web.",

    copyright: "Droits d'auteur",
    copyrightText1:
    "Droits d'auteur: Confédération Suisse, AFD, 2018.",

      copyrightText2:
     "Les informations que recèlent les sites web des autorités fédérales sont mises à la disposition du public. Le téléchargement ou la copie de textes, d'illustrations, de photographies ou d'autres données n'entraîne aucun transfert de droits sur les contenus.",

      copyrightText3:
      "Les droits d'auteur et tous les autres droits liés aux textes, illustrations, photographies et autres données placés sur les sites web des autorités fédérales sont leur propriété exclusive ou celle des détenteurs expressément cités. Toute reproduction est subordonnée à l'autorisation écrite préalable des détenteurs des droits.",
  },
  overview: {
    declared: 'saisi',
    dutyFree: 'en franchise',
    details: 'détails',
  },
  legalNoticeModal: {
    importantNote: 'Remarque importante',
    vatRateInfo: 'Veuillez noter que',
    vatRateInfoText1:
      "vous ne pouvez entrer en Suisse qu'une fois par jour civil avec des marchandises que vous avez dédouanées avec QuickZoll;",
    vatRateInfoText2:
      'les marchandises déclarées sont dédouanées au taux unique de TVA de 7,7 %;',
    vatRateInfoText3:
      "les redevances payées avec l'application ne sont pas remboursées.",
    vatRateInfoText4: 'Vous trouverez de plus amples informations ici:',
    termsOfService: 'Termes et Conditions',
    acceptance: "J'accepte les termes et conditions que j'ai lus et compris.",
    confirm: 'Confirmer',
    abort: 'Abandonner',
  },
  furtherInformationModal: {
    furtherInformation: "Plus d'informations:",
    acceptance:
      'En utilisant QuickZoll, vous acceptez que le taux de TVA de 7,7 % soit également appliqué aux marchandises qui sont soumises au taux réduit (2,5 %), telles que par exemple les denrées alimentaires, les aliments pour animaux, les médicaments et les livres. Si vous souhaitez que le taux réduit soit appliqué, vous devez déclarer verbalement les marchandises à un passage frontière occupé.',
  },
  updateTheApp: {
    title: 'Nouvelle version disponible!',
    subtitle:
      "Veuillez mettre à jour QuickZoll. La nouvelle version est maintenant disponible dans l'App Store.",
    buttonTextAndroid: 'Dans Play Store',
    buttonTextIos: "Dans l'App Store",
  },
  SuccessfulPayment: {
    title:
      'Merci! Nous avons reçu votre paiement et vous souhaitons un bon voyage!',
    navigationHeaderTitle: 'Paiement réussi',
  },
  units: {
    kilo: 'kg',
    kilo_plural: 'kg',
    kiloOrLiter: 'kg/litre',
    kiloOrLiter_plural: 'kg/litres',
    liter: 'litre',
    liter_plural: 'litres',
    unit: 'unité',
    unit_plural: 'unités',
    gram: 'gramme',
    gram_plural: 'grammes',
  },
  acceptRateModal: {
    modalTitle: 'TVA de 7.7%',
    modalSubTitle:
      'Je confirme accepter le taux unique de TVA de 7.7% pour le dédouanement des marchandises.',
    confirm: 'Reprendre',
  },
};
