// @flow

import type { Category } from '../../model/types/basketPeopleTypes';

export type Action =
  // declaration
  | {
    type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_ADULTS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_MINORS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  };
