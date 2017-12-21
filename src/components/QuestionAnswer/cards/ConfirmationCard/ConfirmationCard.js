import React from 'react';
import { translate } from 'react-i18next';
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
    marginBottom: verticalScale(15),
  },
};

const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  confirmationDisabled,
  t,
}) => (
  <Card>
    <CardHeader text={text} />
    <View style={ownStyles.bottomSectionWrapper}>
      <View>{children}</View>
    </View>
    <View style={ownStyles.bottomButtonContainer}>
      <RedButton
        text={t('confirm')}
        onPress={onAnswer}
        confirmationDisabled={confirmationDisabled}
      />
    </View>
  </Card>
);

ConfirmationCard.defaultProps = {
  confirmationDisabled: false,
};

export default translate(['general'])(ConfirmationCard);
