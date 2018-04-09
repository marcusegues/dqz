import React from 'react';
import renderer from 'react-test-renderer';
import { PickerUnits } from '../subComponents/PickerUnits';

describe('PickerUnits', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<PickerUnits unit="kg" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
