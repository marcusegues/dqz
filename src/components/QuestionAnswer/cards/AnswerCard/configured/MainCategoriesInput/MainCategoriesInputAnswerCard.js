import React from 'react';
import AnswerCard from '../../AnswerCard';
import MainCategoriesInputInfo from '../../children/MainCategoriesInputInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/mainCategories.png');

const MainCategoriesInputAnswerCard = ({
  mainCategories,
  onAnswerCardPress,
  status,
}) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    status={status === 'complete' ? complete : incomplete}
  >
    <MainCategoriesInputInfo mainCategories={mainCategories} />
  </AnswerCard>
);

export default MainCategoriesInputAnswerCard;
