import renderer from 'react-test-renderer';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme/build/index';
import { AppTitle } from '../AppTitle';

describe('AppTitle', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<AppTitle />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('and it says CLARA', () => {
    const component = shallow(<AppTitle />);
    expect(component.containsMatchingElement(<Text>CLARA</Text>)).toBe(true);
  });
});
