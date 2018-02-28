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
    <Text>www.lsva.ch</Text>
    <AppInfoSubText
      text={t('roadTaxText4')}
      style={{ marginTop: verticalScale(10) }}
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
    <AppInfoSubText text={t('roadTaxText12')} />
    <AppInfoSubText
      text={t('roadTaxText13')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText text={t('roadTaxText14')} />
    <AppInfoSubText text={t('roadTaxText15')} />
  </SubCategoryContainer>
);

export const RoadTax = (translate(['roadTax'])(RoadTaxInner): ComponentType<
  RoadTaxInnerProps
>);
