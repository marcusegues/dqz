// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';

type BulletTextProps = {
  text: string,
  style?: Object,
};

export const BulletText = ({ text, style }: BulletTextProps) => (
  <Text
    style={{
      color: '#1A1A1A',
      fontWeight: '300',
      fontFamily: 'roboto_light',
      lineHeight: moderateScale(21),
      paddingLeft: scale(20),
      ...style,
    }}
  >
    {`\u2022   ${text}`}
  </Text>
);

BulletText.defaultProps = {
  style: {},
};
