import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NavBar from '../../components/NavBar/NavBar';
const ScreensView = ({ navigation }) => {
  return (
    <View style={{ marginTop: 5, flex: 1 }}>
      <NavBar step={1} />
      <FlatList
        data={[
          { key: `OnBoarding` },
          { key: `MainMenu` },
          { key: `QuestionAnswer` },
        ]}
        renderItem={({ item }) => (
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              fontFamily: 'roboto_bold',
            }}
            onPress={() => navigation.navigate(item.key)}
          >
            {item.key}
          </Text>
        )}
      />
    </View>
  );
};

export default ScreensView;
