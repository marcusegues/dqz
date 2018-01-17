// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { GREY } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';

type DownloadIconProps = {
  navigation: Navigation,
};

export const DownloadIcon = ({ navigation }: DownloadIconProps) => (
  <Touchable
    onPress={() => {
      // navigation.goBack();
    }}
  >
    <MaterialIcons name="get-app" size={moderateScale(28)} color={GREY} />
  </Touchable>
);
