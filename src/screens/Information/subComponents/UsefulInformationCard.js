// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Children } from '../../../types/generalTypes';
import { CardHeader } from '../../../components/QuestionAnswer/cards/subcomponents/CardHeader';
import { ScrollViewCard } from '../../../components/Receipts/subComponents/ScrollViewCard';

const ownStyles = {
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  contentContainer: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

type UsefulInformationCardProps = {
  children: Children,
  cardHeaderText: string,
};

export const UsefulInformationCard = ({
  children,
  cardHeaderText,
}: UsefulInformationCardProps) => (
  <ScrollViewCard>
    <CardHeader text={cardHeaderText} />
    <View style={ownStyles.contentContainer}>{children}</View>
  </ScrollViewCard>
);
