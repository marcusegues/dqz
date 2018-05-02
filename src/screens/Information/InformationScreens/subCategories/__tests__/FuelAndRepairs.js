import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { FuelAndRepairs } from '../FuelAndRepairs';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('FuelAndRepairs', () => {
  test('FuelAndRepairs renders as expected', () => {
    const wrapper = shallow(<FuelAndRepairs />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('FuelAndRepairs renders as expected with navigation', () => {
    const wrapper = shallow(
      <FuelAndRepairs navigation={{ dispatch: clickFn }} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('it navigates to "VatAllowance" on button click', () => {
    const wrapper = shallow(
      <FuelAndRepairs navigation={{ dispatch: clickFn }} />
    );
    const render = wrapper.dive();
    render.find(TouchableOpacity).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'VatAllowance',
    });
  });
});
