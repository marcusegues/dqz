// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';

type EntryByTrainInnerProps = {
  t: TFunction,
};

const EntryByTrainInner = ({ t }: EntryByTrainInnerProps) => (
  <SubCategoryContainer title={t('entryByTrainMainText')}>
    <AppInfoSubText
      text={t('entryByTrainText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('entryByTrainText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('entryByTrainText3')} />
    <BulletText text={t('entryByTrainText4')} />
    <AppInfoSubText text={t('entryByTrainText5')} />
    <BulletText text={t('entryByTrainText6')} />
    <BulletText text={t('entryByTrainText7')} />
    <AppInfoSubText text={t('entryByTrainText8')} />
    <AppInfoSubText
      text={t('entryByTrainText9')}
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const EntryByTrain = (translate(['entryByTrain'])(
  EntryByTrainInner
): ComponentType<EntryByTrainInnerProps>);
