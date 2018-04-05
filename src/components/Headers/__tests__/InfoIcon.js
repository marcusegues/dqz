// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { InfoIcon } from '../subcomponents/InfoIcon';

describe('Cart Icon TestSuite', () => {
  test('CartIcon component renders correctly', () => {
    // $FlowFixMe
    const tree = renderer.create(<InfoIcon navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const component = shallow(<InfoIcon navigation={{ dispatch: clickFn }} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'AppInfo',
    });
  });
});
