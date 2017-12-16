import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import BasketInput from '../../../../../BasketInput/BasketInput';
const QuantityInputConfirmationCard = ({
  basket,
  onAnswer,
  onBasketChangeQuantity,
  categoriesByMainCategory,
}) => (
  <ConfirmationCard text="Mengeneingabe" onAnswer={onAnswer}>
    <BasketInput
      categoriesByMainCategory={categoriesByMainCategory}
      basket={basket}
      onBasketChangeQuantity={onBasketChangeQuantity}
    />
  </ConfirmationCard>
);

export default QuantityInputConfirmationCard;
