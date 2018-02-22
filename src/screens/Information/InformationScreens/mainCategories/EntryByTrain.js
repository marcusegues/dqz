// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type EntryByTrainInnerProps = {
  t: TFunction,
};

const EntryByTrainInner = ({ t }: EntryByTrainInnerProps) => (
  <View>
    <Text>EntryByTrain</Text>
  </View>
);

export const EntryByTrain = (translate(['information'])(
  EntryByTrainInner
): ComponentType<EntryByTrainInnerProps>);
