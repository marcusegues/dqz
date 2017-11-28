import React from 'react';
import { ScrollView, Text, View, Platform } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as colors from './../../styles/colors';
import { scale, verticalScale, moderateScale } from '../../styles/Scaling';

const RedButton = ({ text, onPress }) => (
  <View style={ownStyles.bottomButtonContainer}>
    <Touchable
      onPress={onPress}
      style={ownStyles.touchable}
      background={Touchable.Ripple(colors.MAIN_RED)}
    >
      <Text style={ownStyles.touchableText}>{text}</Text>
    </Touchable>
  </View>
);
export default RedButton;
const ownStyles = {
  bottomButtonContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
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
    flex: 1,
    backgroundColor: colors.MAIN_RED,
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
