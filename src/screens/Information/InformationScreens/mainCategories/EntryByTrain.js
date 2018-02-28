// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type EntryByTrainInnerProps = {
  t: TFunction,
};

const EntryByTrainInner = ({ t }: EntryByTrainInnerProps) => (
  <SubCategoryContainer title={t('entryByTrainMainText')}>
    <CardRowText
      text={t('entryByTrainText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText text={t('entryByTrainText1')} />
    <CardRowText
      text={t('entryByTrainText1')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('entryByTrainText1')} />

    {/*<TouchableOpacity onPress={() => navigation.navigate('VatAllowance')}>*/}
    {/*<AppInfoSubText text={t('fuelAndRepairsText5')} />*/}
    {/*</TouchableOpacity>*/}
  </SubCategoryContainer>
);

export const EntryByTrain = (translate(['entryByTrain'])(
  EntryByTrainInner
): ComponentType<EntryByTrainInnerProps>);
