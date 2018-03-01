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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export const StandardAndCustomInput = (translate(['modal'])(
  StandardAndCustomInputInner
): ComponentType<StandardAndCustomInputProps>);
