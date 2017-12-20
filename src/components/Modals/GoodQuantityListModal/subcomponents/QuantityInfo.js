import React from 'react';
import { View, Text } from 'react-native';
import CardHeader from '../../../QuestionAnswer/cards/subcomponents/CardHeader';
import CardHeaderText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderText';
import CardHeaderSubText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';

const QuantityInfo = ({ mainCategory, category, totalQuantity }) => (
  <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
    <CardHeader text={category} />
    <CardHeaderSubText text={mainCategory} />
    <Text>{totalQuantity}</Text>
  </View>
);

export default QuantityInfo;
