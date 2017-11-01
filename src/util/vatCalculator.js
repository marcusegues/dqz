// import { categories } from './../constants/basket';

// var categories = require('./../constants/basket').categories;

const categories = {
  MEAT_AND_MEAT_PRODUCTS: 'Fleisch und Fleischzubereitung',
  BUTTER_OR_CREAM: 'Butter und Rahm',
  OILS_FATS_MARGARINE: 'Öle, Fette, Margarine zu Speisezwecken',
  ALCOHOL_BELOW_18: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
  ALCOHOL_ABOVE_18: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
  CIGARETTES_AND_CIGARS: 'Zigaretten/Zigarren',
  OTHER_TOBACCO: 'Andere Tabakfabrikate',
};

const vatRates = {
  [categories.MEAT_AND_MEAT_PRODUCTS]: 0.025,
  [categories.BUTTER_OR_CREAM]: 0.025,
  [categories.OILS_FATS_MARGARINE]: 0.025,
  [categories.ALCOHOL_BELOW_18]: 0.08,
  [categories.ALCOHOL_ABOVE_18]: 0.08,
  [categories.CIGARETTES_AND_CIGARS]: 0.08,
  [categories.OTHER_TOBACCO]: 0.08,
};

const sortedCategories = Object.keys(vatRates).sort((cat1, cat2) => {
  if (vatRates[cat1] > vatRates[cat2]) {
    return -1;
  }
  if (vatRates[cat1] < vatRates[cat2]) {
    return 1;
  }
  return 0;
});

const categoryTaxRates = sortedCategories.map(cat => vatRates[cat]);

const INDIVIDUAL_ALLOWANCE = 300;

const vatCalculator = (basket, numberPersons) => {
  const categoryValues = sortedCategories.map(cat => basket[cat].totalValue);
  const allowance = numberPersons * INDIVIDUAL_ALLOWANCE;
  const vatStart = allowance - INDIVIDUAL_ALLOWANCE;
  const categoryAccValues = [];
  categoryValues.reduce((acc, val) => {
    categoryAccValues.push(acc + val);
    return acc + val;
  }, 0);
  const crossAllowance = categoryAccValues.findIndex(val => val > allowance);
  if (crossAllowance) {
    const crossVatStart = categoryAccValues.findIndex(val => val > vatStart);
    const taxableValues = [...categoryValues];
    for (let i = 0; i < crossVatStart; i++) {
      taxableValues[i] = 0;
    }
    taxableValues[crossVatStart] = categoryAccValues[crossVatStart] - vatStart;
    const vatArray = taxableValues.map(
      (value, i) => value * categoryTaxRates[i]
    );
    const vatObject = {};
    debugger;
    sortedCategories.forEach((cat, i) => {
      vatObject[cat] = vatArray[i];
    });
    return vatObject;
  } else {
    return;
  }
};

vatCalculator(
  {
    'Fleisch und Fleischzubereitung': { totalValue: 40 * 1.19 },
    'Butter und Rahm': { totalValue: 20 * 1.19 },
    'Öle, Fette, Margarine zu Speisezwecken': { totalValue: 350 * 1.19 },
    'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.': { totalValue: 0 },
    'Alkoholische Getränke, Alkoholgehalt über 18% Vol.': {
      totalValue: 250 * 1.19,
    },
    'Zigaretten/Zigarren': { totalValue: 0 },
    'Andere Tabakfabrikate': { totalValue: 0 },
  },
  2
);

module.exports = vatCalculator;
