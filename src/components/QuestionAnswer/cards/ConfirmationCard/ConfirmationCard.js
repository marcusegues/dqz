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
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    backgroundColor: '#fff',
    width: '100%',
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
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(32),
    paddingTop: verticalScale(15),
    color: '#141414',
  },
  bottomSectionWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bottomButtonContainer: {
    justifyContent: 'center',
    marginVertical: verticalScale(15),
  },
};

const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  confirmationDisabled,
}) => (
  <View style={ownStyles.contentContainer}>
    <View style={{ width: '95%' }}>
      <Text style={ownStyles.mainText}>{text}</Text>
    </View>

    <View style={ownStyles.bottomSectionWrapper}>
      <View>{children}</View>
    </View>
    <View style={ownStyles.bottomButtonContainer}>
      <RedButton
        text="ÜBERNEHMEN"
        onPress={onAnswer}
        confirmationDisabled={confirmationDisabled}
      />
    </View>
  </View>
);

ConfirmationCard.defaultProps = {
  confirmationDisabled: false,
};

export default ConfirmationCard;
