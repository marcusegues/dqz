// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text, Image } from 'react-native';
import { UsefulInformationCard } from './UsefulInformationCard';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import type { TFunction } from '../../../types/generalTypes';

const ownStyles = {
  image: {
    width: 314,
    height: 190,
  },
  paragraph: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(14),
    color: '#1A1A1A',
    lineHeight: 21,
    paddingTop: verticalScale(16),
  },
  yellowSection: {
    backgroundColor: '#FFF8BE',
    paddingHorizontal: scale(16),
    marginVertical: verticalScale(16),
    paddingBottom: verticalScale(16),
  },
};

type usefullInfoScreenTemplateProps = {
  t: TFunction,
};

const infoImage = require('../../../../assets/images/infoImage.png');

const UsefullInfoScreenTemplateInner = ({
  t,
}: usefullInfoScreenTemplateProps) => (
  <UsefulInformationCard cardHeaderText={t('allowancesFoodAlcoholTobacco')}>
    <Image source={infoImage} style={{}} />
    <Text style={ownStyles.paragraph}>
      {t('allowancesFoodAlcoholTobaccoText')}
    </Text>
    <View style={ownStyles.yellowSection}>
      <Text style={ownStyles.paragraph}>
        {t('allowancesFoodAlcoholTobaccoText')}
      </Text>
    </View>
  </UsefulInformationCard>
);

export const UsefullInfoScreenTemplate = (translate(['information'])(
  UsefullInfoScreenTemplateInner
): ComponentType<usefullInfoScreenTemplateProps>);
