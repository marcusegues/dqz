// @flow
import { VAT_RATES } from '../constants/basket';
import { CATEGORIES, CATEGORIES_LIST } from '../constants/categories';
import type { CategoryName, CategoriesList } from '../types/basket';
import type {
  VatCalculatorBasket,
  VatByCategory,
} from '../types/vatCalculator';

// sort from highest tax rates to lowest tax rates
const sortedCategories: CategoriesList = CATEGORIES_LIST.sort(
  (cat1: CategoryName, cat2: CategoryName): number => {
    if (VAT_RATES[cat1] > VAT_RATES[cat2]) {
      return -1;
    }
    if (VAT_RATES[cat1] < VAT_RATES[cat2]) {
      return 1;
    }
    return 0;
  }
);

// array of tax rates in same order as sortedCategories
const categoryTaxRates: Array<number> = sortedCategories.map(
  (cat: CategoryName): number => VAT_RATES[cat]
);

// tax-free allowance for a single person
const INDIVIDUAL_ALLOWANCE: number = 300;

export const vatCalculator = (
  basket: VatCalculatorBasket,
  numberPersons: number
): VatByCategory => {
  // All high item values are taxed, so just multiply values by tax rates.
  const highItemVatObject: VatByCategory = {};
  sortedCategories.forEach((cat: CategoryName): void => {
    highItemVatObject[cat] = basket[cat].totalHighItemValue * VAT_RATES[cat];
  });

  // array of sorted total values (excluding high value items) for each category
  const categoryValues: Array<number> = sortedCategories.map(
    (cat: CategoryName): number => basket[cat].totalValueExcludingHighItems
  );
  const allowance: number = numberPersons * INDIVIDUAL_ALLOWANCE;
  const vatStart: number = allowance - INDIVIDUAL_ALLOWANCE;

  // cumulative sum of total values
  const categoryAccValues: Array<number> = [];
  categoryValues.reduce((acc: number, val: number): number => {
    categoryAccValues.push(acc + val);
    return acc + val;
  }, 0);

  // return object
  const vatObject: VatByCategory = {};

  // check if the allowance was exceeded
  const crossAllowance: number = categoryAccValues.findIndex(
    (val: number): boolean => val > allowance
  );
  if (crossAllowance) {
    // index of category where the allowances end and the taxable part starts
    const crossVatStart: number = categoryAccValues.findIndex(
      (val: number): boolean => val > vatStart
    );

    // generate array of the taxable values. before crossVatStart the allowances
    // are applied (and since the arrays are ordered from highest to lowest tax rates
    // the allowances are allocated to the highest taxable categories). after
    // crossVatStart the entire value is taxable.
    const taxableValues: Array<number> = [...categoryValues];
    for (let i: number = 0; i < crossVatStart; i++) {
      taxableValues[i] = 0;
    }

    // for the category where the cumulative sum passes the vat start value (
    // indexed at crossVatStart) the taxable part of the value of the category
    // is only the part that starts at the vatStart value
    taxableValues[crossVatStart] = categoryAccValues[crossVatStart] - vatStart;

    // array of actual vat values by sorted categories
    const vatArray: Array<number> = taxableValues.map(
      (value: number, i: number): number => value * categoryTaxRates[i]
    );

    // put array of actual vat values into an object keyed by category
    // and return this object
    sortedCategories.forEach((cat: CategoryName, i: number): void => {
      vatObject[cat] = vatArray[i] + highItemVatObject[cat];
    });

    return vatObject;
  } else {
    // no vat to pay: return vat by category with all vat rates at zero
    sortedCategories.forEach((cat, i) => {
      vatObject[cat] = 0;
    });
    return vatObject;
  }
};
