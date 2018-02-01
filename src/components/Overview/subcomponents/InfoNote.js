import React from 'react';
import { View } from 'react-native';
import { ReceiptSubText } from '../../Receipts/subComponents/ReceiptSubText';
import { Row } from '../../Rows/Row';
import { translate } from 'react-i18next';

const InfoNoteInner = ({ text, t }) => {
  return (
    <Row styles={{ justifyContent: 'flexStart' }}>
      <View style={{ flexDirection: 'column' }}>
        <ReceiptSubText text={t('general:note')} />
        <ReceiptSubText text={t('payment:entryInfo')} />
      </View>
    </Row>
  );
};

export const InfoNote = (translate(['general', 'payment'])(
  InfoNoteInner
): ComponentType<OnBoardingProps>);
