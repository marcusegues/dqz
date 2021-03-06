// @flow
import React from 'react';
// $FlowFixMe
import { Image, TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { moderateScale, verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { dutyAllowanceDiagrams } from '../../types/vatAndDutyAllowance';
import type { Language } from '../../../../i18n/types/locale';

type DutyAllowanceInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};

const DutyAllowanceInner = ({
  t,
  navigation,
  i18n,
}: DutyAllowanceInnerProps) => {
  const diagram = dutyAllowanceDiagrams[i18n.language];

  return (
    <SubCategoryContainer title={t('dutyAllowanceMainText')}>
      <Image
        source={diagram}
        resizeMode="contain"
        style={{
          width: moderateScale(300),
          height: moderateScale(190),
          alignSelf: 'center',
        }}
      />
      <AppInfoSubText
        text={t('dutyAllowanceText1')}
        style={{
          marginTop: verticalScale(10),
        }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch({
            type: 'NAVIGATE',
            screen: 'VatAllowance',
          })
        }
      >
        <AppInfoSubText
          text={t('dutyAllowanceText2')}
          style={{
            marginTop: verticalScale(10),
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
        />
      </TouchableOpacity>
      <AppInfoSubText
        text={t('dutyAllowanceText3')}
        style={{ marginTop: verticalScale(10) }}
      />
      <CardRowText
        text={t('dutyAllowanceText4')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText5')} />
      <BulletText text={t('dutyAllowanceText6')} />
      <BulletText text={t('dutyAllowanceText7')} />
      <BulletText text={t('dutyAllowanceText8')} />
      <BulletText text={t('dutyAllowanceText9')} />
      <AppInfoSubText
        text={t('dutyAllowanceText10')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('dutyAllowanceText11')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText12')} />
      <BulletText text={t('dutyAllowanceText13')} />
      <AppInfoSubText
        text={t('dutyAllowanceText14')}
        style={{ marginTop: verticalScale(10) }}
      />
      <BulletText text={t('dutyAllowanceText15')} />
      <BulletText text={t('dutyAllowanceText16')} />
      <CardRowText
        text={t('dutyAllowanceText17')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText
        text={t('dutyAllowanceText18')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText19')} />
      <BulletText
        text={t('dutyAllowanceText20')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText21')} />
      <BulletText
        text={t('dutyAllowanceText22')}
        style={{ marginBottom: verticalScale(10) }}
      />

      <CardRowText
        text={t('dutyAllowanceText23')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText
        text={t('dutyAllowanceText24')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText25')} />
      <BulletText
        text={t('dutyAllowanceText26')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText27')} />
      <BulletText
        text={t('dutyAllowanceText28')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <CardRowText
        text={t('dutyAllowanceText29')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText30')} />
      <BulletText text={t('dutyAllowanceText31')} />
      <BulletText
        text={t('dutyAllowanceText32')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText33')} />
      <BulletText text={t('dutyAllowanceText34')} />
      <BulletText
        text={t('dutyAllowanceText35')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText35a')} />
      <CardRowText
        text={t('dutyAllowanceText36')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText37')} />
      <BulletText text={t('dutyAllowanceText38')} />
      <BulletText text={t('dutyAllowanceText39')} />
      <BulletText
        text={t('dutyAllowanceText40')}
        style={{ marginBottom: verticalScale(10) }}
      />
      <AppInfoSubText text={t('dutyAllowanceText41')} />
      <BulletText text={t('dutyAllowanceText42')} />
      <BulletText
        text={t('dutyAllowanceText43')}
        style={{ marginBottom: verticalScale(20) }}
      />
      <CardRowText text={t('dutyAllowanceText44')} />
      <AppInfoSubText
        text={t('dutyAllowanceText45')}
        style={{ marginBottom: verticalScale(20) }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch({
            type: 'NAVIGATE',
            screen: 'PurchasesOnlineOffline',
          })
        }
      >
        <CardRowText
          text={t('dutyAllowanceText46')}
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
        />
      </TouchableOpacity>
      <AppInfoSubText text={t('dutyAllowanceText47')} />
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch({
            type: 'NAVIGATE',
            screen: 'PurchasesOnlineOffline',
          })
        }
      >
        <AppInfoSubText
          text={t('dutyAllowanceText48')}
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
        />
      </TouchableOpacity>
    </SubCategoryContainer>
  );
};
export const DutyAllowance = (translate(['dutyAllowance'])(
  DutyAllowanceInner
): ComponentType<DutyAllowanceInnerProps>);
