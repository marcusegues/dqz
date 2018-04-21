import React from 'react';
import { shallow } from 'enzyme';
import { PeopleInfo } from '../PeopleInfo';

import Immutable, { RecordFactory, RecordOf } from 'immutable';
//
// type PeopleContent = {
//   adults: number,
//   minors: number,
// };
// export const makePeopleRecord: RecordFactory<PeopleContent> = Immutable.Record({
//   adults: 1,
//   minors: 0,
// });
const people = Immutable.Record({
  // adults: 1,
  // minors: 0,
});

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('PeopleInfo', () => {
  test('PeopleInfo renders as expected', () => {
    const wrapper = shallow(<PeopleInfo />);
    expect(wrapper).toMatchSnapshot();
  });
  test('PeopleInfo renders as expected with language', () => {
    const wrapper = shallow(<PeopleInfo i18n={{ language: 'de' }} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('PeopleInfo renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <PeopleInfo i18n={{ language: 'de', t: 'test' }} people={people} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
