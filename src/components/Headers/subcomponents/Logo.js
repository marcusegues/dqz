import React from 'react';
import { Image } from 'react-native';

const Logo = () => (
  <Image
    source={require('../../../../assets/images/logo.png')}
    resizeMode="contain"
    style={{ width: 30, height: 30 }}
  />
);

export default Logo;
