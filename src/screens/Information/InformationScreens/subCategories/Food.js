// @flow
import React from 'react';
// $FlowFixMe
import { Linking, TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';
import type { Language } from '../../../../i18n/types/locale';

type FoodInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};

const FoodInner = ({ t, navigation, i18n }: FoodInnerProps) => (
  <SubCategoryContainer title={t('foodMainText')}>
    <AppInfoSubText
      text={t('foodText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foodText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoLink
      text={t('foodText3')}
      onPress={() =>
        Linking.openURL(
          `https://www.blv.admin.ch/blv/${
            i18n.language
          }/home/lebensmittel-und-ernaehrung/lebensmittel-reiseverkehr.html`
        )
      }
      style={{
        marginTop: verticalScale(10),
      }}
    />

    <CardRowText
      text={t('foodText4')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText
      text={t('foodText5')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('foodText6')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText
      text={t('foodText7')}
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
        text={t('foodText8')}
        style={{
          marginTop: verticalScale(10),
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'DutyAllowance',
        })
      }
    >
      <AppInfoSubText
        text={t('foodText9')}
        style={{
          marginTop: verticalScale(10),
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
        }}
      />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const Food = (translate(['food'])(FoodInner): ComponentType<
  FoodInnerProps
>);
