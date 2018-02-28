// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { QuantityInputInfo } from '../../children/QuantityInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { quantityInputImages } from '../../types/amountAndQuantityInput';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');

class QuantityInputAnswerCardInner extends React.Component<{
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  duty: number,
  i18n: Object,
}> {
  render() {
    const { onAnswerCardPress, flag, duty, i18n } = this.props;
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
  }
}

export const QuantityInputAnswerCard = (translate([''])(
  QuantityInputAnswerCardInner
): ComponentType<{}>);
