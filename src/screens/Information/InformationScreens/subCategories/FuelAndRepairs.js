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

type FuelAndRepairsInnerProps = {
  t: TFunction,
  navigation: Navigation,
};

const FuelAndRepairsInner = ({ t, navigation }: FuelAndRepairsInnerProps) => (
  <SubCategoryContainer title={t('fuelAndRepairsMainText')}>
    <CardRowText
      text={t('fuelAndRepairsText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText text={t('fuelAndRepairsText2')} />
    <CardRowText
      text={t('fuelAndRepairsText3')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('fuelAndRepairsText4')} />
    <TouchableOpacity onPress={() => navigation.navigate('VatAllowance')}>
      <AppInfoSubText text={t('fuelAndRepairsText5')} />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const FuelAndRepairs = (translate(['fuelAndRepairs'])(
  FuelAndRepairsInner
): ComponentType<FuelAndRepairsInnerProps>);
