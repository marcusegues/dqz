import React from 'react';
import renderer from 'react-test-renderer';
import { SwipeToDelete } from '../SwipeToDelete';

const clickFn = jest.fn();

describe('SwipeToDelete', () => {
  test('SwipeToDelete renders according to snapshot', () => {
    const component = renderer
      .create(<SwipeToDelete onPressDelete={clickFn} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
