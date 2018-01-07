// @flow
import React from 'react';
// $FlowFixMe
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

type OnBoardingParagraphProps = {
  text: string,
};

export const OnBoardingParagraph = ({ text }: OnBoardingParagraphProps) => (
  <Text style={ownStyles.mainText}>{text}</Text>
);
