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
    expect(wrapper).toMatchSnapshot();
  });
  test('FuelAndRepairs renders as expected with language', () => {
    const wrapper = shallow(
      <FuelAndRepairs
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('FuelAndRepairs renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <FuelAndRepairs
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('You can click it', () => {
    const wrapper = shallow(
      <FuelAndRepairs
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
