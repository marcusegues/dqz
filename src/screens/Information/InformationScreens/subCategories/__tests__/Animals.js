import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Animals } from '../Animals';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('Animals', () => {
  test('Animals renders as expected', () => {
    const wrapper = shallow(<Animals />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Animals renders as expected with language', () => {
    const wrapper = shallow(
      <Animals navigation={{ dispatch: clickFn }} i18n={{ language: 'de' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('Animals renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <Animals
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('Animals renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <Animals
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
