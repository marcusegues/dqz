// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { DetailsIcon } from '../DetailsIcon';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('DetailsIcon', () => {
  test('DetailsIcon renders correctly with expanded=true', () => {
    const tree = renderer.create(<DetailsIcon expanded />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('DetailsIcon renders correctly with expanded=false', () => {
    const tree = renderer.create(<DetailsIcon expanded={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
