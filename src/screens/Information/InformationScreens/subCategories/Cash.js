// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type CashInnerProps = {
  t: TFunction,
};

const CashInner = ({ t }: CashInnerProps) => (
  <SubCategoryContainer title={t('cashMainText')}>
    <AppInfoSubText text="cash" style={{ marginTop: verticalScale(10) }} />
  </SubCategoryContainer>
);

export const Cash = (translate(['information'])(CashInner): ComponentType<
  CashInnerProps
>);
