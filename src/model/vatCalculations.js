// @flow
// TODO: this model was written based on many misunderstandings, so it just "grew" -> needs refactor
import type {
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
  Map as ImmutableMapType,
} from 'immutable';
import Immutable from 'immutable';

import type { Basket, People } from './types/basketPeopleTypes';
import type {
  AllAmountsPerVatBracket,
  VatReport,
} from './types/calculationTypes';
import {
  CategoriesArray,
  CategoriesRates,
  IndividualAllowance,
} from './constants';
import {
  makeAllAmountsPerVatBracketRecord,
  makeVatReportRecord,
} from './types/calculationTypes';
import type { Categories } from '../types/basket';

/**
 * For TESTING only
 */
export const vatByCategory = (
  basket: Basket
): ImmutableMapType<Categories, number> => {
  const vatByCat: ImmutableMapType<Categories, number> = Immutable.Map();
  return vatByCat.withMutations(m => {
    CategoriesArray.forEach(c => {
      const rate = CategoriesRates.getIn([c, 'vat'], 0);
      const normalAmounts: number = basket
        .getIn([c, 'volume', 'amounts'], Immutable.List())
        .reduce((a, v) => a + v, 0);
      const largeAmounts: number = basket
        .getIn([c, 'volume', 'amountsLarge'], Immutable.List())
        .reduce((a, v) => a + v, 0);
      m.set(c, rate * (largeAmounts + normalAmounts));
    });
  });
};

/**
 * For TESTING only
 */
export const summarizeByVatBracket = (
  basket: Basket
): AllAmountsPerVatBracket => {
  const allAmountsPerVatBracket: AllAmountsPerVatBracket = makeAllAmountsPerVatBracketRecord();

  return allAmountsPerVatBracket.withMutations(basketMutable => {
    CategoriesArray.forEach(c => {
      const vatRate = CategoriesRates.getIn([c, 'vat']);
      const amounts: ImmutableListType<number> = basket.getIn(
        [c, 'volume', 'amounts'],
        Immutable.List()
      );
      const largeAmounts: ImmutableListType<number> = basket.getIn(
        [c, 'volume', 'amountsLarge'],
        Immutable.List()
      );
      basketMutable = basketMutable.updateIn(
        ['normal', vatRate],
        Immutable.List(),
        oldAmounts => oldAmounts.concat(amounts)
      );
      basketMutable = basketMutable.updateIn(
        ['large', vatRate],
        Immutable.List(),
        oldAmounts => oldAmounts.concat(largeAmounts)
      );
    });
    basketMutable.update('normal', normal =>
      normal.sortBy((_, k) => k, (a, b) => b - a)
    );
    basketMutable.update('large', large =>
      large.sortBy((_, k) => k, (a, b) => b - a)
    );
    return basketMutable;
  });
};

/**
 * For TESTING only. Note: the LAST person in the group is the one paying... 
 */
export const calculateAllowancesExceptLast = (people: People): number =>
  (people.get('minors') + people.get('adults') - 1) * IndividualAllowance;

/**
 * For TESTING only
 */
export const applyAllowancesNotLastPerson = (
  allItems: AllAmountsPerVatBracket,
  people: People
): AllAmountsPerVatBracket => {
  let allowance: number = calculateAllowancesExceptLast(people);
  const isPartyOfOne: boolean =
    people.get('adults') + people.get('minors') === 1;
  if (isPartyOfOne) {
    return allItems;
  }
  return allItems.withMutations(all => {
    all.update('normal', allBrackets =>
      allBrackets.map(list =>
        list.map(amount => {
          const allowanceAlloc = Math.min(amount, allowance);
          amount -= allowanceAlloc;
          allowance -= allowanceAlloc;
          return amount;
        })
      )
    );
    return all;
  });
};

/**
 * Foo
 */
export const applyAllowancesLastPerson = (
  allItems: AllAmountsPerVatBracket,
  total: number
): AllAmountsPerVatBracket => {
  if (total > IndividualAllowance) {
    return allItems;
  }
  let allowance = IndividualAllowance;
  return allItems.withMutations(all => {
    all.update('normal', allBrackets =>
      allBrackets.map(list =>
        list.map(amount => {
          const allowanceAlloc = Math.min(amount, allowance);
          amount -= allowanceAlloc;
          allowance -= allowanceAlloc;
          return amount;
        })
      )
    );
    return all;
  });
};

/**
 * For TESTING only
 */
export const calculateVatLargeItems = (
  allItems: AllAmountsPerVatBracket
): number => {
  const largeItems: ImmutableOrderedMapType<
    number,
    ImmutableListType<number>
  > = allItems.get('large');
  return largeItems.reduce(
    (acc, v, k) => acc + k * v.reduce((a, v) => a + v, 0),
    0
  );
};

/**
 * For TESTING only
 */
export const calculateVatNormalItems = (
  allItems: AllAmountsPerVatBracket
): number => {
  const largeItems: ImmutableOrderedMapType<
    number,
    ImmutableListType<number>
  > = allItems.get('normal');
  return largeItems.reduce(
    (acc, v, k) => acc + k * v.reduce((a, v) => a + v, 0),
    0
  );
};

/**
 * For TESTING only
 */
export const totalAmounts = (basket: Basket): number => {
  let total = 0;
  CategoriesArray.forEach(c => {
    const normalAmounts: number = basket
      .getIn([c, 'volume', 'amounts'], Immutable.List())
      .reduce((a, v) => a + v, 0);
    const largeAmounts: number = basket
      .getIn([c, 'volume', 'amountsLarge'], Immutable.List())
      .reduce((a, v) => a + v, 0);
    total += largeAmounts + normalAmounts;
  });
  return total;
};

/**
 * Calculates the vat and returns a nice record with all the info
 * @param basket
 * @param people
 * @returns VatReport Type
 */
export const calculateVat = (basket: Basket, people: People): VatReport => {
  const summarized: AllAmountsPerVatBracket = summarizeByVatBracket(basket);
  const total = Math.max(
    0,
    totalAmounts(basket) - calculateAllowancesExceptLast(people)
  );
  const afterAllowancePreLast = applyAllowancesNotLastPerson(
    summarized,
    people
  );
  const afterAllowance = applyAllowancesLastPerson(
    afterAllowancePreLast,
    total
  );
  const vatLarge = calculateVatLargeItems(afterAllowance);
  const vatNormal = calculateVatNormalItems(afterAllowance);
  return makeVatReportRecord({
    totalVatLargeItems: vatLarge,
    totalVatNormalItems: vatNormal,
    vatByCategoryRaw: vatByCategory(basket),
  });
};
