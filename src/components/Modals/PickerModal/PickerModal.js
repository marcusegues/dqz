// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Picker, TextInput } from 'react-native';
import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import {
  rangeItemsPicker,
  pickerDecimalUnits,
  amountsPicker,
} from './pickerData';
import { pickerModalStyle } from '../styles/PickerModal';
import { CategoriesInfo } from '../../../model/constants';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';
import { ModalTab } from './subComponents/ModalTab';
import { PickerComponent } from '../CurrencyPickerModal/subComponents/PickerComponent';
import { PickerValueSeparator } from '../CurrencyPickerModal/subComponents/PickerValueSeparator';
import { PickerUnitColumn } from './subComponents/PickerUnitColumn';
import type { TFunction } from '../../../types/generalTypes';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';
import { ModalCloseText } from '../ModalCloseText';
import { CardHeaderText } from '../../QuestionAnswer/cards/subcomponents/CardHeaderText';
import { CardHeaderSubText } from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { moderateScale, verticalScale } from '../../../styles/Scaling';

type PickerState = {
  selected: 'standardInput' | 'customInput',
  standardInput: {
    number: string,
    amount: string,
  },
  customInput: {
    units: string,
    decimalUnits: string,
  },
  numberInput: {
    wholePart: string,
    decimalPart: string,
  },
};

type PickerModalProps = {
  confirmAction: number => void,
  category: Category,
  toggleModalVisible: () => void,
  modalVisible: boolean,
  onlyStandardInput?: boolean,
};

class PickerModalInner extends React.Component<
  PickerModalProps & { t: TFunction },
  PickerState
