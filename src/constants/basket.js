export const CATEGORIES = {
  MEAT_AND_MEAT_PRODUCTS: 'MEAT_AND_MEAT_PRODUCTS',
  BUTTER_OR_CREAM: 'BUTTER_OR_CREAM',
  OILS_FATS_MARGARINE: 'OILS_FATS_MARGARINE',
  OTHER_FOODS: 'OTHER_FOODS',
  ALCOHOL_BELOW_18: 'ALCOHOL_BELOW_18',
  ALCOHOL_ABOVE_18: 'ALCOHOL_ABOVE_18',
  CIGARETTES_AND_CIGARS: 'CIGARETTES_AND_CIGARS',
  OTHER_TOBACCO: 'OTHER_TOBACCO',
  MEDICINE: 'MEDICINE',
  BOOKS: 'BOOKS',
  MAGAZINES: 'MAGAZINES',
  FLOWERS_AND_PLANTS: 'FLOWERS_AND_PLANTS',
  ANIMAL_FEED: 'ANIMAL_FEED',
  FERTILIZER: 'FERTILIZER',
};

export const mainCategories = {
  FOODS: 'Lebensmittel',
  ALCOHOL: 'Alkohol',
  TOBACCO: 'Tabak',
  OTHER: 'Anderes',
};

// null unit means it's zollfrei
export const CATEGORIES_INFO = {
  [CATEGORIES.MEAT_AND_MEAT_PRODUCTS]: {
    name: 'Fleisch und Fleischzubereitung',
    unit: 'kg',
    icon: 'meat',
  },
  [CATEGORIES.BUTTER_OR_CREAM]: {
    name: 'Butter und Rahm',
    unit: 'kg/Liter',
    icon: 'butter',
  },
  [CATEGORIES.OILS_FATS_MARGARINE]: {
    name: 'Öle, Fette, Margarine zu Speisezwecken',
    unit: 'kg/Liter',
    icon: 'oil',
  },
  [CATEGORIES.OTHER_FOODS]: {
    name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
    unit: 'kg/Liter',
    icon: 'oil',
  },
  [CATEGORIES.ALCOHOL_BELOW_18]: {
    name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
    unit: 'Liter',
    icon: 'beer',
  },
  [CATEGORIES.ALCOHOL_ABOVE_18]: {
    name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
    unit: 'Liter',
    icon: 'vodka',
  },
  [CATEGORIES.CIGARETTES_AND_CIGARS]: {
    name: 'Zigaretten/Zigarren',
    unit: 'Stück',
    icon: 'cigarette',
  },
  [CATEGORIES.OTHER_TOBACCO]: {
    name: 'Andere Tabakfabrikate',
    unit: 'Gramm',
    icon: 'cigarette',
  },
  [CATEGORIES.MEDICINE]: {
    name: 'Medikamente',
    unit: null,
    icon: 'cigarette',
  },
  [CATEGORIES.BOOKS]: {
    name: 'Bucher',
    unit: null,
    icon: 'cigarette',
  },
  [CATEGORIES.MAGAZINES]: {
    name: 'Zeitschriften',
    unit: null,
    icon: 'cigarette',
  },
  [CATEGORIES.FLOWERS_AND_PLANTS]: {
    name: 'Schnittblumen & Pflanzen',
    unit: null,
    icon: 'cigarette',
  },
  [CATEGORIES.ANIMAL_FEED]: {
    name: 'Tierfutter',
    unit: null,
    icon: 'cigarette',
  },
  [CATEGORIES.FERTILIZER]: {
    name: 'Dunger',
    unit: null,
    icon: 'cigarette',
  },
};

const emptyBasket = {};
Object.keys(CATEGORIES).forEach(category => {
  emptyBasket[category] = {
    quantity: 0,
    duty: 0,
    values: [],
  };
});

export { emptyBasket };
