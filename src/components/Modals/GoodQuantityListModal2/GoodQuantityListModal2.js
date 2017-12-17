import React from 'react';
import { Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Card from '../ModalCard';
import AppModal from '../AppModal';

const GoodQuantityListModal = ({ modalVisible, onHide }) => {
  return (
    <AppModal modalVisible={modalVisible}>
      <Card>
        <Text>Text</Text>
        <Touchable onPress={onHide}>
          <Text>Hide</Text>
        </Touchable>
      </Card>
    </AppModal>
  );
};

export default GoodQuantityListModal;
