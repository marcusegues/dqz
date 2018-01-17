// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';

const logo = require('../../../../assets/images/logo.png');

export const Logo = () => (
  <Image source={logo} resizeMode="contain" style={{ width: 30, height: 30 }} />
);
