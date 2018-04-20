import React from 'react';
import { shallow } from 'enzyme';
import { SouvenirsAndSpeciesProtection } from '../SouvenirsAndSpeciesProtection';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('SouvenirsAndSpeciesProtection', () => {
  test('SouvenirsAndSpeciesProtection renders as expected', () => {
    const wrapper = shallow(<SouvenirsAndSpeciesProtection />);
    expect(wrapper).toMatchSnapshot();
  });
  test('SouvenirsAndSpeciesProtection renders as expected with language', () => {
    const wrapper = shallow(
      <SouvenirsAndSpeciesProtection i18n={{ language: 'de' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('SouvenirsAndSpeciesProtection renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <SouvenirsAndSpeciesProtection i18n={{ language: 'de', t: 'test' }} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
