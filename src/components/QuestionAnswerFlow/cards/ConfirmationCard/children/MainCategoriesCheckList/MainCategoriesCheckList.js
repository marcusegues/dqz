import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckBox from '../../../../../CheckBox/CheckBox';
import { MAIN_RED } from '../../../../../../styles/colors';
import { MainCategories } from '../../../../../../types/reducers/declaration';

const MainCategoriesCheckList = ({ mainCategories, onToggleMainCategory }) => {
	const flatListData = [];
	MainCategories.forEach(cat => {
		flatListData.push({ key: cat });
	});

	return (
		<FlatList
			data={flatListData}
			renderItem={({ item }) => (
				<View style={{ flexDirection: 'row', flex: 1, width: '100%' }}>
					<CheckBox
						checked={mainCategories.has(item.key)}
						onPress={() => {
							onToggleMainCategory(item.key);
						}}
					/>
					<Text>{item.key}</Text>
				</View>
			)}
		/>
	);
};

export default MainCategoriesCheckList;
