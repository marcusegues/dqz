// @flow
import React from 'react';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { CardHeaderSubText } from '../../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { moderateScale, verticalScale } from '../../../../styles/Scaling';
import { MAIN_RED } from '../../../../styles/colors';
import { RedPlusIcon } from './RedPlusIcon';

const ownStyles = {
  container: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 0,
  },
  topText: {
    alignSelf: 'flex-start',
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(35),
  },
  plusIconText: {
    fontSize: moderateScale(14),
    color: MAIN_RED,
    fontFamily: 'roboto_medium',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
  },
};

type GoodQuantityGreyFieldProps = {
  topText: string,
  plusIconText: string,
  onPress: () => void,
};

const GoodQuantityGreyFieldInner = ({
  topText,
  plusIconText,
  onPress,
}: GoodQuantityGreyFieldProps) => (
  <View style={ownStyles.container}>
    <CardHeaderSubText text={topText} style={ownStyles.topText} />
    <View style={{ alignItems: 'center' }}>
      <RedPlusIcon onPress={() => onPress()} />
      <Text style={ownStyles.plusIconText}>{plusIconText.toUpperCase()}</Text>
    </View>
  </View>
);

export const GoodQuantityGreyField = (translate([
  'mainCategories',
  'categories',
])(GoodQuantityGreyFieldInner): ComponentType<GoodQuantityGreyFieldProps>);
