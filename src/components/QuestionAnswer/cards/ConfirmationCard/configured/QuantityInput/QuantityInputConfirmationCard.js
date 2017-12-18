import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import QuantityInput from './QuantityInput';

const QuantityInputConfirmationCard = ({
  onShowQuantityInputModal,
  basket,
  onAnswer,
  onBasketChangeQuantity,
  categoriesByMainCategory,
}) => (
  <ConfirmationCard text="Mengeneingabe" onAnswer={onAnswer}>
    <QuantityInput
      onShowQuantityInputModal={onShowQuantityInputModal}
      categoriesByMainCategory={categoriesByMainCategory}
      basket={basket}
      onBasketChangeQuantity={onBasketChangeQuantity}
    />
  </ConfirmationCard>
);

export default QuantityInputConfirmationCard;
