// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { TFunction } from '../../types/generalTypes';
import { ModalTab } from '../../components/Modals/QuantityInputModal/subComponents/ModalTab';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeaderText } from '../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardRowText } from '../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { BulletText } from '../AppInfo/subComponents/BulletText';
import { ScrollViewCard } from '../../components/General Components/ScrollViewCard';
import { scale, verticalScale } from '../../styles/Scaling';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import { AppInfoSubText } from '../AppInfo/subComponents/AppInfoSubText';

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
    marginTop: verticalScale(20),
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
    console.log('Navigation in INFO', this.props.navigation);
    return (
      <MainContentContainer>
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
              <BulletText text={t('importantSoonText1')} />
              <BulletText text={t('importantSoonText2')} />
              <BulletText text={t('importantSoonText3')} />
              <BulletText text={t('importantSoonText4')} />
              <BulletText text={t('importantSoonText5')} />
              <BulletText text={t('importantSoonText6')} />
              <AppInfoSubText
                text={`\u25E6 ${t('importantSoonText7')}`}
                style={{ marginLeft: 50 }}
              />
              <AppInfoSubText
                text={`\u25E6 ${t('importantSoonText8')}`}
                style={{ marginLeft: 50 }}
              />
              <BulletText text={t('importantSoonText9')} />

              <CardRowText
                text={t('howToDeclareYourGoods')}
                style={styles.disclaimerTitle}
              />
              <BulletText text={t('howToDeclareYourGoodsText1')} />
              <BulletText text={t('howToDeclareYourGoodsText2')} />
              <BulletText text={t('howToDeclareYourGoodsText3')} />
              <BulletText text={t('howToDeclareYourGoodsText4')} />
              <BulletText text={t('howToDeclareYourGoodsText5')} />
              <BulletText text={t('howToDeclareYourGoodsText6')} />
              <BulletText text={t('howToDeclareYourGoodsText7')} />
              <AppInfoSubText
                text={t('howToDeclareYourGoodsText8')}
                style={{ marginVertical: verticalScale(10) }}
              />
              <BulletText text={t('howToDeclareYourGoodsText9')} />
              <BulletText text={t('howToDeclareYourGoodsText10')} />
              <BulletText text={t('howToDeclareYourGoodsText11')} />
              <BulletText text={t('howToDeclareYourGoodsText12')} />
              <BulletText text={t('howToDeclareYourGoodsText13')} />
              <BulletText text={t('howToDeclareYourGoodsText14')} />
              <BulletText text={t('howToDeclareYourGoodsText15')} />
              <AppInfoSubText
                text={t('howToDeclareYourGoodsText16')}
                style={{ marginTop: verticalScale(10) }}
              />

              <CardRowText text={t('legal')} style={styles.disclaimerTitle} />
              <AppInfoSubText
                text={t('legalText1')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('legalText2')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('legalText3')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <BulletText text={t('legalText4')} />
              <BulletText text={t('legalText5')} />
              <BulletText text={t('legalText6')} />
              <AppInfoSubText
                text={t('legalText7')}
                style={{ marginTop: verticalScale(10) }}
              />
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
              <AppInfoSubText
                text={t('dataProtectionText1')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('dataProtectionText2')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('dataProtectionText3')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('dataProtectionText4')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText text={t('dataProtectionText5')} />

              <CardRowText
                text={t('liability')}
                style={styles.disclaimerTitle}
              />
              <AppInfoSubText
                text={t('liabilityText1')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText text={t('liabilityText2')} />

              <CardRowText
                text={t('referencesAndLinks')}
                style={styles.disclaimerTitle}
              />
              <AppInfoSubText
                text={t('referencesAndLinksText1')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText text={t('referencesAndLinksText2')} />

              <CardRowText
                text={t('copyright')}
                style={styles.disclaimerTitle}
              />
              <AppInfoSubText
                text={t('copyrightText1')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText
                text={t('copyrightText2')}
                style={{ marginBottom: verticalScale(10) }}
              />
              <AppInfoSubText text={t('copyrightText3')} />
            </View>
          )}
        </ScrollViewCard>
      </MainContentContainer>
    );
  }
}

export const LegalNoticeInfo = (translate(['legalNoticeInformation'])(
  LegalNoticeInfoInner
): ComponentType<{}>);
