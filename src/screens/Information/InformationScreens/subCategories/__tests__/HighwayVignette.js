import React from 'react';
import { shallow } from 'enzyme';
import { HighwayVignette } from '../HighwayVignette';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('HighwayVignette', () => {
  test('HighwayVignette renders as expected', () => {
    const wrapper = shallow(<HighwayVignette />);
    expect(wrapper).toMatchSnapshot();
  });
});
