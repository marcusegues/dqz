// Idea:
// - summarize all large items with vat-rate
// - take all small items in the basket (per category), and accumulate per category
// -> do it in one go

import type {
  List as ImmutableListType,
  OrderedMap as ImmutableOrderedMapType,
} from 'immutable';
import Immutable from 'immutable';

import type { BasketType } from './types/basketPeopleTypes';
import type { allAmountsPerVatBracket } from './types/calculationTypes';
import { CategoriesArray, CategoriesRates } from './constants';
import { makeAllAmountsPerVatBracketRecord } from './types/calculationTypes';

export const summarizeByVatBracket = (
  basket: BasketType
): allAmountsPerVatBracket => {
  const allAmountsPerVatBracket: allAmountsPerVatBracket = makeAllAmountsPerVatBracketRecord();

  return (result = allAmountsPerVatBracket.withMutations(basketMutable => {
    CategoriesArray.forEach(c => {
      const vatRate = CategoriesRates.getIn([c, 'vat']);
      const amounts: ImmutableListType = basket.getIn([c, 'volume', 'amounts']);
      const largeAmounts: ImmutableListType = basket.getIn([
        c,
        'volume',
        'amountsLarge',
      ]);
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
  }));
};

export const calculateVatLargeItems = (
  allItems: allAmountsPerVatBracket
): number => {
  const largeItems: ImmutableOrderedMapType = allItems.get('large');
  return largeItems.reduce(
    (acc, v, k) => acc + k * v.reduce((a, v) => a + v, 0),
    0
  );
};

export const calculateVatNormalItems = (
  allItems: allAmountsPerVatBracket
): number => {
  const largeItems: ImmutableOrderedMapType = allItems.get('normal');
  return largeItems.reduce(
    (acc, v, k) => acc + k * v.reduce((a, v) => a + v, 0),
    0
  );
};
