import React from 'react';
import { shallow } from 'enzyme';
import { EntryByTrain } from '../EntryByTrain';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('EntryByTrain', () => {
  test('EntryByTrain renders as expected', () => {
    const wrapper = shallow(
      <EntryByTrain navigation={{ dispatch: clickFn }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('EntryByTrain renders with dive() as expected', () => {
    const wrapper = shallow(
      <EntryByTrain navigation={{ dispatch: clickFn }} />
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
