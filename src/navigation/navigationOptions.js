// @flow
import React from 'react';
import { BackArrow } from '../components/Headers/subcomponents/BackArrow';
import { MAIN_BACKGROUND_COLOR } from '../styles/colors';
import type { Navigation } from '../types/generalTypes';

export const defaultNavigationOptions = ({
  navigation,
}: {
  navigation: Navigation,
}) => ({
  headerLeft: <BackArrow onPress={() => navigation.goBack()} />,
  headerStyle: {
    backgroundColor: MAIN_BACKGROUND_COLOR,
    borderBottomWidth: 5,
    borderBottomColor: MAIN_BACKGROUND_COLOR,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
