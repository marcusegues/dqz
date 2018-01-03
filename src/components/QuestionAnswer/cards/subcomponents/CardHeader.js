import React from 'react';
import { View } from 'react-native';
import CardHeaderText from './CardHeaderText';
import { verticalScale } from '../../../../styles/Scaling';

const CardHeader = ({ text, children, style }) => (
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

export default CardHeader;
