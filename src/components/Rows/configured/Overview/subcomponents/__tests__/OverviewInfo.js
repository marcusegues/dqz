// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { OverviewInfo } from '../OverviewInfo';

describe('OverviewInfo', () => {
  test('OverviewInfo renders correctly with children', () => {
    const tree = renderer
      .create(
        <OverviewInfo title="test title" subtitle="test subtitle">
          <Text>Children</Text>
        </OverviewInfo>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
