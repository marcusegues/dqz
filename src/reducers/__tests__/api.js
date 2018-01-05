// @flow
/* global describe, test, expect, jest */
import Immutable from 'immutable';
import {
  getInitialState,
  makeSettingsRecord,
} from '../../types/reducers/declaration';
import type { State } from '../../types/reducers/declaration';
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
    expect(getBasket({ declaration: initState }).toString()).toBe(
      emptyBasket.toString()
    );
  });
  test('getPeople', () => {
    expect(getPeople({ declaration: initState }).toString()).toBe(
      initPeople.toString()
    );
  });
  test('getAmounts', () => {
    expect(getAmounts({ declaration: initState }).toString()).toBe(
      Immutable.Map().toString()
    );
  });
  test('getMainCategories', () => {
    expect(getMainCategories({ declaration: initState }).toString()).toBe(
      Immutable.Set().toString()
    );
  });
  test('getSettings', () => {
    expect(getSettings({ declaration: initState }).toString()).toBe(
      makeSettingsRecord().toString()
    );
  });
  test('getCurrencies', () => {
    expect(getCurrencies({ declaration: initState }).toString()).toBe(
      {}.toString()
    );
  });
  test('getCurrencyState', () => {
    expect(getCurrencyState({ declaration: initState }).toString()).toBe(
      false.toString()
    );
  });
});
