import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import GoodInputModal from '../../components/Modals/GoodInputModal/GoodInputModal';
import PickerModal from '../../components/Modals/PickerModal/PickerModal';
import CurrencyPickerModal from '../../components/Modals/CurrencyPickerModal/CurrencyPickerModal';
import { getCurrencies, getFormattedCurrencyDate } from '../../reducers';
import SavedBasketModal from '../../components/Modals/SavedBasketModal/SavedBasketModal';

class ScreensView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pickerModalVisible: false,
      currencyPickerModalVisible: false,
      savedBasketModalVisible: false,
    };
    this.toggleModalVisible = this.toggleModalVisible.bind(this);
    this.togglePickerVisible = this.togglePickerVisible.bind(this);
    this.toggleCurrencyPickerVisible = this.toggleCurrencyPickerVisible.bind(
      this
    );
    this.toggleSavedBasketModalVisible = this.toggleSavedBasketModalVisible.bind(
      this
    );
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
  toggleSavedBasketModalVisible() {
    this.setState({
      savedBasketModalVisible: !this.state.savedBasketModalVisible,
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
            { key: `GoodQuantityListModal` },
            { key: `BasketInput` },
            { key: `pickerModal` },
            { key: `currencyPickerModal` },
            { key: `Information` },
            { key: `savedBasketModal` },
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
                if (item.key === `GoodQuantityListModal`) {
                  this.setState({ modalVisible: true });
                  return;
                } else if (item.key === `pickerModal`) {
                  this.setState({ pickerModalVisible: true });
                  return;
                } else if (item.key === `currencyPickerModal`) {
                  this.setState({ currencyPickerModalVisible: true });
                  return;
                } else if (item.key === `savedBasketModal`) {
                  this.setState({ savedBasketModalVisible: true });
                  return;
                }
                this.props.navigation.navigate(item.key);
              }}
            >
              {item.key}
            </Text>
          )}
        />

        <GoodInputModal
          modalVisible={this.state.modalVisible}
          toggleModalVisible={this.toggleModalVisible}
        />
        <PickerModal
          modalVisible={this.state.pickerModalVisible}
          toggleModalVisible={this.togglePickerVisible}
        />
        <CurrencyPickerModal
          modalVisible={this.state.currencyPickerModalVisible}
          toggleModalVisible={this.toggleCurrencyPickerVisible}
          currencyObject={this.props.currencyObject}
          currencyDate={this.props.currencyDate}
        />
        <SavedBasketModal
          modalVisible={this.state.savedBasketModalVisible}
          toggleModalVisible={this.toggleSavedBasketModalVisible}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currencyObject: getCurrencies(state),
  currencyDate: getFormattedCurrencyDate(state),
});

export default connect(mapStateToProps)(ScreensView);
