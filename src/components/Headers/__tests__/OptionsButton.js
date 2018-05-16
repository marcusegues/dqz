// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { OptionsButton } from '../subcomponents/OptionsButton';

const clickFn = jest.fn();

describe('OptionsButton Icon TestSuite', () => {
  test('OptionsButton component renders correctly', () => {
    const tree = renderer
      // $FlowFixMe
      .create(<OptionsButton navigation={{ dispatch: clickFn }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const component = shallow(
      // $FlowFixMe
      <OptionsButton navigation={{ dispatch: clickFn }} />
    );
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'UnderConstruction',
    });
  });
});
