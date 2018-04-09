import React from 'react';
import renderer from 'react-test-renderer';
import { MainContentContainer } from '../MainContentContainer';

describe('MainContentContainer', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<MainContentContainer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
