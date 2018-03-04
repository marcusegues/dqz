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
import type { SelectedInput } from '../../QuantityInputModal';

type StandardAndCustomQuantityInputChildren = {
  standardInputPicker: any, //React.Element<any>,
  customInputPicker: any, //React.Element<any>
};

type StandardAndCustomQuantityInputProps = {
  selected: SelectedInput,
  onTabSelect: (selected: SelectedInput) => void,
  children: StandardAndCustomQuantityInputChildren,
};

class StandardAndCustomQuantityInputInner extends React.Component<
  StandardAndCustomQuantityInputProps & { t: TFunction }
> {
  render() {
    const { selected, onTabSelect, children, t } = this.props;
    return (
      <View>
        <View style={pickerModalStyle.topTouchableContainer}>
          <ModalTab
            activeTab={selected === 'standard'}
            onPress={() => onTabSelect('standard')}
            text={t('modal:standardCategoryPicker').toUpperCase()}
          />

          <ModalTab
            activeTab={selected === 'custom'}
            onPress={() => onTabSelect('custom')}
            text={t('modal:individualCategoryPicker').toUpperCase()}
          />
        </View>
        {selected === 'standard'
          ? children.standardInputPicker
          : children.customInputPicker}
      </View>
    );
  }
}

export const StandardAndCustomQuantityInput = (translate(['modal'])(
  StandardAndCustomQuantityInputInner
): ComponentType<StandardAndCustomQuantityInputProps>);
