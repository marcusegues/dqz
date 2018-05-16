import React from 'react';
import { shallow } from 'enzyme';
import { PeopleInfo } from '../PeopleInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('PeopleInfo', () => {
  test('PeopleInfo renders as expected', () => {
    const wrapper = shallow(<PeopleInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
