// @flow
// $FlowFixMe
import { Alert } from 'react-native';

import type { QAStateEnriched } from '../QuestionAnswerContainer';
import {
  getTotalPeople,
  getTotalQuantity,
  resetQuantitiesMultipleCategories,
} from '../../../model/configurationApi';
import type {
  Basket,
  Category,
  People,
  Amounts,
} from '../../../model/types/basketPeopleAmountsTypes';
import { CategoriesInfo } from '../../../model/constants';
import type {
  MainCategories,
  MainCategory,
} from '../../../types/reducers/declaration';
import { getSubCategories } from '../../../types/reducers/declaration';
import type { TFunction } from '../../../types/generalTypes';

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
  onUpdate: UpdateFunction<{
    mainCategories: MainCategories,
    basket: Basket,
  }>,
  mainCategories: MainCategories,
};

type AmountsTrigger = {
  questionType: 'amounts',
  onUpdate: UpdateFunction<Amounts>,
  amounts: Amounts,
};

type LargeAmountsTrigger = {
  questionType: 'largeAmounts',
  onUpdate: UpdateFunction<Amounts>,
  amounts: Amounts,
};

type Trigger =
  | PeopleInputTrigger
  | QuantityInputTrigger
  | MainCategoriesTrigger
  | AmountsTrigger
  | LargeAmountsTrigger;

export const onUpdateFactory = (
  trigger: Trigger,
  oldState: QAStateEnriched,
  t: TFunction
): void => {
  switch (trigger.questionType) {
    case 'peopleInput': {
      if (!getTotalPeople(trigger.people) && getTotalPeople(oldState.people)) {
        const showAlert = () => {
          Alert.alert(
            t('qaFlow:validateNoPeopleTitle'),
            t('qaFlow:validateNoPeopleSubtitle'),
            [
              {
                text: t('qaFlow:validateGenericOk'),
                onPress: () => {},
                style: 'default',
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
    case 'mainCategories': {
      const unselectedCategories: Set<MainCategory> = new Set();
      const newCats: MainCategories = trigger.mainCategories;
      const oldCats: MainCategories = oldState.settings.get('mainCategories');
      oldCats.forEach(c => {
        if (!newCats.has(c)) {
          unselectedCategories.add(c);
        }
      });
      const affectedCategories: Set<{
        category: Category,
        quantity: number,
      }> = new Set();
      if (unselectedCategories.size) {
        Array.from(unselectedCategories).forEach(main => {
          getSubCategories(main).map(c => {
            const quantity = getTotalQuantity(oldState.basket, c);
            if (quantity > 0) {
              affectedCategories.add({ category: c, quantity });
            }
            return true;
          });
        });
      }
      if (affectedCategories.size) {
        const input: MainCategories = trigger.mainCategories;
        const func: UpdateFunction<{
          mainCategories: MainCategories,
          basket: Basket,
        }> =
          trigger.onUpdate;
        const problems = Array.from(affectedCategories)
          .map(
            ac =>
              `${t(`categories:${ac.category}`)} (${t(
                `categories:${ac.quantity}`
              )} ${t(
                `units:${CategoriesInfo.getIn([ac.category, 'unit'], '')}`,
                { count: ac.quantity }
              )})`
          )
          .join(', ');
        const showAlert = () => {
          Alert.alert(
            t('qaFlow:validateMainCategoryRemoveTitle'),
            t('qaFlow:validateMainCategoryRemoveSubtitle', { value: problems }),
            [
              {
                text: t('qaFlow:validateGenericNo'),
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: t('qaFlow:validateMainCategoryRemoveYes'),
                onPress: () => {
                  func({
                    mainCategories: input,
                    basket: resetQuantitiesMultipleCategories(
                      oldState.basket,
                      Array.from(affectedCategories).map(ac => ac.category)
                    ),
                  });
                },
              },
            ],
            { cancelable: true }
          );
        };

        showAlert();
      } else {
        trigger.onUpdate({
          mainCategories: trigger.mainCategories,
          basket: oldState.basket,
        });
      }
      break;
    }
    case 'quantityInput': {
      trigger.onUpdate(trigger.basket);
      break;
    }
    case 'amounts': {
      trigger.onUpdate(trigger.amounts);
      break;
    }
    case 'largeAmounts': {
      trigger.onUpdate(trigger.amounts);
      break;
    }
    default: {
      // eslint-disable-next-line no-console
      console.error('Uh-oh in validation');
    }
  }
};
