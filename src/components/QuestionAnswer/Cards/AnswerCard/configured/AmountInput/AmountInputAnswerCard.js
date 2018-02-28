// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { amountInputImages } from '../../types/amountAndQuantityInput';
import type { Language } from '../../../../../../i18n/types/locale';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');

type AmountInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
};

const AmountInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  vat,
  i18n,
}: AmountInputAnswerCardProps & { i18n: { language: Language } }) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={amountInputImages[i18n.language]}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <AmountInputInfo vat={vat} />
  </AnswerCard>
);

export const AmountInputAnswerCard = (translate([''])(
  AmountInputAnswerCardInner
): ComponentType<AmountInputAnswerCardProps>);
