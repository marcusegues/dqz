// @flow

import type {
  Category,
  Basket,
  People,
} from '../../model/types/basketPeopleTypes';
import type {
  MainCategory,
  MainCategoriesType,
  CurrentQuestionType,
} from '../reducers/declaration';

export type Action =
  // declaration
  | {
    type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_SET_BASKET',
    basket: Basket,
  }
  | {
    type: 'DECLARATION_BASKET_ADD_AMOUNT',
    category: Category,
    amount: number,
  }
  | {
    type: 'DECLARATION_BASKET_ADD_LARGE_AMOUNT',
    category: Category,
    largeAmount: number,
  }
  | {
    type: 'DECLARATION_ADULTS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_ADULTS_SET_QUANTITY',
    category: Category,
    quantity: number,
  }
  | {
    type: 'DECLARATION_MINORS_CHANGE_QUANTITY',
    category: Category,
    quantityChange: number,
  }
  | {
    type: 'DECLARATION_MINORS_SET_QUANTITY',
    category: Category,
    quantity: number,
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
  }
  | {
    type: 'DECLARATION_SET_CURRENT_QUESTION',
    currentQuestion: CurrentQuestionType,
  }
  | {
    type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_NOT_ANSWERED',
  }
  | {
    type: 'DECLARATION_RESET_LARGE_AMOUNTS',
    category: Category,
  }
  | {
    type: 'DECLARATION_SET_PEOPLE',
    adults: number,
    minors: number,
  };
