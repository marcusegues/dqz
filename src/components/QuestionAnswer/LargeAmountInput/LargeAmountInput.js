import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ownStyles = StyleSheet.create({
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    flex: 0.3,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'roboto_regular',
  },
});

const LargeAmountInput = () => (
  <View>
    <TextInput style={[ownStyles.textInput, { flex: 0.5 }]} placeholder="" />
  </View>
);

export default LargeAmountInput;
