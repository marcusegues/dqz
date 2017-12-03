import React from 'react';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import MainCategoriesCheckList from '../cards/ConfirmationCard/children/MainCategoriesCheckList/MainCategoriesCheckList';

const MainCategoriesInput = ({
  mainCategories,
  onToggleMainCategory,
  onAnswerConfirm,
  text,
}) => (
  <ConfirmationCard text={text} onAnswerConfirm={onAnswerConfirm}>
    <MainCategoriesCheckList
      mainCategories={mainCategories}
      onToggleMainCategory={onToggleMainCategory}
    />
  </ConfirmationCard>
);

export default MainCategoriesInput;
