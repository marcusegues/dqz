// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type CustomsProceduresInnerProps = {
  t: TFunction,
};

const CustomsProceduresInner = ({ t }: CustomsProceduresInnerProps) => (
  <View>
    <Text>Customs procedures</Text>
  </View>
);

export const CustomsProcedures = (translate(['information'])(
  CustomsProceduresInner
): ComponentType<CustomsProceduresInnerProps>);
