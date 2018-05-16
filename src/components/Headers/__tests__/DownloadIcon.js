// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { DownloadIcon } from '../subcomponents/DownloadIcon';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';

const clickFn = jest.fn();

describe('Download Icon TestSuite', () => {
  test('DownloadIcon component renders correctly', () => {
    const tree = renderer
      // $FlowFixMe
      .create(<DownloadIcon navigation={{ state: {} }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('we can click it', () => {
    const component = shallow(
      // $FlowFixMe
      <DownloadIcon navigation={{ state: { params: { onPress: clickFn } } }} />
    );
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(component.dive()).toMatchSnapshot();
  });
  test('it contains icon', () => {
    expect.assertions(2);
    const component = shallow(
      // $FlowFixMe
      <DownloadIcon navigation={{ state: { params: { onPress: clickFn } } }} />
    );
    expect(component.find(MaterialIcons)).toHaveLength(1);
    expect(
      component.containsMatchingElement(
        <MaterialIcons
          name="get-app"
          size={moderateScale(28)}
          color={MAIN_RED}
        />
      )
    ).toBeTruthy();
  });
});
