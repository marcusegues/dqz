// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { QuantityInputInfo } from '../../children/QuantityInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { quantityInputImages } from '../../types/amountAndQuantityInput';
import type { Language } from '../../../../../../i18n/types/locale';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');

type QualityInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  duty: number,
};

const QuantityInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  duty,
  i18n,
}: QualityInputAnswerCardProps & { i18n: { language: Language } }) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={quantityInputImages[i18n.language]}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <QuantityInputInfo duty={duty} />
  </AnswerCard>
);

export const QuantityInputAnswerCard = (translate([''])(
  QuantityInputAnswerCardInner
): ComponentType<QualityInputAnswerCardProps>);
