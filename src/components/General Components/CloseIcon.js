// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ownStyles = StyleSheet.create({
  closeIconContainer: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 5,
  },
});

type CloseIconProps = {
  onPress: Function,
};

export const CloseIcon = ({ onPress }: CloseIconProps) => (
  <View style={ownStyles.closeIconContainer}>
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <MaterialIcons name="close" size={28} color="#DC0018" />
    </TouchableWithoutFeedback>
  </View>
);
