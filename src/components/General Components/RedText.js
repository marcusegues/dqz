// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../styles/Scaling';
import { MAIN_RED } from '../../styles/colors';
import { size, type } from '../../styles/fonts';

const ownStyles = {
  text: {
    color: MAIN_RED,
    fontFamily: type.medium,
    fontSize: moderateScale(size.medium),
  },
};

type RedTextProps = {
  text: string,
  style?: {},
};

export const RedText = ({ text, style }: RedTextProps) => (
  <Text style={[ownStyles.text, { ...style }]}>{text}</Text>
);

RedText.defaultProps = {
  style: {},
};
