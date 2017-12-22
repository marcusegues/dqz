import React from 'react';
import { Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { moderateScale } from '../../../styles/Scaling';

const img = require('../../../../assets/images/done_big.png');

const ownStyles = {
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
};

const DoneButton = ({ handlePress }) => (
  <Touchable
    style={{}}
    background={Touchable.Ripple('#006699')}
    onPress={() => handlePress()}
  >
    <Image source={img} style={ownStyles.image} resizeMode="cover" />
  </Touchable>
);

export default DoneButton;
