// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardRowText } from '../../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../../../QuestionAnswer/cards/subcomponents/CardRowSubText';

type TotalOwedProps = {
  result: string,
};

export const TotalOwed = ({ result }: TotalOwedProps) => {
  return (
    <View
      style={{ width: 70, flexDirection: 'row', justifyContent: 'flex-end' }}
    >
      <CardRowText text={result} />
    </View>
  );
};
