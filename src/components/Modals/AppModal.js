import React from 'react';
import { Modal } from 'react-native';

const AppModal = ({ modalVisible, children }) => (
  <Modal
    animationType="slide"
    transparent
    visible={modalVisible}
    onRequestClose={() => {}}
  >
    {children}
  </Modal>
);

export default AppModal;
