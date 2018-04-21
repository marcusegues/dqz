import React from 'react';
import renderer from 'react-test-renderer';
import { SwipeToDelete } from '../SwipeableContent/configured/SwipeToDelete';

describe('SwipeToDelete', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<SwipeToDelete onPressDelete={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
