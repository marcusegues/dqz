// @flow
// $FlowFixMe
import { Alert } from 'react-native';

import type { QAStateEnriched, QuestionType } from '../QuestionAnswerContainer';
import { getAdultPeople } from '../../../model/configurationApi';

type UpdateFunction<T> = (input: T) => void;
// type NewValue = People | Basket;

export const onUpdateFactory = (
  questionType: QuestionType,
  onUpdate: UpdateFunction<any /* TODO, but how? */>,
  oldState: QAStateEnriched
): UpdateFunction<any /* TODO, but how? */> => (
  newValue: any /* TODO, but how? */
) => {
  switch (questionType) {
    case 'peopleInput': {
      if (!getAdultPeople(newValue) && getAdultPeople(oldState.people)) {
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
                onPress: () => onUpdate(newValue),
              },
            ],
            { cancelable: true }
          );
        };

        showAlert();
      } else {
        onUpdate(newValue);
      }
      break;
    }
    default: {
      onUpdate(newValue);
    }
  }
};
