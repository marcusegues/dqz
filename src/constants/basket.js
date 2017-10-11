export const categories = {
  MEAT_AND_MEAT_PRODUCTS: 'Fleisch und Fleischzubereitung',
  BUTTER_OR_CREAM: 'Butter und Rahm',
  OILS_FATS_MARGARINE: 'Öle, Fette, Margarine zu Speisezwecken',
  ALCOHOL_BELOW_18: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
  ALCOHOL_ABOVE_18: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
  CIGARETTES_AND_CIGARS: 'Zigaretten/Zigarren',
  OTHER_TOBACCO: 'Andere Tabakfabrikate',
};

export const emptyBasket = {
  [categories.MEAT_AND_MEAT_PRODUCTS]: {
    quantity: 0,
    unit: 'kg',
    duty: 0,
    values: [],
    icon: 'meat',
  },
  [categories.BUTTER_OR_CREAM]: {
    quantity: 0,
    unit: 'kg/Liter',
    duty: 0,
    values: [],
    icon: 'butter',
  },
  [categories.OILS_FATS_MARGARINE]: {
    quantity: 0,
    unit: 'kg/Liter',
    duty: 0,
    values: [],
    icon: 'oil',
  },
  [categories.ALCOHOL_BELOW_18]: {
    quantity: 0,
    unit: 'Liter',
    duty: 0,
    values: [],
    icon: 'beer',
  },
  [categories.ALCOHOL_ABOVE_18]: {
    quantity: 0,
    unit: 'Liter',
    duty: 0,
    values: [],
    icon: 'vodka',
  },
  [categories.CIGARETTES_AND_CIGARS]: {
    quantity: 0,
    unit: 'stück',
    duty: 0,
    values: [],
    icon: 'cigarette',
  },
  [categories.OTHER_TOBACCO]: {
    quantity: 0,
    unit: 'kg',
    duty: 0,
    values: [],
    icon: 'pipe',
  },
};
