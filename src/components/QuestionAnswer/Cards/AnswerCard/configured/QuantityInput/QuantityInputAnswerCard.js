// @flow
import React from 'react';
import { AnswerCard } from '../../AnswerCard';
import { QuantityInputInfo } from '../../children/QuantityInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/zoll.png');
// const mainIcon = require('../../../../../../../assets/icons/travellers.png');

type QuantityInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  duty: number,
};

export const QuantityInputAnswerCard = ({
  onAnswerCardPress,
  flag,
  duty,
}: QuantityInputAnswerCardProps) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <QuantityInputInfo duty={duty} />
  </AnswerCard>
);
