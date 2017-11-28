import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RedButton from '../../../../components/Buttons/RedButton';
import styles from './styles/YesNoCard';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../../styles/Scaling';

const ownStyles = {
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
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

const YesNoCard = ({ text, onAnswerYes, onAnswerNo }) => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>{text}</Text>
    </View>
    <TouchableOpacity style={ownStyles.notSureTouchable}>
      <Text style={ownStyles.notSureText}>ICH BIN MIR NICHT SICHER</Text>
    </TouchableOpacity>
    <View style={ownStyles.buttonContainer}>
      <View style={{ flex: 0.49 }}>
        <RedButton onPress={onAnswerYes} text="JA" />
      </View>
      <View style={{ flex: 0.49 }}>
        <RedButton onPress={onAnswerNo} text="NEIN" />
      </View>
    </View>
  </View>
);
export default YesNoCard;
