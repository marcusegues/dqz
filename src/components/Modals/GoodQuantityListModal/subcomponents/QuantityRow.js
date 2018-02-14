// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { CardRowText } from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { moderateScale, verticalScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';
import { CategoriesInfo } from '../../../../model/constants';
import { Row } from '../../../Rows/Row';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';
import { CardRowSubText } from '../../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import type { TFunction } from '../../../../types/generalTypes';

type QuantityRowInnerProps = {
  quantity: number,
  onDelete: () => void,
  category: Category,
  borderTop?: boolean,
};

const QuantityRowInner = ({
  quantity,
  onDelete,
  category,
  borderTop,
  t,
}: QuantityRowInnerProps & { t: TFunction, borderTop: false }) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1, paddingVertical: verticalScale(10) }}>
      <CardRowText
        text={`${quantity} ${CategoriesInfo.getIn([category, 'unit'], '')}`}
      />
      <CardRowSubText text={t('recordedOn', { value: '08.12.2017' })} />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

export const QuantityRow = (translate(['quantityInput'])(
  QuantityRowInner
): ComponentType<QuantityRowInnerProps>);
