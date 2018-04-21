// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { TotalOwed } from '../TotalOwed';

describe('TotalOwed', () => {
  test('TotalOwed renders correctly', () => {
    const tree = renderer.create(<TotalOwed result="test result" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
