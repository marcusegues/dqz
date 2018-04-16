import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from 'react-native-modal';
import { QuantityInputMethod, QuantityInputModal } from '../QuantityInputModal';
import { AppModal } from '../../AppModal';
import { RedButton } from '../../../Buttons/RedButton';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const testObject = {
  quantityInputMethod: 'standardInput',
};

const mockFunc = jest.fn();

describe('QuantityInputModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(
        <QuantityInputModal
          confirmAction={mockFunc}
          category="test category"
          toggleModalVisible={mockFunc}
          modalVisible
          quantityInputMethod="standardInput"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('renders according to snapshot', () => {
    const component = renderer.create(<QuantityInputModal />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders Modal', () => {
    const wrapper = shallow(<QuantityInputModal />);
    const visibleModal = wrapper.setProps({ modalVisible: true });
    expect(visibleModal.length).toEqual(1);
  });
});
