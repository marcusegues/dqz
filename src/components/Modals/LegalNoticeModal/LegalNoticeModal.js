// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import {
  View,
  Keyboard,
  // $FlowFixMe
} from 'react-native';

import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { pickerModalStyle } from '../styles/PickerModal';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { ModalCard } from '../ModalCard';
import { scale, verticalScale } from '../../../styles/Scaling';
import { ModalCloseText } from '../ModalCloseText';
import { SquareCheckBox } from '../../CheckBox/SquareCheckBox';
import type { TFunction } from '../../../types/generalTypes';

const ownStyles = {
  pickerCard: {
    width: '100%',
  },
  vatRateInfo: {
    color: '#757575',
    lineHeight: 18,
  },
  termsOfService: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    fontFamily: 'roboto_medium',
    color: '#757575',
  },
  acceptanceContainer: {
    marginHorizontal: scale(16),
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  acceptanceText: {
    color: '#4a4a4a',
  },
};

type LegalNoticeModalState = {
  checked: boolean,
};
type LegalNoticeModalProps = {
  modalVisible: boolean,
  onConfirm: () => void,
  toggleModalVisible: () => void,
  onPressLegal: () => void,
};

class LegalNoticeModalInner extends React.Component<
  LegalNoticeModalProps & { t: TFunction },
  LegalNoticeModalState
> {
  constructor(props: LegalNoticeModalProps & { t: TFunction }) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    const { checked } = this.state;
    const {
      onConfirm,
      onPressLegal,
      modalVisible,
      toggleModalVisible,
      t,
    } = this.props;
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ModalCard style={ownStyles.pickerCard}>
          <CardHeader text={t('importantNote')} />

          <CardHeaderSubText
            text={t('vatRateInfo')}
            style={ownStyles.vatRateInfo}
          />

          <Touchable
            onPress={() => {
              onPressLegal();
            }}
          >
            <CardHeaderSubText
              text={t('termsOfService').toUpperCase()}
              style={ownStyles.termsOfService}
            />
          </Touchable>

          <View style={ownStyles.acceptanceContainer}>
            <SquareCheckBox
              checked={checked}
              onPress={() => this.setState({ checked: !checked })}
            />
            <View style={{ flex: 1 }}>
              <CardHeaderSubText
                style={ownStyles.acceptanceText}
                text={t('acceptance')}
              />
            </View>
          </View>

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => {
                Keyboard.dismiss();
                onConfirm();
              }}
              confirmationDisabled={!checked}
              text={t('confirm').toUpperCase()}
            />
          </View>
        </ModalCard>
        <ModalCloseText onModalHide={toggleModalVisible} text={t('abort')} />
      </AppModal>
    );
  }
}

export const LegalNoticeModal = (translate(['legalNoticeModal'])(
  LegalNoticeModalInner
): ComponentType<LegalNoticeModalProps>);
