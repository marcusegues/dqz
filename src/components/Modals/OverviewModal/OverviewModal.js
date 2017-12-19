/* eslint-disable react/prefer-stateless-function,react/prefer-stateless-function */
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import ModalCard from '../ModalCard';
import AppModal from '../AppModal';
import Saferpay from '../../../../saferpay';

class OverviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingRedirectData: false,
      redirectDataLoaded: false,
    };
  }

  initializePayment() {
    Saferpay.initializePayment(500, 'EUR').then(responseJson => {});
  }

  render() {
    return (
      <AppModal modalVisible={this.props.modalVisible}>
        <ModalCard>
          <Text>Ubersicht Ihrer Deklaration</Text>
          <Touchable>
            <Text>Zur Bezahlung</Text>
          </Touchable>
          <Touchable onPress={this.props.onHide}>
            <Text>Hide</Text>
          </Touchable>
        </ModalCard>
      </AppModal>
    );
  }
}

export default OverviewModal;
