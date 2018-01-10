// @flow
/* global describe, test, expect, jest */
import Immutable from 'immutable';
import {
  getInitialState,
  makeSettingsRecord,
} from '../../types/reducers/appReducer';
import type { State } from '../../types/reducers/appReducer';
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
  getVatReport,
  getDutyReport,
} from '../index';
import {
  sampleAmounts1,
  sampleBasket1,
} from '../../model/__tests__/fullBasketsAndAmounts';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

const initState: State = getInitialState();

const amountAndQuantityState = initState
  .set('amounts', sampleAmounts1)
  .set('basket', sampleBasket1);

describe('API', () => {
  test('getBasket', () => {
    expect(getBasket({ appState: initState }).toString()).toBe(
      emptyBasket.toString()
    );
  });
  test('getPeople', () => {
    expect(getPeople({ appState: initState }).toString()).toBe(
      initPeople.toString()
    );
  });
  test('getAmounts', () => {
    expect(getAmounts({ appState: initState }).toString()).toBe(
      Immutable.Map().toString()
    );
  });
  test('getMainCategories', () => {
    expect(getMainCategories({ appState: initState }).toString()).toBe(
      Immutable.Set().toString()
    );
  });
  test('getSettings', () => {
    expect(getSettings({ appState: initState }).toString()).toBe(
      makeSettingsRecord().toString()
    );
  });
  test('getCurrencies', () => {
    expect(getCurrencies({ appState: initState }).toString()).toBe(
      {}.toString()
    );
  });
  test('getCurrencyState', () => {
    expect(getCurrencyState({ appState: initState }).toString()).toBe(
      false.toString()
    );
  });
  test('getTotalVat', () => {
    expect(getTotalVat({ appState: amountAndQuantityState })).toBe(485.4);
  });
  test('getTotalDuty', () => {
    expect(getTotalDuty({ appState: amountAndQuantityState })).toBe(3118.9);
  });
  test('getTotalFees', () => {
    expect(getTotalFees({ appState: amountAndQuantityState })).toBe(3604.3);
  });
  test('getVatReport', () => {
    expect(
      getVatReport({ appState: amountAndQuantityState })
    ).toMatchSnapshot();
  });
  test('getDutyReport', () => {
    expect(
      getDutyReport({ appState: amountAndQuantityState })
    ).toMatchSnapshot();
  });
});
