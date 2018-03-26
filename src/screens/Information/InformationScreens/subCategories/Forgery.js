// @flow
import React from 'react';
// $FlowFixMe
import { Linking } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';
import type { Language } from '../../../../i18n/types/locale';

type ForgeryInnerProps = {
  t: TFunction,
  i18n: { language: Language },
};

const ForgeryInner = ({ t, i18n }: ForgeryInnerProps) => (
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
    <AppInfoLink
      text="www.stop-piracy.ch"
      onPress={() =>
        Linking.openURL(
          `http://www.stop-piracy.ch/?lang=${i18n.language}-${
            i18n.language === 'en' ? 'US' : 'CH'
          }`
        )
      }
    />
  </SubCategoryContainer>
);

export const Forgery = (translate(['forgery'])(ForgeryInner): ComponentType<
  ForgeryInnerProps
>);
