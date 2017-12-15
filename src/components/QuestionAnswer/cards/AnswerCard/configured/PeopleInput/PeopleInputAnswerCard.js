import React from 'react';
import AnswerCard from '../../AnswerCard';
import PeopleInfo from '../../children/PeopleInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

const PeopleInputAnswerCard = ({ people, onAnswerCardPress }) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    status={complete}
  >
    <PeopleInfo people={people} />
  </AnswerCard>
);

export default PeopleInputAnswerCard;
