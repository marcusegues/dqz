import React from 'react';
import BackArrow from '../components/Headers/subcomponents/BackArrow';
import { MAIN_BACKGROUND_COLOR } from '../styles/colors';

export const defaultNavigationOptions = ({ navigation }) => ({
  headerLeft: <BackArrow navigation={navigation} />,
  headerStyle: {
    backgroundColor: MAIN_BACKGROUND_COLOR,
    borderBottomWidth: 5,
    borderBottomColor: MAIN_BACKGROUND_COLOR,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
