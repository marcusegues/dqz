import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ScreensView = ({ navigation }) => {
  return (
    <View style={{ marginLeft: 5, marginTop: 5 }}>
      <FlatList
        data={[
          { key: `OnBoarding` },
          { key: `MainMenu` },
          { key: `QuestionAnswer` },
          { key: `GoodInputModal` },
        ]}
        renderItem={({ item }) => (
          <Text
            style={{ marginTop: 5, marginBottom: 5, fontFamily: 'roboto_bold' }}
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
