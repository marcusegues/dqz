export const mainCategories = {
  FOODS: 'Lebensmittel',
  ALCOHOL: 'Alkohol',
  TOBACCO: 'Tabak',
  OTHER: 'Anderes',
};

// null unit means it's zollfrei
export const CATEGORIES = {
  MEAT_AND_MEAT_PRODUCTS: {
    name: 'Fleisch und Fleischzubereitung',
    unit: 'kg',
    icon: 'meat',
  },
  BUTTER_OR_CREAM: {
    name: 'Butter und Rahm',
    unit: 'kg/Liter',
    icon: 'butter',
  },
  OILS_FATS_MARGARINE: {
    name: 'Öle, Fette, Margarine zu Speisezwecken',
    unit: 'kg/Liter',
    icon: 'oil',
  },
  OTHER_FOODS: {
    name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
    unit: 'kg/Liter',
    icon: 'oil',
  },
  ALCOHOL_BELOW_18: {
    name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
    unit: 'Liter',
    icon: 'beer',
  },
  ALCOHOL_ABOVE_18: {
    name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
    unit: 'Liter',
    icon: 'vodka',
  },
  CIGARETTES_AND_CIGARS: {
    name: 'Zigaretten/Zigarren',
    unit: 'Stück',
    icon: 'cigarette',
  },
  OTHER_TOBACCO: {
    name: 'Andere Tabakfabrikate',
    unit: 'Gramm',
    icon: 'cigarette',
  },
  MEDICINE: {
    name: 'Medikamente',
    unit: null,
    icon: 'cigarette',
  },
  BOOKS: {
    name: 'Bucher',
    unit: null,
    icon: 'cigarette',
  },
  MAGAZINES: {
    name: 'Zeitschriften',
    unit: null,
    icon: 'cigarette',
  },
  FLOWERS_AND_PLANTS: {
    name: 'Schnittblumen & Pflanzen',
    unit: null,
    icon: 'cigarette',
  },
  ANIMAL_FEED: {
    name: 'Tierfutter',
    unit: null,
    icon: 'cigarette',
  },
  FERTILIZER: {
    name: 'Dunger',
    unit: null,
    icon: 'cigarette',
  },
};

const emptyBasket = {};
Object.keys(CATEGORIES).forEach(subCategory => {
  emptyBasket[subCategory.name] = {
    quantity: 0,
    duty: 0,
    values: [],
  };
});

// export const emptyBasket;
