import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Text } from 'react-native';
import BottomTopModal from '../BottomTopModal';

const GoodQuantityListModal = ({ positionTop, onHideModal }) => (
  <BottomTopModal positionTop={positionTop}>
    <Text>Text</Text>
    <Touchable onPress={onHideModal}>
      <Text>Hide</Text>
    </Touchable>
  </BottomTopModal>
);

export default GoodQuantityListModal;
