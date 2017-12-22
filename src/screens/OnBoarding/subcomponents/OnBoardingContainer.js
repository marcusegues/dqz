import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import AppTitle from '../../../components/AppTitle/AppTitle';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeTitle: {
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
};

const OnBoardingContainer = ({ t, children }) => (
  <View style={ownStyles.container}>
    <View style={ownStyles.contentContainer}>
      <View>
        <Text style={ownStyles.welcomeTitle}>{t('onBoarding:welcome')}</Text>
        <AppTitle />
      </View>
      {children}
    </View>
  </View>
);

export default translate(['general', 'onBoarding'])(OnBoardingContainer);
