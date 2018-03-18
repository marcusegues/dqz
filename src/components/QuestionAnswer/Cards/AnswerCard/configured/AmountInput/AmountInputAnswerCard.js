// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { amountInputImages } from '../../types/amountAndQuantityInput';
import type { Language } from '../../../../../../i18n/types/locale';
import type { TFunction } from '../../../../../../types/generalTypes';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const vatIcon = require('../../../../../../../assets/icons/vat.png');

type AmountInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
  large: boolean,
};

const AmountInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  vat,
  i18n,
  large,
  t,
}: AmountInputAnswerCardProps & { t: TFunction } & {
  i18n: { language: Language },
}) => {
  let cardText = '';
  cardText = (
    <View style={{ flexDirection: 'column' }}>
      <Text>{t('itemsGreaterThan300CHF')}</Text>
      <Text>{large ? t('validateGenericYes') : t('validateGenericNo')}</Text>
    </View>
  );
  return (
    <AnswerCard
      onAnswerCardPress={onAnswerCardPress}
      mainIcon={amountInputImages[i18n.language] || vatIcon}
      flag={flag === 'complete' ? complete : incomplete}
    >
      {large ? cardText : <AmountInputInfo vat={vat} />}
    </AnswerCard>
  );
};

export const AmountInputAnswerCard = (translate(['qaFlow'])(
  AmountInputAnswerCardInner
): ComponentType<AmountInputAnswerCardProps>);
