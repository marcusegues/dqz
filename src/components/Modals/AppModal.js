// @flow
import React from 'react';
// $FlowFixMe
import { Modal } from 'react-native';
import type { Children } from '../../types/generalTypes';

type AppModalProps = {
  modalVisible: boolean,
  children: Children,
  transparent?: boolean,
};

export const AppModal = ({
  modalVisible,
  children,
  transparent,
}: AppModalProps) => (
  <Modal
    animationType="slide"
    transparent={transparent}
    style={{ backgroundColor: 'red' }}
    visible={modalVisible}
    onRequestClose={() => {}}
  >
    {children}
  </Modal>
);

AppModal.defaultProps = {
  transparent: true,
};
