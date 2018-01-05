// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';

type DownloadIconProps = {
  navigation: () => void,
};

const DownloadIcon = ({ navigation }: DownloadIconProps) => (
  <Touchable
    onPress={() => {
      navigation.goBack();
    }}
  >
    <MaterialIcons name="get-app" size={moderateScale(28)} color={MAIN_RED} />
  </Touchable>
);

export default DownloadIcon;
