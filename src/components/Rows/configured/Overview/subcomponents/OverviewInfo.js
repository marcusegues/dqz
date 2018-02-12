// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { CardRowText } from '../../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../../../QuestionAnswer/cards/subcomponents/CardRowSubText';

type OverviewInfoProps = {
  title: string,
  subtitle: string,
  children: any,
};

export const OverviewInfo = ({
  title,
  subtitle,
  children,
}: OverviewInfoProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: 5,
      }}
    >
      <CardRowText text={title} />
      <CardRowSubText text={subtitle} />
      {children}
    </View>
  );
};
