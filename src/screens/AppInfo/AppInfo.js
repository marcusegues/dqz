// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Image, View } from 'react-native';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { TFunction } from '../../types/generalTypes';
import { ModalTab } from '../../components/Modals/PickerModal/subComponents/ModalTab';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeaderText } from '../../components/QuestionAnswer/cards/subcomponents/CardHeaderText';
import { CardRowText } from '../../components/QuestionAnswer/cards/subcomponents/CardRowText';
import { AppInfoSubText } from './subComponents/AppInfoSubText';
import { ScrollViewCard } from '../Information/subComponents/ScrollViewCard';
import { scale, verticalScale } from '../../styles/Scaling';

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
  reachabilityText: {
    marginTop: 20,
  },
  contactTitle: {
    color: '#1A1A1A',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(10),
  },
  customsAdministrationAddressTitle: {
    color: '#1A1A1A',
    marginTop: verticalScale(25),
  },
  ambriteLogo: {
    width: 154,
    height: 36,
  },
  ambriteAddress: {
    marginTop: verticalScale(15),
  },
  disclaimerTitle: {
    color: '#1A1A1A',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(10),
  },
};

type AppInfoState = {
  selected: 'imprint' | 'development',
};

const logo = require('../../../assets/images/logo_with_text.png');
const ambriteLogo = require('../../../assets/images/ambrite_logo.png');

class AppInfoScreen extends React.Component<{ t: TFunction }, AppInfoState> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('appInformation:appInfoTitle')} />
    ),
  });
  state = {
    selected: 'imprint' || 'development',
  };

  componentWillMount() {
    analyticsScreenMounted('Information');
  }

  render() {
    const { t } = this.props;
    const { selected } = this.state;
    const imprint = selected === 'imprint';
    const development = selected === 'development';

    return (
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
            <CardRowText text={t('contact')} style={styles.contactTitle} />
            <AppInfoSubText text={t('customsInfoCenter')} />
            <AppInfoSubText
              text={t('reachability')}
              style={styles.reachabilityText}
            />
            <AppInfoSubText text={t('workingHours')} />
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
            <CardRowText
              text={t('disclaimerTitle')}
              style={styles.disclaimerTitle}
            />
            <AppInfoSubText text={t('disclaimerText')} />
          </View>
        )}
      </ScrollViewCard>
    );
  }
}

export const AppInfo = (translate(['appInformation'])(
  AppInfoScreen
): ComponentType<{}>);
