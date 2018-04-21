import React from 'react';
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
  test('`text` prop renders correctly', () => {
    const wrapper = shallow(
      <ForeignVat
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    ).dive();
    const component = wrapper.find(AppInfoLink);
    expect(component.props('text').text).toEqual('www.wcoomd.org');
  });
});
