// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { LanguageSelect } from '../subcomponents/LanguageSelect';

describe('LanguageSelect Icon TestSuite', () => {
  test('LanguageSelect component renders correctly', () => {
    // $FlowFixMe
    const tree = renderer
      // $FlowFixMe
      .create(<LanguageSelect navigation={undefined} language="de" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
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
});
