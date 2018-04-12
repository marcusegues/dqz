import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { VatAllowance } from '../VatAllowance';
//
// jest.mock('react-i18next', () => ({
//   translate: () => Component => props => <Component t={() => ''} {...props} />,
// }));

describe('VatAllowance', () => {
  // test('renders according to snapshot', () => {
  //   const component = renderer.create(<VatAllowance navigation={} />).toJSON();
  //   expect(component).toMatchSnapshot();
  // });
  test('renders as expected', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(
      // $FlowFixMe
      <VatAllowance navigation={clickFn} />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
