// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import {
  Image,
  Text,
  View,
  Dimensions,
  // $FlowFixMe
} from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../types/generalTypes';
import { moderateScale, scale } from '../../styles/Scaling';
import { MAIN_BACKGROUND_COLOR } from '../../styles/colors';
import { NavBar } from '../../components/NavBar/NavBar';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
// import { HeaderTitle } from '../../../../../../../Headers/subcomponents/HeaderTitle';

const { width } = Dimensions.get('window');

const ownStyles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  locatorContainer: {
    marginHorizontal: 16,
  },
  topImage: {
    width,
    flex: 1,
  },
  textContainer: {
    marginHorizontal: scale(25),
    marginTop: 14,
    alignItems: 'center',
  },
  text: {
    color: '#4A4A4A',
    fontSize: moderateScale(23),
    textAlign: 'center',
  },
};

const backgroundImage = require('../../../assets/images/successfulPayment.png');

type SuccessfulPaymentInnerProps = {
  t: TFunction,
};

class SuccessfulPaymentInner extends React.Component<
  SuccessfulPaymentInnerProps
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle
        text={screenProps.t('SuccessfulPayment:navigationHeaderTitle')}
      />
    ),
  });
  render() {
    const { t } = this.props;
    return (
      <View style={ownStyles.container}>
        <View style={ownStyles.locatorContainer}>
          <NavBar step={2} />
        </View>

        <View>
          <View style={ownStyles.textContainer}>
            <Text style={ownStyles.text}>{t('title')}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              source={backgroundImage}
              resizeMode="contain"
              style={ownStyles.topImage}
            />
          </View>
        </View>
      </View>
    );
  }
}

export const SuccessfulPayment = (translate(['SuccessfulPayment'])(
  SuccessfulPaymentInner
): ComponentType<SuccessfulPaymentInnerProps>);
