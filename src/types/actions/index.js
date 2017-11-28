// @flow

import type { Category } from '../../model/types/basketPeopleTypes';
import type { MainCategory, MainCategoriesType } from '../reducers/declaration';

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
  }
  | {
    type: 'DECLARATION_SET_OVER_ALLOWANCE_TRUE',
  }
  | {
    type: 'DECLARATION_SET_OVER_ALLOWANCE_FALSE',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNTS_TRUE',
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNTS_FALSE',
  }
  | {
    type: 'DECLARATION_ADD_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'DECLARATION_REMOVE_MAIN_CATEGORY',
    mainCategory: MainCategory,
  }
  | {
    type: 'DECLARATION_SET_MAIN_CATEGORIES',
    mainCategories: MainCategoriesType,
  };
