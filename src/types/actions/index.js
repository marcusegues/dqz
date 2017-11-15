// @flow

import type { Category } from '../../model/types/basketPeopleTypes';

export type Action =
  // declaration
  {
    type: 'DECLARED_BASKET_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  };
