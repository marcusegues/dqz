// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type EntryByTrainInnerProps = {
  t: TFunction,
};

const EntryByTrainInner = ({ t }: EntryByTrainInnerProps) => (
  <SubCategoryContainer title={t('entryByTrainMainText')}>
    <AppInfoSubText
      text="entryByTrain"
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const EntryByTrain = (translate(['information'])(
  EntryByTrainInner
): ComponentType<EntryByTrainInnerProps>);
