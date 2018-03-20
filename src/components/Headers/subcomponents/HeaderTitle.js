// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';
import { MAIN_BLACK } from '../../../styles/colors';
import { size, type } from '../../../styles/fonts';

export const HeaderTitle = ({ text }: { text: string }) => (
  <Text
    style={{
      fontSize: moderateScale(size.large),
      color: MAIN_BLACK,
      fontFamily: type.medium,
      textAlign: 'center',
    }}
  >
    {text}
  </Text>
);
