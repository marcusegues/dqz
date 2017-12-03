import React from 'react';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import MainCategoriesCheckList from '../cards/ConfirmationCard/children/MainCategoriesCheckList/MainCategoriesCheckList';

const MainCategoriesInput = ({
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

export default MainCategoriesInput;
