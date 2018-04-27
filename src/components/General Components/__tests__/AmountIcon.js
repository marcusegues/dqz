// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { AmountIcon } from '../../General Components/GreyBox/configured/AmountIcon';

describe('AmountIcon TestSuite', () => {
  test('AmountIcon component renders correctly', () => {
    const tree = renderer
      .create(<AmountIcon currency="EUR" amount={22} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
