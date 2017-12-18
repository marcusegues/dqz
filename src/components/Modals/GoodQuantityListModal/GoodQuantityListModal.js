import React from 'react';
import { Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import ModalCard from '../ModalCard';
import AppModal from '../AppModal';
import CardHeader from '../../QuestionAnswer/cards/subcomponents/CardHeader';

class GoodQuantityListModal extends React.Component {
  render() {
    const { modalVisible, onHide, modalData } = this.props;
    return (
      <AppModal modalVisible={modalVisible}>
        <ModalCard>
          <CardHeader text={modalData.category} />
          <Touchable onPress={onHide}>
            <Text>Hide</Text>
          </Touchable>
        </ModalCard>
      </AppModal>
    );
  }
}

export default GoodQuantityListModal;
