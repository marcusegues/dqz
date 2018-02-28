// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type RoadTaxInnerProps = {
  t: TFunction,
};

const RoadTaxInner = ({ t }: RoadTaxInnerProps) => (
  <SubCategoryContainer title={t('roadTaxMainText')}>
    <AppInfoSubText text="roadTax" style={{ marginTop: verticalScale(10) }} />
  </SubCategoryContainer>
);

export const RoadTax = (translate(['roadTax'])(RoadTaxInner): ComponentType<
  RoadTaxInnerProps
>);
