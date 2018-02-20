// @flow
import React from 'react';
import { AnswerCard } from '../../AnswerCard';
import { AmountInputInfo } from '../../children/AmountInputInfo';
import type { QuestionFlag } from '../../../../QuestionAnswerContainer';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../../types/generalTypes';

const complete = require('../../../../../../../assets/images/complete.png');
const incomplete = require('../../../../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../../../../assets/icons/mwst.png');
const mainIcon2 = require('../../../../../../../assets/icons/travellers.png');

type AmountInputAnswerCardProps = {
  onAnswerCardPress: () => void,
  flag: QuestionFlag,
  vat: number,
  i18n: Object,
};

const AmountInputAnswerCardInner = ({
  onAnswerCardPress,
  flag,
  vat,
  i18n,
}: AmountInputAnswerCardProps) => {
  const { language } = i18n;

   const renderIcon = (language) => {
       switch (language) {
           case 'de': {
               return mainIcon;
           }
       }
   };



            return (
                <AnswerCard
                    onAnswerCardPress={onAnswerCardPress}
                    mainIcon={this.renderIcon(language)}
                    // mainIcon={language === 'de' ? mainIcon : mainIcon2}
                    flag={flag === 'complete' ? complete : incomplete}
                >
                    {console.log(i18n.language)}
                    {console.log(typeof i18n.language)}
                    <AmountInputInfo vat={vat} />
                </AnswerCard>
            );
        }
);

export const AmountInputAnswerCard = (translate(['general'])(
  AmountInputAnswerCardInner
): ComponentType<AmountInputAnswerCardProps>);
