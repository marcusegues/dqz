import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { PickerUnits } from '../subComponents/PickerUnits';

describe('PickerUnits', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<PickerUnits unit="kg" />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('has `kg` as a text', () => {
    const component = shallow(<PickerUnits unit="kg" />);
    const render = component.dive();
    expect(
      render
        .find(Text)
        .children()
        .text()
    ).toEqual('kg');
    expect(component).toMatchSnapshot();
  });
});
