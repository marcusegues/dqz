// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';

type BulletTextProps = {
  text: string,
  style?: Object,
  onPress?: () => void,
};

export const BulletText = ({ text, style, onPress }: BulletTextProps) => (
  <Text
    style={{
      color: '#1A1A1A',
      fontWeight: '300',
      fontFamily: 'roboto_light',
      lineHeight: moderateScale(21),
      paddingLeft: scale(20),
      ...style,
    }}
    onPress={onPress}
  >
    {`\u2022   ${text}`}
  </Text>
);

BulletText.defaultProps = {
  style: {},
  onPress: () => {},
};
