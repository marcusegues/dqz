import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { DutyAllowance } from '../DutyAllowance';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('DutyAllowance', () => {
  test('DutyAllowance renders as expected', () => {
    const wrapper = shallow(<DutyAllowance />);
    expect(wrapper).toMatchSnapshot();
  });
  test('DutyAllowance renders as expected with language', () => {
    const wrapper = shallow(
      <DutyAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('DutyAllowance renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <DutyAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('DutyAllowance renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <DutyAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(3);
  });
});
