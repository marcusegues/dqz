// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { AnswerCard } from '../../AnswerCard';
import { PeopleInfo } from '../../children/PeopleInfo';
import type { People } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { GreyBar } from '../../../../../General Components/GreyBar';

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
  <View>
    <AnswerCard
      onAnswerCardPress={onAnswerCardPress}
      mainIcon={mainIcon}
      flag={complete}
    >
      <PeopleInfo people={people} />
    </AnswerCard>
    <GreyBar />
  </View>
);
