// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type FoodInnerProps = {
  t: TFunction,
};

const FoodInner = ({ t }: FoodInnerProps) => (
  <SubCategoryContainer title={t('foodMainText')}>
    <AppInfoSubText text="food" style={{ marginTop: verticalScale(10) }} />
  </SubCategoryContainer>
);

export const Food = (translate(['information'])(FoodInner): ComponentType<
  FoodInnerProps
>);
