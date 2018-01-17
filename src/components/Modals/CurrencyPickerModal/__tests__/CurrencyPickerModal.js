import React from 'react';
import renderer from 'react-test-renderer';
import { CurrencyPickerModal } from '../CurrencyPickerModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('Currency Picker', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<CurrencyPickerModal />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
