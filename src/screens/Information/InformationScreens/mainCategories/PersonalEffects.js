// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';

type PersonalEffectsInnerProps = {
  t: TFunction,
};

const PersonalEffectsInner = ({ t }: PersonalEffectsInnerProps) => (
  <SubCategoryContainer title={t('personalEffectsMainText')}>
    <AppInfoSubText
      text={t('personalEffectsText1')}
      style={{ marginTop: verticalScale(10) }}
    />

    <CardRowText
      text={t('personalEffectsText2')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('personalEffectsText3')} />
    <BulletText text={t('personalEffectsText4')} />
    <BulletText text={t('personalEffectsText5')} />
    <CardRowText
      text={t('personalEffectsText6')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('personalEffectsText7')} />
  </SubCategoryContainer>
);

export const PersonalEffects = (translate(['personalEffects'])(
  PersonalEffectsInner
): ComponentType<PersonalEffectsInnerProps>);
