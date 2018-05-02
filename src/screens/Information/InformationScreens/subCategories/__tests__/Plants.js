import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Plants } from '../Plants';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('Plants', () => {
  test('Plants renders as expected', () => {
    const wrapper = shallow(<Plants />);
    expect(wrapper).toMatchSnapshot();
  });
  test('You can click it and it navigates to "VatAllowance"', () => {
    const wrapper = shallow(<Plants navigation={{ dispatch: clickFn }} />);
    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('press');
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'VatAllowance',
    });
  });
});
