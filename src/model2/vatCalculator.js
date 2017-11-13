// @flow
import Immutable from 'immutable';
import { VAT_RATES } from './constants/vat';
import { CATEGORIES, CATEGORIES_LIST } from './constants/categories';
import type {
  List as ImmutableListType,
  Map as ImmutableMapType,
  OrderedMap as ImmutableOrderedMapType,
} from 'immutable';
import type { CategoryName, CategoriesList } from './types/basket';
import type {
  VatByCategory,
  VatBasket,
  VatReport,
} from './types/vatCalculator';
import { makeVatReportRecord } from './types/vatCalculator';
import { SORTED_CATEGORIES } from './constants/vat';
import { pickBy } from 'lodash';

// tax-free allowance for a single person
const INDIVIDUAL_ALLOWANCE: number = 300;

export const vatCalculator = (
  basket: VatBasket,
  numberPersons: number
): VatReport => {
  //sort the categories in the input basket according to vat rates from high to low
  const basketSortedCategories = SORTED_CATEGORIES.filter(cat =>
    basket.get(cat, 0)
  );

  // array of sorted total values (excluding high value items) for each category
  const totalSortedNormal: ImmutableListType<number> = basketSortedCategories.map((cat: CategoryName): number =>
    basket.getIn([cat, 'valuesNormal'], []).reduce((acc, val) => acc + val, 0)
  );

  // array of sorted total values of high value items for each category
  const totalSortedLarge: ImmutableListType<number> = basketSortedCategories.map((cat: CategoryName): number =>
    basket.getIn([cat, 'valuesLarge'], []).reduce((acc, val) => acc + val, 0)
  );

  // total value amount of large items
  const totalLarge: number = totalSortedLarge.reduce(
    (acc: number, val: number) => acc + val,
    0
  );

  // allowances to apply except for the allowance of the last person
  let allowancesToApply: number = (numberPersons - 1) * INDIVIDUAL_ALLOWANCE;

  // apply all allowances except last
  // obtain a list of allowances subtracted from initial total normal amounts
  const taxableSortedNormalBeforeLast: ImmutableListType<number> = totalSortedNormal.map((val: number): number => {
    const allowanceAlloc: number = Math.min(val, allowancesToApply);
    val -= allowanceAlloc;
    allowancesToApply -= allowanceAlloc;
    return val;
  });

  // total value of normal items left for last person to account for
  const totalNormalBeforeLast: number = taxableSortedNormalBeforeLast.reduce(
    (acc: number, val: number) => acc + val,
    0
  );

  // total value left for last person to account for
  const totalAmountForLastPerson: number = totalLarge + totalNormalBeforeLast;

  // return object
  let vatByCat: VatByCategory = Immutable.Map();
  let totalVat = 0;
  if (totalAmountForLastPerson <= INDIVIDUAL_ALLOWANCE) {
    vatByCat = vatByCat.withMutations(v => {
      basketSortedCategories.forEach((category: CategoryName) => {
        v.setIn([category], 0);
      });
    });
  } else {
    vatByCat = vatByCat.withMutations(v => {
      basketSortedCategories.forEach((category: CategoryName, i: number) => {
        const vat =
          VAT_RATES.get(category, 0) *
          (taxableSortedNormalBeforeLast.get(i, 0) +
            totalSortedLarge.get(i, 0));
        totalVat += vat;
        v.setIn(
          [category],
          VAT_RATES.get(category, 0) *
            (taxableSortedNormalBeforeLast.get(i, 0) +
              totalSortedLarge.get(i, 0))
        );
      });
    });
  }

  const vatObject: VatReport = makeVatReportRecord({
    totalVat,
    vatByCategory: vatByCat,
  });

  return vatObject;
};
