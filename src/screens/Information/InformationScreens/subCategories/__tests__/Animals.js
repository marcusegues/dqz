import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Animals } from '../Animals';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

const wrapper = shallow(
  <Animals navigation={{ dispatch: clickFn }} i18n={{ language: 'de' }} />
);

describe('Animals', () => {
  test('Animals renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('you can click it', () => {
    const render = wrapper.dive();
    render.find(TouchableOpacity).simulate('press');
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(1);
  });
});
