// @flow
import React from 'react';
// $FlowFixMe
import { ScrollView, View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { v4 } from 'uuid';
import { AppModal } from '../AppModal';
import { QuantityInfo } from './subcomponents/QuantityInfo';
import {
  getQuantities,
  getTotalQuantity,
} from '../../../model/configurationApi';
import type { QuantityInputState } from '../../QuestionAnswer/QuantityInput/QuantityInputQA';
import type {
  Basket,
  Category,
} from '../../../model/types/basketPeopleAmountsTypes';

import { QuantityRow } from './subcomponents/QuantityRow';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import { BackArrow } from '../../Headers/subcomponents/BackArrow';
import { PickerModal } from '../PickerModal/PickerModal';
import { RedButton } from '../../Buttons/RedButton';
import type { TFunction } from '../../../types/generalTypes';

import { GoodQuantityGreyField } from './subcomponents/GoodQuantityGreyField';
import { CategoryIcon } from '../../QuestionAnswer/cards/ConfirmationCard/configured/QuantityInput/subcomponents/subcomponents/CategoryIcon';
import { ScrollViewCard } from '../../General Components/ScrollViewCard';
import { RedPlusIcon } from './subcomponents/RedPlusIcon';
import { getSource } from '../../QuestionAnswer/cards/ConfirmationCard/configured/QuantityInput/subcomponents/GoodInputRow';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';

const ownStyles = {
  pickerCard: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginTop: 12,
  },
  topContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: scale(40),
    alignSelf: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    marginTop: verticalScale(16),
  },
  redPlus: {
    alignItems: 'center',
    marginTop: moderateScale(16),
  },
  redButton: {
    width: '95%',
    marginBottom: verticalScale(16),
    alignSelf: 'center',
  },
};

export type GoodQuantityListModalProps = {
  onHide: () => void,
  onAddQuantity: (category: Category, quantityChange: number) => void,
  onDeleteQuantity: (category: Category, index: number) => void,
  basket: Basket,
} & QuantityInputState;

type GoodQuantityListModalState = {
  pickerModalVisible: boolean,
};

class GoodQuantityListModalInner extends React.Component<
  GoodQuantityListModalProps & { t: TFunction },
  GoodQuantityListModalState
> {
  constructor() {
    super();
    this.state = {
      pickerModalVisible: false,
    };
  }

  togglePickerVisible() {
    this.setState({
      pickerModalVisible: !this.state.pickerModalVisible,
    });
  }

  confirmPicker(amount: number) {
    const { onAddQuantity, modalCategory } = this.props;

    this.togglePickerVisible();
    if (modalCategory) {
      onAddQuantity(modalCategory, amount);
    }
  }

  render() {
    const { pickerModalVisible } = this.state;
    const {
      onHide,
      onDeleteQuantity,
      basket,
      modalVisible,
      modalCategory,
      modalMainCategory,
      t,
    } = this.props;
    if (!modalCategory || !modalMainCategory) {
      return null;
    }
    const quantities = getQuantities(basket, modalCategory);
    const totalQuantity = modalCategory
      ? getTotalQuantity(basket, modalCategory)
      : 0;

    const category = getSource(modalCategory);

    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <PickerCard style={ownStyles.pickerCard}>
          <View style={ownStyles.container}>
            <View style={ownStyles.backArrowContainer}>
              <BackArrow onPress={onHide} />
            </View>
            <View style={ownStyles.topContainer}>
              <CategoryIcon source={category} style={ownStyles.icon} />
              <QuantityInfo
                category={modalCategory}
                totalQuantity={totalQuantity}
              />
            </View>
            {quantities.size > 0 ? (
              <ScrollView style={{ width: '100%' }}>
                {quantities.map((q, idx) => (
                  <QuantityRow
                    borderTop={idx === 0}
                    key={v4()}
                    quantity={q}
                    category={modalCategory}
                    onDelete={() => {
                      if (modalCategory) {
                        onDeleteQuantity(modalCategory, idx);
                      }
                    }}
                  />
                ))}
              </ScrollView>
            ) : null}

            {quantities.size === 0 ? (
              <GoodQuantityGreyField
                topText={t('quantityInput:enterQuantities', {
                  value: t(`categories:${modalCategory}`),
                })}
                plusIconText={t('quantityInput:addQuantities')}
                onPress={() => this.togglePickerVisible()}
              />
            ) : (
              <View style={ownStyles.redPlus}>
                <RedPlusIcon onPress={() => this.togglePickerVisible()} />
              </View>
            )}
          </View>

          <View style={ownStyles.redButton}>
            <RedButton
              onPress={onHide}
              text={t('general:confirm')}
              confirmationDisabled={quantities.size === 0}
            />
          </View>
        </PickerCard>
        <PickerModal
          modalVisible={pickerModalVisible}
          toggleModalVisible={() => this.togglePickerVisible()}
          confirmAction={amount => this.confirmPicker(amount)}
          category={modalCategory}
          onlyStandardInput={modalCategory === 'Cigarettes'}
        />
      </AppModal>
    );
  }
}
export const GoodQuantityListModal = (translate([
  'modal',
  'general',
  'amountInput',
  'quantityInput',
  'mainCategories',
  'categories',
])(GoodQuantityListModalInner): ComponentType<GoodQuantityListModalProps>);
