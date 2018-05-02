import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Food } from '../Food';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

const wrapper = shallow(<Food navigation={{ dispatch: clickFn }} />);

describe('Food', () => {
  test('Food renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('Food renders as expected with language with dive()', () => {
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(render).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(2);
  });
});
