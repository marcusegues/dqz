import React from 'react';
import { View } from 'react-native';
import CardHeaderText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderText';
import CardHeaderSubText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import QuantityIcon from '../../../General Components/QuantityIcon';
import { verticalScale } from '../../../../styles/Scaling';

const QuantityInfo = ({ mainCategory, category, totalQuantity }) => (
  <View
    style={{
      flexDirection: 'column',
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      margin: verticalScale(16),
    }}
  >
    <CardHeaderText text={category} />
    <CardHeaderSubText text={mainCategory} />
    <QuantityIcon quantity={totalQuantity} category={category} />
  </View>
);

export default QuantityInfo;
