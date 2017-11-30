import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NavBar from '../../components/NavBar/NavBar';
import GoodInputModal from '../../components/Modals/GoodInputModal/GoodInputModal';

class ScreensView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModalVisible = this.toggleModalVisible.bind(this);
  }

  toggleModalVisible() {
    this.setState({
      modalVisible: !this.state.modalVisible,
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
            { key: `GoodInputModal` },
            { key: `BasketInput` },
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
                if (item.key === `GoodInputModal`) {
                  this.setState({ modalVisible: true });
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
      </View>
    );
  }
}

export default ScreensView;
