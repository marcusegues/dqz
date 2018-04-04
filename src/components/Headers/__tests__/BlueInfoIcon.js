import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import { BlueInfoIcon } from '../subcomponents/BlueInfoIcon';

test('BlueInfoIcon component renders correctly', () => {
  const tree = renderer.create(<BlueInfoIcon onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('onPress', () => {
  let i = 0;
  const onPress = () => (i += 1);
  const wrapperPress = shallow(<BlueInfoIcon onPress={onPress} />);

  expect(wrapperPress.prop('onPress')).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate('press');
  expect(i).toBe(1);
});
