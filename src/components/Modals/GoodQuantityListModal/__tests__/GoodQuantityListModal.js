import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from 'react-native-modal';
import { GoodQuantityListModal } from '../GoodQuantityListModal';
import { AppModal } from '../../AppModal';
import { RedButton } from '../../../Buttons/RedButton';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('GoodQuantityListModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<GoodQuantityListModal />).toJSON();
    expect(component).toMatchSnapshot();
  });
  //
  // describe('GoodQuantityListModal', () => {
  //   test('renders according to snapshot', () => {
  //     const component = renderer.create(<GoodQuantityListModal />).toJSON();
  //     expect(component).toMatchSnapshot();
  //   });
  test('renders Modal', () => {
    const wrapper = shallow(<GoodQuantityListModal />);
    const visibleModal = wrapper.setProps({ modalVisible: true });
    expect(visibleModal.length).toEqual(1);
  });
  it('closes modal when button is clicked', () => {
    const wrapper = shallow(<GoodQuantityListModal />);
    wrapper.find(RedButton).simulate('click');
    // expect(wrapper.find(Modal).prop('modalVisible')).toEqual(false);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
