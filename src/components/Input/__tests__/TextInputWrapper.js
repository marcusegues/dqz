// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextInputWrapper } from '../TextInputWrapper';

test('TextInputWrapper component renders correctly', () => {
  const tree = renderer
    .create(<TextInputWrapper onChangeText={() => {}} value="44" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
