import React from 'react';
// $FlowFixMe
import { shallow } from 'enzyme';
import { InformationSubCategories } from '../InformationSubCategories';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('InformationSubCategories', () => {
  test('InformationSubCategories renders as expected', () => {
    const wrapper = shallow(<InformationSubCategories />);
    expect(wrapper).toMatchSnapshot();
  });
});
