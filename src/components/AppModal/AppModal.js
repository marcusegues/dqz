import React, { Component } from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default class AppModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={ownStyles.modalOverlay}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={ownStyles.modalContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <MaterialIcons name="close" size={28} color="#DC0018" />
              </TouchableWithoutFeedback>
            </View>

            <Text
              style={{
                fontFamily: 'roboto_regular',
                fontSize: 24,
                color: '#141414',
              }}
            >
              Alkoholische Getränke
            </Text>
            <Text
              style={{
                fontFamily: 'roboto_regular',
                fontSize: 14,
                color: '#898989',
              }}
            >
              Alkoholgehalt bis 18% Vol.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#E0E0E1',
                borderTopColor: '#E0E0E1',
                paddingVertical: 17,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: 'roboto_medium',
                  fontSize: 18,
                  color: '#24253D',
                  flex: 0.35,
                }}
              >
                Menge
              </Text>

              <TouchableOpacity onPress={() => console.log('minus')}>
                <Entypo name="circle-with-minus" size={30} color="#E0E0E1" />
              </TouchableOpacity>
              <TextInput
                style={{
                  height: 40,
                  borderBottomWidth: 1,
                  flex: 0.3,
                  textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'roboto_regular',
                }}
                placeholder=""
                onChangeText={text => this.setState({ text })}
              />
              <TouchableOpacity onPress={() => console.log('plus')}>
                <Entypo name="circle-with-plus" size={30} color="#DC0018" />
              </TouchableOpacity>
              {/*<View style={{ flex: 0.15 }} />*/}
              <Text
                style={{
                  flex: 0.35,
                  textAlign: 'right',
                  fontFamily: 'roboto_medium',
                  fontSize: 14,
                  color: '#898989',
                }}
              >
                Liter
              </Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const ownStyles = {
  modalOverlay: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    opacity: 0.8,
  },
  modalContainer: {
    top: '25%',
    flex: 0.5,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    // alignItems: 'space-between',
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
};
