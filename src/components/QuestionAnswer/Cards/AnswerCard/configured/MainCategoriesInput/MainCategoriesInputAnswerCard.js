// @flow
import React from 'react';
import { AnswerCard } from '../../AnswerCard';
import { MainCategoriesInputInfo } from '../../children/MainCategoriesInputInfo';
import type { MainCategories } from '../../../../../../types/reducers/declaration';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/mainCategories.png');

type MainCategoriesInputAnswerCardProps = {
  mainCategories: MainCategories,
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
};

export const MainCategoriesInputAnswerCard = ({
  mainCategories,
  onAnswerCardPress,
  flag,
}: MainCategoriesInputAnswerCardProps) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <MainCategoriesInputInfo mainCategories={mainCategories} />
  </AnswerCard>
);
