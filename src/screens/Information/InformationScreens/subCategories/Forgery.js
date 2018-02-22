// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type ForgeryInnerProps = {
  t: TFunction,
};

const ForgeryInner = ({ t }: ForgeryInnerProps) => (
  <View>
    <Text>Forgery</Text>
  </View>
);

export const Forgery = (translate(['information'])(ForgeryInner): ComponentType<
  ForgeryInnerProps
>);
