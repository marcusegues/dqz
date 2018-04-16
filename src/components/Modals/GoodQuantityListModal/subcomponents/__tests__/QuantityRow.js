// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
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
      />
    );
    component.find(Touchable).simulate('press');
    // expect(mockFunc).toBeCalled();
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  // test('simulates click events', () => {
  //   const component = shallow(
  //     <GoodQuantityGreyField
  //       topText="topText"
  //       plusIconText="plusIconText"
  //       onPress={mockFunc}
  //     />
  //   );
  //   component.find(RedPlusIcon).simulate('press');
  //   // component.find(TouchableOpacity).simulate('press');
  //   expect(mockFunc.mock.calls.length).toBe(1);
  // });
});
