import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import CheckBox from '../../../../../CheckBox/CheckBox';
import { MainCategories } from '../../../../../../types/reducers/declaration';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../../../../styles/Scaling';

const { width } = Dimensions.get('window');

const ownStyles = StyleSheet.create({
  container: {
    width: width - 30,
    borderBottomWidth: 1,
    borderColor: '#E0E0E1',
  },
  flatListRow: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: verticalScale(13),
    paddingLeft: scale(15),
    borderTopWidth: 1,
    borderColor: '#E0E0E1',
  },
  flatListText: {
    paddingLeft: scale(15),
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: '#24253D',
  },
});

const MainCategoriesCheckList = ({ mainCategories, onToggleMainCategory }) => {
  const flatListData = [];
  MainCategories.forEach(cat => {
    flatListData.push({ key: cat });
  });

  return (
    <View style={ownStyles.container}>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <View style={ownStyles.flatListRow}>
            <CheckBox
              checked={mainCategories.has(item.key)}
              onPress={() => {
                onToggleMainCategory(item.key);
              }}
            />
            <Text style={ownStyles.flatListText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainCategoriesCheckList;