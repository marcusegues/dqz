// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type FuelAndRepairsInnerProps = {
  t: TFunction,
};

const FuelAndRepairsInner = ({ t }: FuelAndRepairsInnerProps) => (
  <SubCategoryContainer title={t('fuelAndRepairsMainText')}>
    <AppInfoSubText
      text="fuelAndRepairs"
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const FuelAndRepairs = (translate(['information'])(
  FuelAndRepairsInner
): ComponentType<FuelAndRepairsInnerProps>);
