import React from 'react';
import { View, Text } from 'react-native';
import YesNoCard from './cards/YesNoCard/YesNoCard';
import AnswerCard from './cards/AnswerCard/AnswerCard';
import ConfirmationCard from './cards/ConfirmationCard/ConfirmationCard';
import PeopleInfoContainer from './cards/AnswerCard/children/PeopleInfoContainer';
import PeopleInputContainer from './cards/ConfirmationCard/PeopleInput/PeopleInputContainer';
import OverAllowanceContainer from './cards/YesNoCard/OverAllowance/OverAllowanceContainer';
import OverAllowanceInfoContainer from './cards/AnswerCard/children/OverAllowanceInfoContainer';
import LargeAmountPresentContainer from './cards/YesNoCard/LargeAmountPresent/LargeAmountPresentContainer';
import LargeAmountInfoContainer from './cards/AnswerCard/children/LargeAmountInfoContainer';
import MainCategoriesInputContainer from './cards/ConfirmationCard/MainCategoriesInput/MainCategoriesInputContainer';
import MainCategoriesInfoContainer from './cards/AnswerCard/children/MainCategoriesInfoContainer';

export default (questionAnswer = {
  0: {
    question: {
      type: PeopleInputContainer,
      props: {
        text:
          'Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?',
      },
    },
    answers: {
      confirmMultiplePersons: {
        type: AnswerCard,
        props: {
          mainIcon: 'account-multiple',
          status: require('../../../assets/images/complete.png'),
        },
        children: [PeopleInfoContainer],
      },
      confirmSinglePerson: {
        type: AnswerCard,
        props: {
          mainIcon: 'account',
          status: require('../../../assets/images/complete.png'),
        },
        children: [PeopleInfoContainer],
      },
    },
  },
  1: {
    question: {
      type: OverAllowanceContainer,
      props: {},
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'cellphone',
          status: require('../../../assets/images/complete.png'),
        },
        children: [OverAllowanceInfoContainer],
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'cellphone',
          status: require('../../../assets/images/complete.png'),
        },
        children: [OverAllowanceInfoContainer],
      },
    },
  },
  2: {
    question: {
      type: LargeAmountPresentContainer,
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'cash-multiple',
          status: require('../../../assets/images/complete.png'),
        },
        children: [LargeAmountInfoContainer],
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'cash-multiple',
          status: require('../../../assets/images/complete.png'),
        },
        children: [LargeAmountInfoContainer],
      },
    },
  },
  3: {
    question: {
      type: OverAllowanceContainer,
      props: { exceptLast: true },
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'crown',
          status: require('../../../assets/images/complete.png'),
        },
        children: [OverAllowanceInfoContainer],
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'crown',
          status: require('../../../assets/images/complete.png'),
        },
        children: [OverAllowanceInfoContainer],
      },
    },
  },
  4: {
    question: {
      type: MainCategoriesInputContainer,
      props: {},
    },
    answers: {
      confirm: {
        type: AnswerCard,
        props: {
          mainIcon: 'owl',
          status: require('../../../assets/images/complete.png'),
        },
        children: [MainCategoriesInfoContainer],
      },
    },
  },
});
