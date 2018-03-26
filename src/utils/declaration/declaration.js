// @flow
import Immutable, { is } from 'immutable';
import type {
  Amounts,
  Basket,
  Category,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import { emptyMainCategories } from '../../types/reducers/declaration';
import { makePeopleRecord } from '../../model/types/basketPeopleAmountsTypes';
import { emptyBasket } from '../../model/configurationApi';
import type { MainCategories } from '../../types/reducers/declaration';
import { displayedQuantityDecimalPlaces } from '../../constants/declaration';

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

export const formatQuantity = (category: Category, quantity: number) =>
  quantity.toFixed(displayedQuantityDecimalPlaces[category]);
