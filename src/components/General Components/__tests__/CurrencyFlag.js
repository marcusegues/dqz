// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { CurrencyFlag } from '../../General Components/CurrencyFlag';
import { currencyPicker } from '../../Modals/CurrencyPickerModal/currencyPickerData';
import type { Currency } from '../../../model/currencies';

describe('CurrencyFlag TestSuite', () => {
  test('CurrencyFlag component renders correctly with default fontSize', () => {
    const tree = renderer.create(<CurrencyFlag currency="EUR" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CurrencyFlag component renders correctly with preset fontSize', () => {
    const tree = renderer
      .create(<CurrencyFlag currency="EUR" fontSize={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CurrencyFlag component renders correctly with preset fontSize', () => {
    const currency: Currency = 'USD';
    const flag = currencyPicker[currency];
    const tree = renderer
      // $FlowFixMe
      .create(<CurrencyFlag currency={flag} fontSize={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
