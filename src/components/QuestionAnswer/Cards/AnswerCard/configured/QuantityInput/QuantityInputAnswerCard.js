// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { QuantityInputInfo } from '../../children/QuantityInputInfo';
import type { QuestionFlag } from '../../../../types/questionAnswerTypes';
import { quantityInputImages } from '../../types/amountAndQuantityInput';
import type { Language } from '../../../../../../i18n/types/locale';
import { GreyBar } from '../../../../../General Components/GreyBar';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const customsIcon = require('../../../../../../../assets/icons/customs.png');

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
  <View>
    <GreyBar />
    <AnswerCard
      onAnswerCardPress={onAnswerCardPress}
      mainIcon={quantityInputImages[i18n.language] || customsIcon}
      flag={flag === 'complete' ? complete : incomplete}
    >
      <QuantityInputInfo duty={duty} />
    </AnswerCard>
  </View>
);

export const QuantityInputAnswerCard = (translate([''])(
  QuantityInputAnswerCardInner
): ComponentType<QualityInputAnswerCardProps>);
