import React from 'react';
// $FlowFixMe
import { shallow } from 'enzyme';
import { Forgery } from '../Forgery';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const wrapper = shallow(<Forgery />);

describe('Forgery', () => {
  test('Forgery renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
