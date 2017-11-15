// @flow
import type { Category } from '../../model/types/category';

export type Action =
  // declaration
  {
    type: 'DECLARED_BASKET_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  };
