import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RedButton from '../../../../components/Buttons/RedButton';
import styles from './styles/YesNoCard';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../../styles/Scaling';

const YesNoCard = ({ text, text2, onAnswerYes, onAnswerNo }) => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>{text}</Text>
    </View>
    <TouchableOpacity
      onPress={() => console.log('click')}
      style={ownStyles.notSureTouchable}
    >
      <Text style={ownStyles.notSureText}>{text2}</Text>
    </TouchableOpacity>
    <View style={[styles.bottomButtonContainer, ownStyles.buttonContainer]}>
      <RedButton onPress={onAnswerYes} text="JA" style={{ flex: 0.47 }} />
      <RedButton onPress={onAnswerNo} text="NEIN" style={{ flex: 0.47 }} />
    </View>
  </View>
);
export default YesNoCard;

const ownStyles = {
  buttonContainer: {
    width: '90%',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
  },
  notSureTouchable: {
    padding: moderateScale(10),
  },
  notSureText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: '#D10014',
    paddingHorizontal: scale(16),
  },
};
