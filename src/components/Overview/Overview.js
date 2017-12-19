/* eslint-disable react/prefer-stateless-function,react/prefer-stateless-function */
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import ModalCard from '../Modals/ModalCard';
import AppModal from '../Modals/AppModal';
import Saferpay from '../../../saferpay';
import Card from '../QuestionAnswer/cards/Card';

class Overview extends React.Component {
  render() {
    return (
      <Card>
        <Text style={{ width: '100%' }}>Ubersicht Ihrer Deklaration</Text>
        <Touchable onPress={() => this.props.initializePayment()}>
          <Text>Zur Bezahlung</Text>
        </Touchable>
      </Card>
    );
  }
}

export default Overview;
