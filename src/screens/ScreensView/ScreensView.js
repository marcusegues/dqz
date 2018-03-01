// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from '../../components/NavBar/NavBar';
import { QuantityPickerModal } from '../../components/Modals/QuantityPickerModal/QuantityPickerModal';
import { CurrencyPickerModal } from '../../components/Modals/CurrencyPickerModal/CurrencyPickerModal';
import { TimePickerModal } from '../../components/Modals/TimePickerModal/TimePickerModal';
import { getCurrencies, getFormattedCurrencyDate } from '../../reducers';
import { SavedBasketModal } from '../../components/Modals/SavedBasketModal/SavedBasketModal';
import type { Navigation } from '../../types/generalTypes';
import type { CurrencyObject } from '../../model/currencies';
import { initAmounts } from '../../model/configurationApi';
import { LegalNoticeModal } from '../../components/Modals/LegalNoticeModal/LegalNoticeModal';
import { getConvertedLocalTimeToSwiss } from '../../model/utils';

type ScreensViewProps = {
  navigation: Navigation,
};

type ScreensViewState = {
  modalVisible: boolean,
  pickerModalVisible: boolean,
  currencyPickerModalVisible: boolean,
  savedBasketModalVisible: boolean,
  timePickerModalVisible: boolean,
  legalNoticeModalVisible: boolean,
};

class ScreensViewInner extends React.Component<
  ScreensViewProps & {
    currencyObject: CurrencyObject,
  },
  ScreensViewState
> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pickerModalVisible: false,
      currencyPickerModalVisible: false,
      savedBasketModalVisible: false,
      timePickerModalVisible: false,
      legalNoticeModalVisible: false,
    };
  }

  setSavedBasketModalVisibleFalse() {
    this.setState({
      savedBasketModalVisible: false,
    });
  }
  toggleModalVisible() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }
  togglePickerVisible() {
    this.setState({
      pickerModalVisible: !this.state.modalVisible,
    });
  }
  toggleCurrencyPickerVisible() {
    this.setState({
      currencyPickerModalVisible: !this.state.currencyPickerModalVisible,
    });
  }

  handleHideTimePickerModal() {
    this.setState({
      timePickerModalVisible: false,
    });
  }
  toggleLegalNoticeModalVisible() {
    this.setState({
      legalNoticeModalVisible: !this.state.legalNoticeModalVisible,
    });
  }

  render() {
    return (
      <View style={{ marginTop: 5, flex: 1 }}>
        <NavBar step={1} />
        <FlatList
          data={[
            { key: `OnBoarding` },
            { key: `MainMenu` },
            { key: `QuestionAnswer` },
            { key: `BasketInput` },
            { key: `pickerModal` },
            { key: `currencyPickerModal` },
            { key: `Information` },
            { key: `savedBasketModal` },
            { key: `timePickerModal` },
            { key: `legalNoticeModal` },
          ]}
          renderItem={({ item }) => (
            <Text
              style={{
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 5,
                fontFamily: 'roboto_bold',
              }}
              onPress={() => {
                if (item.key === `pickerModal`) {
                  this.setState({ pickerModalVisible: true });
                  return;
                } else if (item.key === `currencyPickerModal`) {
                  this.setState({ currencyPickerModalVisible: true });
                  return;
                } else if (item.key === `savedBasketModal`) {
                  this.setState({ savedBasketModalVisible: true });
                  return;
                } else if (item.key === `timePickerModal`) {
                  this.setState({ timePickerModalVisible: true });
                  return;
                } else if (item.key === `legalNoticeModal`) {
                  this.setState({ legalNoticeModalVisible: true });
                  return;
                }
                this.props.navigation.navigate(item.key);
              }}
            >
              {item.key}
            </Text>
          )}
        />

        <QuantityPickerModal
          modalVisible={this.state.pickerModalVisible}
          toggleModalVisible={() => this.togglePickerVisible()}
          confirmAction={() => {}}
          category="Meat"
        />
        <CurrencyPickerModal
          modalVisible={this.state.currencyPickerModalVisible}
          toggleModalVisible={() => this.toggleCurrencyPickerVisible()}
          currencyObject={this.props.currencyObject}
          currencyDate="xy.zy.1234"
          onHide={() => {}}
          onAddAmount={() => {}}
          amounts={initAmounts}
          large={false}
        />
        <TimePickerModal
          currentEntryTime={getConvertedLocalTimeToSwiss().toString()}
          modalVisible={this.state.timePickerModalVisible}
          onHideModal={() => this.handleHideTimePickerModal()}
          onSelectTime={() => {}}
        />
        <SavedBasketModal
          modalVisible={this.state.savedBasketModalVisible}
          setModalVisibleFalse={() => this.setSavedBasketModalVisibleFalse()}
          navigation={this.props.navigation}
        />
        <LegalNoticeModal
          modalVisible={this.state.legalNoticeModalVisible}
          toggleModalVisible={() => this.toggleLegalNoticeModalVisible()}
          onPressLegal={() => {}}
          onConfirm={() => {}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
  currencyDate: getFormattedCurrencyDate(state),
});

export const ScreensView = connect(mapStateToProps)(ScreensViewInner);
