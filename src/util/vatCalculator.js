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
  console.log('SORTED CAT', SORTED_CATEGORIES);
  console.log('BASKET', basket);
  const basketSortedCategories = SORTED_CATEGORIES.filter(cat =>
    basket.get(cat, 0)
  );
  console.log('BASKET SORTED CAT', basketSortedCategories);
  // array of sorted total values (excluding high value items) for each category
  const totalSortedNormal: ImmutableListType<number> = basketSortedCategories.map((cat: CategoryName): number =>
    basket.getIn([cat, 'valuesNormal'], []).reduce((acc, val) => acc + val, 0)
  );
  const totalSortedLarge: ImmutableListType<number> = basketSortedCategories.map((cat: CategoryName): number =>
    basket.getIn([cat, 'valuesLarge'], []).reduce((acc, val) => acc + val, 0)
  );
  const totalLarge: number = totalSortedLarge.reduce(
    (acc: number, val: number) => acc + val,
    0
  );
  console.log('SORTED CATEGORIES', basketSortedCategories);
  console.log('CATEGORY VALUES: ', totalSortedNormal);

  let allowancesToApply: number = (numberPersons - 1) * INDIVIDUAL_ALLOWANCE;

  // apply all allowances except last
  const taxableSortedNormalBeforeLast: ImmutableListType<number> = totalSortedNormal.map((val: number): number => {
    const allowanceAlloc: number = Math.min(val, allowancesToApply);
    val -= allowanceAlloc;
    allowancesToApply -= allowanceAlloc;
    return val;
  });
  console.log('TAXABLE BEFORE LAST: ', taxableSortedNormalBeforeLast);
  const totalNormalBeforeLast: number = taxableSortedNormalBeforeLast.reduce(
    (acc: number, val: number) => acc + val,
    0
  );
  console.log('TOTAL NON HIGH TAXABLE BEFORE LAST: ', totalNormalBeforeLast);
  const totalAmountForLastPerson: number = totalLarge + totalNormalBeforeLast;
  console.log('TOTAL AMOUNT FOR LAST PERSON: ', totalAmountForLastPerson);
  // return object
  const vatByCat: VatByCategory = Immutable.Map();
  let totalVat = 0;
  if (totalAmountForLastPerson <= INDIVIDUAL_ALLOWANCE) {
    basketSortedCategories.forEach((category: CategoryName) =>
      vatByCat.setIn([category], 0)
    );
  } else {
    basketSortedCategories.forEach((category: CategoryName, i: number) => {
      const vat =
        VAT_RATES.get(category, 0) *
        (taxableSortedNormalBeforeLast.get(i, 0) + totalSortedLarge.get(i, 0));
      totalVat += vat;
      vatByCat.setIn(
        [category],
        VAT_RATES.get(category, 0) *
          (taxableSortedNormalBeforeLast.get(i, 0) + totalSortedLarge.get(i, 0))
      );
    });
  }

  const vatObject = makeVatReportRecord({
    totalVat,
    vatByCategory: vatByCat,
  });

  return vatObject;
};
