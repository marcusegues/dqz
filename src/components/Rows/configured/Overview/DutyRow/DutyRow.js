// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ComponentType } from 'react';
// $FlowFixMe
import Swipeable from 'react-native-swipeable';
import { Ionicons } from '@expo/vector-icons';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, TouchableHighlight } from 'react-native';
import type {
  Basket,
  Category,
} from '../../../../../model/types/basketPeopleAmountsTypes';
import { CategoriesInfo } from '../../../../../model/constants';
import type { TFunction } from '../../../../../types/generalTypes';
import { AllowanceIcon } from './subcomponents/AllowanceIcon';
import { QuantityIcon } from '../../../../General Components/GreyBox/configured/QuantityIcon';
import { OverviewInfo } from '../subcomponents/OverviewInfo';
import { Row } from '../../../Row';
import { TotalOwed } from '../subcomponents/TotalOwed';
import { rowStyles } from '../../../styles/rowStyles';
import { storeBasket } from '../../../../../asyncStorage/storageApi';
import { resetQuantities } from '../../../../../model/configurationApi';
import { getBasket } from '../../../../../reducers/selectors';

type DutyRowProps = {
  category: Category,
  quantity: number,
  duty: number,
  borderTop?: boolean,
  allowanceRaw: number,
};

type ReduxInject = {
  basketResetCategoryQuantities: (category: Category) => void,
};

class DutyRowInner extends React.Component<
  DutyRowProps & ReduxInject & { t: TFunction }
> {
  getRightSwipeButtons() {
    const { basketResetCategoryQuantities, category } = this.props;
    return [
      <TouchableHighlight
        style={{
          flex: 1,
          backgroundColor: 'rgb(217,10,35)',
          justifyContent: 'center',
        }}
        onPress={() => basketResetCategoryQuantities(category)}
      >
        <Ionicons
          name="md-trash"
          size={30}
          style={{ color: 'white', paddingLeft: 35 }}
        />
      </TouchableHighlight>,
    ];
  }
  render() {
    const {
      category,
      quantity,
      duty,
      borderTop = false,
      t,
      allowanceRaw,
    } = this.props;
    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: quantity,
    });
    return (
      <Row borderTop={borderTop}>
        <Swipeable
          rightButtons={this.getRightSwipeButtons()}
          rightButtonWidth={90}
          style={{ overflow: 'hidden' }}
        >
          <View style={[rowStyles.rowContent]}>
            <OverviewInfo
              title={t(`categories:${category}`)}
              subtitle={`${t('overview:declared')} ${quantity.toFixed(1)} ${
                unit
              }`}
            >
              <AllowanceIcon
                text={t('overview:dutyFree')}
                quantity={allowanceRaw}
                unit={t(
                  `units:${CategoriesInfo.getIn([category, 'unit'], '')}`,
                  {
                    count: allowanceRaw,
                  }
                )}
              />
            </OverviewInfo>
            <QuantityIcon
              quantity={Math.max(0, quantity - allowanceRaw).toFixed(1)}
              unit={t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
                count: Math.max(0, quantity - allowanceRaw),
              })}
            />
            <TotalOwed result={duty.toFixed(2)} />
          </View>
        </Swipeable>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  basket: getBasket(state),
});

const mapDispatchToProps = dispatch => ({
  setBasket: (basket: Basket): void => {
    dispatch({ type: 'SET_BASKET', basket });
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  basketResetCategoryQuantities: (category: Category): void => {
    const { basket } = stateProps;
    const { setBasket } = dispatchProps;
    const newBasket = resetQuantities(basket, category);
    storeBasket(newBasket);
    setBasket(newBasket);
  },
});

export const DutyRow = (connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(translate(['categories', 'overview', 'units'])(DutyRowInner)): ComponentType<
  DutyRowProps
>);
