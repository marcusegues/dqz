// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { translate } from 'react-i18next';
import { Row } from '../../../../Row';

type VatAmountListProps = {
  setContentHeight: (height: number) => void,
};

const VatAmountListInner = ({ setContentHeight }: VatAmountListProps) => (
  <Row
    borderBottom={false}
    onLayout={event => {
      setContentHeight(event.nativeEvent.layout.height);
    }}
  >
    <Text>List of amounts</Text>
  </Row>
);

export const VatAmountList = (translate(['receipt'])(
  VatAmountListInner
): ComponentType<VatAmountListProps>);
