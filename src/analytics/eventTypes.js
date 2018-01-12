// @flow

import { Set as ImmutableSetType } from 'immutable';
import type { MainCategory } from '../types/reducers/appReducer';
import type {
  Amounts,
  Basket,
  Category,
} from '../model/types/basketPeopleAmountsTypes';
import type { Currency } from '../model/currencies';

export type AnalyticsEvent =
  | {
      type: 'ScreenMounted',
      screen: string,
    }
  | {
      type: 'Custom',
      eventName: string,
    }
  | {
      type: 'QACardOpened',
      cardName: string,
    }
  | {
      type: 'LanguageChanged',
      language: string,
    }
  | {
      type: 'PeopleChanged',
      adults: number,
      minors: number,
    }
  | {
      type: 'MainCategoriesChanged',
      mainCategories: ImmutableSetType<MainCategory>,
    }
  | {
      type: 'QuantityAdded',
      category: Category,
      quantity: number,
    }
  | {
      type: 'QuantityDeleted',
      category: Category,
      quantity: number,
    }
  | {
      type: 'AmountAdded',
      amount: number,
      currency: Currency,
      large: boolean,
    }
  | {
      type: 'AmountDeleted',
      amount: number,
      currency: Currency,
      large: boolean,
    }
  | {
      type: 'InitPayment',
      amounts: Amounts,
      basket: Basket,
      duty: number,
      vat: number,
    };
