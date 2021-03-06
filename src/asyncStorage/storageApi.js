// @flow
import Immutable from 'immutable';
import type { List } from 'immutable';

import {
  fetchAmountsAsyncStorage,
  fetchBasketAsyncStorage,
  fetchCurrencyObjectsAsyncStorage,
  fetchMainCategoriesAsyncStorage,
  fetchPeopleAsyncStorage,
  fetchSettingsAcceptRateAsyncStorage,
  fetchSettingsHasLanguageAsyncStorage,
  storeItemAsyncStorage,
  fetchReceiptsAsyncStorage,
  fetchReceiptEntryTimeAsyncStorage,
  fetchQAStateAsyncStorage,
} from './asyncStorage';
import type { CurrencyObject } from '../model/currencies';
import type { StoreType } from './storeTypes';
import type { Language } from '../i18n/types/locale';
import type {
  Amounts,
  Basket,
  People,
} from '../model/types/basketPeopleAmountsTypes';
import type { MainCategories } from '../types/reducers/declaration';
import {
  emptyBasket,
  initAmounts,
  initPeople,
} from '../model/configurationApi';
import type { Receipt } from '../types/receiptTypes';
import type { KeyNotSetType } from './asyncStorage';
import type { PaymentData, SettingsAcceptRate } from '../types/generalTypes';
import { emptyReceiptEntryTime } from '../types/reducers/declaration';
import type { QAState } from '../components/QuestionAnswer/types/questionAnswerTypes';
import { initialQAState } from '../components/QuestionAnswer/QuestionAnswerContainer';

/**
 * Stores item (stringified) under key - do NOT use directly!
 * @param key
 * @param item
 * @returns {Promise<boolean>}
 */
export const storeItem = async (key: StoreType, item: any): Promise<boolean> =>
  storeItemAsyncStorage(key, item);

/**
 * Store a receipt object
 * @param receipt
 * @returns {Promise<boolean>}
 */
export const storeReceipt = (receipt: Receipt) =>
  fetchReceiptsAsyncStorage('Receipts').then(receipts => {
    const t = receipts.push(receipt);
    return storeItem('Receipts', t);
  });

/**
 * Clear a receipt object
 * @returns {Promise<boolean>}
 */
export const clearReceipt = () => storeItem('Receipts', Immutable.List());

/**
 * Store a currency object
 * @param currencyObject
 * @returns {Promise<boolean>}
 */
export const storeCurrencyObject = (currencyObject: CurrencyObject) =>
  storeItem('CurrencyObject', currencyObject);

/**
 * Sets a flag if the user has a language set
 * @param flag
 * @returns {Promise<boolean>}
 */
export const storeSettingsAcceptRate = (flag: SettingsAcceptRate) =>
  storeItem('SettingsAcceptRate', flag);

/**
 * Sets a flag if the user has a language pre-chosen
 * @param flag
 * @returns {Promise<boolean>}
 */
export const storeSettingsHasLanguage = (flag: Language) =>
  storeItem('SettingsHasLanguage', flag);

/**
 * Stores a basket
 * @param basket
 * @returns {Promise<boolean>}
 */
export const storeBasket = (basket: Basket) =>
  storeItem('Basket', basket.toJS());

/**
 * Stores amounts
 * @param amounts
 * @returns {Promise<boolean>}
 */
export const storeAmounts = (amounts: Amounts) =>
  storeItem('Amounts', amounts.toJS());

/**
 * Store main categories (part of ABP)
 * @param mainCategories
 * @returns {Promise<boolean>}
 */
export const storeMainCategories = (mainCategories: MainCategories) =>
  storeItem('MainCategories', mainCategories.toJS());

/**
 * Stores people
 * @param people
 * @returns {Promise<boolean>}
 */
export const storePeople = (people: People) =>
  storeItem('People', people.toJS());

/**
 * Stores paymentData
 * @param paymentData
 * @returns {Promise<boolean>}
 */
export const storePaymentData = (paymentData: PaymentData) =>
  storeItem('PaymentData', paymentData);

/**
 * Stores receiptEntryTime
 * @param receiptEntryTime
 * @returns {Promise<boolean>}
 */
export const storeReceiptEntryTime = (receiptEntryTime: string) =>
  storeItem('ReceiptEntryTime', receiptEntryTime);

/**
 * Stores qaState
 * @param qaState
 * @returns {Promise<boolean>}
 */
export const storeQAState = (qaState: QAState) => storeItem('QAState', qaState);

export const storeClearDeclaration = () => {
  storeMainCategories(Immutable.Set());
  storeBasket(emptyBasket);
  storePeople(initPeople);
  storeAmounts(initAmounts);
  storeReceiptEntryTime(emptyReceiptEntryTime);
  storeQAState(initialQAState);
};

/**
 * Fetch receipts List
 * @returns {Promise<List<Receipt>>}
 */
export const fetchReceipts = async (): Promise<List<Receipt>> =>
  fetchReceiptsAsyncStorage('Receipts');

/**
 * Fetch a receipt object by receiptId
 * @returns {Promise<Receipt>}
 */
export const fetchReceiptByReceiptId = async (
  receiptId: string
): Promise<Receipt> =>
  fetchReceiptsAsyncStorage('Receipts').then(receipts =>
    receipts.find((receipt: Receipt) => receipt.receiptId === receiptId)
  );

/**
 * Fetch a currency object
 * @returns {Promise<CurrencyObject>}
 */
export const fetchCurrencyObject = async (): Promise<CurrencyObject> =>
  fetchCurrencyObjectsAsyncStorage('CurrencyObject');

/**
 * Fetches the accept-rate flag
 * @returns {Promise<CurrencyObject>}
 */
export const fetchSettingsAcceptRate = async (): Promise<SettingsAcceptRate> =>
  fetchSettingsAcceptRateAsyncStorage('SettingsAcceptRate');

/**
 * Fetches the language-set flag
 * @returns {Promise<CurrencyObject>}
 */
export const fetchSettingsHasLanguage = async (): Promise<
  Language | KeyNotSetType
> => fetchSettingsHasLanguageAsyncStorage('SettingsHasLanguage');

export const fetchQAState = async (): Promise<QAState> =>
  fetchQAStateAsyncStorage('QAState');

export const fetchBasket = async (): Promise<Basket> =>
  fetchBasketAsyncStorage('Basket');

export const fetchAmounts = async (): Promise<Amounts> =>
  fetchAmountsAsyncStorage('Amounts');

export const fetchPeople = async (): Promise<People> =>
  fetchPeopleAsyncStorage('People');

export const fetchMainCategories = async (): Promise<MainCategories> =>
  fetchMainCategoriesAsyncStorage('MainCategories');

export const fetchReceiptEntryTime = async (): Promise<string> =>
  fetchReceiptEntryTimeAsyncStorage('ReceiptEntryTime');
