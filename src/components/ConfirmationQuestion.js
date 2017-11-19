import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles/BinaryQuestion';

const ConfirmationQuestion = ({ children, onConfirm }) => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>{children}</View>

    <View style={styles.bottomButtonContainer}>
      <Touchable
        onPress={() => onConfirm}
        style={styles.leftTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.leftButtonText}>{`Bestätigen`}</Text>
      </Touchable>
    </View>
  </View>
);
export default ConfirmationQuestion;
