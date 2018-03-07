// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';

type CustomsProceduresInnerProps = {
  t: TFunction,
  navigation: Navigation,
};

const CustomsProceduresInner = ({
  t,
  navigation,
}: CustomsProceduresInnerProps) => (
  <SubCategoryContainer title={t('customsProceduresMainText')}>
    <AppInfoSubText
      text={t('customsProceduresText1')}
      style={{ marginVertical: verticalScale(10) }}
    />
    <AppInfoSubText text={t('customsProceduresText2')} />
    <BulletText text={t('customsProceduresText3')} />
    <BulletText text={t('customsProceduresText4')} />
    <AppInfoSubText
      text={t('customsProceduresText5')}
      style={{ marginVertical: verticalScale(10) }}
    />
    <AppInfoSubText text={t('customsProceduresText6')} />
    <BulletText
      text={t('customsProceduresText7')}
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'VatAllowance',
        })
      }
      style={{ color: 'green' }}
    />
    <BulletText
      text={t('customsProceduresText8')}
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'DutyAllowance',
        })
      }
      style={{ color: 'green' }}
    />
    <BulletText
      text={t('customsProceduresText9')}
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'PersonalEffects',
        })
      }
      style={{ color: 'green' }}
    />
    <CardRowText
      text={t('customsProceduresText10')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('customsProceduresText11')} />
    <CardRowText
      text={t('customsProceduresText12')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('customsProceduresText13')} />
    <AppInfoSubText
      text={t('customsProceduresText14')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('customsProceduresText15')}
      style={{ marginTop: verticalScale(10) }}
    />
    <CardRowText
      text={t('customsProceduresText16')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('customsProceduresText17')} />
    <AppInfoSubText
      text={t('customsProceduresText18')}
      style={{ marginVertical: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('customsProceduresText19')}
      style={{ marginBottom: verticalScale(10) }}
    />
    <CardRowText
      text={t('customsProceduresText20')}
      style={{ paddingTop: verticalScale(10) }}
      greyBox
    />
    <AppInfoSubText
      text={t('customsProceduresText21')}
      style={{ marginBottom: verticalScale(10), paddingTop: 0 }}
      greyBox
    />
  </SubCategoryContainer>
);

export const CustomsProcedures = (translate(['customsProcedures'])(
  CustomsProceduresInner
): ComponentType<CustomsProceduresInnerProps>);
