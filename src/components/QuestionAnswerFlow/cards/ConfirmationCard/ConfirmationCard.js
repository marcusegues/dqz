import React from 'react';
import { Text, View, Platform } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../../styles/Scaling';

import RedButton from '../../../Buttons/RedButton';

const ConfirmationCard = ({ text, children, onAnswerConfirm }) => (
  <View style={ownStyles.contentContainer}>
    <View style={ownStyles.mainTextContainer}>
      <Text style={ownStyles.mainText}>{text}</Text>
    </View>
    <View style={ownStyles.bottomTextContainer}>{children}</View>

    <View style={ownStyles.blankView} />

    <View style={ownStyles.bottomButtonContainer}>
      <RedButton text={`ÜBERNEHMEN`} onPress={onAnswerConfirm} />
    </View>
  </View>
);
export default ConfirmationCard;

const ownStyles = {
  contentContainer: {
    flex: 0.88,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 2,
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  mainTextContainer: {
    flex: 0.65,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E1',
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(32),
    paddingTop: verticalScale(15),
    color: '#141414',
  },
  bottomTextContainer: {
    flex: 0.28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  blankView: {
    flex: 0.037,
  },
};
