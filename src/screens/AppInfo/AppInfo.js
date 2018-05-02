// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Image, Linking, View } from 'react-native';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { TFunction } from '../../types/generalTypes';
import { ModalTab } from '../../components/Modals/QuantityInputModal/subComponents/ModalTab';
import { CardHeaderText } from '../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardRowText } from '../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { ScrollViewCard } from '../../components/General Components/ScrollViewCard';
import { scale, verticalScale } from '../../styles/Scaling';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import { AppInfoSubText } from './subComponents/AppInfoSubText';
import { AppInfoLink } from './subComponents/AppInfoLink';
import type { Language } from '../../i18n/types/locale';
import { type } from '../../styles/fonts';
import { BASE_GREY, MAIN_BLACK } from '../../styles/colors';
import { version } from '../../../package.json';

const styles = {
  topTouchableContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(16),
  },
  cardHeader: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(18),
  },
  logoWithText: {
    width: 240,
    height: 60,
  },
  contactTitle: {
    color: MAIN_BLACK,
    marginTop: verticalScale(24),
    marginBottom: verticalScale(16),
  },
  customsAdministrationAddressTitle: {
    color: MAIN_BLACK,
    marginTop: verticalScale(25),
  },
  ambriteLogo: {
    width: 154,
    height: 80,
    resizeMode: 'contain',
  },
  ambriteAddress: {
    marginTop: verticalScale(15),
  },
  links: {
    color: BASE_GREY,
    fontFamily: type.medium,
    textDecorationLine: 'none',
    paddingVertical: 10,
    paddingRight: 15,
  },
};

type AppInfoState = {
  selected: 'imprint' | 'development',
};

const logo = require('../../../assets/images/logo_with_text.png');
const ambriteLogo = require('../../../assets/images/ambrite_logo.png');

class AppInfoInner extends React.Component<
  { t: TFunction, i18n: { language: Language } },
  AppInfoState
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('appInformation:appInfoTitle')} />
    ),
  });
  state = {
    selected: 'imprint' || 'development',
  };

  render() {
    const { t, i18n } = this.props;
    const { selected } = this.state;
    const imprint = selected === 'imprint';
    const development = selected === 'development';

    return (
      <MainContentContainer>
        <ScrollViewCard>
          <View style={styles.topTouchableContainer}>
            <ModalTab
              activeTab={imprint}
              onPress={() =>
                this.setState({
                  selected: 'imprint',
                })
              }
              text={t('leftTabText').toUpperCase()}
            />
            <ModalTab
              activeTab={development}
              onPress={() =>
                this.setState({
                  selected: 'development',
                })
              }
              text={t('rightTabText').toUpperCase()}
            />
          </View>

          {imprint ? (
            <View style={styles.contentContainer}>
              <View style={styles.cardHeader}>
                <CardHeaderText text={t('publisher')} />
              </View>
              <Image source={logo} style={styles.logoWithText} />
              <CardRowText
                text={t('customsAdministrationAddressTitle')}
                style={styles.customsAdministrationAddressTitle}
              />
              <AppInfoSubText text={t('generalCustomsDirectorate')} />
              <AppInfoLink
                text="http://www.ezv.admin.ch"
                onPress={() => Linking.openURL(`http://www.ezv.admin.ch`)}
                style={{
                  color: '#757575',
                  textDecorationLine: 'underline',
                }}
              />
              <CardRowText text={t('contact')} style={styles.contactTitle} />
              <AppInfoSubText text={t('customsInfoCenter')} />
              <AppInfoLink
                text="http://www.zollauskunft.admin.ch"
                onPress={() =>
                  Linking.openURL(`http://www.zollauskunft.admin.ch`)
                }
                style={{
                  color: '#757575',
                  textDecorationLine: 'underline',
                  marginBottom: verticalScale(16),
                }}
              />
              <AppInfoLink
                text={t('faq').toUpperCase()}
                onPress={() => {}}
                style={styles.links}
              />
              <AppInfoLink
                text={t('toContactForm').toUpperCase()}
                onPress={() =>
                  Linking.openURL(
                    `https://www.webapps.ezv.admin.ch/apps/contactQuick/index.php?lang=${
                      i18n.language
                    }`
                  )
                }
                style={styles.links}
              />
            </View>
          ) : (
            <View style={styles.contentContainer}>
              <View style={styles.cardHeader}>
                <CardHeaderText text={t('designAndDevelopment')} />
              </View>

              <Image source={ambriteLogo} style={styles.ambriteLogo} />

              <AppInfoSubText
                text={t('ambriteAddress')}
                style={styles.ambriteAddress}
              />
              <AppInfoLink
                text="http://www.ambrite.ch"
                onPress={() => Linking.openURL(`http://www.ambrite.ch`)}
                style={{
                  color: '#757575',
                  textDecorationLine: 'underline',
                }}
              />
              <AppInfoSubText
                text={`v${version}`}
                style={styles.ambriteAddress}
              />
            </View>
          )}
        </ScrollViewCard>
      </MainContentContainer>
    );
  }
}

export const AppInfo = (translate(['appInformation'])(
  AppInfoInner
): ComponentType<{}>);
