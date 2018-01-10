import React from 'react';
import renderer from 'react-test-renderer';
import { RightChevronIcon } from '../RightChevronIcon';

describe('RightChevronIcon', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<RightChevronIcon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
