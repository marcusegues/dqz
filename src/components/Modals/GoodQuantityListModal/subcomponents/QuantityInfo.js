import React from 'react';
import { translate } from 'react-i18next';
import { View } from 'react-native';
import CardHeaderText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderText';
import CardHeaderSubText from '../../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import QuantityIcon from '../../../General Components/QuantityIcon';
import { verticalScale } from '../../../../styles/Scaling';

const QuantityInfo = ({ mainCategory, category, totalQuantity, t }) => (
  <View
    style={{
      flexDirection: 'column',
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      margin: verticalScale(16),
    }}
  >
    <CardHeaderText text={t(`categories:${category}`)} />
    <CardHeaderSubText text={t(`mainCategories:${mainCategory}`)} />
    <View style={{ marginTop: 10 }}>
      <QuantityIcon quantity={totalQuantity} category={category} />
    </View>
  </View>
);

export default translate(['mainCategories', 'categories'])(QuantityInfo);
