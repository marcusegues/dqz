// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import type { Children } from '../../types/generalTypes';

const ownStyles = {
  modalContainer: {
    paddingBottom: 16,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
};

type ModalCardProps = {
  children: Children,
  style: {},
};

export const ModalCard = ({ children, style }: ModalCardProps) => (
  <View
    style={[ownStyles.modalContainer, globalStyles.boxShadow, { ...style }]}
  >
    {children}
  </View>
);
