// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { translate } from 'react-i18next';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { verticalScale, moderateScale } from '../../styles/Scaling';
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

const BackAndContinueButtons = ({
  text,
  onPress,
  confirmationDisabled,
  buttonStyle,
  t,
}) => (
  <View style={ownStyles.redButtonContainerWrapper}>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton
        onPress={() => {}}
        text={t('amountInputButtonBack')}
        buttonStyle={{ backgroundColor: GREY }}
      />
    </View>
    <View style={ownStyles.redButtonWrapper}>
      <RedButton text={t('amountInputButtonContinue')} />
    </View>
  </View>
);

export default translate(['amountInput'])(BackAndContinueButtons);
