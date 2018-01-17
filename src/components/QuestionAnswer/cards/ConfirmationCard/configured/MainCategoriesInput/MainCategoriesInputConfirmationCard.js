// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { ConfirmationCard } from '../../ConfirmationCard';
import { MainCategoriesCheckList } from '../../children/MainCategoriesCheckList/MainCategoriesCheckList';
import type {
  MainCategories,
  MainCategory,
} from '../../../../../../types/reducers/appReducer';
import type { DirectionType } from '../../../../QuestionAnswerContainer';
import type { TFunction } from '../../../../../../types/generalTypes';

type MainCategoriesInputConfirmationCardProps = {
  mainCategories: MainCategories,
  onToggleMainCategory: (mainCategory: MainCategory) => void,
  onAnswer: DirectionType => void,
};

const MainCategoriesInputConfirmationCardInner = ({
  mainCategories,
  onToggleMainCategory,
  onAnswer,
  t,
}: MainCategoriesInputConfirmationCardProps & { t: TFunction }) => (
  <ConfirmationCard
    text={t('mainCategoriesQuestion')}
    onAnswer={() => onAnswer('forward')}
    onBack={() => onAnswer('back')}
    confirmationDisabled={!mainCategories.size}
  >
    <MainCategoriesCheckList
      mainCategories={mainCategories}
      onToggleMainCategory={onToggleMainCategory}
    />
  </ConfirmationCard>
);

export const MainCategoriesInputConfirmationCard = (translate([
  'mainCategoriesInput',
])(MainCategoriesInputConfirmationCardInner): ComponentType<
  MainCategoriesInputConfirmationCardProps
>);
