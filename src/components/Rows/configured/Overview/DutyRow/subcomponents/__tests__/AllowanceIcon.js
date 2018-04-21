// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { AllowanceIcon } from '../AllowanceIcon';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AllowanceIcon', () => {
  test('AllowanceIcon renders correctly', () => {
    const tree = renderer
      .create(<AllowanceIcon quantity={4} unit="kg" text="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
