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
} from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

const initState: State = getInitialState();

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
});
