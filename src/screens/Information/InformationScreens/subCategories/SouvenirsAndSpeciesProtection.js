// @flow
import React from 'react';
// $FlowFixMe
import { Linking } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { verticalScale } from '../../../../styles/Scaling';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';

type SouvenirsAndSpeciesProtectionInnerProps = {
  t: TFunction,
};

const SouvenirsAndSpeciesProtectionInner = ({
  t,
}: SouvenirsAndSpeciesProtectionInnerProps) => (
  <SubCategoryContainer title={t('souvenirsAndSpeciesProtectionMainText')}>
    <CardRowText
      text={t('souvenirsAndSpeciesProtectionText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText text={t('souvenirsAndSpeciesProtectionText2')} />
    <CardRowText
      text={t('souvenirsAndSpeciesProtectionText3')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('souvenirsAndSpeciesProtectionText4')} />
    <AppInfoSubText
      text={t('souvenirsAndSpeciesProtectionText5')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('souvenirsAndSpeciesProtectionText6')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('souvenirsAndSpeciesProtectionText7')} />
    <AppInfoSubText
      text={t('souvenirsAndSpeciesProtectionText8')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoLink
      text="http://www.blv.admin.ch"
      onPress={() => Linking.openURL('http://www.blv.admin.ch')}
    />
  </SubCategoryContainer>
);

export const SouvenirsAndSpeciesProtection = (translate([
  'souvenirsAndSpeciesProtection',
])(SouvenirsAndSpeciesProtectionInner): ComponentType<
  SouvenirsAndSpeciesProtectionInnerProps
>);
