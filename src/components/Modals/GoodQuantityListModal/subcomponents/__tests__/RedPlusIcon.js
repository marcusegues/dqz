import renderer from 'react-test-renderer';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { shallow } from 'enzyme';
import { RedPlusIcon } from '../RedPlusIcon';
import { MAIN_RED } from '../../../../../styles/colors';
import { moderateScale } from '../../../../../styles/Scaling';

const mockPress = jest.fn();

describe('RedPlusIcon', () => {
  test('RedPlusIcon component renders correctly', () => {
    const tree = renderer.create(<RedPlusIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('RedPlusIcon onPress', () => {
    let i = 0;
    const onPress = () => {
      i += 1;
    };
    const wrapper = shallow(<RedPlusIcon onPress={onPress} />);
    expect(wrapper.prop('onPress')).toBe(onPress);
    expect(i).toBe(0);
    wrapper.simulate('press');
    expect(i).toBe(1);
  });

  test('RedPlusIcon with setting props', () => {
    const wrap = shallow(<RedPlusIcon onPress={mockPress} />);
    wrap.setProps({ onPress: mockPress });
    expect('onPress' in wrap.props()).toEqual(true);
    expect(wrap.props(mockPress).onPress).toEqual(mockPress);
  });

  test('RedPlusIcon should contain icon', () => {
    const wrap = shallow(<RedPlusIcon onPress={mockPress} />);
    expect(
      wrap.containsMatchingElement(
        <Entypo
          name="circle-with-plus"
          size={moderateScale(36)}
          color={MAIN_RED}
        />
      )
    ).toBeTruthy();
  });
});
