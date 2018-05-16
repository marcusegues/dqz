import React from 'react';
import { shallow } from 'enzyme';
import { Cash } from '../Cash';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('Cash', () => {
  test('Cash renders as expected', () => {
    const wrapper = shallow(<Cash />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
