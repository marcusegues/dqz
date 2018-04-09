import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from 'react-native-modal';
import { QuantityInputModal } from '../QuantityInputModal';
import { AppModal } from '../../AppModal';
import { RedButton } from '../../../Buttons/RedButton';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('QuantityInputModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<QuantityInputModal quantityInputMethod={jest.fn()} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  //
  // describe('GoodQuantityListModal', () => {
  //   test('renders according to snapshot', () => {
  //     const component = renderer.create(<GoodQuantityListModal />).toJSON();
  //     expect(component).toMatchSnapshot();
  //   });
  test('renders Modal', () => {
    const wrapper = shallow(<QuantityInputModal />);
    const visibleModal = wrapper.setProps({ modalVisible: true });
    expect(visibleModal.length).toEqual(1);
  });
  // it('closes modal when button is clicked', () => {
  //   const wrapper = shallow(<QuantityInputModal />);
  //   wrapper.find(RedButton).simulate('click');
  //   // expect(wrapper.find(Modal).prop('modalVisible')).toEqual(false);
  //   expect(wrapper.find(Modal)).toHaveLength(1);
  // });
});
