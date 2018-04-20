import React from 'react';
import { shallow } from 'enzyme';
import { AuthorisationRequirements } from '../AuthorisationRequirements';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AuthorisationRequirements', () => {
  test('AuthorisationRequirements renders as expected', () => {
    const wrapper = shallow(<AuthorisationRequirements />);
    expect(wrapper).toMatchSnapshot();
  });
  test('AuthorisationRequirements renders as expected with language', () => {
    const wrapper = shallow(
      <AuthorisationRequirements i18n={{ language: 'de' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('AuthorisationRequirements renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <AuthorisationRequirements i18n={{ language: 'de', t: 'test' }} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
