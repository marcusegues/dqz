import React from 'react';
import { shallow } from 'enzyme';
import { QuantityInputModal } from '../QuantityInputModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('QuantityInputModal', () => {
  test('renders Modal', () => {
    const wrapper = shallow(<QuantityInputModal />);
    expect(wrapper).toMatchSnapshot();
  });

  test('shallow rendering of `standardInput`', () => {
    const wrapper = shallow(
      <QuantityInputModal modalVisible quantityInputMethod="standardInput" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('shallow rendering of `customInput`', () => {
    const wrapper = shallow(
      <QuantityInputModal modalVisible quantityInputMethod="customInput" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
