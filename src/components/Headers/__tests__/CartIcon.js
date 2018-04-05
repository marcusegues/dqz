import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { CartIcon } from '../subcomponents/CartIcon';

test('CartIcon component renders correctly', () => {
  const tree = renderer.create(<CartIcon onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
//
// test('onPress', () => {
//   let i = 0;
//   const onPress = () => {
//     i += 1;
//   };
//   const wrapperPress = shallow(<CartIcon onPress={onPress} />);
//
//   expect(wrapperPress.prop('onPress')).toBe(onPress); // uses the right handler
//   expect(i).toBe(0);
//   wrapperPress.simulate('press');
//   expect(i).toBe(1);
// });
//
//
test('we can click it', () => {
  const clickFn = jest.fn();
  const component = shallow(<CartIcon onPress={clickFn} />);
  component.find(Touchable).simulate('press');
  expect(clickFn).toBeCalled();
});
