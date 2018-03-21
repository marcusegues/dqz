// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Trans, translate } from 'react-i18next';
// $FlowFixMe
import { Linking, TouchableOpacity, View, Text } from 'react-native';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { ModalTab } from '../../components/Modals/QuantityInputModal/subComponents/ModalTab';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { CardHeaderText } from '../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardRowText } from '../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { BulletText } from '../AppInfo/subComponents/BulletText';
import { ScrollViewCard } from '../../components/General Components/ScrollViewCard';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import { AppInfoSubText } from '../AppInfo/subComponents/AppInfoSubText';
import { type } from '../../styles/fonts';
import { BulletTextWithChildren } from '../AppInfo/subComponents/BulletTextWithChildren';
import { AppInfoLink } from '../AppInfo/subComponents/AppInfoLink';
import type { LanguageCategory } from '../Information/InformationScreens/subCategories/RoadTax';
import type { Language } from '../../i18n/types/locale';
import { borderCrossingsLinks } from '../Information/types/information';

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
    marginBottom: verticalScale(5),
    marginTop: verticalScale(20),
  },
};

type LegalNoticeInfoState = {
  selected: 'usage' | 'legal',
};

type legalNoticeInfoLinksType = { [LanguageCategory]: string };

const bansRestrictionsAndAuthorisationLinks: legalNoticeInfoLinksType = {
  de:
    'https://www.ezv.admin.ch/ezv/de/home/information-private/verbote--beschraenkungen-und-bewilligungen.html',
  it:
    'https://www.ezv.admin.ch/ezv/it/home/informazioni-per-privati/divieti--limitazioni-e-autorizzazioni.html',
  fr:
    'https://www.ezv.admin.ch/ezv/fr/home/infos-pour-particuliers/interdictions--restrictions-et-autorisations.html',
  en:
    'https://www.ezv.admin.ch/ezv/en/home/information-individuals/bans--restrictions-and-authorisations.html',
};

const leavingSwitzerlandWithPersonalGoodsLinks: legalNoticeInfoLinksType = {
  de:
    'https://www.ezv.admin.ch/ezv/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/ausfuhr-aus-der-schweiz/ausreise-aus-der-schweiz-mit-privatwaren.html',
  it:
    'https://www.ezv.admin.ch/ezv/it/home/informazioni-per-privati/viaggiare-e-acquistare--in-franchigie-quantitative-e-franchigia-/esportazione-dalla-svizzera/uscita-dalla-svizzera-con-merci-private.html',
  fr:
    'https://www.ezv.admin.ch/ezv/fr/home/infos-pour-particuliers/voyages-et-achats--franchises-quantitatives-et-franchise-valeur/exportation-de-suisse/sortie-de-suisse-avec-des-marchandises-privees.html',
  en:
    'https://www.ezv.admin.ch/ezv/en/home/information-individuals/travel-and-purchases--allowances-and-duty-free-limit/exportation-from-switzerland/leaving-switzerland-with-personal-goods.html',
};

class LegalNoticeInfoInner extends React.Component<
  { t: TFunction, navigation: Navigation, i18n: { language: Language } },
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
    const { t, navigation, i18n } = this.props;
    const { selected } = this.state;
    const usage = selected === 'usage';
    const development = selected === 'legal';

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
              <BulletText
                text={t('importantSoonText5')}
                additionalText={t('importantSoonBoldText1')}
                additionalTextStyle={{ fontFamily: type.medium }}
              />

              <BulletText text={t('importantSoonText6')} />
              <BulletText text={t('importantSoonText7')} />
              <BulletText text={t('importantSoonText8')} />
              <BulletText text={t('importantSoonText9')} />

              <CardRowText
                text={t('howToDeclareYourGoods')}
                style={styles.disclaimerTitle}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch({
                    type: 'NAVIGATE',
                    screen: 'PersonalEffects',
                  })
                }
              >
                <BulletText
                  text={t('howToDeclareYourGoodsText1')}
                  style={{
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                  }}
                />
              </TouchableOpacity>

              <BulletText text={t('howToDeclareYourGoodsText2')} />
              <BulletText text={t('howToDeclareYourGoodsText3')} />
              <BulletText text={t('howToDeclareYourGoodsText4')} />
              <BulletText text={t('howToDeclareYourGoodsText5')} />
              <BulletText text={t('howToDeclareYourGoodsText6')} />
              <BulletText text={t('howToDeclareYourGoodsText7')} />

              <CardRowText
                text={t('specialCases')}
                style={styles.disclaimerTitle}
              />
              <Text
                style={{
                  color: '#1A1A1A',
                  fontWeight: '300',
                  fontFamily: 'roboto_light',
                  lineHeight: moderateScale(21),
                }}
              >
                <Trans i18nKey="specialCasesText1">
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
              <BulletTextWithChildren>
                <AppInfoSubText text={t('specialCasesText2')} />
                <AppInfoLink
                  text={t('specialCasesText3')}
                  onPress={() =>
                    Linking.openURL(
                      `${bansRestrictionsAndAuthorisationLinks[i18n.language]}`
                    )
                  }
                />
              </BulletTextWithChildren>
              <BulletText text={t('specialCasesText4')} />
              <BulletText text={t('specialCasesText5')} />
              <BulletText text={t('specialCasesText6')} />
              <BulletText text={t('specialCasesText7')} />
              <BulletText text={t('specialCasesText8')} />
              <BulletText text={t('specialCasesText9')} />
              <BulletText text={t('specialCasesText10')} />

              <BulletTextWithChildren>
                <AppInfoSubText text={t('specialCasesText11')} />
                <AppInfoLink
                  text={t('specialCasesText12')}
                  onPress={() =>
                    Linking.openURL(
                      `${
                        leavingSwitzerlandWithPersonalGoodsLinks[i18n.language]
                      }`
                    )
                  }
                />
              </BulletTextWithChildren>
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
                text={t('culpability')}
                style={styles.disclaimerTitle}
              />
              <AppInfoSubText text={t('culpabilityText1')} />

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
