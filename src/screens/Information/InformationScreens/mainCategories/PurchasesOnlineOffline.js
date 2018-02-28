// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type PurchasesOnlineOfflineInnerProps = {
  t: TFunction,
};

const PurchasesOnlineOfflineInner = ({
  t,
}: PurchasesOnlineOfflineInnerProps) => (
  <SubCategoryContainer title={t('purchasesOnlineOfflineMainText')}>
    <AppInfoSubText
      text={t('purchasesOnlineOfflineText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('purchasesOnlineOfflineText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('purchasesOnlineOfflineText3')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('purchasesOnlineOfflineText4')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('purchasesOnlineOfflineText5')} />
    <CardRowText
      text={t('purchasesOnlineOfflineText6')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('purchasesOnlineOfflineText7')} />
    <AppInfoSubText text={t('purchasesOnlineOfflineText8')} />
    <CardRowText
      text={t('purchasesOnlineOfflineText9')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('purchasesOnlineOfflineText10')} />
    <AppInfoSubText text={t('purchasesOnlineOfflineText11')} />
    <AppInfoSubText text={t('purchasesOnlineOfflineText12')} />
    <AppInfoSubText text={t('purchasesOnlineOfflineText13')} />
    <CardRowText
      text={t('purchasesOnlineOfflineText14')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('purchasesOnlineOfflineText15')} />
    <AppInfoSubText
      text={t('purchasesOnlineOfflineText16')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText text={t('purchasesOnlineOfflineText17')} />
  </SubCategoryContainer>
);

export const PurchasesOnlineOffline = (translate(['purchasesOnlineOffline'])(
  PurchasesOnlineOfflineInner
): ComponentType<PurchasesOnlineOfflineInnerProps>);
