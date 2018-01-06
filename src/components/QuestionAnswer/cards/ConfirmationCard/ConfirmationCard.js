// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';
import Card from '../Card';
import RedButton from '../../../Buttons/RedButton';
import CardHeader from '../subcomponents/CardHeader';
import BackAndContinueButtons from '../../../Buttons/BackAndContinueButtons';

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

type ConfirmationCardProps = {
  text: string,
  children: any,
  onAnswer: () => void,
  onBack: () => void,
  confirmationDisabled?: boolean,
  t: (field: string, params?: {}) => string,
};

const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  onBack,
  confirmationDisabled,
  t,
}: ConfirmationCardProps) => (
  <Card>
    <CardHeader text={text} />
    <View style={ownStyles.bottomSectionWrapper}>
      <View>{children}</View>
    </View>
    <View style={ownStyles.bottomButtonContainer}>
      <BackAndContinueButtons
        onPressBack={onBack}
        onPressContinue={onAnswer}
        confirmationDisabled={confirmationDisabled}
      />
    </View>
  </Card>
);

ConfirmationCard.defaultProps = {
  confirmationDisabled: false,
};

export default translate(['general'])(ConfirmationCard);
