// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type HighwayVignetteInnerProps = {
  t: TFunction,
};

const HighwayVignetteInner = ({ t }: HighwayVignetteInnerProps) => (
  <View>
    <Text>Highway Vignette</Text>
  </View>
);

export const HighwayVignette = (translate(['information'])(
  HighwayVignetteInner
): ComponentType<HighwayVignetteInnerProps>);
