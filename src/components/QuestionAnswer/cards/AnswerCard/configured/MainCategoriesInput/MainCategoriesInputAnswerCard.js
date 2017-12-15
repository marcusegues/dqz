import React from 'react';
import AnswerCard from '../../AnswerCard';
import MainCategoriesInputInfo from '../../children/MainCategoriesInputInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

const MainCategoriesInputAnswerCard = ({
  mainCategories,
  onAnswerCardPress,
  questionState,
}) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    status={questionState === 'complete' ? complete : incomplete}
  >
    <MainCategoriesInputInfo mainCategories={mainCategories} />
  </AnswerCard>
);

export default MainCategoriesInputAnswerCard;
