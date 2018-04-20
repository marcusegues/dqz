import React from 'react';
import { shallow } from 'enzyme';
import { RoadTax } from '../RoadTax';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('RoadTax', () => {
  test('RoadTax renders as expected', () => {
    const wrapper = shallow(<RoadTax />);
    expect(wrapper).toMatchSnapshot();
  });
  test('RoadTax renders as expected with language', () => {
    const wrapper = shallow(<RoadTax i18n={{ language: 'de' }} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('RoadTax renders as expected with language with dive()', () => {
    const wrapper = shallow(<RoadTax i18n={{ language: 'de', t: 'test' }} />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
