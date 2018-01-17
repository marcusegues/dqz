// @flow
import React from 'react';
// $FlowFixMe
import { Image } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { moderateScale } from '../../../styles/Scaling';

const img = require('../../../../assets/images/done_big.png');

const ownStyles = {
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
};

type DoneButtonProps = {
  onPress: () => void,
};

export const DoneButton = ({ onPress }: DoneButtonProps) => (
  <Touchable background={Touchable.Ripple('#006699')} onPress={() => onPress()}>
    <Image source={img} style={ownStyles.image} resizeMode="cover" />
  </Touchable>
);
