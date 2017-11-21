import React from 'react';
import { View, Text } from 'react-native';
import YesNoCard from './cards/YesNoCard/YesNoCard';
import AnswerCard from './cards/AnswerCard/AnswerCard';
import ConfirmationCard from './cards/ConfirmationCard/ConfirmationCard';
import PeopleInfoContainer from './cards/AnswerCard/children/PeopleInfoContainer';
import PeopleInputContainer from './cards/ConfirmationCard/PeopleInput/PeopleInputContainer';
import OverAllowanceContainer from './cards/YesNoCard/OverAllowance/OverAllowanceContainer';
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
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: <PeopleInfoContainer />,
      },
      confirmSinglePerson: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: <PeopleInfoContainer />,
      },
    },
  },
  1: {
    question: {
      type: YesNoCard,
      props: {
        text: 'Übersteigt der Gesamtwert aller Waren CHF 300?',
      },
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`No, not above 300.`}</Text>
          </View>
        ),
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`Yes, above 300.`}</Text>
          </View>
        ),
      },
    },
  },
  2: {
    question: {
      type: YesNoCard,
      props: {
        text:
          'Ist bei Ihren Waren ein Gegenstand dabei, welcher mehr als CHF 300,- Wert ist?',
      },
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`No High Value Items`}</Text>
          </View>
        ),
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`Yes High Value Items`}</Text>
          </View>
        ),
      },
    },
  },
  3: {
    question: {
      type: OverAllowanceContainer,
      props: {},
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`No not over allowance.`}</Text>
          </View>
        ),
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`Yes over allowance.`}</Text>
          </View>
        ),
      },
    },
  },
  4: {
    question: {
      type: OverAllowanceContainer,
      props: {},
    },
    answers: {
      no: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`No not over allowance.`}</Text>
          </View>
        ),
      },
      yes: {
        type: AnswerCard,
        props: {
          mainIcon: 'flight-takeoff',
          status: require('../../../assets/images/complete.png'),
        },
        children: (
          <View>
            <Text>{`Yes over allowance.`}</Text>
          </View>
        ),
      },
    },
  },
});
