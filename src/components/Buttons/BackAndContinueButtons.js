// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { verticalScale } from '../../styles/Scaling';
import { GREY } from '../../styles/colors';
import { RedButton } from './RedButton';
import type { TFunction } from '../../types/generalTypes';

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
  textBack?: string,
  textContinue?: string,
  backDisabled?: boolean,
  continueDisabled?: boolean,
};

const BackAndContinueButtonsInner = ({
  onPressBack,
  onPressContinue,
  textBack,
  textContinue,
  backDisabled = false,
  continueDisabled = false,
  t,
}: BackAndContinueButtonsProps & { t: TFunction }) => (
  <View style={ownStyles.redButtonContainerWrapper}>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton
        onPress={() => onPressBack()}
        text={textBack || t('buttonBack')}
        buttonStyle={{ backgroundColor: GREY }}
        confirmationDisabled={backDisabled}
      />
    </View>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton
        onPress={() => onPressContinue()}
        text={textContinue || t('buttonContinue')}
        confirmationDisabled={continueDisabled}
      />
    </View>
  </View>
);

export const BackAndContinueButtons = (translate(['general'])(
  BackAndContinueButtonsInner
): ComponentType<BackAndContinueButtonsProps>);
