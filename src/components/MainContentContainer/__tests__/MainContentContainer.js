import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { MainContentContainer } from '../MainContentContainer';

describe('MainContentContainer', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<MainContentContainer />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders children according to snapshot', () => {
    const component = shallow(
      <MainContentContainer>
        <Text>Mock children</Text>
      </MainContentContainer>
    );
    expect(component.dive()).toMatchSnapshot();
    expect(
      component.containsMatchingElement(<Text>Mock children</Text>)
    ).toBeTruthy();
  });
});
