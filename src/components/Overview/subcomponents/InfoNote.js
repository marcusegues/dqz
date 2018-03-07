// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { Row } from '../../Rows/Row';
import type { TFunction } from '../../../types/generalTypes';
import { ReceiptSubText } from '../../Receipts/subcomponents/ReceiptSubText';
import { rowStyles } from '../../Rows/styles/rowStyles';
import { size } from '../../../styles/fonts';

const InfoNoteInner = ({ t }: { t: TFunction }) => (
  <Row styles={{ justifyContent: 'flex-start' }} borderBottom={false}>
    <View style={[rowStyles.rowContent]}>
      <View style={{ flexDirection: 'column' }}>
        <ReceiptSubText
          text={t('general:note')}
          style={{ color: '#AAAAAA', fontSize: size.small, lineHeight: 18 }}
        />
        <ReceiptSubText
          text={t('payment:entryInfo')}
          style={{ color: '#AAAAAA', fontSize: size.small, lineHeight: 18 }}
        />
      </View>
    </View>
  </Row>
);

export const InfoNote = (translate(['general', 'payment'])(
  InfoNoteInner
): ComponentType<{}>);
