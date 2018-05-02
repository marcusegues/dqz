import React from 'react';
import { shallow } from 'enzyme';
import { PurchasesOnlineOffline } from '../PurchasesOnlineOffline';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('PurchasesOnlineOffline', () => {
  test('PurchasesOnlineOffline renders as expected)', () => {
    const wrapper = shallow(<PurchasesOnlineOffline />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
