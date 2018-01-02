import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';

const HomeIcon = ({ navigation }) => (
  <Touchable
    onPress={() => {
      navigation.goBack();
    }}
  >
    <MaterialIcons name="home" size={moderateScale(28)} color={MAIN_RED} />
  </Touchable>
);

export default HomeIcon;
