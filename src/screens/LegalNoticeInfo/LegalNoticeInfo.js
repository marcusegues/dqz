// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { TFunction } from '../../types/generalTypes';
import { ModalTab } from '../../components/Modals/PickerModal/subComponents/ModalTab';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeaderText } from '../../components/QuestionAnswer/cards/subcomponents/CardHeaderText';
import { CardRowText } from '../../components/QuestionAnswer/cards/subcomponents/CardRowText';
import { AppInfoSubText } from '../AppInfo/subComponents/AppInfoSubText';
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
  disclaimerTitle: {
    color: '#1A1A1A',
    marginBottom: verticalScale(20),
  },
};

type LegalNoticeInfoState = {
  selected: 'usage' | 'legal',
};

class LegalNoticeInfoInner extends React.Component<
  { t: TFunction },
  LegalNoticeInfoState
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle
        text={screenProps.t('legalNoticeInformation:navigationHeaderTitle')}
      />
    ),
  });

  state = {
    selected: 'usage' || 'legal',
  };

  componentWillMount() {
    analyticsScreenMounted('LegalNoticeInfo');
  }

  render() {
    const { t } = this.props;
    const { selected } = this.state;
    const usage = selected === 'usage';
    const development = selected === 'legal';

    return (
      <ScrollViewCard>
        <View style={styles.topTouchableContainer}>
          <ModalTab
            activeTab={usage}
            onPress={() =>
              this.setState({
                selected: 'usage',
              })
            }
            text={t('usage').toUpperCase()}
          />
          <ModalTab
            activeTab={development}
            onPress={() =>
              this.setState({
                selected: 'legal',
              })
            }
            text={t('legal').toUpperCase()}
          />
        </View>

        {usage ? (
          <View style={styles.contentContainer}>
            <View style={styles.cardHeader}>
              <CardHeaderText text={t('conditions')} />
            </View>
            <CardRowText
              text={t('importantSoon')}
              style={styles.disclaimerTitle}
            />
            <AppInfoSubText text={t('importantSoonText')} />

            <CardRowText
              text={t('howToDeclareYourGoods')}
              style={styles.disclaimerTitle}
            />

            <AppInfoSubText text={t('howToDeclareYourGoodsText')} />

            <CardRowText text={t('legal')} style={styles.disclaimerTitle} />

            <AppInfoSubText text={t('legalText')} />
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.cardHeader}>
              <CardHeaderText text={t('privacyAndLiability')} />
            </View>

            <CardRowText
              text={t('dataProtection')}
              style={styles.disclaimerTitle}
            />
            <AppInfoSubText text={t('dataProtectionText')} />

            <CardRowText
              text={t('referencesAndLinks')}
              style={styles.disclaimerTitle}
            />
            <AppInfoSubText text={t('referencesAndLinksText')} />

            <CardRowText text={t('copyright')} style={styles.disclaimerTitle} />
            <AppInfoSubText text={t('copyrightText')} />
          </View>
        )}
      </ScrollViewCard>
    );
  }
}

export const LegalNoticeInfo = (translate(['legalNoticeInformation'])(
  LegalNoticeInfoInner
): ComponentType<{}>);
