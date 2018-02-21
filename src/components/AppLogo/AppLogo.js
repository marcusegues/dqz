// @flow
import React from 'react';
// $FlowFixMe
import { View, Image } from 'react-native';
import { moderateScale } from '../../styles/Scaling';

const logo = require('../../../assets/images/quickZollLogo.png');
const logoWithShadow = require('../../../assets/images/quickZollLogoWithShadow.png');

const ownStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(193),
    height: moderateScale(135),
  },
  logoWithShadow: {
    width: moderateScale(205),
    height: moderateScale(160),
  },
};

type AppLogoProps = {
  withShadow?: boolean,
};

export const AppLogo = ({ withShadow }: AppLogoProps) => (
  <View style={ownStyles.container}>
    <Image
      source={withShadow ? logoWithShadow : logo}
      style={withShadow ? ownStyles.logoWithShadow : ownStyles.logo}
      resizeMode="contain"
    />
  </View>
);

AppLogo.defaultProps = {
  withShadow: false,
};
