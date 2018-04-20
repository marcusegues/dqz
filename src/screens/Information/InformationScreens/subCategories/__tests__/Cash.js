import React from 'react';
import { shallow } from 'enzyme';
import { Cash } from '../Cash';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('Cash', () => {
  test('Cash renders as expected', () => {
    const wrapper = shallow(<Cash />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Cash renders as expected with language', () => {
    const wrapper = shallow(<Cash i18n={{ language: 'de' }} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Cash renders as expected with language with dive()', () => {
    const wrapper = shallow(<Cash i18n={{ language: 'de', t: 'test' }} />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
