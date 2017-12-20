import React from 'react';
import AnswerCard from '../../AnswerCard';
import MainCategoriesInputInfo from '../../children/MainCategoriesInputInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/mainCategories.png');

const MainCategoriesInputAnswerCard = ({
  mainCategories,
  onAnswerCardPress,
  flag,
}) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <MainCategoriesInputInfo mainCategories={mainCategories} />
  </AnswerCard>
);

export default MainCategoriesInputAnswerCard;
