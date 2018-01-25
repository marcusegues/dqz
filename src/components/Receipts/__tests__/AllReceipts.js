import React from 'react';
import { shallow } from 'enzyme';
import { AllReceipts } from '../AllReceipts';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AllReceipts', () => {
  test('renders according to snapshot', () => {
    const component = shallow(<AllReceipts />).dive();
    expect(component).toMatchSnapshot();
  });
});
