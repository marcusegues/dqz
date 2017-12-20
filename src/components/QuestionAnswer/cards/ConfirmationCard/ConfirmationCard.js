import React from 'react';
import { View } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';
import Card from '../Card';
import RedButton from '../../../Buttons/RedButton';
import CardHeader from '../subcomponents/CardHeader';

const ownStyles = {
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
