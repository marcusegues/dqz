// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';
import { scale } from '../../../styles/Scaling';

const ownStyles = {
  logo: {
    flex: 1,
    width: null,
    height: scale(48),
    marginTop: 10,
  },
};

const logo = require('../../../../assets/images/logo_red.png');

const RedLogo = () => (
  <Image source={logo} style={ownStyles.logo} resizeMode="contain" />
);

export default RedLogo;
