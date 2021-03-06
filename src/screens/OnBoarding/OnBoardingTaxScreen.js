// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { ComponentType } from 'react';
import { OnBoardingContainer } from './subcomponents/OnBoardingContainer';
import { OnBoardingParagraph } from './subcomponents/OnBoardingParagraph';
import { DoneButton } from './subcomponents/DoneButton';
import { moderateScale } from '../../styles/Scaling';
import { BASE_GREY } from '../../styles/colors';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { storeSettingsAcceptRate } from '../../asyncStorage/storageApi';
import { FurtherInformationModal } from '../../components/Modals/FurtherInformationModal/FurtherInformationModal';
import { SkipThisStep } from './subcomponents/SkipThisStep';
import { size, type } from '../../styles/fonts';

const ownStyles = {
  container: {
    alignItems: 'center',
  },
  percents: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(36),
    color: '#4a4a4a',
    paddingVertical: moderateScale(5),
  },
  bottomText: {
    fontFamily: type.medium,
    fontSize: size.medium,
    color: BASE_GREY,
  },
  creditCardImage: { width: 224, height: 41 },
};

const creditCardImage = require('../../../assets/images/visaAndMaestroLogo.png');

type OnBoardingTaxScreenState = {
  showModal: boolean,
};

type OnBoardingTaxScreenProps = {
  navigation: Navigation,
};

class OnBoardingTaxScreenInner extends React.Component<
  OnBoardingTaxScreenProps & { t: TFunction },
  OnBoardingTaxScreenState
> {
  constructor(props: OnBoardingTaxScreenProps & { t: TFunction }) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    const { showModal } = this.state;
    const { navigation, t } = this.props;

    return (
      <OnBoardingContainer>
        <View style={ownStyles.container}>
          <OnBoardingParagraph text={t('confirmationVat')} />
          <Text style={ownStyles.percents}>7.7%</Text>
          <OnBoardingParagraph text={t('confirmationVat2')} />
        </View>
        <Image
          source={creditCardImage}
          resizeMode="contain"
          style={ownStyles.creditCardImage}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ showModal: true });
          }}
        >
          <Text style={ownStyles.bottomText}>
            {(t('vatInformation') || '').toUpperCase()}
          </Text>
        </TouchableOpacity>
        <DoneButton
          onPress={() => {
            storeSettingsAcceptRate('accepted');
            navigation.dispatch({ type: 'NAVIGATE', screen: 'MainMenu' });
          }}
        />
        <SkipThisStep
          onPress={() => {
            storeSettingsAcceptRate('skipped');
            navigation.dispatch({ type: 'NAVIGATE', screen: 'MainMenu' });
          }}
          text={t('skipThisStep')}
        />

        <FurtherInformationModal
          modalVisible={showModal}
          navigation={navigation}
          onPressLegal={() => {
            this.setState({ showModal: false });
            navigation.dispatch({
              type: 'NAVIGATE',
              screen: 'LegalNoticeInfo',
            });
          }}
          toggleModalVisible={() => {
            this.setState({ showModal: false });
          }}
          onConfirm={() => {
            this.setState({ showModal: false });
          }}
        />
      </OnBoardingContainer>
    );
  }
}

export const OnBoardingTaxScreen = (translate(['onBoarding'])(
  OnBoardingTaxScreenInner
): ComponentType<OnBoardingTaxScreenProps>);
