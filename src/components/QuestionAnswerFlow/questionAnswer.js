import React from 'react';
import { View, Text } from 'react-native';
import YesNoQuestionCard from './cards/YesNoQuestionCard';
import AnswerCard from './cards/AnswerCard/AnswerCard';
import ConfirmationCard from './cards/ConfirmationCard/ConfirmationCard';
import PeopleInfoContainer from './cards/AnswerCard/children/PeopleInfoContainer';
export default (questionAnswer = [
  {
    question: {
      type: ConfirmationCard,
      props: {
        text:
          'Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?',
      },
    },
    answerConfirmMultiplePeople: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: <PeopleInfoContainer />,
    },
    answerConfirmSinglePerson: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: <PeopleInfoContainer />,
    },
  },
  {
    question: {
      type: YesNoQuestionCard,
      props: {
        text: 'Übersteigt der Gesamtwert aller Waren CHF 300?',
      },
    },
    answerNo: {
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
    answerYes: {
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
  {
    question: {
      type: ConfirmationCard,
      props: {},
      children: <Text>{`Fill in Question`}</Text>,
    },
    answerConfirm: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`Confirmed`}</Text>
        </View>
      ),
    },
  },
]);
