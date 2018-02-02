// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  // $FlowFixMe
} from 'react-native';

import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { pickerModalStyle } from '../styles/PickerModal';
import { CardHeader } from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';
import { scale, verticalScale } from '../../../styles/Scaling';
import { ModalCloseText } from '../ModalCloseText';
import { SquareCheckBox } from '../../CheckBox/SquareCheckBox';

type LegalNoticeModalState = {
  checked: boolean,
};
type LegalNoticeModalProps = {
  modalVisible: boolean,
  toggleModalVisible: () => void,
};

class LegalNoticeModalInner extends React.Component<
  LegalNoticeModalProps,
  LegalNoticeModalState
> {
  constructor(props: LegalNoticeModalProps) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    const { checked } = this.state;
    const { modalVisible, toggleModalVisible } = this.props;
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <PickerCard
          style={{
            width: '100%',
          }}
        >
          <CardHeader text="Wichtiger Hinweis:" />

          <CardHeaderSubText
            text="Bitte berücksichtigen Sie, dass bei der Benutzung dieser App keine Rückerstattung möglich ist. Deklarierte Waren werden mit dem einheitlichen Mehrwertsteuersatz von 7.7% verzollt. Weitere Informationen finden Sie hier:"
            style={{
              color: '#757575',
              lineHeight: 18,
            }}
          />

          <TouchableWithoutFeedback>
            <CardHeaderSubText
              text="ALLGEIME GESCHÄFTBEDINGUNGEN"
              style={{
                marginTop: verticalScale(10),
                marginBottom: verticalScale(20),
                fontFamily: 'roboto_medium',
                color: '#757575',
              }}
            />
          </TouchableWithoutFeedback>

          <View
            style={{
              marginHorizontal: scale(16),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <SquareCheckBox
              checked={checked}
              onPress={() => console.log('booom')}
            />
            <CardHeaderSubText
              style={{
                color: '#4a4a4a',
                paddingRight: scale(16),
              }}
              text="Hiermit akzeptiere ich die Allgemeinen Geschäftsbedingungen, die ich gelesen und verstanden habe."
            />
          </View>

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => {
                Keyboard.dismiss();
              }}
              text="BESTÄTIGEN"
            />
          </View>
        </PickerCard>
        <ModalCloseText onModalHide={toggleModalVisible} text="Abbrechen" />
      </AppModal>
    );
  }
}

export const LegalNoticeModal = (translate(['modal'])(
  LegalNoticeModalInner
): ComponentType<LegalNoticeModalProps>);
