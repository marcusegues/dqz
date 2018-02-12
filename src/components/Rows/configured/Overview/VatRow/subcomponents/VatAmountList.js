import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { translate } from 'react-i18next';
import { Row } from '../../../../Row';

class VatAmountListInner extends React.Component {
  render() {
    return (
      <Row
        borderBottom={false}
        onLayout={event => {
          console.log('Set max height', event.nativeEvent.layout.height);
          this.props.setContentHeight(event.nativeEvent.layout.height);
        }}
      >
        <Text>{'Attempt'}</Text>
      </Row>
    );
  }
}

export const VatAmountList = (translate(['receipt'])(
  VatAmountListInner
): ComponentType<VatRowProps>);
