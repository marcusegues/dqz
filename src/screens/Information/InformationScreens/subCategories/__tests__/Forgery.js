import React from 'react';
// $FlowFixMe
import { shallow } from 'enzyme';
import { Forgery } from '../Forgery';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('Forgery', () => {
  test('Forgery renders as expected', () => {
    const wrapper = shallow(<Forgery />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Forgery renders as expected with language', () => {
    const wrapper = shallow(<Forgery i18n={{ language: 'de' }} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Forgery renders as expected with language with dive()', () => {
    const wrapper = shallow(<Forgery i18n={{ language: 'de', t: 'test' }} />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
