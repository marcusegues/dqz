// @flow
import React from 'react';
// $FlowFixMe
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import {MAIN_BLACK} from "../../../styles/colors";
import {type as types} from "../../../styles/fonts";

const square = require('../../../../assets/images/redSquare.png');

type BulletTextProps = {
  text: string,
  style?: Object,
  onPress?: () => void,
};

export const BulletText = ({ text, style, onPress }: BulletTextProps) => (
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
      style={{ marginTop: verticalScale(8), height: moderateScale(8), width: moderateScale(8) }}
    />
    <Text
      style={{
        color: MAIN_BLACK,
        fontWeight: '300',
        fontFamily: types.light,
        lineHeight: moderateScale(21),
        paddingLeft: scale(4),
        ...style,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  </View>
);

BulletText.defaultProps = {
  style: {},
  onPress: () => {},
};
