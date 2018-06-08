// @flow

import type { Category } from '../model/types/basketPeopleAmountsTypes';

export const MIN_DECLARED_CHF = 0.05;
export const MAX_DECLARED_CHF = 20001;
export const MAX_PAYMENT_CHF = 20001;

export const MAX_DIGITS_AMOUNT = 14;

type DecimalPlaces = 0 | 1 | 2 | 3;

type DisplayedQuantityDecimalPlacesType = { [Category]: DecimalPlaces };
export const displayedQuantityDecimalPlaces: DisplayedQuantityDecimalPlacesType = {
  Meat: 3,
  Butter: 3,
  Oils: 3,
  OtherFood: 2,
  AlcSoft: 3,
  AlcHard: 3,
  Cigarettes: 0,
  Tobacco: 0,
  Meds: 0,
  Books: 0,
  Magazines: 0,
  Flowers: 0,
  AnimalFeed: 2,
  Fertilizer: 2,
  Other: 0,
};
