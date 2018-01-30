// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet, Text } from 'react-native';
import { SNACKBAR_GREY, WHITE } from '../../../styles/colors';
import type { SnackBarState } from '../SnackBarsContainer';

const ownStyles = StyleSheet.create({
  snackBar: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: SNACKBAR_GREY,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 5,
  },
  snackBarText: {
    color: WHITE,
    fontFamily: 'roboto_medium',
    fontSize: 14,
  },
});

export const SnackBar = ({
  text,
  sbState,
}: {
  text: String,
  sbState: SnackBarState,
}) => sbState === 'hidden' ? (
    <View />
  ) : (
    <View style={ownStyles.snackBar}>
      <Text style={ownStyles.snackBarText}>{text}</Text>
    </View>
  );
