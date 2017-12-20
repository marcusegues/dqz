import React from 'react';
import { View, Text } from 'react-native';

import { scale, verticalScale, moderateScale } from '../../styles/Scaling';

const ownStyles = {
  locatorContainer: {
    // flex: 1,
    // flex: 0.07,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
    paddingVertical: 10,
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
  unhighlightedText: {
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

const NavBar = ({ step }) => (
  <View style={ownStyles.locatorContainer}>
    <Text
      style={
        step === 1 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      Ihre Reise
    </Text>
    <View style={ownStyles.locatorLine} />
    <Text
      style={
        step === 2 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      Bezahlung
    </Text>
    <View style={ownStyles.locatorLine} />
    <Text
      style={
        step === 3 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      Zollschein
    </Text>
  </View>
);

export default NavBar;
