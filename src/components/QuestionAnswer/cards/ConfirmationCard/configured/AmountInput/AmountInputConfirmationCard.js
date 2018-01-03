import React from 'react';
import { translate } from 'react-i18next';
import ConfirmationCard from '../../ConfirmationCard';
import AmountInput from './AmountInput';

const AmountInputConfirmationCard = ({
  onShowAmountInputModal,
  amounts,
  onAnswer,
  t,
}) => (
  <ConfirmationCard text={t('amountInput')} onAnswer={onAnswer}>
    <AmountInput
      onShowAmountInputModal={onShowAmountInputModal}
      amounts={amounts}
    />
  </ConfirmationCard>
);

export default translate(['amountInput'])(AmountInputConfirmationCard);
