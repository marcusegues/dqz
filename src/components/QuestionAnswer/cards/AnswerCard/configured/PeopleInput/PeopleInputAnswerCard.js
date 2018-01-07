// @flow
import React from 'react';
import { AnswerCard } from '../../AnswerCard';
import { PeopleInfo } from '../../children/PeopleInfo';
import type { People } from '../../../../../../model/types/basketPeopleAmountsTypes';

const complete = require('../../../../../../../assets/images/complete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

type PeopleInputAnswerCardProps = {
  people: People,
  onAnswerCardPress: () => void,
};

export const PeopleInputAnswerCard = ({
  people,
  onAnswerCardPress,
}: PeopleInputAnswerCardProps) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={complete}
  >
    <PeopleInfo people={people} />
  </AnswerCard>
);
