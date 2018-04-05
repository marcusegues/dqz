import renderer from 'react-test-renderer';
import React from 'react';
import { Logo } from '../subcomponents/Logo';

describe('BackArrow', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<Logo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
