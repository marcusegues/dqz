// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet, Text } from 'react-native';
import { SNACKBAR_GREY, WHITE } from '../../../styles/colors';
import type { SnackBarVisibility } from '../SnackBarsContainer';

const snackBarStyles = bottomMost => ({
  snackBar: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: SNACKBAR_GREY,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: bottomMost ? 0 : 2,
  },
  snackBarText: {
    color: WHITE,
    fontFamily: 'roboto_medium',
    fontSize: 14,
  },
});

export const SnackBar = ({
  text,
  visibility,
  bottomMost = false,
}: {
  text: string,
  visibility: SnackBarVisibility,
  bottomMost: boolean,
}) => {
  const ownStyles = snackBarStyles(bottomMost);
  return visibility === 'hidden' ? (
    <View />
  ) : (
    <View style={[ownStyles.snackBar]}>
      <Text style={[ownStyles.snackBarText]}>{text}</Text>
    </View>
  );
};
