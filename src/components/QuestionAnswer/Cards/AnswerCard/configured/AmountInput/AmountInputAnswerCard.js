// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { amountInputImages } from '../../types/amountAndQuantityInput';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');

class AmountInputAnswerCardInner extends React.Component<{
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
  i18n: Object,
}> {
  render() {
    const { onAnswerCardPress, flag, vat, i18n } = this.props;
    const { language } = i18n;

    return (
      <AnswerCard
        onAnswerCardPress={onAnswerCardPress}
        mainIcon={amountInputImages[language]}
        flag={flag === 'complete' ? complete : incomplete}
      >
        <AmountInputInfo vat={vat} />
      </AnswerCard>
    );
  }
}

export const AmountInputAnswerCard = (translate([''])(
  AmountInputAnswerCardInner
): ComponentType<{}>);
