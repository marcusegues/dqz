import React from 'react';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('ReceiptAfterPayment', () => {
  /*
  TODO: mock redux store, see https://gist.githubusercontent.com/jasongaare/6aadb9d1b99075b42c99a2ef4538e262/raw/f6fa67aae8b3a496ef772f5963f984be3d358e7d/CameraSettings.test.js

  test('renders according to snapshot', () => {
    const component = shallow(<ReceiptAfterPayment />).dive();
    expect(component).toMatchSnapshot();
  });

  test('Finds RedLogo', () => {
    const component = shallow(<ReceiptAfterPayment />).dive();
    expect(component.find('RedLogo').length).toBe(1);
  });
  */
  test('foo', () => expect(1 + 1).toBe(2));
});
