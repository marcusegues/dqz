// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { verticalScale } from '../../../../styles/Scaling';
import { Card } from '../Card';
import { CardHeader } from '../subcomponents/CardHeader';
import { BackAndContinueButtons } from '../../../Buttons/BackAndContinueButtons';
import type { Children } from '../../../../types/generalTypes';

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
  children: Children,
  onAnswer: () => void,
  onBack: () => void,
  confirmationDisabled?: boolean,
};

export const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  onBack,
  confirmationDisabled,
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
