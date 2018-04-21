import React from 'react';
import renderer from 'react-test-renderer';
import { GoodQuantityListModal } from '../GoodQuantityListModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('GoodQuantityListModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<GoodQuantityListModal onPress={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
