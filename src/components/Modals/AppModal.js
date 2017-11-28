import React from 'react';
import { Modal } from 'react-native';

export default class AppModal extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.modalVisible}
        onRequestClose={() => {}}
      >
        {this.props.children}
      </Modal>
    );
  }
}
