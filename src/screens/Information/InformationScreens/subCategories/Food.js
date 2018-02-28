// @flow
import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type FoodInnerProps = {
  t: TFunction,
  navigation: Navigation,
};

const FoodInner = ({ t, navigation }: FoodInnerProps) => (
  <SubCategoryContainer title={t('foodMainText')}>
    <AppInfoSubText
      text={t('foodText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foodText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foodText3')}
      style={{ marginTop: verticalScale(10) }}
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
    <TouchableOpacity onPress={() => navigation.navigate('VatAllowance')}>
      <AppInfoSubText
        text={t('foodText8')}
        style={{ marginTop: verticalScale(10) }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('DutyAllowance')}>
      <AppInfoSubText
        text={t('foodText9')}
        style={{ marginTop: verticalScale(10) }}
      />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const Food = (translate(['food'])(FoodInner): ComponentType<
  FoodInnerProps
>);
