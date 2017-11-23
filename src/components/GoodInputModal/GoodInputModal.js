import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class GoodInputModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1A1A1A',
            opacity: 0.8,
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}
          >
            <View
              style={{
                top: '25%',
                flex: 0.5,
                width: '85%',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: 3,
                alignSelf: 'center',
                backgroundColor: '#FFF',
                shadowColor: '#000',
                shadowOffset: { height: 3, width: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              {this.props.children}
            </View>
            {/*<Text>Hello World!</Text>*/}
            {/*<TouchableHighlight*/}
            {/*onPress={() => {*/}
            {/*this.setModalVisible(!this.state.modalVisible);*/}
            {/*}}*/}
            {/*>*/}
            {/*<Text>Hide Modal</Text>*/}
            {/*</TouchableHighlight>*/}
            {/*</View>*/}
            {/*</View>*/}
          </Modal>

          {/*<TouchableHighlight*/}
          {/*onPress={() => {*/}
          {/*this.setModalVisible(true);*/}
          {/*}}*/}
          {/*>*/}
          {/*<Text>Show Modal</Text>*/}
          {/*</TouchableHighlight>*/}
        </View>

        <AppModal>
          <View
            style={{
              flex: 1,
            }}
          >
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
            <Text>HELLO from GoodInputModal</Text>
            <Text>HELLO from GoodInputModal</Text>
            <Text>HELLO from GoodInputModal</Text>
          </View>
        </AppModal>
      </View>
    );
  }
}
