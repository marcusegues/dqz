// @flow
import React from 'react';
// $FlowFixMe
import {
  Image,
  Linking,
  TouchableOpacity,
  Text,
  View,
  // $FlowFixMe
} from 'react-native';
import type { ComponentType } from 'react';
import { translate, Trans } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { moderateScale } from '../../../../styles/Scaling';
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
import { Row } from '../../../../components/Rows/Row';
import { type } from '../../../../styles/fonts';
import { borderCrossingsLinks } from '../../types/information';
import { rowStyles } from '../../../../components/Rows/styles/rowStyles';

type VatAllowanceInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};

const FormattedText = ({ text }) => (
  <Text
    style={{
      color: '#1A1A1A',
      fontWeight: '300',
      fontFamily: 'roboto_light',
      lineHeight: moderateScale(21),
    }}
  >
    {text}
  </Text>
);

const VatAllowanceInner = ({ t, navigation, i18n }: VatAllowanceInnerProps) => {
  const oneTravelerDiagram = vatAllowanceOneTravelerImages[i18n.language];
  const oneTravelerDiagramDe = vatAllowanceOneTravelerImages.de;

  const moreTravelersDiagram = vatAllowanceMoreTravelersImages[i18n.language];
  const moreTravelersDiagramDe = vatAllowanceMoreTravelersImages.de;

  const vatAllowanceOver300Diagram = vatAllowanceOver300Diagrams[i18n.language];
  const vatAllowanceOver300DiagramDe = vatAllowanceOver300Diagrams.de;

  return (
    <SubCategoryContainer
      title={t('vatAllowanceMainText')}
      style={{ marginBottom: moderateScale(10) }}
    >
      <Image
        source={vatAllowanceOver300Diagram || vatAllowanceOver300DiagramDe}
        resizeMode="contain"
        style={{
          width: moderateScale(300),
          height: moderateScale(184),
          alignSelf: 'center',
        }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText1')}
        style={{ marginTop: moderateScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText2')}
        style={{ marginTop: moderateScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText3')}
        style={{ marginVertical: moderateScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText4')}
        style={{ marginVertical: moderateScale(10) }}
        greyBox
      />
      <CardRowText
        text={t('vatAllowanceText5')}
        style={{ marginTop: moderateScale(20) }}
      />
      <AppInfoSubText text={t('vatAllowanceText6')} />
      <AppInfoSubText
        text={t('vatAllowanceText7')}
        style={{ marginTop: moderateScale(10) }}
      />

      <TouchableOpacity onPress={() => {}}>
        <AppInfoSubText
          text={t('vatAllowanceText8')}
          style={{
            marginBottom: moderateScale(20),
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
          marginTop: moderateScale(10),
          marginBottom: moderateScale(20),
        }}
      />
      <CardRowText text={t('vatAllowanceText12')} />
      <AppInfoSubText text={t('vatAllowanceText13')} />
      <Text
        style={{
          color: '#1A1A1A',
          fontWeight: '300',
          fontFamily: 'roboto_light',
          lineHeight: moderateScale(21),
        }}
      >
        <Trans i18nKey="vatAllowanceText14">
          #<Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() =>
              Linking.openURL(`${borderCrossingsLinks[i18n.language]}`)
            }
          >
            #
          </Text>#
        </Trans>
      </Text>

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
            marginTop: moderateScale(10),
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}
          greyBox
        />
      </TouchableOpacity>

      <AppInfoSubText
        text={t('vatAllowanceText16')}
        style={{ marginVertical: moderateScale(10) }}
        greyBox
      />
      <CardRowText
        text={t('vatAllowanceText17')}
        style={{ marginVertical: moderateScale(20) }}
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
        style={{ marginVertical: moderateScale(20) }}
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
          marginBottom: moderateScale(10),
          marginTop: moderateScale(20),
        }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText20')}
        greyBox
        style={{ paddingVertical: moderateScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText21')}
        style={{ fontFamily: type.medium, marginTop: moderateScale(10) }}
      />
      <CardRowText
        text={t('vatAllowanceText22')}
        style={{ marginTop: moderateScale(10) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText23')}
        style={{ marginVertical: moderateScale(10) }}
      />
      <BulletText text={t('vatAllowanceText24')} />
      <BulletText text={t('vatAllowanceText25')} />
      <CardRowText
        text={t('vatAllowanceText26')}
        style={{ marginVertical: moderateScale(10) }}
      />

      <AppInfoSubText
        text={t('vatAllowanceText27')}
        style={{ marginBottom: moderateScale(16) }}
      />
      <Row borderTop width="100%">
        <View
          style={[
            rowStyles.rowContent,
            { justifyContent: 'space-between', width: '100%' },
          ]}
        >
          <FormattedText text={t('vatAllowanceText28a')} />
          <FormattedText text={t('vatAllowanceText28b')} />
        </View>
      </Row>
      <Row width="100%">
        <View
          style={[
            rowStyles.rowContent,
            { justifyContent: 'space-between', width: '100%' },
          ]}
        >
          <FormattedText text={t('vatAllowanceText29a')} />
          <FormattedText text={t('vatAllowanceText29b')} />
        </View>
      </Row>
      <Row borderBottom width="100%">
        <View
          style={[
            rowStyles.rowContent,
            { justifyContent: 'space-between', width: '100%' },
          ]}
        >
          <FormattedText text={t('vatAllowanceText30a')} />
          <FormattedText text={t('vatAllowanceText30b')} />
        </View>
      </Row>
      <CardRowText
        text={t('vatAllowanceText31')}
        style={{ marginVertical: moderateScale(16) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText32')}
        style={{ marginBottom: moderateScale(48) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText33')}
        style={{ marginBottom: moderateScale(16) }}
      />
      <Row borderTop borderBottom={false} width="100%">
        <AppInfoSubText
          text={t('vatAllowanceText34')}
          style={{ marginVertical: moderateScale(16) }}
        />
      </Row>
      <View style={{ marginLeft: 10 }}>
        <BulletText text={t('vatAllowanceText35')} />
        <BulletText text={t('vatAllowanceText36')} />
        <BulletText
          text={t('vatAllowanceText37')}
          style={{ marginBottom: moderateScale(16) }}
        />
      </View>

      <Row borderTop borderBottom={false} width="100%">
        <CardRowText
          text={t('vatAllowanceText38')}
          style={{ marginVertical: moderateScale(16) }}
        />
      </Row>
      <AppInfoSubText
        text={t('vatAllowanceText39')}
        style={{ marginBottom: moderateScale(48) }}
      />
      <AppInfoSubText
        text={t('vatAllowanceText40')}
        style={{ marginBottom: moderateScale(16) }}
      />

      <Row borderTop width="100%">
        <AppInfoSubText
          text={t('vatAllowanceText41')}
          style={{ marginVertical: moderateScale(16) }}
        />
      </Row>
      <Row width="100%">
        <AppInfoSubText
          text={t('vatAllowanceText42')}
          style={{ marginVertical: moderateScale(16) }}
        />
      </Row>
      <CardRowText
        text={t('vatAllowanceText43')}
        style={{ marginVertical: moderateScale(16) }}
      />
      <AppInfoSubText text={t('vatAllowanceText44')} />
    </SubCategoryContainer>
  );
};

export const VatAllowance = (translate(['vatAllowance'])(
  VatAllowanceInner
): ComponentType<VatAllowanceInnerProps>);
