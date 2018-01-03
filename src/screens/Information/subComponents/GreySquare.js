import React from 'react';
import { Text, View } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    width: 64,
    height: 64,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'roboto_regular',
    color: '#898989',
    fontSize: moderateScale(14),
  },
};

const GreySquare = ({ number }) => (
  <View style={ownStyles.container}>
    <Text style={ownStyles.text}>{number}</Text>
  </View>
);

export default GreySquare;
