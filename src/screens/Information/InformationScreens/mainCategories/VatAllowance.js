// @flow
import React, { Component } from 'react';
// $FlowFixMe
import {
  Image,
  Linking,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
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
import {
  vatAllowanceCurrencies,
  vatAllowanceMoreTravelersImages,
  vatAllowanceOneTravelerImages,
  vatAllowanceOver300Diagrams,
} from '../../types/vatAndDutyAllowance';
import type { Language } from '../../../../i18n/types/locale';
import { type } from '../../../../styles/fonts';
import { borderCrossingsLinks } from '../../types/information';
import { CardHeaderText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { globalStyles } from '../../../../styles/globalStyles';
import { VatAllowanceRow } from '../../subComponents/VatAllowanceRow';
import { FormattedText } from '../../subComponents/FormattedText';

const ownStyles = {
  container: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: moderateScale(16),
  },
  scrollView: {
    alignSelf: 'center',
    width: '100%',
    marginHorizontal: moderateScale(16),
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
};

type VatAllowanceState = {
  measurements: { x?: number, y?: number, width?: number, height?: number },
};

type VatAllowanceInnerProps = {
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
};
//
// export const FormattedText = ({
//   text,
//   style,
// }: {
//   text: string,
//   style?: {},
// }) => (
//   <Text
//     style={{
//       color: '#1A1A1A',
//       fontWeight: '300',
//       fontFamily: 'roboto_light',
//       lineHeight: moderateScale(21),
//       ...style,
//     }}
//   >
//     {text}
//   </Text>
// );

class VatAllowanceInner extends Component<
  VatAllowanceInnerProps,
  VatAllowanceState
> {
  state = {
    measurements: {},
  };
  myRef: ?ScrollView;

  scrollToInfo(offset) {
    if (this.myRef) {
      this.myRef.scrollTo({
        x: 0,
        y: offset,
        animated: true,
      });
    }
  }

  render() {
    const { t, i18n, navigation } = this.props;

    const oneTravelerDiagram = vatAllowanceOneTravelerImages[i18n.language];
    const oneTravelerDiagramDe = vatAllowanceOneTravelerImages.de;

    const moreTravelersDiagram = vatAllowanceMoreTravelersImages[i18n.language];
    const moreTravelersDiagramDe = vatAllowanceMoreTravelersImages.de;

    const vatAllowanceOver300Diagram =
      vatAllowanceOver300Diagrams[i18n.language];
    const vatAllowanceOver300DiagramDe = vatAllowanceOver300Diagrams.de;

    const currencyName = vatAllowanceCurrencies[i18n.language];

    return (
      <View style={ownStyles.container}>
        <ScrollView
          ref={c => {
            this.myRef = c;
          }}
          contentContainerStyle={[ownStyles.scrollView, globalStyles.boxShadow]}
        >
          <View style={{ marginHorizontal: moderateScale(16) }}>
            <View style={{ marginVertical: moderateScale(16) }}>
              <CardHeaderText text={t('vatAllowanceMainText')} />
            </View>
            <Image
              source={
                vatAllowanceOver300Diagram || vatAllowanceOver300DiagramDe
              }
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

            <TouchableOpacity
              onPress={() => this.scrollToInfo(this.state.measurements.y)}
            >
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

            <View
              onLayout={({ nativeEvent }) => {
                this.setState({
                  measurements: nativeEvent.layout,
                });
              }}
            >
              <CardRowText
                text={t('vatAllowanceText26')}
                style={{ marginVertical: moderateScale(10) }}
              />
            </View>

            <AppInfoSubText
              text={t('vatAllowanceText27')}
              style={{ marginBottom: moderateScale(16) }}
            />

            <VatAllowanceRow
              text={t('vatAllowanceText28')}
              currency={currencyName}
              value="700"
              borderTop
            />
            <VatAllowanceRow
              text={t('vatAllowanceText29')}
              currency={currencyName}
              value="200"
            />
            <VatAllowanceRow
              text={t('vatAllowanceText30')}
              currency={currencyName}
              value="20"
            />
            <VatAllowanceRow
              text={t('vatAllowanceText31')}
              currency={currencyName}
              value="920"
              borderBottom={false}
              bold
            />
            <AppInfoSubText
              text={t('vatAllowanceText32')}
              style={{ marginBottom: moderateScale(48) }}
            />
            <AppInfoSubText
              text={t('vatAllowanceText33')}
              style={{ marginBottom: moderateScale(16) }}
            />

            <VatAllowanceRow
              text={t('vatAllowanceText34')}
              currency={currencyName}
              value="920"
              borderTop
              borderBottom={false}
            />

            <View style={{ marginLeft: 10 }}>
              <BulletText text={t('vatAllowanceText35')} />
              <BulletText text={t('vatAllowanceText36')} />
              <BulletText
                text={t('vatAllowanceText37')}
                style={{ marginBottom: moderateScale(16) }}
              />
            </View>

            <VatAllowanceRow
              text={t('vatAllowanceText31')}
              currency={currencyName}
              value="920"
              bold
              borderTop
              borderBottom={false}
            />
            <AppInfoSubText
              text={t('vatAllowanceText39')}
              style={{ marginBottom: moderateScale(48) }}
            />
            <AppInfoSubText
              text={t('vatAllowanceText40')}
              style={{ marginBottom: moderateScale(16) }}
            />
            <VatAllowanceRow
              text={t('vatAllowanceText41')}
              currency={currencyName}
              value="400"
              borderTop
            >
              <FormattedText
                text={t('vatAllowanceText41a')}
                style={{ marginRight: 30 }}
              />
            </VatAllowanceRow>

            <VatAllowanceRow
              text={t('vatAllowanceText42')}
              currency={currencyName}
              value="300"
            />

            <VatAllowanceRow
              text={t('vatAllowanceText31')}
              currency={currencyName}
              value="700"
              bold
              borderBottom={false}
            />
            <AppInfoSubText
              text={t('vatAllowanceText44')}
              style={{ marginBottom: moderateScale(10) }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const VatAllowance = (translate(['vatAllowance'])(
  VatAllowanceInner
): ComponentType<VatAllowanceInnerProps>);
