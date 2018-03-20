// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text, Platform } from 'react-native';
import { translate } from 'react-i18next';

import { scale, verticalScale, moderateScale } from '../../styles/Scaling';
import type { TFunction } from '../../types/generalTypes';

const ownStyles = {
  locatorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: Platform.OS === 'ios' ? verticalScale(5) : verticalScale(10),
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

type NavBarProps = {
  step: 1 | 2 | 3,
};

const NavBarInner = ({ step, t }: NavBarProps & { t: TFunction }) => (
  <View style={ownStyles.locatorContainer}>
    <Text
      style={
        step === 1 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      {t('navbarFirst')}
    </Text>
    <View style={ownStyles.locatorLine} />
    <Text
      style={
        step === 2 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      {t('navbarSecond')}
    </Text>
    <View style={ownStyles.locatorLine} />
    <Text
      style={
        step === 3 ? ownStyles.activeLocatorText : ownStyles.unhighlightedText
      }
    >
      {t('navbarThird')}
    </Text>
  </View>
);

export const NavBar = (translate(['general'])(NavBarInner): ComponentType<
  NavBarProps
>);
