import React from 'react';
import Immutable from 'immutable';
import Touchable from 'react-native-platform-touchable';
import YesNoCard from './cards/YesNoCard/YesNoCard';
import { v4 } from 'uuid';
import { root } from './questionAnswerTree';
import questionAnswer from './questionAnswer';
import { View, Text } from 'react-native';

export default class QuestionAnswerFlow extends React.Component {
  static navigationOptions = {
    title: 'Great',
  };
  constructor(props) {
    super(props);
    this.root = root;
    this.current = this.root;
    const elements = Immutable.List();
    this.state = {
      questionsFinished: false,
      elements,
    };
    this.getCurrentElement = this.getCurrentElement.bind(this);
    this.getCurrentQuestionElement = this.getCurrentQuestionElement.bind(this);
    this.getCurrentAnswerElement = this.getCurrentAnswerElement.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onAnswerYes = this.onAnswerYes.bind(this);
    this.onAnswerNo = this.onAnswerNo.bind(this);
    this.onAnswerConfirm = this.onAnswerConfirm.bind(this);
  }

  componentWillMount() {
    const element = this.getCurrentElement();
    this.setState({
      elements: this.state.elements.push(element),
    });
  }

  getCurrentElement() {
    if (!this.current) {
      return null;
    }
    if (this.current.answer) {
      return this.getCurrentAnswerElement();
    }
    return this.getCurrentQuestionElement();
  }

  getCurrentQuestionElement() {
    const { questionAnswerIdx } = this.current;
    const { question: { type, props: { ...props } } } = questionAnswer[
      questionAnswerIdx
    ];
    const element = React.createElement(type, {
      ...props,
      onAnswerYes: this.onAnswerYes,
      onAnswerNo: this.onAnswerNo,
      onAnswerConfirm: this.onAnswerConfirm,
      onAnswer: this.onAnswer,
      key: v4(),
    });
    return element;
  }

  getCurrentAnswerElement() {
    const { questionAnswerIdx } = this.current;
    const {
      answers: {
        [this.current.answer]: { type, props: { ...props }, children },
      },
    } = questionAnswer[questionAnswerIdx];
    const element = React.createElement(
      type,
      {
        ...props,
        key: v4(),
      },
      children.map(child => React.createElement(child, { key: v4() }, null))
    );
    return element;
  }

  onAnswer(answer) {
    this.current.answer = answer;
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.next[answer];
      if (!this.current) {
        // reached end of questions
        this.setState({ questionsFinished: true });
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  onAnswerYes() {
    this.onAnswer('yes');
  }

  onAnswerNo() {
    this.onAnswer('no');
  }

  onAnswerConfirm() {
    this.onAnswer('confirm');
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        {this.state.elements}
        {this.state.questionsFinished ? (
          <Touchable onPress={() => {}} background={Touchable.Ripple('blue')}>
            <Text>{`ZUR WARENEINGABE`}</Text>
          </Touchable>
        ) : null}
      </View>
    );
  }
}
