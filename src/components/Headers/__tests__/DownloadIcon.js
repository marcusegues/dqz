// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { DownloadIcon } from '../subcomponents/DownloadIcon';

describe('Download Icon TestSuite', () => {
  test('DownloadIcon component renders correctly', () => {
    // $FlowFixMe
    const tree = renderer
      // $FlowFixMe
      .create(<DownloadIcon navigation={{ state: {} }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('we can click it', () => {
    const clickFn = jest.fn();
    const component = shallow(
      // $FlowFixMe
      <DownloadIcon navigation={{ state: { params: { onPress: clickFn } } }} />
    );
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
  });
});
