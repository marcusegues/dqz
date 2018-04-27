// @flow
import renderer from 'react-test-renderer';
import React from 'react';
// $FlowFixMe
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { LanguageSelect } from '../subcomponents/LanguageSelect';

const clickFn = jest.fn();

describe('LanguageSelect Icon TestSuite', () => {
  test('LanguageSelect component renders correctly', () => {
    const tree = renderer
      .create(
        // $FlowFixMe
        <LanguageSelect navigation={{ dispatch: clickFn }} language="de" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const component = shallow(
      // $FlowFixMe
      <LanguageSelect navigation={{ dispatch: clickFn }} language="de" />
    );
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'OnBoarding',
    });
  });
  test('Text of language  exists and is capitalized', () => {
    const component = shallow(
      // $FlowFixMe
      <LanguageSelect navigation={{ dispatch: clickFn }} language="de" />
    );
    expect(component.containsMatchingElement(<Text>DE</Text>)).toBeTruthy();
  });
});
