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
});
