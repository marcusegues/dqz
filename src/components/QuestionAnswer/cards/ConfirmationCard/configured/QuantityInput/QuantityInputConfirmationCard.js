import React from 'react';
import { translate } from 'react-i18next';
import { ConfirmationCard } from '../../ConfirmationCard';
import QuantityInput from './QuantityInput';

const QuantityInputConfirmationCard = ({
  onShowQuantityInputModal,
  basket,
  onAnswer,
  categoriesByMainCategory,
  t,
}) => (
  <ConfirmationCard text={t('quantityInput')} onAnswer={onAnswer}>
    <QuantityInput
      onShowQuantityInputModal={onShowQuantityInputModal}
      categoriesByMainCategory={categoriesByMainCategory}
      basket={basket}
    />
  </ConfirmationCard>
);

export default translate(['quantityInput'])(QuantityInputConfirmationCard);
