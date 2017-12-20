import React from 'react';
import { Text, View, Platform } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as colors from './../../styles/colors';
import { verticalScale, moderateScale } from '../../styles/Scaling';

const ownStyles = disabled => ({
  bottomButtonContainer: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.MAIN_RED,
    borderColor: '#ddd',
    marginTop: verticalScale(16),
  },
  touchable: {
    flex: 1,
    backgroundColor: disabled ? 'lightgray' : colors.MAIN_RED,
    borderRadius: 3,
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
  touchableText: {
    fontSize: moderateScale(14),
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: verticalScale(16),
  },
});

const RedButton = ({ text, onPress, confirmationDisabled }) => (
  <View style={ownStyles(confirmationDisabled).bottomButtonContainer}>
    <Touchable
      onPress={onPress}
      style={ownStyles(confirmationDisabled).touchable}
      disabled={confirmationDisabled}
    >
      <Text style={ownStyles(confirmationDisabled).touchableText}>
        {text.toUpperCase()}
      </Text>
    </Touchable>
  </View>
);

RedButton.defaultProps = {
  confirmationDisabled: false,
};

export default RedButton;
