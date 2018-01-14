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
import type { ExpoAppState } from '../../App';

/**
 * Log a custom event (string)
 * @param eventName
 */
export const analyticsCustom = (eventName: string) =>
  sendEventToAmplitude({ type: 'Custom', eventName });

/**
 * Log the mount event of a screen
 * @param screen
 */
export const analyticsScreenMounted = (screen: string) => {
  sendEventToAmplitude({
    type: 'ScreenMounted',
    screen,
  });
};

/**
 * Log the event of language change
 * @param language
 */
export const analyticsLanguageChanged = (language: string) =>
  sendEventToAmplitude({ type: 'LanguageChanged', language });

/**
 * Log the event of a QA Card opened
 * @param cardName
 */
export const analyticsQACardOpenend = (cardName: string) =>
  sendEventToAmplitude({ type: 'QACardOpened', cardName });

/**
 * Log the event of people input changed
 * @param people
 */
export const analyticsPeopleChanged = (people: People) =>
  sendEventToAmplitude({
    type: 'PeopleChanged',
    adults: getAdultPeople(people),
    minors: getMinorPeople(people),
  });

/**
 * Log the event of a change in main categories
 * @param mainCategories
 */
export const analyticsMainCategoriesChanged = (
  mainCategories: ImmutableSetType<MainCategory>
) =>
  sendEventToAmplitude({
    type: 'MainCategoriesChanged',
    mainCategories,
  });

/**
 * Log the event of a quantity added
 * @param category
 * @param quantity
 */
export const analyticsQuantityAdded = (category: Category, quantity: number) =>
  sendEventToAmplitude({
    type: 'QuantityAdded',
    category,
    quantity,
  });

/**
 * Log the event of a quantity deleted
 * @param category
 * @param quantity
 */
export const analyticsQuantityDeleted = (
  category: Category,
  quantity: number
) =>
  sendEventToAmplitude({
    type: 'QuantityDeleted',
    category,
    quantity,
  });

/**
 * Log the event of an amuount added
 * @param currency
 * @param amount
 * @param large
 */
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

/**
 * Log the event of an amount deleted
 * @param currency
 * @param amount
 * @param large
 */
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

/**
 * Log the event of a payment initialized
 * @param amounts
 * @param basket
 * @param duty
 * @param vat
 */
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

/**
 * Log the event of an appstate change
 * @param state
 */
export const analyticsAppStateChanged = (appState: ExpoAppState) =>
  sendEventToAmplitude({
    type: 'AppStateChanged',
    appState,
  });
