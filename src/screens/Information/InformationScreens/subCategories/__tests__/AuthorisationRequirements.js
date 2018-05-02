import React from 'react';
import { shallow } from 'enzyme';
import { AuthorisationRequirements } from '../AuthorisationRequirements';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AuthorisationRequirements', () => {
  test('AuthorisationRequirements renders as expected', () => {
    const wrapper = shallow(<AuthorisationRequirements />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
