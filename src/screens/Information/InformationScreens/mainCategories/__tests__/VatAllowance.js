import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { VatAllowance } from '../VatAllowance';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

const wrapper = shallow(
  <VatAllowance i18n={{ language: 'de' }} navigation={{ dispatch: clickFn }} />
);

describe('VatAllowance', () => {
  test('VatAllowance renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('VatAllowance renders as expected with language with dive()', () => {
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(render).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(1);
  });
});
