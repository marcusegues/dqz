// @flow
import React from 'react';
// $FlowFixMe
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import { MAIN_BLACK } from '../../../styles/colors';
import { type } from '../../../styles/fonts';

const square = require('../../../../assets/images/redSquare.png');

type BulletTextProps = {
  text: string,
  style?: Object,
};

export const BulletText = ({ text, style }: BulletTextProps) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginRight: scale(10),
      marginBottom: verticalScale(5),
    }}
  >
    <Image
      source={square}
      resizeMode="center"
      style={{
        marginTop: verticalScale(8),
        height: moderateScale(8),
        width: moderateScale(8),
      }}
    />
    <Text
      style={{
        color: MAIN_BLACK,
        fontWeight: '300',
        fontFamily: type.light,
        lineHeight: moderateScale(21),
        paddingLeft: scale(4),
        ...style,
      }}
    >
      {text}
    </Text>
  </View>
);

BulletText.defaultProps = {
  style: {},
};
