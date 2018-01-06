import React from 'react';
import { translate } from 'react-i18next';
import { ConfirmationCard } from '../../ConfirmationCard';
import MainCategoriesCheckList from '../../children/MainCategoriesCheckList/MainCategoriesCheckList';

const MainCategoriesInputConfirmationCard = ({
  mainCategories,
  onToggleMainCategory,
  onAnswer,
  t,
}) => (
  <ConfirmationCard
    text={t('mainCategoriesQuestion')}
    onAnswer={onAnswer}
    confirmationDisabled={!mainCategories.size}
  >
    <MainCategoriesCheckList
      mainCategories={mainCategories}
      onToggleMainCategory={onToggleMainCategory}
    />
  </ConfirmationCard>
);

export default translate(['mainCategoriesInput'])(
  MainCategoriesInputConfirmationCard
);
