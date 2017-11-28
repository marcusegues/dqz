import React from 'react';
import { Image } from 'react-native';

const logo = require('../../../../assets/images/logo.png');

const Logo = () => (
  <Image source={logo} resizeMode="contain" style={{ width: 30, height: 30 }} />
);

export default Logo;
