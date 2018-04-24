import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { GoodQuantityListModal } from '../GoodQuantityListModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('GoodQuantityListModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<GoodQuantityListModal onPress={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('LegalNoticeModal renders according to snapshot', () => {
    const component = renderer.create(<GoodQuantityListModal />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('shallow rendering with `modalVisible=true`', () => {
    const wrapper = shallow(
      <GoodQuantityListModal
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const visibleModal = wrapper.setProps({ modalVisible: true });
    expect(visibleModal.length).toEqual(1);
    expect(wrapper.props('modalVisible')).toBeTruthy();
  });
});
