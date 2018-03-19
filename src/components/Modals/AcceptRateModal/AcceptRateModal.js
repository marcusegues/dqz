// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { ModalCard } from '../ModalCard';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import { Row } from '../../Rows/Row';
import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import { GREY } from '../../../styles/colors';
import { CloseIcon } from '../../General Components/CloseIcon';
import type { TFunction } from '../../../types/generalTypes';
import { ModalCloseText } from '../ModalCloseText';
import { rowStyles } from '../../Rows/styles/rowStyles';
import { storeClearDeclaration } from '../../../asyncStorage/storageApi';
import { getTotalFees } from '../../../reducers/selectors';

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
};

class AcceptRateModalInner extends React.Component<
  AcceptRateModalProps & { t: TFunction },
  null
> {
  render() {
    const { setModalVisibleFalse, modalVisible, t, onAcceptRate } = this.props;
    return (
      <AppModal
        onRequestClose={setModalVisibleFalse}
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
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
              onPress={onAcceptRate}
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
