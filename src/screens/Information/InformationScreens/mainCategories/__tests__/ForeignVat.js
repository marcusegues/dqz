import React from 'react';
// $FlowFixMe
import { Linking, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { ForeignVat } from '../ForeignVat';
import { AppInfoLink } from '../../../../AppInfo/subComponents/AppInfoLink';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('ForeignVat', () => {
  test('ForeignVat renders as expected', () => {
    const wrapper = shallow(<ForeignVat />);
    expect(wrapper).toMatchSnapshot();
  });
  test('ForeignVat renders as expected with language', () => {
    const wrapper = shallow(
      <ForeignVat
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('ForeignVat renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <ForeignVat
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  // test('ForeignVat renders as expected and you can click the button', () => {
  //   const wrapper = shallow(
  //     <ForeignVat
  //       navigation={{ dispatch: clickFn }}
  //       i18n={{ language: 'de', t: 'test' }}
  //     />
  //   );
  //   const render = wrapper.dive();
  //   render
  //     .find(<AppInfoLink title="test" onPress={clickFn} />)
  //     .forEach(child => {
  //       child.simulate('press');
  //     });
  //   expect(clickFn.mock.calls.length).toBe(1);
  //   expect(render).toMatchSnapshot();
  // });
});
