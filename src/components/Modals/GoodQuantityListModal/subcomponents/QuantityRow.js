// @flow
import React from 'react';
// $FlowFixMe
import { View, TouchableWithoutFeedback } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { CardRowText } from '../../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CategoriesInfo } from '../../../../model/constants';
import { Row } from '../../../Rows/Row';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';
import { rowStyles } from '../../../Rows/styles/rowStyles';
import { CardRowSubText } from '../../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import type { TFunction } from '../../../../types/generalTypes';
import { SwipeToDelete } from '../../../General Components/SwipeableContent/configured/SwipeToDelete';
import { formatQuantity } from '../../../../utils/declaration/declaration';
import { moderateScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';

type QuantityRowInnerProps = {
  quantity: number,
  date: string,
  onDelete: () => void,
  category: Category,
  borderTop?: boolean,
  editable?: boolean,
  onPressEdit?: Function,
};

const QuantityRowInner = ({
  t,
  quantity,
  date,
  onDelete,
  category,
  editable,
  onPressEdit,
  borderTop = false,
}: QuantityRowInnerProps & { t: TFunction }) => (
  <Row borderTop={borderTop}>
    <SwipeToDelete
      onPressDelete={onDelete}
      onPressEdit={onPressEdit}
      editable={editable}
    >
      <TouchableWithoutFeedback>
        <View style={rowStyles.rowContent}>
          <View style={{ flex: 1 }}>
            <CardRowText
              text={`${formatQuantity(category, quantity)} ${t(
                `units:${CategoriesInfo.getIn([category, 'unit'], '')}`,
                {
                  count: quantity,
                }
              )}`}
            />
            <CardRowSubText text={t('recordedOn', { value: date })} />
          </View>
          <Touchable onPress={onDelete}>
            <MaterialIcons
              name="cancel"
              size={moderateScale(28)}
              color={GREY}
            />
          </Touchable>
        </View>
      </TouchableWithoutFeedback>
    </SwipeToDelete>
  </Row>
);

export const QuantityRow = (translate(['quantityInput', 'units'])(
  QuantityRowInner
): ComponentType<QuantityRowInnerProps>);
