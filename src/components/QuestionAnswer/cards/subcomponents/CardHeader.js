import React from 'react';
import { View } from 'react-native';
import CardHeaderText from './CardHeaderText';
import { verticalScale } from '../../../../styles/Scaling';

const CardHeader = ({ text }) => (
  <View
    style={{
      width: '100%',
      marginTop: verticalScale(16),
      alignSelf: 'flex-start',
      marginHorizontal: verticalScale(16),
    }}
  >
    <CardHeaderText text={text} />
  </View>
);

export default CardHeader;
