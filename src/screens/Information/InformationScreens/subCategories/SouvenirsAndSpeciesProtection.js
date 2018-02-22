// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type SouvenirsAndSpeciesProtectionInnerProps = {
  t: TFunction,
};

const SouvenirsAndSpeciesProtectionInner = ({
  t,
}: SouvenirsAndSpeciesProtectionInnerProps) => (
  <View>
    <Text>Souvenirs And Species Protection</Text>
  </View>
);

export const SouvenirsAndSpeciesProtection = (translate(['information'])(
  SouvenirsAndSpeciesProtectionInner
): ComponentType<SouvenirsAndSpeciesProtectionInnerProps>);
