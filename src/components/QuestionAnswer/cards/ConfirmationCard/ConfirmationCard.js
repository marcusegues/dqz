import React from 'react';
import { View, Platform } from 'react-native';
import { verticalScale, moderateScale } from '../../../../styles/Scaling';
import Card from '../Card';
import RedButton from '../../../Buttons/RedButton';
import CardHeader from '../subcomponents/CardHeader';
import { BLACK } from '../../../../styles/colors';

const ownStyles = {
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(5),
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 2,
    ...Platform.select({
      ios: {
        shadowColor: BLACK,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(32),
    paddingVertical: verticalScale(15),
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
    marginBottom: verticalScale(15),
  },
};

const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  confirmationDisabled,
}) => (
  <Card>
    <CardHeader text={text} />
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
  </Card>
);

ConfirmationCard.defaultProps = {
  confirmationDisabled: false,
};

export default ConfirmationCard;
