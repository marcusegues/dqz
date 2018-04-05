// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextInputWrapper } from '../TextInputWrapper';

// jest.mock('TextInputWrapper', () => {
//   return {
//     focus: jest.fn(),
//   };
// });

test('BlueInfoIcon component renders correctly', () => {
  const tree = renderer
    .create(<TextInputWrapper focus onChangeText={() => {}} value="44" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//
// describe('TextInputWrapper', () => {
//   const component = renderer
//     .create(<TextInputWrapper onChangeText={() => {}} value="44" />)
//     .toJSON();
//   expect(component).toMatchSnapshot();
// });
