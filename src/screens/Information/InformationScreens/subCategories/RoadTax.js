// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type RoadTaxInnerProps = {
  t: TFunction,
};

const RoadTaxInner = ({ t }: RoadTaxInnerProps) => (
  <SubCategoryContainer title={t('roadTaxMainText')}>
    <AppInfoSubText
      text={t('roadTaxText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('roadTaxText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('roadTaxText3')}
      style={{ marginTop: verticalScale(10) }}
    />
    <Text style={{ marginBottom: verticalScale(10) }}>www.lsva.ch</Text>
    <AppInfoSubText
      text={t('roadTaxText4')}
      style={{ paddingVertical: verticalScale(10) }}
      greyBox
    />
    <CardRowText
      text={t('roadTaxText5')}
      style={{ marginTop: verticalScale(20) }}
    />

    <AppInfoSubText text={t('roadTaxText6')} />
    <AppInfoSubText
      text={t('roadTaxText7')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('roadTaxText8')} />
    <BulletText text={t('roadTaxText9')} />
    <BulletText text={t('roadTaxText10')} />
    <BulletText text={t('roadTaxText11')} />
    <AppInfoSubText
      text={t('roadTaxText12')}
      style={{ marginBottom: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('roadTaxText13')}
      style={{ paddingTop: verticalScale(10) }}
      greyBox
    />
    <AppInfoSubText text={t('roadTaxText14')} greyBox />
    <AppInfoSubText
      text={t('roadTaxText15')}
      style={{ paddingBottom: verticalScale(10) }}
      greyBox
    />
  </SubCategoryContainer>
);

export const RoadTax = (translate(['roadTax'])(RoadTaxInner): ComponentType<
  RoadTaxInnerProps
>);
