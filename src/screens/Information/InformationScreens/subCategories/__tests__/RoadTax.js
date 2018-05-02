import React from 'react';
import { shallow } from 'enzyme';
import { RoadTax } from '../RoadTax';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('RoadTax', () => {
  test('RoadTax renders as expected', () => {
    const wrapper = shallow(<RoadTax />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
