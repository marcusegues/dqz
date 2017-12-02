import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const LargeAmountInput = ({}) => (
  <View>
    <TextInput style={[ownStyles.textInput, { flex: 0.5 }]} placeholder="" />
  </View>
);

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

export default LargeAmountInput;
