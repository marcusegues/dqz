// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardHeaderText } from './CardHeaderText';
import { verticalScale } from '../../../../styles/Scaling';

type CardHeaderProps = {
  text: string,
  children?: any,
  style?: any,
};

export const CardHeader = ({ text, children, style }: CardHeaderProps) => (
  <View
    style={{
      marginTop: verticalScale(16),
      marginBottom: verticalScale(16),
      alignSelf: 'flex-start',
      marginHorizontal: verticalScale(16),
      ...style,
    }}
  >
    <CardHeaderText text={text} />
    {children}
  </View>
);

CardHeader.defaultProps = {
  children: [],
  style: {},
};
