// @flow
import React from 'react';
// $FlowFixMe
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';

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
      style={{ marginTop: verticalScale(4) }}
    />
    <Text
      style={{
        color: '#1A1A1A',
        fontWeight: '300',
        fontFamily: 'roboto_light',
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
