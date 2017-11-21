import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

// REPLACE WITH OWN STYLES OR MAKE THE STYLES ACTUALLY COMMON IN ANOTHER LOCATION
import styles from '../YesNoCard/styles/YesNoCard';

const ConfirmationCard = ({ text, children, onAnswerConfirm }) => (
  <View
    style={[
      styles.contentContainer,
      { flex: 0.88, justifyContent: 'flex-start' },
    ]}
  >
    <View
      style={[
        styles.mainTextContainer,
        {
          flex: 0.65,
          width: '95%',
          borderBottomWidth: 1,
          borderBottomColor: '#E0E0E1',
        },
      ]}
    >
      <Text style={[styles.mainText, { paddingTop: 15 }]}>{text}</Text>
    </View>
    <View
      style={[
        styles.mainTextContainer,
        { justifyContent: 'center', flex: 0.28 },
      ]}
    >
      {children}
    </View>

    <View style={{ flex: 0.037 }} />

    <View style={styles.bottomButtonContainer}>
      <Touchable
        onPress={onAnswerConfirm}
        style={[styles.leftTouchable, { flex: 0.9 }]}
        background={Touchable.Ripple('#DC0018')}
      >
        <Text style={styles.leftButtonText}>{`ÜBERNEHMEN`}</Text>
      </Touchable>
    </View>
  </View>
);
export default ConfirmationCard;
