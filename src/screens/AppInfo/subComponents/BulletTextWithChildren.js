// @flow
import React from 'react';
// $FlowFixMe
import { Image, View } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import type { Children } from '../../../types/generalTypes';

const square = require('../../../../assets/images/redSquare.png');

type BulletTextWithChildrenProps = {
  style?: Object,
  children?: Children,
};

export const BulletTextWithChildren = ({
  children,
  style,
}: BulletTextWithChildrenProps) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginRight: scale(10),
      marginBottom: verticalScale(5),
      ...style,
    }}
  >
    <Image
      source={square}
      resizeMode="center"
      style={{
        marginTop: verticalScale(8),
        height: moderateScale(8),
        width: moderateScale(8),
        marginRight: scale(4),
      }}
    />
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      {children}
    </View>
  </View>
);

BulletTextWithChildren.defaultProps = {
  style: {},
  children: [],
};
