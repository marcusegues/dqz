// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';

const ownStyles = {
  image: {
    width: 64,
    height: 64,
    alignSelf: 'center',
  },
};

type InformationRowIconProps = {
  source: string,
};

export const InformationRowIcon = ({ source }: InformationRowIconProps) => (
  <Image source={source} style={ownStyles.image} resizeMode="contain" />
);
