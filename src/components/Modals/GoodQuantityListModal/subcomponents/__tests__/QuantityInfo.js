// @flow
import React from 'react';
// $FlowFixMe
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { GoodQuantityGreyField } from '../GoodQuantityGreyField';
import { QuantityInfo } from '../QuantityInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const mockFunc = jest.fn();

describe('QuantityInfo', () => {
  test('QuantityInfo with `category` and `totalQuantity` renders correctly', () => {
    const tree = renderer
      .create(<QuantityInfo category="Meat" totalQuantity={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test('QuantityInfo with `category` and `totalQuantity` renders correctly', () => {
  //   const tree = renderer
  //     // $FlowFixMe
  //     .create(<QuantityInfo />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
