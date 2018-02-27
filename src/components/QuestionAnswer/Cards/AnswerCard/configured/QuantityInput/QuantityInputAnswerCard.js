// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { QuantityInputInfo } from '../../children/QuantityInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { quantityInputImages } from '../AmountInput/types/amountInput';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');

type QuantityInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  duty: number,
  i18n: Object,
};

const QuantityInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  duty,
  i18n,
}: QuantityInputAnswerCardProps) => {
  const { language } = i18n;

  return (
    <AnswerCard
      onAnswerCardPress={onAnswerCardPress}
      mainIcon={quantityInputImages[language]}
      flag={flag === 'complete' ? complete : incomplete}
    >
      <QuantityInputInfo duty={duty} />
    </AnswerCard>
  );
};

export const QuantityInputAnswerCard = (translate(['general'])(
  QuantityInputAnswerCardInner
): ComponentType<QuantityInputAnswerCardProps>);
