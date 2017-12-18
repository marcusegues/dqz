import React from 'react';
import AnswerCard from '../../AnswerCard';
import QuantityInputInfo from '../../children/QuantityInputInfo';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/travellers.png');

const QuantityInputAnswerCard = ({ onAnswerCardPress, status, duty }) => (
  <AnswerCard
    onAnswerCardPress={onAnswerCardPress}
    mainIcon={mainIcon}
    status={status === 'complete' ? complete : incomplete}
  >
    <QuantityInputInfo duty={duty} />
  </AnswerCard>
);

export default QuantityInputAnswerCard;
