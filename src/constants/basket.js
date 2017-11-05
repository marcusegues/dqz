// @flow
import { CATEGORIES, CATEGORIES_LIST } from './categories';
import type {
  CategoryName,
  CategoryInfo,
  CategoriesInfo,
  VatRates,
  Basket,
} from '../types/basket';

// null unit means it's zollfrei
export const CATEGORIES_INFO: CategoriesInfo = {
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
  [CATEGORIES.OTHER_GOODS]: {
    name: 'Sonstige Waren',
    unit: null,
    icon: 'cigarette',
  },
};

// any changes to the vat rates go here
export const VAT_RATES: VatRates = {
  [CATEGORIES.MEAT_AND_MEAT_PRODUCTS]: 0.025,
  [CATEGORIES.BUTTER_OR_CREAM]: 0.025,
  [CATEGORIES.OILS_FATS_MARGARINE]: 0.025,
  [CATEGORIES.OTHER_FOODS]: 0.025,
  [CATEGORIES.ALCOHOL_BELOW_18]: 0.08,
  [CATEGORIES.ALCOHOL_ABOVE_18]: 0.08,
  [CATEGORIES.CIGARETTES_AND_CIGARS]: 0.08,
  [CATEGORIES.OTHER_TOBACCO]: 0.08,
  [CATEGORIES.MEDICINE]: 0.025,
  [CATEGORIES.BOOKS]: 0.025,
  [CATEGORIES.MAGAZINES]: 0.025,
  [CATEGORIES.FLOWERS_AND_PLANTS]: 0.025,
  [CATEGORIES.ANIMAL_FEED]: 0.025,
  [CATEGORIES.FERTILIZER]: 0.025,
  [CATEGORIES.OTHER_GOODS]: 0.08,
};

let emptyBasket: Basket = {};
CATEGORIES_LIST.forEach(category => {
  emptyBasket[category] = {
    quantity: 0,
    duty: 0,
    values: [],
  };
});

// export const emptyBasket: Basket = {
//   [CATEGORIES.MEAT_AND_MEAT_PRODUCTS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.BUTTER_OR_CREAM]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.OILS_FATS_MARGARINE]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.OTHER_FOODS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.ALCOHOL_BELOW_18]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.ALCOHOL_ABOVE_18]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.CIGARETTES_AND_CIGARS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.OTHER_TOBACCO]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.MEDICINE]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.BOOKS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.MAGAZINES]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.FLOWERS_AND_PLANTS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.ANIMAL_FEED]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.FERTILIZER]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
//   [CATEGORIES.OTHER_GOODS]: {
//     quantity: 0,
//     duty: 0,
//     values: [],
//   },
// };
