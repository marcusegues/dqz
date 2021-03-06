import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { CustomsProcedures } from '../CustomsProcedures';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
const clickFn = jest.fn();

describe('CustomsProcedures', () => {
  test('CustomsProcedures renders as expected', () => {
    const wrapper = shallow(<CustomsProcedures />);
    expect(wrapper).toMatchSnapshot();
  });
  test('CustomsProcedures renders as expected with language and with dive()', () => {
    const wrapper = shallow(
      <CustomsProcedures navigation={{ dispatch: clickFn }} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('You can click it', () => {
    const wrapper = shallow(
      <CustomsProcedures navigation={{ dispatch: clickFn }} />
    );
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(3);
  });
});
