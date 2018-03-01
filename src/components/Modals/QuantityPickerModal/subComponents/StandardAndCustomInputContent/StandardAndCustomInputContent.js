// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../../types/generalTypes';
import { pickerModalStyle } from '../../../styles/PickerModal';
import { ModalTab } from '../ModalTab';
import { amountsPicker, rangeItemsPicker } from '../../pickerData';
import {PickerComponent} from "../../../../PickerComponent/PickerComponent";

type StandardAndCustomInputState = {
  selected: 'standardInput' | 'customInput',
};

type StandardAndCustomInputProps = {};

class StandardAndCustomInputInner extends React.Component<
  StandardAndCustomInputProps & { t: TFunction },
  StandardAndCustomInputState
> {
  state = {
    selected: 'standardInput',
  };

  render() {
    const { selected } = this.state;
    const { t } = this.props;
    return (
      <View>
        <View style={pickerModalStyle.topTouchableContainer}>
          <ModalTab
            activeTab={selected === 'standardInput'}
            onPress={() =>
              this.setState({
                selected: 'standardInput',
              })
            }
            text={t('modal:standardCategoryPicker').toUpperCase()}
          />

          <ModalTab
            activeTab={selected === 'customInput'}
            onPress={() =>
              this.setState({
                selected: 'customInput',
              })
            }
            text={t('modal:individualCategoryPicker').toUpperCase()}
          />
        </View>
        {selected === 'standardInput' ? (
          <View style={pickerModalStyle.pickerContainer}>
            <PickerComponent
              selectedValue={this.state.standardInput.multiplier}
              onValueChange={itemValue =>
                this.setState({
                  standardInput: {
                    ...this.state.standardInput,
                    multiplier: itemValue,
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
        ) : (
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

            <PickerUnitColumn unit={unit} />
          </View>
        )}
      </View>
    );
  }
}

export const StandardAndCustomInput = (translate(['modal'])(
  StandardAndCustomInputInner
): ComponentType<StandardAndCustomInputProps>);
