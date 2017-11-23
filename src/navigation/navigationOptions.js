import React from 'react';
import BackArrow from '../components/Headers/subcomponents/BackArrow';
import * as colors from '../styles/colors';

export const defaultNavigationOptions = ({ navigation }) => ({
  headerLeft: <BackArrow navigation={navigation} />,
  headerStyle: {
    backgroundColor: colors.MAIN_BACKGROUND_COLOR,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
