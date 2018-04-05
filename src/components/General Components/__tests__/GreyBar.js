import React from 'react';
import renderer from 'react-test-renderer';
import { GreyBar } from '../GreyBar';

describe('GreyBar', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<GreyBar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
