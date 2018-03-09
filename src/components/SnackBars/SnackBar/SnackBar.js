// @flow
import React from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { SNACKBAR_GREY, WHITE } from '../../../styles/colors';
import type { SnackBarVisibility } from '../SnackBarsContainer';

const snackBarStyles = bottomMost => ({
  snackBar: {
    flex: 0,
    flexDirection: 'row',
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
  rightText,
  visibility,
  bottomMost = false,
  onRightTextPress,
}: {
  text: string,
  rightText?: ?string,
  visibility: SnackBarVisibility,
  bottomMost: boolean,
  onRightTextPress?: ?Function,
}) => {
  const ownStyles = snackBarStyles(bottomMost);
  return visibility === 'hidden' ? (
    <View />
  ) : (
    <View style={[ownStyles.snackBar]}>
      <Text style={[ownStyles.snackBarText, { flex: 1 }]}>{text}</Text>
      {rightText ? (
        <Touchable onPress={onRightTextPress}>
          <Text style={[ownStyles.snackBarText]}>{rightText}</Text>
        </Touchable>
      ) : null}
    </View>
  );
};

SnackBar.defaultProps = {
  rightText: null,
  onRightTextPress: () => {},
};
