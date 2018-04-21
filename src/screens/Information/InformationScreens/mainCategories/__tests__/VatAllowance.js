import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { VatAllowance } from '../VatAllowance';
//
jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('VatAllowance', () => {
  test('VatAllowance renders as expected', () => {
    const wrapper = shallow(<VatAllowance />);
    expect(wrapper).toMatchSnapshot();
  });
  test('VatAllowance renders as expected with language', () => {
    const wrapper = shallow(
      <VatAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('VatAllowance renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <VatAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('DutyAllowance renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <VatAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(1);
  });
});
