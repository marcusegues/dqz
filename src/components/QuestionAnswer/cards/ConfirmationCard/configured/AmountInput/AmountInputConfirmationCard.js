// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import AmountInput from './AmountInput';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { INDIVIDUALALLOWANCE } from '../../../../../../model/constants';
import { Card } from '../../../Card';
import CardHeader from '../../../subcomponents/CardHeader';
import CardHeaderSubText from '../../../subcomponents/CardHeaderSubText';
import { verticalScale } from '../../../../../../styles/Scaling';

type AmountInputConfirmationCardProps = {
  t: any, // TODO
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  // onAnswer: any, // TODO
  onDeleteAmount: string => void,
  large: boolean,
};

const AmountInputConfirmationCard = ({
  onShowAmountInputModal,
  amounts,
  // onAnswer,
  t,
  large,
  onDeleteAmount,
}: AmountInputConfirmationCardProps) => {
  let title: string = t(['amountInput']);
  if (large) {
    title = t(['amountInputLargeItem'], {
      value: INDIVIDUALALLOWANCE,
    });
  }

  return (
    <Card>
      <CardHeader text={title} />
      <CardHeaderSubText
        text={large ? t('amountInputMoreThan300Text') : ''}
        style={{
          alignSelf: 'flex-start',
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: verticalScale(16),
        }}
      />
      <View style={{ justifyContent: 'center' }}>
        <AmountInput
          onShowAmountInputModal={onShowAmountInputModal}
          amounts={amounts}
          large={large}
          onDeleteAmount={onDeleteAmount}
        />
      </View>
    </Card>
  );
};

export default translate(['amountInput'])(AmountInputConfirmationCard);
