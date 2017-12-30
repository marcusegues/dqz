// @flow
// $FlowFixMe
import { Alert } from 'react-native';

import type { QAStateEnriched } from '../QuestionAnswerContainer';
import { getAdultPeople } from '../../../model/configurationApi';
import type {
  Basket,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { MainCategoriesType } from '../../../types/reducers/declaration';

type UpdateFunction<T> = (input: T) => void;

type PeopleInputTrigger = {
  questionType: 'peopleInput',
  onUpdate: UpdateFunction<People>,
  people: People,
};

type QuantityInputTrigger = {
  questionType: 'quantityInput',
  onUpdate: UpdateFunction<Basket>,
  basket: Basket,
};

type MainCategoriesTrigger = {
  questionType: 'mainCategories',
  onUpdate: UpdateFunction<MainCategoriesType>,
  mainCategories: MainCategoriesType,
};

type Trigger =
  | PeopleInputTrigger
  | QuantityInputTrigger
  | MainCategoriesTrigger;

export const onUpdateFactory = (
  trigger: Trigger,
  oldState: QAStateEnriched
): void => {
  switch (trigger.questionType) {
    case 'peopleInput': {
      if (!getAdultPeople(trigger.people) && getAdultPeople(oldState.people)) {
        const input: People = trigger.people;
        const func: UpdateFunction<People> = trigger.onUpdate;
        const showAlert = () => {
          Alert.alert(
            'Are you sure you want no adults?',
            'Some foo.',
            [
              {
                text: 'Oooops, no.',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'Yes. I know what I am doing.',
                onPress: () => func(input),
              },
            ],
            { cancelable: true }
          );
        };

        showAlert();
      } else {
        trigger.onUpdate(trigger.people);
      }
      break;
    }
    default: {
      // eslint-disable-next-line no-console
      console.log('foo');
    }
  }
};
