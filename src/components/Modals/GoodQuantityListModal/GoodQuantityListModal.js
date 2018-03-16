// @flow
import React from 'react';
import { DateTime } from 'luxon';
// $FlowFixMe
import { ScrollView, View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { v4 } from 'uuid';
import { AppModal } from '../AppModal';
import { QuantityInfo } from './subcomponents/QuantityInfo';
import {
  getQuantities,
  getQuantityDate,
  getQuantityNumber,
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
import { QuantityInputModal } from '../QuantityInputModal/QuantityInputModal';
import { RedButton } from '../../Buttons/RedButton';
import type { TFunction } from '../../../types/generalTypes';

import { GoodQuantityGreyField } from './subcomponents/GoodQuantityGreyField';
import { CategoryIcon } from '../../QuestionAnswer/Cards/ConfirmationCard/configured/QuantityInput/subcomponents/subcomponents/CategoryIcon';
import { RedPlusIcon } from './subcomponents/RedPlusIcon';
import { getSource } from '../../QuestionAnswer/Cards/ConfirmationCard/configured/QuantityInput/subcomponents/GoodInputRow';
import { ModalCard } from '../ModalCard';

const ownStyles = {
  pickerCard: {
    flex: 1,
    width: '100%',
    marginVertical: moderateScale(20),
    paddingBottom: 0,
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

  getGreyFieldTopText(modalCategory) {
    const { t } = this.props;

    switch (modalCategory) {
      case 'Butter': {
        return t('quantityInput:enterQuantitiesButter', {
          value: t(`categories:${modalCategory}`),
        });
      }
      case 'AlcSoft':
      case 'AlcHard': {
        return t('quantityInput:enterQuantitiesAlcohol', {
          value: t(`categories:${modalCategory}`),
        });
      }
      default: {
        return t('quantityInput:enterQuantities', {
          value: t(`categories:${modalCategory}`),
        });
      }
    }
  }

  setPickerVisibleFalse() {
    this.setState({
      pickerModalVisible: false,
    });
  }

  confirmPicker(amount: number) {
    const { onAddQuantity, modalCategory } = this.props;

    this.setPickerVisibleFalse();
    if (modalCategory) {
      onAddQuantity(modalCategory, amount);
    }
  }

  togglePickerVisible() {
    this.setState({
      pickerModalVisible: !this.state.pickerModalVisible,
    });
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
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard style={ownStyles.pickerCard}>
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
                    quantity={getQuantityNumber(q)}
                    date={DateTime.fromISO(getQuantityDate(q)).toFormat(
                      'dd.MM.y HH:mm'
                    )}
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
                topText={this.getGreyFieldTopText(modalCategory)}
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
        </ModalCard>
        <QuantityInputModal
          modalVisible={pickerModalVisible}
          toggleModalVisible={() => this.togglePickerVisible()}
          confirmAction={amount => this.confirmPicker(amount)}
          category={modalCategory}
          onlyStandardInput={
            modalCategory === 'Tobacco' ||
            modalCategory === 'Meat' ||
            modalCategory === 'Butter'
          }
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
