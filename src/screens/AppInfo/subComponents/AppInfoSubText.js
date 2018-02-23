// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale, verticalScale } from '../../../styles/Scaling';

type AppInfoSubTextProps = {
  text: string,
  style?: Object,
};

export const AppInfoSubText = ({ text, style }: AppInfoSubTextProps) => (
  <Text
    style={{
      color: '#1A1A1A',
      fontWeight: '300',
      fontFamily: 'roboto_light',
      lineHeight: moderateScale(21),
      ...style,
    }}
  >
    {text}
  </Text>
);

AppInfoSubText.defaultProps = {
  style: {},
};
