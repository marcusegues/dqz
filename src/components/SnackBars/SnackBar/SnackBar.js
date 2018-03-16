/* eslint-disable no-undef */
// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, Dimensions } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { SNACKBAR_GREY, WHITE } from '../../../styles/colors';
import type { SnackBarVisibility } from '../SnackBarsContainer';
import { verticalScale } from '../../../styles/Scaling';
import { size, type } from '../../../styles/fonts';

const { width } = Dimensions.get('window');

const snackBarStyles = (bottomMost, borderCrossings) => ({
  snackBar: {
    flex: 0,
    flexDirection: borderCrossings ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: SNACKBAR_GREY,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: bottomMost ? 0 : 2,
  },
  snackBarText: {
    color: WHITE,
    fontFamily: type.medium,
    fontSize: size.medium,
  },
  snackBarRightText: {
    ...snackBarStyles.snackBarText,
    color: '#95B2E4',
  },
  rightTextContainer: {
    alignItems: 'flex-end',
    width: borderCrossings ? width : null,
    paddingTop: borderCrossings ? verticalScale(16) : 0,
    paddingRight: borderCrossings ? 16 : 0,
  },
});

export const SnackBar = ({
  text,
  rightText,
  visibility,
  bottomMost = false,
  borderCrossings = false,
  onRightTextPress,
}: {
  text: string,
  rightText?: ?string,
  visibility: SnackBarVisibility,
  bottomMost: boolean,
  borderCrossings: boolean,
  onRightTextPress?: ?Function,
}) => {
  const ownStyles = snackBarStyles(bottomMost, borderCrossings);
  return visibility === 'hidden' ? (
    <View />
  ) : (
    <View style={ownStyles.snackBar}>
      <Text style={ownStyles.snackBarText}>{text}</Text>
      {rightText ? (
        <Touchable onPress={onRightTextPress}>
          <View style={ownStyles.rightTextContainer}>
            <Text style={ownStyles.snackBarRightText}>{rightText}</Text>
          </View>
        </Touchable>
      ) : null}
    </View>
  );
};

SnackBar.defaultProps = {
  rightText: null,
  onRightTextPress: () => {},
};
