/* eslint-disable react/prefer-stateless-function,react/prefer-stateless-function */
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
// $FlowFixMe
import Card from '../QuestionAnswer/cards/Card';

class Overview extends React.Component {
  render() {
    return (
      <Card>
        <Text style={{ width: '100%' }}>Übersicht Ihrer Deklaration</Text>
      </Card>
    );
  }
}

export default Overview;
