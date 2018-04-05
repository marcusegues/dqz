// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { Card } from '../Card';
import { CardHeader } from '../subcomponents/CardHeader';
import { BackAndContinueButtons } from '../../../Buttons/BackAndContinueButtons';
import type { Children } from '../../../../types/generalTypes';
import { scale, verticalScale } from '../../../../styles/Scaling';
import { BlueInfoIcon } from '../../../Headers/subcomponents/BlueInfoIcon';

const ownStyles = {
  cardHeaderContainer: {
    width: '100%',
    paddingRight: scale(35),
  },
  infoIcon: {
    position: 'absolute',
    top: verticalScale(16),
    right: scale(11),
  },
  bottomSectionWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bottomButtonContainer: {
    justifyContent: 'center',
  },
};

type ConfirmationCardProps = {
  text: string,
  children: Children,
  onAnswer: () => void,
  onBack: () => void,
  confirmationDisabled?: boolean,
  onConfirmationCardTitlePress: () => void,
  onInfoIconPress?: ?() => void,
};

export const ConfirmationCard = ({
  text,
  children,
  onAnswer,
  onBack,
  confirmationDisabled,
  onConfirmationCardTitlePress,
  onInfoIconPress,
}: ConfirmationCardProps) => (
  <Card>
    <View style={{ flexDirection: 'row' }}>
      <Touchable
        onPress={onConfirmationCardTitlePress}
        style={ownStyles.cardHeaderContainer}
      >
        <CardHeader text={text} />
      </Touchable>
      <View style={ownStyles.infoIcon}>
        <BlueInfoIcon onPress={onInfoIconPress} />
      </View>
    </View>

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
  onInfoIconPress: () => {},
};
