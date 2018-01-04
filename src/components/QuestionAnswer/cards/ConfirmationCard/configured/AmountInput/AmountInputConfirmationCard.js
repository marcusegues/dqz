import React from 'react';
import { translate } from 'react-i18next';
import ConfirmationCard from '../../ConfirmationCard';
import AmountInput from './AmountInput';

const AmountInputConfirmationCard = ({
  onShowAmountInputModal,
  amounts,
  onAnswer,
  t,
  onDeleteAmount,
}) => (
  <ConfirmationCard text={t('amountInput')} onAnswer={onAnswer}>
    <AmountInput
      onShowAmountInputModal={onShowAmountInputModal}
      amounts={amounts}
      onDeleteAmount={onDeleteAmount}
    />
  </ConfirmationCard>
);

export default translate(['amountInput'])(AmountInputConfirmationCard);
