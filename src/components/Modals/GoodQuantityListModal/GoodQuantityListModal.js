import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Text } from 'react-native';
import BottomTopModal from '../BottomTopModal';

class GoodQuantityListModal extends React.Component {
  render() {
    return (
      <BottomTopModal positionTop={this.props.positionTop}>
        <Text>Text</Text>
        <Touchable onPress={this.props.onHideModal}>
          <Text>Hide</Text>
        </Touchable>
      </BottomTopModal>
    );
  }
}

export default GoodQuantityListModal;
