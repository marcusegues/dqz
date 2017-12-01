import React from 'react';
import { Text, View, Platform } from 'react-native';
import { verticalScale, moderateScale } from '../../../../styles/Scaling';
import RedButton from '../../../Buttons/RedButton';

const ownStyles = {
  contentContainer: {
    flex: 0.88,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 2,
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  mainTextContainer: {
    flex: 0.58,
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
    flex: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    flex: 0.14,
    justifyContent: 'center',
    width: '95%',
  },
};

const ConfirmationCard = ({ text, children, onAnswerConfirm }) => (
  <View style={ownStyles.contentContainer}>
    <View style={ownStyles.mainTextContainer}>
      <Text style={ownStyles.mainText}>{text}</Text>
    </View>
    <View style={ownStyles.bottomTextContainer}>{children}</View>

    <View style={ownStyles.bottomButtonContainer}>
      <RedButton text="ÜBERNEHMEN" onPress={onAnswerConfirm} />
    </View>
  </View>
);
export default ConfirmationCard;
