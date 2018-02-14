// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { Row } from '../../Rows/Row';
import type { TFunction } from '../../../types/generalTypes';
import { ReceiptSubText } from './ReceiptSubText';

const ReceiptInfoNoteInner = ({ t }: { t: TFunction }) => (
  <Row
    width="100%"
    borderBottom={false}
    styles={{ justifyContent: 'flex-start' }}
  >
    <View style={{ flexDirection: 'column' }}>
      <ReceiptSubText text={t('general:note')} />
      <ReceiptSubText text={t('receipt:receiptStorageNotification')} />
    </View>
  </Row>
);

export const ReceiptInfoNote = (translate(['general', 'receipt'])(
  ReceiptInfoNoteInner
): ComponentType<{}>);
