// @flow
import React from 'react';
// $FlowFixMe
import { View, ScrollView, Text } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import type { Children } from '../../../types/generalTypes';
import { UsefulInformationCard } from './UsefulInformationCard';

const ownStyles = {};

type TestProps = {
  children: Children,
};

export const Test = ({ children }: TestProps) => (
  <UsefulInformationCard>
    <Text>Test</Text>
  </UsefulInformationCard>
);
