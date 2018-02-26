// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type ForgeryInnerProps = {
  t: TFunction,
};

const ForgeryInner = ({ t }: ForgeryInnerProps) => (
  <SubCategoryContainer title={t('forgeryMainText')}>
    <AppInfoSubText text="forgery" style={{ marginTop: verticalScale(10) }} />
  </SubCategoryContainer>
);

export const Forgery = (translate(['information'])(ForgeryInner): ComponentType<
  ForgeryInnerProps
>);
