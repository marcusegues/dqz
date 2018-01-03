import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ownStyles = StyleSheet.create({
  closeIconContainer: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 5,
  },
});

const CloseIcon = ({ onPress }) => (
  <View style={ownStyles.closeIconContainer}>
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialIcons name="close" size={28} color="#DC0018" />
    </TouchableWithoutFeedback>
  </View>
);

export default CloseIcon;
