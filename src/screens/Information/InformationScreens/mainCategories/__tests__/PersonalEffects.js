import React from 'react';
import { shallow } from 'enzyme';
import { PersonalEffects } from '../PersonalEffects';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('PersonalEffects', () => {
  test('PersonalEffects renders as expected', () => {
    const wrapper = shallow(<PersonalEffects />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
