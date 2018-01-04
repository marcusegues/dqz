// @flow
import React from 'react';
import { translate } from 'react-i18next';
import ConfirmationCard from '../../ConfirmationCard';
import AmountInput from './AmountInput';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';

type AmountInputConfirmationCardProps = {
  t: any, // TODO
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onAnswer: any, // TODO
  onDeleteAmount: string => void,
  large: boolean,
};

const AmountInputConfirmationCard = ({
  onShowAmountInputModal,
  amounts,
  onAnswer,
  t,
  large,
  onDeleteAmount,
}: AmountInputConfirmationCardProps) => (
  <ConfirmationCard text={t('amountInput')} onAnswer={onAnswer}>
    <AmountInput
      onShowAmountInputModal={onShowAmountInputModal}
      amounts={amounts}
      large={large}
      onDeleteAmount={onDeleteAmount}
    />
  </ConfirmationCard>
);

export default translate(['amountInput'])(AmountInputConfirmationCard);
