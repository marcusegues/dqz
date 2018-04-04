// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../types/questionAnswerTypes';
import { amountInputImages } from '../../types/amountAndQuantityInput';
import type { Language } from '../../../../../../i18n/types/locale';
import type { TFunction } from '../../../../../../types/generalTypes';
import { GreyBar } from '../../../../../General Components/GreyBar';
import { CollapsedCardText } from '../../../subcomponents/CollapsedCardText';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const vatIcon = require('../../../../../../../assets/icons/vat.png');

type AmountInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
  large: boolean,
  largeAmountsPresent: boolean,
};

const AmountInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  vat,
  i18n,
  large,
  t,
  largeAmountsPresent,
}: AmountInputAnswerCardProps & { t: TFunction } & {
  i18n: { language: Language },
}) => {
  let cardText = '';
  cardText = (
    <View style={{ flexDirection: 'column' }}>
      <CollapsedCardText text={t('itemsGreaterThan300CHF')} />
      <CollapsedCardText
        text={
          large && largeAmountsPresent
            ? t('validateGenericYes')
            : t('validateGenericNo')
        }
      />
    </View>
  );
  return (
    <View>
      <GreyBar />
      <AnswerCard
        onAnswerCardPress={onAnswerCardPress}
        mainIcon={amountInputImages[i18n.language] || vatIcon}
        flag={flag === 'complete' ? complete : incomplete}
      >
        {large ? cardText : <AmountInputInfo vat={vat} />}
      </AnswerCard>
    </View>
  );
};

export const AmountInputAnswerCard = (translate(['qaFlow'])(
  AmountInputAnswerCardInner
): ComponentType<AmountInputAnswerCardProps>);
