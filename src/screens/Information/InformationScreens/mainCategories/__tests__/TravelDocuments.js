import React from 'react';
import { shallow } from 'enzyme';
import { TravelDocuments } from '../TravelDocuments';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('TravelDocuments', () => {
  test('TravelDocuments renders as expected', () => {
    const wrapper = shallow(<TravelDocuments />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
