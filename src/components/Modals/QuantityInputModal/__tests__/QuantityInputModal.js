import React from 'react';
import { shallow } from 'enzyme';
import { QuantityInputModal } from '../QuantityInputModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('QuantityInputModal', () => {
  test('renders Modal', () => {
    const wrapper = shallow(<QuantityInputModal />);
    const visibleModal = wrapper.setProps({ modalVisible: true });
    expect(visibleModal.length).toEqual(1);
  });

  test('shallow rendering of `standardInput`', () => {
    const wrapper = shallow(
      <QuantityInputModal
        modalVisible
        quantityInputMethod="standardInput"
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('shallow rendering of `customInput`', () => {
    const wrapper = shallow(
      <QuantityInputModal
        modalVisible
        quantityInputMethod="standardInput"
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    wrapper.setProps({
      quantityInputMethod: 'customInput',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
