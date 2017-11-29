import React from 'react';
import { View, Text, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from '../../styles/OnBoardingStyles';

const img = require('../../../assets/icons/logo.png');

const OnBoarding = () => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <Text style={styles.welcomeTitle}>Welcome to</Text>
      <View style={styles.appTitleWrapper}>
        <Image source={img} style={styles.logo} resizeMode="contain" />
        <Text style={styles.appTitleToll}>
          Toll
          <Text style={styles.appTitleCalc}>Calc</Text>
        </Text>
      </View>
      <Text style={styles.mainText}>
        We’ve set your language based on your current system settings:
      </Text>
      <View style={styles.currentLanguageView}>
        <Text style={styles.currentLanguageText}>EN</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Text style={styles.selectLanguageText}>
          Select a different language:
        </Text>

        <View style={styles.languageButtonsContainer}>
          <Touchable
            style={styles.languageButton}
            background={Touchable.Ripple('#006699')}
          >
            <Text style={styles.languageButtonText}>DE</Text>
          </Touchable>
          <Touchable
            style={styles.languageButton}
            background={Touchable.Ripple('#006699')}
          >
            <Text style={styles.languageButtonText}>FR</Text>
          </Touchable>
          <Touchable
            style={styles.languageButton}
            background={Touchable.Ripple('#006699')}
          >
            <Text style={styles.languageButtonText}>IT</Text>
          </Touchable>
        </View>
      </View>
      <View style={styles.saveSettingsButtonContainer}>
        <Touchable
          style={styles.saveSettingsButton}
          background={Touchable.Ripple('#006699')}
        >
          <Text style={styles.saveSettingsButtonText}>SAVE SETTINGS</Text>
        </Touchable>
      </View>
    </View>
  </View>
);

export default OnBoarding;
