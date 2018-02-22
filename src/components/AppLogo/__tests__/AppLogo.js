import renderer from 'react-test-renderer';
import React from 'react';
import { AppLogo } from '../AppLogo';

describe('AppLogo', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<AppLogo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
