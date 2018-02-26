// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type HighwayVignetteInnerProps = {
  t: TFunction,
};

const HighwayVignetteInner = ({ t }: HighwayVignetteInnerProps) => (
  <SubCategoryContainer title={t('highwayVignetteMainText')}>
    <AppInfoSubText
      text="highwayVignette"
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const HighwayVignette = (translate(['information'])(
  HighwayVignetteInner
): ComponentType<HighwayVignetteInnerProps>);
