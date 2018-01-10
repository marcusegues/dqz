import React from 'react';
import renderer from 'react-test-renderer';
import { QuantityIcon } from '../QuantityIcon';

describe('QuantityIcon', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<QuantityIcon quantity={100} unit="foos" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
