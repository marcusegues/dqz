// @flow
import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { GoodQuantityGreyField } from '../GoodQuantityGreyField';
import { RedPlusIcon } from '../RedPlusIcon';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const mockFunc = jest.fn();

describe('GoodQuantityGreyField', () => {
  test('GoodQuantityGreyField with topText and plusIconText props renders correctly', () => {
    const tree = renderer
      .create(
        <GoodQuantityGreyField
          topText="topText"
          plusIconText="plusIconText"
          onPress={mockFunc}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('simulates click events', () => {
    const component = shallow(
      <GoodQuantityGreyField
        topText="topText"
        plusIconText="plusIconText"
        onPress={mockFunc}
      />
    );
    component.simulate('press');
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
