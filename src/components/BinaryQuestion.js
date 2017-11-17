import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles/BinaryQuestion';

const BinaryQuestion = ({ text, onYesAnswer, onNoAnswer }) => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>{text}</Text>
    </View>

    <View style={styles.bottomButtonContainer}>
      <Touchable
        onPress={() => onYesAnswer}
        style={styles.leftTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.leftButtonText}>JA</Text>
      </Touchable>

      <Touchable
        onPress={() => onNoAnswer}
        style={styles.rightTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.rightButtonText}>NEIN</Text>
      </Touchable>
    </View>
  </View>
);
export default BinaryQuestion;
