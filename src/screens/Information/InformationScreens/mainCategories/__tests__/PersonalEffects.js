import React from 'react';
import { shallow } from 'enzyme';
import { PersonalEffects } from '../PersonalEffects';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('PersonalEffects', () => {
  test('PersonalEffects renders as expected', () => {
    const wrapper = shallow(<PersonalEffects />);
    expect(wrapper).toMatchSnapshot();
  });
  test('PersonalEffects renders as expected with language', () => {
    const wrapper = shallow(
      <PersonalEffects
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('PersonalEffects renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <PersonalEffects
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
