// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import {
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { ModalCard } from '../ModalCard';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import type { TFunction } from '../../../types/generalTypes';
import { ModalCloseText } from '../ModalCloseText';

const ownStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: scale(20),
  },
  redButtonWrapper: {
    width: '95%',
    alignSelf: 'center',
  },
});

type AcceptRateModalProps = {
  modalVisible: boolean,
  setModalVisibleFalse: () => any,
  onAcceptRate: () => void,
  onDismiss: () => void,
};

type AcceptRateModalState = {
  acceptedRate: boolean,
};

class AcceptRateModalInner extends React.Component<
  AcceptRateModalProps & { t: TFunction },
  AcceptRateModalState
> {
  constructor(props) {
    super(props);
    this.state = {
      acceptedRate: false,
    };
  }

  handleAcceptRate() {
    this.setState({ acceptedRate: true }, () => this.props.onAcceptRate());
  }

  render() {
    const { setModalVisibleFalse, modalVisible, t } = this.props;
    return (
      <AppModal
        onRequestClose={setModalVisibleFalse}
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onDismiss={() => {
          if (this.state.acceptedRate) {
            this.props.onDismiss();
          }
        }}
      >
        <ModalCard style={{ width: '95%' }}>
          <CardHeader text={t('acceptRateModal:modalTitle')} style={{}} />
          <CardHeaderSubText
            text={t('acceptRateModal:modalSubTitle')}
            style={{ lineHeight: moderateScale(18), marginBottom: 30 }}
          />

          <View style={ownStyles.redButtonWrapper}>
            <RedButton
              text={t('acceptRateModal:confirm')}
              onPress={() => this.handleAcceptRate()}
            />
          </View>
        </ModalCard>
        <ModalCloseText
          onModalHide={() => setModalVisibleFalse()}
          text={t('modal:closeModalText')}
        />
      </AppModal>
    );
  }
}

export const AcceptRateModal = (translate(['acceptRate'])(
  AcceptRateModalInner
): ComponentType<AcceptRateModalProps>);
