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

export const deserializeReceiptEntryTime = (serialized: any): string =>
  serialized;

export const deserializeQAState = (serialized: any): string => serialized;

export const deserializePeople = (serialized: any): People =>
  makePeopleRecord(serialized);

export const deserializeBasket = (serialized: any): Basket => {
  const basketMap = Immutable.Map(serialized);
  return basketMap.map(d =>
    makeCategoryBasketItemRecord({
      volume: makeCategoryVolumeRecord({
        quantities: Immutable.List(
          d.volume.quantities.map(q => ({
            number: q.number || q,
            date: q.date,
          }))
        ),
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

export const deserializeReceipts = (serialized: any): any => {
  const receiptsList = Immutable.List(serialized);
  return receiptsList.map(d => ({
    receiptId: d.receiptId,
    receiptEntryTime: d.receiptEntryTime,
    amounts: deserializeAmounts(d.amounts),
    people: deserializePeople(d.people),
    basket: deserializeBasket(d.basket),
    currencies: d.currencies,
    paymentData: d.paymentData,
  }));
};
