// @flow

import { Set as ImmutableSetType } from 'immutable';
import { sendEventToAmplitude } from './amplitude';
import { getAdultPeople, getMinorPeople } from '../model/configurationApi';
import type {
  Amounts,
  Basket,
  Category,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import type { MainCategory } from '../types/reducers/appReducer';
import type { Currency } from '../model/currencies';

export const analyticsCustom = (eventName: string) =>
  sendEventToAmplitude({ type: 'Custom', eventName });

export const analyticsScreenMounted = (screen: string) => {
  sendEventToAmplitude({
    type: 'ScreenMounted',
    screen,
  });
};

export const analyticsLanguageChanged = (language: string) =>
  sendEventToAmplitude({ type: 'LanguageChanged', language });

export const analyticsQACardOpenend = (cardName: string) =>
  sendEventToAmplitude({ type: 'QACardOpened', cardName });

export const analyticsPeopleChanged = (people: People) =>
  sendEventToAmplitude({
    type: 'PeopleChanged',
    adults: getAdultPeople(people),
    minors: getMinorPeople(people),
  });

export const analyticsMainCategoriesChanged = (
  mainCategories: ImmutableSetType<MainCategory>
) =>
  sendEventToAmplitude({
    type: 'MainCategoriesChanged',
    mainCategories,
  });

export const analyticsQuantityAdded = (category: Category, quantity: number) =>
  sendEventToAmplitude({
    type: 'QuantityAdded',
    category,
    quantity,
  });

export const analyticsQuantityDeleted = (
  category: Category,
  quantity: number
) =>
  sendEventToAmplitude({
    type: 'QuantityDeleted',
    category,
    quantity,
  });

export const analyticsAmountAdded = (
  currency: Currency,
  amount: number,
  large: boolean
) =>
  sendEventToAmplitude({
    type: 'AmountAdded',
    currency,
    amount,
    large,
  });

export const analyticsAmountDeleted = (
  currency: Currency,
  amount: number,
  large: boolean
) =>
  sendEventToAmplitude({
    type: 'AmountDeleted',
    currency,
    amount,
    large,
  });

export const analyticsInitPayment = (
  amounts: Amounts,
  basket: Basket,
  duty: number,
  vat: number
) =>
  sendEventToAmplitude({
    type: 'InitPayment',
    amounts,
    basket,
    duty,
    vat,
  });
