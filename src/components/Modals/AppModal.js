import React from 'react';
import { Modal } from 'react-native';

const AppModal = ({ modalVisible, children, transparent = true }) => (
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

export default AppModal;
