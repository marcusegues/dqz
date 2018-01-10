// @flow

import renderer from 'react-test-renderer';
import React from 'react';
import { AppTitle } from '../AppTitle';

describe('AppTitle', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<AppTitle />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
