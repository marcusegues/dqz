// @flow
import Immutable from 'immutable';
import {
  makeAmountsOfCurrencyRecord,
  makeCategoryBasketItemRecord,
  makeCategoryVolumeRecord,
  makePeopleRecord,
} from '../model/types/basketPeopleAmountsTypes';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';

export const deserializePeople = (serialized: any): People =>
  makePeopleRecord(serialized);

export const deserializeBasket = (serialized: any): Basket => {
  const basketMap = Immutable.Map(serialized);
  return basketMap.map(d =>
    makeCategoryBasketItemRecord({
      volume: makeCategoryVolumeRecord({
        quantities: Immutable.List(d.volume.quantities),
      }),
    })
  );
};

export const deserializeAmounts = (serialized: any): Amounts => {
  const amountsMap = Immutable.Map(serialized);
  return amountsMap.map(d =>
    makeAmountsOfCurrencyRecord({
      amounts: Immutable.List(d.amounts),
      largeAmounts: Immutable.List(d.largeAmounts),
    })
  );
};

export const deserializeMainCategories = (serialized: string): any =>
  Immutable.Set(serialized);
