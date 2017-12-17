import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import MainCategoriesCheckList from '../../children/MainCategoriesCheckList/MainCategoriesCheckList';

const MainCategoriesInputConfirmationCard = ({
  mainCategories,
  onToggleMainCategory,
  onAnswer,
  text,
}) => (
  <ConfirmationCard
    text={text}
    onAnswer={onAnswer}
    confirmationDisabled={!mainCategories.size}
  >
    <MainCategoriesCheckList
      mainCategories={mainCategories}
      onToggleMainCategory={onToggleMainCategory}
    />
  </ConfirmationCard>
);

export default MainCategoriesInputConfirmationCard;
