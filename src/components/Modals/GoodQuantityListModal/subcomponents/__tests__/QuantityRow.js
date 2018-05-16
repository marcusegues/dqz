// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { QuantityRow } from '../QuantityRow';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const mockFunc = jest.fn();

describe('QuantityRow', () => {
  test('QuantityRow with topText and plusIconText props renders correctly', () => {
    const tree = renderer
      .create(
        <QuantityRow
          category="Meat"
          quantity={6}
          onDelete={mockFunc}
          date="23.02.2018"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('simulates click events', () => {
    const component = shallow(
      <QuantityRow
        category="Meat"
        quantity={6}
        onDelete={mockFunc}
        date="23.02.2018"
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = component.dive();
    render.find(Touchable).simulate('press');
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
