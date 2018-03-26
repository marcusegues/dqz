// @flow
import Immutable from 'immutable';
import { makeSettingsRecord } from '../../types/reducers/declaration';
import { emptyBasket, initPeople } from '../../model/configurationApi';
import {
  getBasket,
  getPeople,
  getAmounts,
  getMainCategories,
  getSettings,
  getCurrencies,
  getCurrencyState,
  getTotalVat,
  getTotalDuty,
  getTotalFees,
  getReceiptId,
} from '../selectors';
import {
  sampleAmounts1,
  sampleBasket1,
} from '../../model/__tests__/fullBasketsAndAmounts';
import type { AppState } from '../../types/reducers';
import { getInitialAppState } from '../../types/reducers';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

const initState: AppState = getInitialAppState();

const amountAndQuantityState = initState
  .setIn(['declaration', 'amounts'], sampleAmounts1)
  .setIn(['declaration', 'basket'], sampleBasket1);

describe('API', () => {
  test('getBasket', () => {
    expect(getBasket(initState).toString()).toBe(emptyBasket.toString());
  });
  test('getPeople', () => {
    expect(getPeople(initState).toString()).toBe(initPeople.toString());
  });
  test('getAmounts', () => {
    expect(getAmounts(initState).toString()).toBe(Immutable.Map().toString());
  });
  test('getMainCategories', () => {
    expect(getMainCategories(initState).toString()).toBe(
      Immutable.Set().toString()
    );
  });
  test('getReceiptId', () => {
    expect(getReceiptId(initState).toString()).toBe('');
  });
  test('getSettings', () => {
    expect(getSettings(initState).toString()).toBe(
      makeSettingsRecord().toString()
    );
  });
  test('getCurrencies', () => {
    expect(getCurrencies(initState).toString()).toBe({}.toString());
  });
  test('getCurrencyState', () => {
    expect(getCurrencyState(initState).toString()).toBe(false.toString());
  });
  test('getTotalVat', () => {
    expect(getTotalVat(amountAndQuantityState)).toBe(485.4);
  });
  test('getTotalDuty', () => {
    expect(getTotalDuty(amountAndQuantityState)).toBe(3118.9);
  });
  test('getTotalFees', () => {
    expect(getTotalFees(amountAndQuantityState)).toBe(3604.3);
  });
});
