import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import QuantityInput from './QuantityInput';

const QuantityInputConfirmationCard = ({
  onShowQuantityInputModal,
  basket,
  onAnswer,
  onBasketAddQuantity,
  categoriesByMainCategory,
}) => (
  <ConfirmationCard text="Mengeneingabe" onAnswer={onAnswer}>
    <QuantityInput
      onShowQuantityInputModal={onShowQuantityInputModal}
      categoriesByMainCategory={categoriesByMainCategory}
      basket={basket}
    />
  </ConfirmationCard>
);

export default QuantityInputConfirmationCard;
