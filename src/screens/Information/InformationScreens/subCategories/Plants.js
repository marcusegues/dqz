// @flow
import React from 'react';
// $FlowFixMe
import { Linking, TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { scale, verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';
import type { Language } from '../../../../i18n/types/locale';

type PlantsInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};

const PlantsInner = ({ t, navigation, i18n }: PlantsInnerProps) => (
  <SubCategoryContainer title={t('plantsMainText')}>
    <AppInfoSubText
      text={t('plantsText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('plantsText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('plantsText3')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText4')} style={{ marginLeft: scale(10) }} />
    <AppInfoSubText
      text={t('plantsText5')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('plantsText6')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText7')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText8')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText9')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText10')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText11')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText12')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText13')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText14')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText15')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText16')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText17')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText18')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText19')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText20')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText21')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText22')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText23')} style={{ marginLeft: scale(10) }} />
    <BulletText text={t('plantsText24')} style={{ marginLeft: scale(10) }} />
    <AppInfoSubText
      text={t('plantsText25')}
      style={{ marginVertical: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('plantsText26')}
      style={{ marginBottom: verticalScale(10) }}
    />
    <AppInfoSubText text={t('plantsText27')} />
    <AppInfoSubText text={t('plantsText28')} />
    <AppInfoLink
      text="www.blw.admin.ch"
      onPress={() =>
        Linking.openURL(
          `https://www.blw.admin.ch/blw/${i18n.language}/home.html`
        )
      }
      style={{ marginBottom: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('plantsText29')}
      greyBox
      style={{
        paddingVertical: verticalScale(10),
      }}
    />
    <AppInfoSubText
      text={t('plantsText30')}
      style={{ marginTop: verticalScale(10) }}
    />

    <TouchableOpacity
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'VatAllowance',
        })
      }
    >
      <AppInfoSubText
        text={t('plantsText31')}
        style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
        }}
      />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const Plants = (translate(['plants'])(PlantsInner): ComponentType<
  PlantsInnerProps
>);
