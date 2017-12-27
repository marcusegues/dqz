import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NavBar from '../../components/NavBar/NavBar';
import GoodInputModal from '../../components/Modals/GoodInputModal/GoodInputModal';
import PickerModal from '../../components/Modals/PickerModal/PickerModal';
import CurrencyPickerModal from '../../components/Modals/CurrencyPickerModal/CurrencyPickerModal';

class ScreensView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pickerModalVisible: false,
      currencyPickerModalVisible: false,
    };
    this.toggleModalVisible = this.toggleModalVisible.bind(this);
    this.togglePickerVisible = this.togglePickerVisible.bind(this);
    this.toggleCurrencyPickerVisible = this.toggleCurrencyPickerVisible.bind(
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
        />
      </View>
    );
  }
}

export default ScreensView;
