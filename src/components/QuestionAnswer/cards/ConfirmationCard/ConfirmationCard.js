import React from 'react';
import { Text, View, Platform } from 'react-native';
import { verticalScale, moderateScale } from '../../../../styles/Scaling';
import RedButton from '../../../Buttons/RedButton';

const ownStyles = {
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    width: '100%',
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
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(32),
    paddingTop: verticalScale(15),
    color: '#141414',
  },
  bottomSectionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    justifyContent: 'center',
    width: '95%',
    marginVertical: verticalScale(15),
  },
};

const ConfirmationCard = ({ text, children, onAnswer }) => (
  <View style={ownStyles.contentContainer}>
    <View style={ownStyles.mainTextContainer}>
      <Text style={ownStyles.mainText}>{text}</Text>
    </View>

    <View style={ownStyles.bottomSectionWrapper}>
      <View style={ownStyles.bottomTextContainer}>{children}</View>
      <View style={ownStyles.bottomButtonContainer}>
        <RedButton text="ÜBERNEHMEN" onPress={onAnswer} />
      </View>
    </View>
  </View>
);
export default ConfirmationCard;
