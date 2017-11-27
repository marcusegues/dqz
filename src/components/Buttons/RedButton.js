import React from 'react';
import { Text, View, Platform } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as colors from './../../styles/colors';
import { verticalScale, moderateScale } from '../../styles/Scaling';

const RedButton = ({ text, onPress, style }) => (
  <Touchable
    onPress={onPress}
    style={[ownStyles.touchable, { ...style }]}
    background={Touchable.Ripple(colors.MAIN_RED)}
  >
    <Text style={ownStyles.touchableText}>{text}</Text>
  </Touchable>
);

const ownStyles = {
  bottomButtonContainer: {
    // flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.MAIN_RED,
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  touchable: {
    // flex: 1,
    backgroundColor: colors.MAIN_RED,
    borderRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  touchableText: {
    fontSize: moderateScale(14),
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: verticalScale(16),
  },
};
export default RedButton;
