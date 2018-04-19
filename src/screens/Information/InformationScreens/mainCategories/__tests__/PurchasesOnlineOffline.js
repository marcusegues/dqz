import React from 'react';
import { shallow } from 'enzyme';
import { PurchasesOnlineOffline } from '../PurchasesOnlineOffline';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('PurchasesOnlineOffline', () => {
  test('PurchasesOnlineOffline renders as expected', () => {
    const wrapper = shallow(<PurchasesOnlineOffline />);
    expect(wrapper).toMatchSnapshot();
  });
  test('PurchasesOnlineOffline renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <PurchasesOnlineOffline
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
