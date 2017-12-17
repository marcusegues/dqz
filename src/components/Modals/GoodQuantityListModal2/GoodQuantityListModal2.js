import React from 'react';
import { Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import ModalCard from '../ModalCard';
import AppModal from '../AppModal';

const GoodQuantityListModal = ({ modalVisible, onHide }) => {
  return (
    <AppModal modalVisible={modalVisible}>
      <ModalCard>
        <Text>Text</Text>
        <Touchable onPress={onHide}>
          <Text>Hide</Text>
        </Touchable>
      </ModalCard>
    </AppModal>
  );
};

export default GoodQuantityListModal;
