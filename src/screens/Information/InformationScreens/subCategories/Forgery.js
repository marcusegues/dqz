// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type ForgeryInnerProps = {
  t: TFunction,
};

const ForgeryInner = ({ t }: ForgeryInnerProps) => (
  <SubCategoryContainer title={t('forgeryMainText')}>
    <AppInfoSubText
      text={t('forgeryText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('forgeryText2')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('forgeryText3')} />
    <CardRowText
      text={t('forgeryText4')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('forgeryText5')} />
    <AppInfoSubText
      text={t('forgeryText6')}
      style={{ marginTop: verticalScale(10) }}
    />
    <Text>www.stop-piracy.ch</Text>
  </SubCategoryContainer>
);

export const Forgery = (translate(['forgery'])(ForgeryInner): ComponentType<
  ForgeryInnerProps
>);
