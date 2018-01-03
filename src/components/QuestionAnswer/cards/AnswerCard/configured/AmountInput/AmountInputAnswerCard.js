import React from 'react';
import AnswerCard from '../../AnswerCard';
import AmountInputInfo from '../../children/AmountInputInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

const AmountInputAnswerCard = ({ onAnswerCardPress, flag, vat }) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    flag={flag === 'complete' ? complete : incomplete}
  >
    <AmountInputInfo vat={vat} />
  </AnswerCard>
);

export default AmountInputAnswerCard;
