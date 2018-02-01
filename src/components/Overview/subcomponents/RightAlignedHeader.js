import React from 'react';
import { View } from 'react-native';
import { CardRowSubText } from '../../QuestionAnswer/cards/subcomponents/CardRowSubText';

export const RightAlignedHeader = ({ text }) => (
    <View style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}>
      <CardRowSubText text={text} />
    </View>
  );
