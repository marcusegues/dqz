// @flow
import Immutable from 'immutable';
import { sendEventToAmplitude } from '../amplitude';
// $FlowFixMe
const expo = require('expo');

jest.mock('expo', () => ({
  Amplitude: {
    logEvent: jest.fn(),
    logEventWithProperties: jest.fn(),
  },
}));

// note: not perfect implementation, but well..

describe('Test sendEventToAmplitude', () => {
  test('ScreenMounted', () => {
    sendEventToAmplitude({ type: 'ScreenMounted', screen: 'Thing' });
    expect(expo.Amplitude.logEvent).toHaveBeenCalledWith('Thing has mounted');
  });

  test('Custom', () => {
    sendEventToAmplitude({ type: 'Custom', eventName: 'motsuC' });
    expect(expo.Amplitude.logEvent).toHaveBeenCalledWith('motsuC');
  });

  test('LanguageChanged', () => {
    sendEventToAmplitude({ type: 'LanguageChanged', language: 'xyz' });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Language changed',
      { language: 'xyz' }
    );
  });

  test('PeopleChanged', () => {
    sendEventToAmplitude({ type: 'PeopleChanged', adults: 100, minors: 200 });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'People input changed',
      { adults: 100, minors: 200 }
    );
  });

  test('MainCategoriesChanged', () => {
    sendEventToAmplitude({
      type: 'MainCategoriesChanged',
      mainCategories: Immutable.Set(['Foods', 'TobaccoProducts']),
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Main Categories changed',
      { mainCategories: 'Foods, TobaccoProducts' }
    );
  });

  test('QuantityAdded', () => {
    sendEventToAmplitude({
      type: 'QuantityAdded',
      category: 'Meat',
      quantity: 123,
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Quantity added',
      { category: 'Meat', quantity: 123 }
    );
  });

  test('QuantityDeleted', () => {
    sendEventToAmplitude({
      type: 'QuantityDeleted',
      category: 'Meat',
      quantity: 123,
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Quantity deleted',
      { category: 'Meat', quantity: 123 }
    );
  });

  test('AmountAdded', () => {
    sendEventToAmplitude({
      type: 'AmountAdded',
      currency: 'EUR',
      amount: 123,
      large: false,
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Amount added',
      { currency: 'EUR', amount: 123 }
    );
  });

  test('AmountDeleted', () => {
    sendEventToAmplitude({
      type: 'AmountDeleted',
      currency: 'EUR',
      amount: 123,
      large: false,
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Amount deleted',
      { currency: 'EUR', amount: 123 }
    );
  });

  test('InitPayment', () => {
    // $FlowFixMe
    sendEventToAmplitude({
      type: 'InitPayment',
      basket: 'basket',
      amounts: 'amounts',
      duty: 123,
      vat: 321,
    });
    expect(expo.Amplitude.logEventWithProperties).toHaveBeenCalledWith(
      'Payment Initialized',
      { amounts: '"amounts"', basket: '"basket"', duty: 123, vat: 321 }
    );
  });
});
