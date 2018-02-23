// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type AuthorisationRequirementsInnerProps = {
  t: TFunction,
};

const AuthorisationRequirementsInner = ({
  t,
}: AuthorisationRequirementsInnerProps) => (
  <View>
    <Text>Authorisation Requirements</Text>
  </View>
);

export const AuthorisationRequirements = (translate(['information'])(
  AuthorisationRequirementsInner
): ComponentType<AuthorisationRequirementsInnerProps>);
