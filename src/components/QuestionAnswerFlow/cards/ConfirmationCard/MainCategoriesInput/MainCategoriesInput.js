import React from 'react';
import { Text } from 'react-native';
import ConfirmationCard from '../ConfirmationCard';
import AdultInputRow from '../children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../children/PeopleInputRow/configured/MinorInputRow';
import MainCategoriesCheckList from '../children/MainCategoriesCheckList/MainCategoriesCheckList';

const MainCategoriesInput = ({
	mainCategories,
	onToggleMainCategory,
	onAnswerConfirm,
	text,
}) => {
	console.log(mainCategories.toJS());
	return (
		<ConfirmationCard text={text} onAnswerConfirm={onAnswerConfirm}>
			<MainCategoriesCheckList
				mainCategories={mainCategories}
				onToggleMainCategory={onToggleMainCategory}
			/>
		</ConfirmationCard>
	);
};

export default MainCategoriesInput;
