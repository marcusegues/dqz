// @flow
import React, { Component } from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, ScrollView, Text } from 'react-native';
import { translate } from 'react-i18next';

import {
  flatLargeAmounts,
  flatNormalAmounts,
} from '../../../../../../model/utils';
import { AmountRow } from './subcomponents/AmountRow';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { MAIN_RED } from '../../../../../../styles/colors';
import type { TFunction } from '../../../../../../types/generalTypes';
import { CardHeaderSubText } from '../../../subcomponents/CardHeaderSubText';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../../../../styles/Scaling';
import { RedPlusIcon } from '../../../../../Modals/GoodQuantityListModal/subcomponents/RedPlusIcon';
import { type } from '../../../../../../styles/fonts';
import { NetValueInfoModal } from '../../../../../Modals/NetValueInfoModal/NetValueInfoModal';

const ownStyles = {
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  subcomponentsContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E0E0E1',
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
  },
  cardMainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#141414',
    padding: scale(15),
  },
  enterValueContainer: {
    alignSelf: 'flex-start',
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(35),
  },
  addButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: scale(10),
    marginBottom: 0,
  },
  addButtonText: {
    fontSize: moderateScale(14),
    color: MAIN_RED,
    fontFamily: 'roboto_medium',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
  },
  addedItemContainer: {
    flex: 1,
    width: '100%',
  },
  redButtonContainerWrapper: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: verticalScale(16),
  },
  redButtonWrapper: {
    flex: 0.47,
  },
  lastExchangeRate: {
    paddingBottom: verticalScale(16),
  },
  redPlusIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(30),
  },
  enterValueText: {
    fontFamily: type.light,
    lineHeight: verticalScale(18),
  },
  enterValueBoldText: {
    fontFamily: type.medium,
    lineHeight: 22,
  },
};

type AmountInputState = {
  modalVisible: boolean,
};

type AmountInputProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
  large: boolean,
};

class AmountInputInner extends Component<
  AmountInputProps & { t: TFunction },
  AmountInputState
> {
  state = {
    modalVisible: false,
  };

  handleShowModal = () => {
    this.setState({ modalVisible: true });
  };

  toggleModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    const {
      onShowAmountInputModal,
      amounts,
      onDeleteAmount,
      large,
      t,
    } = this.props;

    const relevantAmounts = large
      ? flatLargeAmounts(amounts)
      : flatNormalAmounts(amounts);

    const enterValueText = (
      <Text>
        <Text style={ownStyles.enterValueText}>
          {t('amountInputEnterValueBeginning')}
        </Text>
        <Text
          onPress={this.handleShowModal}
          style={ownStyles.enterValueBoldText}
        >
          {t('amountInputEnterValueBoldText')}
        </Text>
        <Text style={ownStyles.enterValueText}>
          {t('amountInputEnterValueEnd')}
        </Text>
      </Text>
    );

    return (
      <View style={ownStyles.mainContainer}>
        <ScrollView contentContainerStyle={ownStyles.scrollView}>
          {relevantAmounts.length ? (
            <CardHeaderSubText
              text={large ? '' : t('lastExchangeRate')}
              style={ownStyles.lastExchangeRate}
            />
          ) : (
            <View style={ownStyles.addButtonContainer}>
              <CardHeaderSubText
                text={large ? t('amountInputLargeItemGreyBox') : enterValueText}
                style={ownStyles.enterValueContainer}
              />
              <RedPlusIcon onPress={() => onShowAmountInputModal()} />
              <Text style={ownStyles.addButtonText}>
                {large
                  ? t('amountInputAddItemLarge').toUpperCase()
                  : t('amountInputAddItem').toUpperCase()}
              </Text>
            </View>
          )}
          <View style={ownStyles.addedItemContainer}>
            {relevantAmounts.map((a, idx) => (
              <AmountRow
                borderTop={idx === 0}
                key={a.id}
                amount={a.amount}
                currency={a.currency}
                id={a.id}
                onDelete={() => onDeleteAmount(a.id)}
              />
            ))}
          </View>
          {relevantAmounts.length ? (
            <View style={ownStyles.redPlusIconContainer}>
              <RedPlusIcon onPress={() => onShowAmountInputModal()} />
            </View>
          ) : (
            <Text />
          )}
        </ScrollView>
        <NetValueInfoModal
          modalVisible={this.state.modalVisible}
          toggleModalVisible={this.toggleModalVisible}
        />
      </View>
    );
  }
}

export const AmountInput = (translate(['amountInput'])(
  AmountInputInner
): ComponentType<AmountInputProps>);
