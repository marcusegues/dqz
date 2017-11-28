import React from 'react';
import ConfirmationCard from '../ConfirmationCard';
import MainCategoriesCheckList from '../children/MainCategoriesCheckList/MainCategoriesCheckList';

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
