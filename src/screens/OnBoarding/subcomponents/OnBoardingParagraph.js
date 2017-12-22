import React from 'react';
import { Text } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';

const ownStyles = {
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(18),
    textAlign: 'center',
    lineHeight: moderateScale(27),
    color: '#4A4A4A',
    paddingHorizontal: scale(14),
  },
};

const OnBoardingParagraph = ({ text }) => (
  <Text style={ownStyles.mainText}>{text}</Text>
);

export default OnBoardingParagraph;
