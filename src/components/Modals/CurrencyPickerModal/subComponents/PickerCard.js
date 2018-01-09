// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { globalStyles } from '../../../../styles/globalStyles';
import type { Children } from '../../../../types/generalTypes';

const ownStyles = {
  modalContainer: {
    top: '25%',
    paddingBottom: 16,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
};

type PickerCardProps = {
  children: Children,
  style: {},
};

export const PickerCard = ({ children, style }: PickerCardProps) => (
  <View
    style={[ownStyles.modalContainer, globalStyles.boxShadow, { ...style }]}
  >
    {children}
  </View>
);
