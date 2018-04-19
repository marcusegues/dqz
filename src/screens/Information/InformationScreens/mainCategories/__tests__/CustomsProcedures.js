import React from 'react';
import { shallow } from 'enzyme';
import { CustomsProcedures } from '../CustomsProcedures';
import { TouchableOpacity } from 'react-native';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
const clickFn = jest.fn();

describe('CustomsProcedures', () => {
  test('CustomsProcedures renders as expected', () => {
    const wrapper = shallow(<CustomsProcedures />);
    expect(wrapper).toMatchSnapshot();
  });
  test('CustomsProcedures renders as expected', () => {
    const wrapper = shallow(
      <CustomsProcedures
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    // console.log(wrapper.props());
    expect(wrapper).toMatchSnapshot();
  });
  test('CustomsProcedures renders as expected with language and with dive()', () => {
    const wrapper = shallow(
      <CustomsProcedures
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('CustomsProcedures renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <CustomsProcedures
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
