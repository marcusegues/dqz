// @flow
import React from 'react';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

type AmountInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
};

export const AmountInputAnswerCard = ({
  onAnswerCardPress,
  flag,
  vat,
}: AmountInputAnswerCardProps) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <AmountInputInfo vat={vat} />
  </AnswerCard>
);
