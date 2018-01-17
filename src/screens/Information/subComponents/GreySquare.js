// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    width: 64,
    height: 64,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'roboto_regular',
    color: '#898989',
    fontSize: moderateScale(14),
  },
};

type GreySquareProps = {
  number: string,
};

export const GreySquare = ({ number }: GreySquareProps) => (
  <View style={ownStyles.container}>
    <Text style={ownStyles.text}>{number}</Text>
  </View>
);
