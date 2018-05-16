// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { QuantityInfo } from '../QuantityInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('QuantityInfo', () => {
  test('QuantityInfo with `category` and `totalQuantity` renders correctly', () => {
    const tree = renderer
      .create(<QuantityInfo category="Meat" totalQuantity={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
