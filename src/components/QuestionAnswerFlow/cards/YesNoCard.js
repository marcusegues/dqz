import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles/YesNoCard';

const YesNoCard = ({ text, onAnswerYes, onAnswerNo }) => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>{text}</Text>
    </View>

    <View style={styles.bottomButtonContainer}>
      <Touchable
        onPress={onAnswerYes}
        style={styles.leftTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.leftButtonText}>JA</Text>
      </Touchable>

      <Touchable
        onPress={onAnswerNo}
        style={styles.rightTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.rightButtonText}>NEIN</Text>
      </Touchable>
    </View>
  </View>
);
export default YesNoCard;
