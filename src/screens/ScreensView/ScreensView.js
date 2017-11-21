import React from 'react';
import { Text, FlatList } from 'react-native';

const ScreensView = ({ navigation }) => {
  return (
    <FlatList
      data={[
        { key: `OnBoarding` },
        { key: `MainMenu` },
        { key: `QuestionAnswer` },
      ]}
      renderItem={({ item }) => (
        <Text onPress={() => navigation.navigate(item.key)}>{item.key}</Text>
      )}
    />
  );
};

export default ScreensView;
