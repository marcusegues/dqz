// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { verticalScale } from '../../styles/Scaling';
import { GREY } from '../../styles/colors';
import RedButton from './RedButton';

const ownStyles = {
  redButtonContainerWrapper: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: verticalScale(16),
  },
  redButtonWrapper: {
    flex: 0.47,
  },
};

type BackAndContinueButtonsProps = {
  onPressBack: () => void,
  onPressContinue: () => void,
  t: (field: string, params?: {}) => string,
  confirmationDisabled?: boolean,
};

const BackAndContinueButtons = ({
  onPressBack,
  onPressContinue,
  confirmationDisabled,
  t,
}: BackAndContinueButtonsProps) => (
  <View style={ownStyles.redButtonContainerWrapper}>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton
        onPress={onPressBack}
        text={t('buttonBack')}
        buttonStyle={{ backgroundColor: GREY }}
      />
    </View>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton
        confirmationDisabled={confirmationDisabled}
        onPress={onPressContinue}
        text={t('buttonContinue')}
      />
    </View>
  </View>
);

BackAndContinueButtons.defaultProps = {
  confirmationDisabled: false,
};

export default translate(['general'])(BackAndContinueButtons);
