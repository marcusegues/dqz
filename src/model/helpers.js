// @flow
import type { BasketType, People } from './types';
import { CategoriesArray } from './constants';

const emptyItem = {
  volume: { quantity: 0, amounts: [] },
  dues: { duty: 0, vat: 0 },
};

// todo make sure the objects are deep copied (I want immutable...)
export const emptyBasket: BasketType = new Map(
  CategoriesArray.map(c => [c, emptyItem])
);

export const initPeople: People = {
  adults: 1,
  minors: 0,
};
