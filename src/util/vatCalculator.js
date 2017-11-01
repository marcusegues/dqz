import { categories } from './../constants/basket';

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
    return 1;
  }
  if (vatRates[cat1] < vatRates[cat2]) {
    return -1;
  }
  return 0;
});

const categoryTaxRates = sortedCategories.map(cat => vatRates[cat]);

const INDIVIDUAL_ALLOWANCE = 300;

export const vatCalculator = (basket, numberPersons) => {
  const categoryValues = sortedCategories.map(cat => basket[cat].totalValue);
  const allowance = numberPersons * INDIVIDUAL_ALLOWANCE;
  const vatStart = allowance - INDIVIDUAL_ALLOWANCE;
  const categoryAccValues = categoryValues.reduce((acc, val) => acc + val, 0);
  const crossAllowance = categoryAccValues.findIndex(val => val > allowance);
  if (crossAllowance) {
    const crossVatStart = categoryAccValues.findIndex(val => val > vatStart);
    const taxableValues = [...categoryValues];
    for (let i = 0; i < crossVatStart; i++) {
      taxableValues[i] = 0;
    }
    taxableValues[crossVatStart] = taxableValues[crossVatStart] - vatStart;
    const vatArray = taxableValues.map(
      (value, i) => value * categoryTaxRates[i]
    );
    const vatObject = {};
    sortedCategories.forEach((cat, i) => {
      vatObject[cat] = vatArray[i];
    });
  } else {
    return;
  }
};
