// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';

type ForeignVatInnerProps = {
  t: TFunction,
};

const ForeignVatInner = ({ t }: ForeignVatInnerProps) => (
  <SubCategoryContainer title={t('foreignVatMainText')}>
    <AppInfoSubText
      text={t('foreignVatText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foreignVatText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foreignVatText3')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foreignVatText4')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('foreignVatText5')}
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const ForeignVat = (translate(['foreignVat'])(
  ForeignVatInner
): ComponentType<ForeignVatInnerProps>);
