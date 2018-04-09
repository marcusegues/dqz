import React from 'react';
import renderer from 'react-test-renderer';
import { PickerValueSeparator } from '../subComponents/PickerValueSeparator';

describe('PickerValueSeparator', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<PickerValueSeparator separator="," />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
