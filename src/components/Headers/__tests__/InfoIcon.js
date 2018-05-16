// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { InfoIcon } from '../subcomponents/InfoIcon';
import { moderateScale } from '../../../styles/Scaling';
import { GREY } from '../../../styles/colors';

const clickFn = jest.fn();

describe('InfoIcon Icon TestSuite', () => {
  test('InfoIcon component renders correctly', () => {
    const tree = renderer
      // $FlowFixMe
      .create(<InfoIcon />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    // $FlowFixMe
    const component = shallow(<InfoIcon navigation={{ dispatch: clickFn }} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'AppInfo',
    });
  });
  test('Icon exists and  renders correctly', () => {
    // $FlowFixMe
    const component = shallow(<InfoIcon navigation={{ dispatch: clickFn }} />);
    expect(
      component.containsMatchingElement(
        <MaterialCommunityIcons
          name="information"
          size={moderateScale(23)}
          color={GREY}
        />
      )
    ).toBeTruthy();
  });
});
