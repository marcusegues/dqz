// @flow
import React from 'react';
// $FlowFixMe
import {
  Image,
  TouchableOpacity,
  // $FlowFixMe
} from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import {
  vatAllowanceMoreTravelersImages,
  vatAllowanceOneTravelerImages,
  vatAllowanceOver300Diagrams,
} from '../../types/vatAndDutyAllowance';
import type { Language } from '../../../../i18n/types/locale';

type VatAllowanceInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};

const VatAllowanceInner = ({ t, navigation, i18n }: VatAllowanceInnerProps) => {
  const oneTravelerDiagram = vatAllowanceOneTravelerImages[i18n.language];
  const oneTravelerDiagramDe = vatAllowanceOneTravelerImages.de;
  const moreTravelersDiagram = vatAllowanceMoreTravelersImages[i18n.language];
  const moreTravelersDiagramDe = vatAllowanceMoreTravelersImages.de;

  const vatAllowanceOver300Diagram = vatAllowanceOver300Diagrams[i18n.language];

  return (
    <SubCategoryContainer
      title={t('vatAllowanceMainText')}
      style={{ marginBottom: verticalScale(10) }}
    >
      <Image
        source={vatAllowanceOver300Diagram}
        resizeMode="contain"
        style={{
          width: moderateScale(300),
          height: moderateScale(184),
          alignSelf: 'center',
        }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText1')}
        style={{ marginTop: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText2')}
        style={{ marginTop: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText3')}
        style={{ marginVertical: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText4')}
        style={{ marginVertical: verticalScale(10) }}
        greyBox
      />
      <CardRowText
        text={t('vatAllowanceText5')}
        style={{ marginTop: verticalScale(20) }}
      />
      <AppInfoSubText text={t('vatAllowanceText6')} />
      <AppInfoSubText
        text={t('vatAllowanceText7')}
        style={{ marginTop: verticalScale(10) }}
      />

      <TouchableOpacity onPress={() => {}}>
        <AppInfoSubText
          text={t('vatAllowanceText8')}
          style={{
            marginBottom: verticalScale(20),
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
        />
      </TouchableOpacity>

      <CardRowText text={t('vatAllowanceText9')} />
      <AppInfoSubText text={t('vatAllowanceText10')} />
      <AppInfoSubText
        text={t('vatAllowanceText11')}
        style={{
          marginTop: verticalScale(10),
          marginBottom: verticalScale(20),
        }}
      />
      <CardRowText text={t('vatAllowanceText12')} />
      <AppInfoSubText text={t('vatAllowanceText13')} />
      <AppInfoSubText
        text={t('vatAllowanceText14')}
        style={{ marginTop: verticalScale(10) }}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.dispatch({
            type: 'NAVIGATE',
            screen: 'DutyAllowance',
          })
        }
      >
        <AppInfoSubText
          text={t('vatAllowanceText15')}
          style={{
            marginTop: verticalScale(10),
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
          greyBox
        />
      </TouchableOpacity>

      <AppInfoSubText
        text={t('vatAllowanceText16')}
        style={{ marginVertical: verticalScale(10) }}
        greyBox
      />
      <CardRowText
        text={t('vatAllowanceText17')}
        style={{ marginVertical: verticalScale(20) }}
      />
      <Image
        source={oneTravelerDiagram || oneTravelerDiagramDe}
        resizeMode="contain"
        style={{
          width: moderateScale(311),
          height: moderateScale(425),
          alignSelf: 'center',
        }}
      />
      <CardRowText
        text={t('vatAllowanceText18')}
        style={{ marginVertical: verticalScale(20) }}
      />
      <Image
        source={moreTravelersDiagram || moreTravelersDiagramDe}
        resizeMode="contain"
        style={{
          width: moderateScale(311),
          height: moderateScale(608),
          alignSelf: 'center',
        }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText19')}
        style={{
          marginBottom: verticalScale(10),
          marginTop: verticalScale(20),
        }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText20')}
        greyBox
        style={{ paddingVertical: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText21')}
        style={{ fontFamily: 'roboto_medium', marginTop: verticalScale(10) }}
      />
      <CardRowText
        text={t('vatAllowanceText22')}
        style={{ marginTop: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText23')}
        style={{ marginVertical: verticalScale(10) }}
      />
      <BulletText text={t('vatAllowanceText24')} />
      <BulletText text={t('vatAllowanceText25')} />
      <CardRowText
        text={t('vatAllowanceText26')}
        style={{ marginVertical: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText27')}
        style={{ marginLeft: scale(20) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText28')}
        style={{ marginLeft: scale(40), marginTop: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText29')}
        style={{ marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText30')}
        style={{ marginLeft: scale(40) }}
      />
      <CardRowText
        text={t('vatAllowanceText31')}
        style={{ marginVertical: verticalScale(10), marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText32')}
        style={{ marginVertical: verticalScale(10), marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText33')}
        style={{ marginLeft: scale(20) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText34')}
        style={{ marginLeft: scale(40), marginTop: verticalScale(10) }}
      />
      <BulletText
        text={t('vatAllowanceText35')}
        style={{ marginLeft: scale(40) }}
      />
      <BulletText
        text={t('vatAllowanceText36')}
        style={{ marginLeft: scale(40) }}
      />
      <BulletText
        text={t('vatAllowanceText37')}
        style={{ marginLeft: scale(40) }}
      />
      <CardRowText
        text={t('vatAllowanceText38')}
        style={{ marginVertical: verticalScale(10), marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText39')}
        style={{ marginVertical: verticalScale(10), marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText40')}
        style={{ marginLeft: scale(20) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText41')}
        style={{ marginLeft: scale(40), marginTop: verticalScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText42')}
        style={{ marginLeft: scale(40), marginTop: verticalScale(10) }}
      />
      <CardRowText
        text={t('vatAllowanceText43')}
        style={{ marginVertical: verticalScale(10), marginLeft: scale(40) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText44')}
        style={{ marginTop: verticalScale(10), marginLeft: scale(40) }}
      />
    </SubCategoryContainer>
  );
};

export const VatAllowance = (translate(['vatAllowance'])(
  VatAllowanceInner
): ComponentType<VatAllowanceInnerProps>);
