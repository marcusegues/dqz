// @flow
import Immutable, { is } from 'immutable';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import { emptyMainCategories } from '../types/reducers/declaration';
import { makePeopleRecord } from '../model/types/basketPeopleAmountsTypes';
import { emptyBasket } from '../model/configurationApi';
import type { MainCategories } from '../types/reducers/declaration';

export const isInitBasket = (
  people: People,
  basket: Basket,
  mainCategories: MainCategories,
  amounts: Amounts,
  receiptEntryTime: string
) =>
  is(people, makePeopleRecord()) &&
  is(basket, emptyBasket) &&
  is(mainCategories, emptyMainCategories) &&
  is(amounts, Immutable.Map()) &&
  is(receiptEntryTime, '');
