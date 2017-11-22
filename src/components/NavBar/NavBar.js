import React from 'react';
import { View, Text } from 'react-native';

import { scale, verticalScale, moderateScale } from '../../styles/Scaling';

const NavBar = ({ step }) => (
  <View style={ownStyles.locatorContainer}>
    <Text
      style={step === 1 ? ownStyles.activeLocatorText : ownStyles.locatorText}
    >
      Ihre Daten
    </Text>
    <View style={ownStyles.locatorLine} />
    <Text style={ownStyles.locatorText}>Ihre Waren</Text>
    <View style={ownStyles.locatorLine} />
    <Text style={ownStyles.locatorText}>Bezahlung</Text>
  </View>
);

export default NavBar;

const ownStyles = {
  locatorContainer: {
    flex: 0.07,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: verticalScale(15),
    paddingHorizontal: scale(15),
    borderRadius: 7,
    backgroundColor: '#4A4A4A',
  },
  activeLocatorText: {
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(14, 0.4),
    lineHeight: moderateScale(16),
    color: '#fff',
  },
  locatorText: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(16),
    fontWeight: '300',
    color: '#fff',
  },
  locatorLine: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: scale(5),
    borderColor: '#fff',
  },
};
