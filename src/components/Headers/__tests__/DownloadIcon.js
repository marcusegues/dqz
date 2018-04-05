// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { DownloadIcon } from '../subcomponents/DownloadIcon';

describe('Cart Icon TestSuite', () => {
  test('CartIcon component renders correctly', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const tree = renderer
      // $FlowFixMe
      .create(<DownloadIcon navigation={{ state: clickFn }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const component = shallow(<DownloadIcon navigation={{ state: clickFn }} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
  });
});
