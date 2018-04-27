// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { HomeIcon } from '../subcomponents/HomeIcon';

describe('HomeIcon Icon TestSuite', () => {
  test('HomeIcon component renders correctly', () => {
    // $FlowFixMe
    const tree = renderer.create(<HomeIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const component = shallow(<HomeIcon navigation={{ dispatch: clickFn }} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'MainMenu',
    });
  });
});
