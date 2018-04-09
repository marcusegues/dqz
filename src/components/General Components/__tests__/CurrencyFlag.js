// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { CurrencyFlag } from '../../General Components/CurrencyFlag';

describe('CurrencyFlag TestSuite', () => {
  test('CurrencyFlag component renders correctly with default fontSize', () => {
    // $FlowFixMe
    const tree = renderer.create(<CurrencyFlag currency="EUR" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CurrencyFlag component renders correctly with preset fontSize', () => {
    // $FlowFixMe
    const tree = renderer
      .create(<CurrencyFlag currency="EUR" fontSize={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
