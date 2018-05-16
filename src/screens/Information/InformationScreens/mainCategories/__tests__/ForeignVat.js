import React from 'react';
import { shallow } from 'enzyme';
import { ForeignVat } from '../ForeignVat';
import { AppInfoLink } from '../../../../AppInfo/subComponents/AppInfoLink';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const wrapper = shallow(<ForeignVat />);

describe('ForeignVat', () => {
  test('ForeignVat renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });

  test('"text" prop renders correctly', () => {
    const render = wrapper.dive();
    const component = render.find(AppInfoLink);
    expect(component.props('text').text).toEqual('www.wcoomd.org');
  });
});
