// @flow
// Idea:
// - summarize all large items with vat-rate
// - take all small items in the basket (per category), and accumulate per category
// -> do it in one go

import type {
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
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
  IndividualAllowanceAdult,
  IndividualAllowanceMinor,
} from './constants';
import {
  makeAllAmountsPerVatBracketRecord,
  makeVatReportRecord,
} from './types/calculationTypes';

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
 * For TESTING only
 */
export const calculateAllowances = (people: People): number =>
  people.get('minors') * IndividualAllowanceMinor +
  people.get('adults') * IndividualAllowanceAdult;

/**
 * For TESTING only
 */
export const subtractAllowances = (
  allItems: AllAmountsPerVatBracket,
  people: People
): AllAmountsPerVatBracket => {
  let allowance: number = calculateAllowances(people);
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

// Here's the model, finally:
export const calculateVat = (basket: Basket, people: People): VatReport => {
  const summarized: AllAmountsPerVatBracket = summarizeByVatBracket(basket);
  const afterAllowance = subtractAllowances(summarized, people);
  const vatLarge = calculateVatLargeItems(afterAllowance);
  const vatNormal = calculateVatNormalItems(afterAllowance);
  return makeVatReportRecord({
    totalLargeItemsAmount: 0,
    totalNormalItemsAmount: 0,
    totalAllowance: calculateAllowances(people),
    totalVatLargeItems: vatLarge,
    totalVatNormalItems: vatNormal,
  });
};
