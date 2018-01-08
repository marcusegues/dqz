/* global describe, test, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReceiptAfterPayment from '../ReceiptAfterPayment';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('ReceiptAfterPayment', () => {
  test('renders according to snapshot', () => {
    const component = shallow(<ReceiptAfterPayment />).dive();
    expect(component).toMatchSnapshot();
  });

  test('Finds RedLogo', () => {
    const component = shallow(<ReceiptAfterPayment />).dive();
    expect(component.find('RedLogo').length).toBe(1);
  });
});
