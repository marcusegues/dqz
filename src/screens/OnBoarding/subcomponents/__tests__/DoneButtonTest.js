import React from 'react';
import renderer from 'react-test-renderer';
import { DoneButton } from '../DoneButton';

describe('Done Button', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<DoneButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
