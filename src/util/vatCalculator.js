import { VAT_RATES } from '../constants/basket';
import { CATEGORIES } from '../constants/categories';

// sort from highest tax rates to lowest tax rates
const sortedCategories = Object.keys(VAT_RATES).sort((cat1, cat2) => {
  if (VAT_RATES[cat1] > VAT_RATES[cat2]) {
    return -1;
  }
  if (VAT_RATES[cat1] < VAT_RATES[cat2]) {
    return 1;
  }
  return 0;
});

// array of tax rates in same order as sortedCategories
const categoryTaxRates = sortedCategories.map(cat => VAT_RATES[cat]);

// tax-free allowance for a single person
const INDIVIDUAL_ALLOWANCE = 300;

export const vatCalculator = (basket, numberPersons) => {
  // All high item values are taxed, so just multiply values by tax rates.
  const highItemVatObject = {};
  sortedCategories.forEach(cat => {
    highItemVatObject[cat] = basket[cat].totalHighItemValue * VAT_RATES[cat];
  });

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
      vatObject[cat] = vatArray[i] + highItemVatObject[cat];
    });

    return vatObject;
  } else {
    return;
  }
};
