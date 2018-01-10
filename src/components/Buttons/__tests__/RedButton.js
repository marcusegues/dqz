import renderer from 'react-test-renderer';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Touchable from 'react-native-platform-touchable';
import { RedButton } from '../RedButton';

describe('RedButton', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<RedButton text="text" onPress={jest.fn()} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('has uppercase text', () => {
    const str = 'foo';
    const component = shallow(<RedButton text={str} onPress={jest.fn()} />);
    expect(component.containsMatchingElement(Text)).toBe(true);
    expect(
      component.containsMatchingElement(<Text>{str.toUpperCase()}</Text>)
    ).toBe(true);
  });

  test('we can click it', () => {
    const clickFn = jest.fn();
    const component = shallow(<RedButton text="text" onPress={clickFn} />);
    component.find(Touchable).forEach(child => {
      child.simulate('press');
    });
    expect(clickFn).toBeCalled();
  });
});
