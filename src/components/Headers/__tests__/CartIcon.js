// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { CartIcon } from '../subcomponents/CartIcon';

const clickFn = jest.fn();
describe('Cart Icon TestSuite', () => {
  test('CartIcon component renders correctly', () => {
    const tree = renderer
      // $FlowFixMe
      .create(<CartIcon navigation={{ dispatch: clickFn }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    // $FlowFixMe
    const component = shallow(<CartIcon navigation={{ dispatch: clickFn }} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'QuestionAnswer',
    });
  });
});
