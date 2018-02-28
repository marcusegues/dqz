// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';

type HighwayVignetteInnerProps = {
  t: TFunction,
};

const HighwayVignetteInner = ({ t }: HighwayVignetteInnerProps) => (
  <SubCategoryContainer title={t('highwayVignetteMainText')}>
    <AppInfoSubText
      text={t('highwayVignetteText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('highwayVignetteText2')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('highwayVignetteText3')} />
    <AppInfoSubText
      text={t('highwayVignetteText4')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('highwayVignetteText5')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('highwayVignetteText6')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('highwayVignetteText7')} />
    <BulletText text={t('highwayVignetteText8')} />
    <BulletText text={t('highwayVignetteText9')} />
    <AppInfoSubText text={t('highwayVignetteText10')} />
  </SubCategoryContainer>
);

export const HighwayVignette = (translate(['highwayVignette'])(
  HighwayVignetteInner
): ComponentType<HighwayVignetteInnerProps>);
