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

// any changes to the vat rates go here
const vatRates = {
  [categories.MEAT_AND_MEAT_PRODUCTS]: 0.025,
  [categories.BUTTER_OR_CREAM]: 0.025,
  [categories.OILS_FATS_MARGARINE]: 0.025,
  [categories.ALCOHOL_BELOW_18]: 0.08,
  [categories.ALCOHOL_ABOVE_18]: 0.08,
  [categories.CIGARETTES_AND_CIGARS]: 0.08,
  [categories.OTHER_TOBACCO]: 0.08,
};

// sort from highest tax rates to lowest tax rates
const sortedCategories = Object.keys(vatRates).sort((cat1, cat2) => {
  if (vatRates[cat1] > vatRates[cat2]) {
    return -1;
  }
  if (vatRates[cat1] < vatRates[cat2]) {
    return 1;
  }
  return 0;
});

// array of tax rates in same order as sortedCategories
const categoryTaxRates = sortedCategories.map(cat => vatRates[cat]);

// tax-free allowance for a single person
const INDIVIDUAL_ALLOWANCE = 300;

const vatCalculator = (basket, numberPersons) => {
  // array of total values (excluding high value items) for each category
  const categoryValues = sortedCategories.map(cat => basket[cat].totalValue);

  const allowance = numberPersons * INDIVIDUAL_ALLOWANCE;
  const vatStart = allowance - INDIVIDUAL_ALLOWANCE;

  // cumulative sum of total values
  const categoryAccValues = [];
  categoryValues.reduce((acc, val) => {
    categoryAccValues.push(acc + val);
    return acc + val;
  }, 0);

  // check if the allowance was exceeded
  const crossAllowance = categoryAccValues.findIndex(val => val > allowance);
  if (crossAllowance) {
    // index of category where the allowances end and the taxable part starts
    const crossVatStart = categoryAccValues.findIndex(val => val > vatStart);

    // generate array of the taxable values. before crossVatStart the allowances
    // are applied (and since the arrays are ordered from highest to lowest tax rates
    // the allowances are allocated to the highest taxable categories). after
    // crossVatStart the entire value is taxable.
    const taxableValues = [...categoryValues];
    for (let i = 0; i < crossVatStart; i++) {
      taxableValues[i] = 0;
    }

    // for the category where the cumulative sum passes the vat start value (
    // indexed at crossVatStart) the taxable part of the value of the category
    // is only the part that starts at the vatStart value
    taxableValues[crossVatStart] = categoryAccValues[crossVatStart] - vatStart;

    // array of actual vat calculates values by category
    const vatArray = taxableValues.map(
      (value, i) => value * categoryTaxRates[i]
    );

    // put array of actual vat values into an object keyed by category
    // and return this object
    const vatObject = {};
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
    'Fleisch und Fleischzubereitung': { totalValue: 240 * 1.19 },
    'Butter und Rahm': { totalValue: 20 * 1.19 },
    'Öle, Fette, Margarine zu Speisezwecken': { totalValue: 0 },
    'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.': {
      totalValue: 30 * 1.19,
    },
    'Alkoholische Getränke, Alkoholgehalt über 18% Vol.': {
      totalValue: 450 * 1.19,
    },
    'Zigaretten/Zigarren': { totalValue: 0 },
    'Andere Tabakfabrikate': { totalValue: 0 },
  },
  1
);

module.exports = vatCalculator;
