import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { VatAllowance } from '../VatAllowance';
//
jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('VatAllowance', () => {
  test('VatAllowance renders as expected', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(
      <VatAllowance
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  // test('VatAllowance component renders correctly', () => {
  //   const tree = renderer
  //     .create(<VatAllowance i18n={{ language: 'de' }} navigation={undefined} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
