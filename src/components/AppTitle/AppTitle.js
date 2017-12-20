import React from 'react';
import { View, Text, Image } from 'react-native';
import { moderateScale, scale } from '../../styles/Scaling';

const img = require('../../../assets/images/logo_red.png');

const ownStyles = {
  titleWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  appTitleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  appTitleWe: {
    color: '#1A1A1A',
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(47),
    letterSpacing: 7,
  },
  appTitle: {
    fontFamily: 'exo_extraLight',
    color: '#1A1A1A',
    fontSize: moderateScale(32),
    letterSpacing: 8,
    fontWeight: '200',
  },
  logo: {
    width: null,
    height: scale(60),
    marginVertical: 10,
  },
};

const AppTitle = () => (
  <View style={ownStyles.appTitleContainer}>
    <Image source={img} style={ownStyles.logo} resizeMode="contain" />
    <View style={ownStyles.titleWrapper}>
      <Text style={ownStyles.appTitle}>CLARA</Text>
    </View>
  </View>
);

export default AppTitle;
