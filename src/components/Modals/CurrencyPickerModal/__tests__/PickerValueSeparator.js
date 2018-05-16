import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { PickerValueSeparator } from '../subComponents/PickerValueSeparator';

describe('PickerValueSeparator', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<PickerValueSeparator separator="," />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('has `,` as a separator', () => {
    const component = shallow(<PickerValueSeparator separator="," />);
    const render = component.dive();
    expect(
      render
        .find(Text)
        .children()
        .text()
    ).toEqual(',');
    expect(component).toMatchSnapshot();
  });
});
