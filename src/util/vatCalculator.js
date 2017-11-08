// @flow
import { VAT_RATES } from './constants/vat';
import type {
  List as ImmutableListType,
  Map as ImmutableMapType,
  OrderedMap as ImmutableOrderedMapType,
} from 'immutable';
import Immutable from 'immutable';
import { CATEGORIES, CATEGORIES_LIST } from '../constants/categories';
import type { CategoryName, CategoriesList } from '../types/basket';
import type {
  VatCalculatorBasket,
  VatByCategory,
} from '../types/vatCalculator';

// sort from highest tax rates to lowest tax rates
const sortedCategories: CategoriesList = CATEGORIES_LIST.sort(
  (cat1: CategoryName, cat2: CategoryName): number =>
    VAT_RATES[cat2] - VAT_RATES[cat1]
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
  // array of sorted total values (excluding high value items) for each category
  const categoryValues: Array<number> = sortedCategories.map(
    (cat: CategoryName): number => basket[cat].totalValueExcludingHighItems
  );
  console.log('SORTED CATEGORIES', sortedCategories);
  console.log('CATEGORY VALUES: ', categoryValues);

  const allowancesExceptLast: number =
    (numberPersons - 1) * INDIVIDUAL_ALLOWANCE;
  console.log('ALLOWANCES EXCEPT LAST: ', allowancesExceptLast);
  let allowancesToApply: number = allowancesExceptLast;

  const totalValueHighItems = sortedCategories.reduce(
    (acc, cat) => acc + basket[cat].totalHighItemValue,
    0
  );
  console.log('TOTAL VALUE HIGH ITEMS: ', totalValueHighItems);

  // apply all allowances except last
  const taxableBeforeLast = categoryValues.map((val: number): number => {
    const allowanceAlloc = Math.min(val, allowancesToApply);
    val -= allowanceAlloc;
    allowancesToApply -= allowanceAlloc;
    return val;
  });
  console.log('TAXABLE BEFORE LAST: ', taxableBeforeLast);
  const totalNonHighItemsTaxableBeforeLast = taxableBeforeLast.reduce(
    (acc, val) => acc + val,
    0
  );
  console.log(
    'TOTAL NON HIGH TAXABLE BEFORE LAST: ',
    totalNonHighItemsTaxableBeforeLast
  );
  const totalAmountForLastPerson =
    totalValueHighItems + totalNonHighItemsTaxableBeforeLast;
  console.log('TOTAL AMOUNT FOR LAST PERSON: ', totalAmountForLastPerson);
  // return object
  const vatObject: VatByCategory = {};
  if (totalAmountForLastPerson <= INDIVIDUAL_ALLOWANCE) {
    sortedCategories.forEach(category => (vatObject[category] = 0));
  } else {
    sortedCategories.forEach(
      (category, i) =>
        (vatObject[category] =
          taxableBeforeLast[i] * VAT_RATES[category] +
          basket[category].totalHighItemValue * VAT_RATES[category])
    );
  }
  return vatObject;
};
