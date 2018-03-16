// @flow

import type { Category } from '../model/types/basketPeopleAmountsTypes';

export const MIN_DECLARED_CHF = 0.05;
export const MAX_DECLARED_CHF = 20000;

type DecimalPlaces = 0 | 1 | 2 | 3;

type DisplayedQuantityDecimalPlacesType = { [Category]: DecimalPlaces };
export const displayedQuantityDecimalPlaces: DisplayedQuantityDecimalPlacesType = {
  Meat: 2,
  Butter: 2,
  Oils: 2,
  OtherFood: 2,
  AlcSoft: 2,
  AlcHard: 2,
  Cigarettes: 0,
  Tobacco: 2,
  Meds: 0,
  Books: 0,
  Magazines: 0,
  Flowers: 0,
  AnimalFeed: 2,
  Fertilizer: 2,
  Other: 0,
};
