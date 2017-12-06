import React from 'react';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import PeopleInfo from './PeopleInfo';
import { getTotalPeople } from '../../../model/configurationApi';

const complete = require('../../../../assets/images/complete.png');
const mainIcon = require('../../../../assets/icons/travellers.png');

const PeopleInputAnswer = ({ people, onAnswerPress }) => (
  <AnswerCard
    onAnswerPress={onAnswerPress}
    mainIcon={mainIcon}
    status={complete}
  >
    <PeopleInfo people={people} />
  </AnswerCard>
);

export default PeopleInputAnswer;
