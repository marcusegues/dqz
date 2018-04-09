// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { CurrencyFlagAndAmount } from '../../General Components/CurrencyFlagAndAmount';

describe('CurrencyFlagAndAmount TestSuite', () => {
  test('CurrencyFlagAndAmount component renders correctly', () => {
    // $FlowFixMe
    const tree = renderer
      .create(<CurrencyFlagAndAmount currency="EUR" amount={22} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
