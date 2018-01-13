// @flow
import Immutable from 'immutable';
import {
  analyticsAmountAdded,
  analyticsAmountDeleted,
  analyticsAppStateChanged,
  analyticsCustom,
  analyticsInitPayment,
  analyticsLanguageChanged,
  analyticsMainCategoriesChanged,
  analyticsPeopleChanged,
  analyticsQACardOpenend,
  analyticsQuantityAdded,
  analyticsQuantityDeleted,
  analyticsScreenMounted,
} from '../analyticsApi';
import { initPeople } from '../../model/configurationApi';

const amp = require('../amplitude');

jest.mock('../amplitude', () => ({
  sendEventToAmplitude: jest.fn(),
}));

describe('API calls', () => {
  test('Custom', () => {
    analyticsCustom('foo');
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      eventName: 'foo',
      type: 'Custom',
    });
  });

  test('ScreenMounted', () => {
    analyticsScreenMounted('foo');
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      screen: 'foo',
      type: 'ScreenMounted',
    });
  });

  test('LanguageChanged', () => {
    analyticsLanguageChanged('foo');
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      language: 'foo',
      type: 'LanguageChanged',
    });
  });

  test('QACardOpened', () => {
    analyticsQACardOpenend('foo');
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      cardName: 'foo',
      type: 'QACardOpened',
    });
  });

  test('PeopleChanged', () => {
    analyticsPeopleChanged(initPeople);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      adults: 1,
      minors: 0,
      type: 'PeopleChanged',
    });
  });

  test('MainCategoriesChanged', () => {
    analyticsMainCategoriesChanged(Immutable.Set(['Foods']));
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      mainCategories: Immutable.Set(['Foods']),
      type: 'MainCategoriesChanged',
    });
  });

  test('QuantityAdded', () => {
    analyticsQuantityAdded('Meat', 123);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      category: 'Meat',
      quantity: 123,
      type: 'QuantityAdded',
    });
  });

  test('QuantityDeleted', () => {
    analyticsQuantityDeleted('Meat', 123);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      category: 'Meat',
      quantity: 123,
      type: 'QuantityDeleted',
    });
  });

  test('AmountAdded', () => {
    analyticsAmountAdded('EUR', 123, false);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      currency: 'EUR',
      amount: 123,
      type: 'AmountAdded',
      large: false,
    });
  });

  test('AmountDeleted', () => {
    analyticsAmountDeleted('EUR', 123, false);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      currency: 'EUR',
      amount: 123,
      type: 'AmountDeleted',
      large: false,
    });
  });

  test('InitPayment', () => {
    // $FlowFixMe
    analyticsInitPayment(Immutable.Map(), 'b', 123, 321);
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      amounts: Immutable.Map({}),
      basket: 'b',
      duty: 123,
      type: 'InitPayment',
      vat: 321,
    });
  });

  test('AppStateChanged', () => {
    analyticsAppStateChanged('inactive');
    expect(amp.sendEventToAmplitude).toHaveBeenCalledWith({
      type: 'AppStateChanged',
      appState: 'inactive',
    });
  });
});
