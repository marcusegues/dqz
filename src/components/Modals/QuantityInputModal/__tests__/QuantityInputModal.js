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
});
