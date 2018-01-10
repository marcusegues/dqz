import React from 'react';
import renderer from 'react-test-renderer';
import { CheckBox } from '../CheckBox';

describe('CheckBox', () => {
  test('renders according to snapshot unchecked', () => {
    const component = renderer.create(<CheckBox checked={false} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders according to snapshot checked', () => {
    const component = renderer.create(<CheckBox checked />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
