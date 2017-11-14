import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles/Question1Styles';

const Question1 = props => (
  <View style={styles.contentContainer}>
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>Reisen Sie allein?</Text>
    </View>

    <View style={styles.bottomButtonContainer}>
      <Touchable
        onPress={() => console.log('JA!')}
        style={styles.leftTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.leftButtonText}>JA</Text>
      </Touchable>

      <Touchable
        onPress={() => console.log('NEIN!')}
        style={styles.rightTouchable}
        background={Touchable.Ripple('blue')}
      >
        <Text style={styles.rightButtonText}>NEIN</Text>
      </Touchable>
    </View>
  </View>
);
export default Question1;
