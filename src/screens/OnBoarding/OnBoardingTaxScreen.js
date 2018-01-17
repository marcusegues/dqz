// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Text, View } from 'react-native';
import type { ComponentType } from 'react';
import { OnBoardingContainer } from './subcomponents/OnBoardingContainer';
import { OnBoardingParagraph } from './subcomponents/OnBoardingParagraph';
import { DoneButton } from './subcomponents/DoneButton';
import { moderateScale } from '../../styles/Scaling';
import { MAIN_RED } from '../../styles/colors';
import type { Navigation, TFunction } from '../../types/generalTypes';

const ownStyles = {
  container: {
    alignItems: 'center',
  },
  percents: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(36),
    color: '#4a4a4a',
    paddingVertical: moderateScale(5),
  },
  bottomText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: MAIN_RED,
  },
};

type OnBoardingTaxScreenProps = {
  navigation: Navigation,
};

const OnBoardingTaxScreenInner = ({
  navigation,
  t,
}: OnBoardingTaxScreenProps & { t: TFunction }) => (
  <OnBoardingContainer>
    <View style={ownStyles.container}>
      <OnBoardingParagraph text={t('confirmationVat')} />
      <Text style={ownStyles.percents}>7.7%</Text>
      <OnBoardingParagraph text={t('confirmationVat2')} />
    </View>
    <Text style={ownStyles.bottomText}>
      {(t('vatInformation') || '').toUpperCase()}
    </Text>
    <DoneButton onPress={() => navigation.navigate('MainMenu')} />
  </OnBoardingContainer>
);

export const OnBoardingTaxScreen = (translate(['onBoarding'])(
  OnBoardingTaxScreenInner
): ComponentType<OnBoardingTaxScreenProps>);
