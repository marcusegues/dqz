import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { NetValueModal } from '../../NetValueModal/NetValueModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('NetValueModal', () => {
  test('NetValueModal renders according to snapshot', () => {
    const component = renderer.create(<NetValueModal />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('shallow rendering with `modalVisible=true`', () => {
    const wrapper = shallow(
      <NetValueModal modalVisible={clickFn} toggleModalVisible={clickFn} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
