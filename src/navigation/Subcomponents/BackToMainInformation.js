// @flow

import React from 'react';
import { BackArrow } from '../../components/Headers/subcomponents/BackArrow';
import type { Navigation } from '../../types/generalTypes';

type BackToMainInformationProps = {
  navigation: Navigation,
};

export const BackToMainInformation = ({
  navigation,
}: BackToMainInformationProps) => (
  <BackArrow
    onPress={() =>
      navigation.dispatch({
        type: 'NAVIGATE',
        screen: 'InformationMainCategories',
      })
    }
  />
);
