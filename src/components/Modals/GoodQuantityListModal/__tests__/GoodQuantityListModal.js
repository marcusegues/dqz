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
      .create(<GoodQuantityListModal onPress={clickFn} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('shallow rendering with `modalVisible=true`', () => {
    const wrapper = shallow(
      <GoodQuantityListModal i18n={{ language: 'de', t: 'test' }} />
    );
    wrapper.setProps({ modalVisible: true });
    expect('modalVisible' in wrapper.props()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
