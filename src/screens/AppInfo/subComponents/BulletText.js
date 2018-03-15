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
  additionalText?: string,
  additionalTextStyle?: Object,
};

export const BulletText = ({
  text,
  style,
  additionalText,
  additionalTextStyle,
}: BulletTextProps) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginRight: scale(10),
      marginBottom: verticalScale(5),
    }}
  >
    <View
      style={{
        height: moderateScale(20),
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={square}
        resizeMode="center"
        style={{
          height: moderateScale(6),
          width: moderateScale(6),
        }}
      />
    </View>
    <Text
      style={{
        color: MAIN_BLACK,
        fontFamily: type.light,
        lineHeight: moderateScale(18),
        paddingLeft: scale(4),
        ...style,
      }}
    >
      {text}
      <Text style={additionalTextStyle}> {additionalText}</Text>
    </Text>
  </View>
);

BulletText.defaultProps = {
  style: {},
  additionalTextStyle: {},
  additionalText: '',
};
