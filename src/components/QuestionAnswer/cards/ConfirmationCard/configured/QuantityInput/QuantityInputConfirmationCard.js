import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import QuantityInput from './QuantityInput';
const QuantityInputConfirmationCard = ({
  basket,
  onAnswer,
  onBasketChangeQuantity,
  categoriesByMainCategory,
}) => (
  <ConfirmationCard text="Mengeneingabe" onAnswer={onAnswer}>
    <QuantityInput
      categoriesByMainCategory={categoriesByMainCategory}
      basket={basket}
      onBasketChangeQuantity={onBasketChangeQuantity}
    />
  </ConfirmationCard>
);

export default QuantityInputConfirmationCard;