> {
  static defaultProps = {
    onlyStandardInput: false,
  };

  state = {
    selected: 'standardInput' || 'customInput',
    standardInput: {
      number: '1',
      amount: '1',
    },
    customInput: {
      units: '1',
      decimalUnits: '00',
    },
    numberInput: {
      wholePart: '1',
      decimalPart: '00',
    },
    text: '',
  };

  standardTotalAmount(): number {
    const {
      number: numberString,
      amount: amountString,
    } = this.state.standardInput;

    const number = +numberString;
    const amount = +amountString;
    if (number < 0 || amount < 0) {
      return 0;
    }
    return number * amount;
  }

  customTotalAmount(): number {
    const {
      units: unitsString,
      decimalUnits: decimalUnitsString,
    } = this.state.customInput;

    const units = +unitsString;
    const decimalUnits = +decimalUnitsString;
    if (units < 0 || decimalUnits < 0) {
      return 0;
    }
    return units + decimalUnits / 100;
  }

  numberInputTotalAmount(): number {
    const {
      wholePart: wholePartString,
      decimalPart: decimalPartString,
    } = this.state.numberInput;

    const wholePart = +wholePartString;
    const decimalPart = +decimalPartString;
    if (wholePart < 0 || decimalPart < 0) {
      return 0;
    }
    return wholePart + decimalPart / 100;
  }

  render() {
    const { selected } = this.state;
    const {
      t,
      confirmAction,
      category,
      toggleModalVisible,
      modalVisible,
      onlyStandardInput,
    } = this.props;
    const standardInput = selected === 'standardInput';
    const customInput = selected === 'customInput';
    const unit = CategoriesInfo.getIn([category, 'unit'], '');
    const categoryName = CategoriesInfo.getIn([category, 'name'], '');

    const currentAmount: number = standardInput
      ? this.standardTotalAmount()
      : this.customTotalAmount();

    const inputCurrentAmount: number = this.numberInputTotalAmount();

    const amount: number = onlyStandardInput
      ? inputCurrentAmount
      : currentAmount;

    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <PickerCard style={{ width: '95%' }}>
          {onlyStandardInput ? (
            <View>
              <View
                style={{
                  marginTop: verticalScale(16),
                  marginLeft: moderateScale(16),
                }}
              >
                <CardHeaderText text="Menge eingeben" />
              </View>
              <CardHeaderSubText text="Erfassen Sie Tabakmenge, die Sie mit sich führen:" />
              <CardHeaderSubText
                text={
                  categoryName === 'Fleisch und Fleischzub' ? 'True' : 'false'
                }
              />
              {onlyStandardInput &&
              categoryName === 'Fleisch und Fleischzub' ? (
                <View
                  style={{
                    // flex: 1,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    // style={currencyPickerModal.textInput}
                    // onChangeText={value => this.setState({ amount: +value })}
                    maxLenght="8"
                    underlineColorAndroid="transparent"
                    blurOnSubmit
                    style={pickerModalStyle.textInput}
                    onChangeText={itemValue =>
                      this.setState({
                        numberInput: {
                          ...this.state.numberInput,
                          wholePart: +itemValue,
                        },
                      })
                    }
                    value={this.state.numberInput.wholePart}
                  />
                  <TextInput
                    style={pickerModalStyle.textInput}
                    onChangeText={itemValue =>
                      this.setState({
                        numberInput: {
                          ...this.state.numberInput,
                          decimalPart: +itemValue,
                        },
                      })
                    }
                    value={this.state.numberInput.decimalPart}
                  />
                </View>
              ) : (
                <TextInput
                  style={pickerModalStyle.textInput}
                  onChangeText={itemValue =>
                    this.setState({
                      numberInput: {
                        ...this.state.numberInput,
                        wholePart: +itemValue,
                      },
                    })
                  }
                  value={this.state.numberInput.wholePart}
                />
              )}
            </View>
          ) : (
            <View style={pickerModalStyle.topTouchableContainer}>
              <ModalTab
                activeTab={standardInput}
                onPress={() =>
                  this.setState({
                    selected: 'standardInput',
                  })
                }
                text={t('standardCategoryPicker').toUpperCase()}
              />

              <ModalTab
                activeTab={customInput}
                onPress={() =>
                  this.setState({
                    selected: 'customInput',
                  })
                }
                text={t('individualCategoryPicker').toUpperCase()}
              />
            </View>
          )}

          {standardInput && !onlyStandardInput ? (
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={this.state.standardInput.number}
                onValueChange={itemValue =>
                  this.setState({
                    standardInput: {
                      ...this.state.standardInput,
                      number: itemValue,
                    },
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {rangeItemsPicker(1, 100, 1).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator="X" />

              <PickerComponent
                selectedValue={this.state.standardInput.amount}
                onValueChange={itemValue =>
                  this.setState({
                    standardInput: {
                      ...this.state.standardInput,
                      amount: itemValue,
                    },
                  })
                }
                style={{}}
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {amountsPicker(category).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerUnitColumn unit={unit} />
            </View>
          ) : null}

          {customInput && !onlyStandardInput ? (
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={this.state.customInput.units}
                onValueChange={itemValue =>
                  this.setState({
                    customInput: {
                      ...this.state.customInput,
                      units: itemValue,
                    },
                  })
                }
                mode="dropdown"
                prompt=""
              >
                {rangeItemsPicker(1, 100, 1).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator="," />

              <PickerComponent
                selectedValue={this.state.customInput.decimalUnits}
                onValueChange={itemValue =>
                  this.setState({
                    customInput: {
                      ...this.state.customInput,
                      decimalUnits: itemValue,
                    },
                  })
                }
                style={{}}
                mode="dropdown"
                prompt="Choose value"
                itemStyle={{}}
              >
                {pickerDecimalUnits.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>
              <PickerUnitColumn unit={unit} />
            </View>
          ) : null}

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => confirmAction(amount)}
              // onPress={() => confirmAction(currentAmount)}
              text={t(['confirmPicker'], {
                // value: `${inputCurrentAmount.toFixed(2)} ${unit}`,
                value: `${amount.toFixed(2)} ${unit}`,
                // value: `${currentAmount.toFixed(2)} ${unit}`,
              })}
            />
          </View>
        </PickerCard>
        <ModalCloseText
          onModalHide={toggleModalVisible}
          text={t('closeModalText')}
        />
      </AppModal>
    );
  }
}

export const PickerModal = (translate(['modal'])(
  PickerModalInner
): ComponentType<PickerModalProps>);
