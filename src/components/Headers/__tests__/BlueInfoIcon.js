import renderer from 'react-test-renderer';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { shallow } from 'enzyme';
import { BlueInfoIcon } from '../subcomponents/BlueInfoIcon';
import { moderateScale } from '../../../styles/Scaling';

describe('BlueInfoIcon', () => {
  test('BlueInfoIcon component renders correctly', () => {
    const tree = renderer.create(<BlueInfoIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('BlueInfoIcon onPress', () => {
    let i = 0;
    const onPress = () => {
      i += 1;
    };
    const wrapper = shallow(<BlueInfoIcon onPress={onPress} />);

    expect(wrapper.prop('onPress')).toBe(onPress); // uses the right handler
    expect(i).toBe(0);
    wrapper.simulate('press');
    expect(i).toBe(1);
  });

  test('BlueInfoIcon with setting props', () => {
    const onPress = jest.fn();
    const wrap = shallow(<BlueInfoIcon onPress={onPress} />);
    wrap.setProps({ onPress: 'TestPress' });
    expect('onPress' in wrap.props()).toEqual(true);
    expect(wrap.props(onPress).onPress).toEqual('TestPress');
  });

  test('BlueInfoIcon should contain icon', () => {
    const onPress = jest.fn();
    const wrap = shallow(<BlueInfoIcon onPress={onPress} />);
    expect(
      wrap.containsMatchingElement(
        <MaterialCommunityIcons
          name="information"
          size={moderateScale(30)}
          color="#006699"
        />
      )
    ).toBeTruthy();
  });
  test('should handle button presses', () => {
    const onPress = jest.fn();
    const button = shallow(<BlueInfoIcon onPress={onPress} />);
    button.simulate('press');
    expect(onPress.mock.calls.length).toBe(1);
  });
});
