// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { AppLogo } from '../../../components/AppLogo/AppLogo';
import { scale, verticalScale } from '../../../styles/Scaling';
import type { Children } from '../../../types/generalTypes';

const ownStyles = {
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

type OnBoardingContainerProps = {
  children: Children,
};

export const OnBoardingContainer = ({ children }: OnBoardingContainerProps) => (
  <View style={ownStyles.container}>
    <AppLogo />
    {children}
  </View>
);
