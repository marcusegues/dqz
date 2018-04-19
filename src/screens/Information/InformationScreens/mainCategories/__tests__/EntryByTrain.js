import React from 'react';
import { shallow } from 'enzyme';
import { EntryByTrain } from '../EntryByTrain';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('EntryByTrain', () => {
  test('EntryByTrain renders as expected', () => {
    const wrapper = shallow(<EntryByTrain />);
    expect(wrapper).toMatchSnapshot();
  });
  test('EntryByTrain renders as expected with language', () => {
    const wrapper = shallow(
      <EntryByTrain
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('EntryByTrain renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <EntryByTrain
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
