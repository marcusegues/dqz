import React from 'react';
import Immutable from 'immutable';
import BinaryNode from './nodes/BinaryNode';
import BinaryQuestion from '../BinaryQuestion';
import { v4 } from 'uuid';
import { root } from './questionAnswerTree';
import questionAnswer from './questionAnswer';
import { View, Text } from 'react-native';

export default class QuestionAnswerFlow extends React.Component {
  constructor(props) {
    super(props);
    this.root = root;
    this.current = this.root;
    const elements = Immutable.List();
    this.state = {
      elements,
    };
    this.getCurrentElement = this.getCurrentElement.bind(this);
    this.getCurrentQuestionElement = this.getCurrentQuestionElement.bind(this);
    this.getCurrentAnswerElement = this.getCurrentAnswerElement.bind(this);
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
    if (!this.current.answer) {
      return this.getCurrentQuestionElement();
    }
    return this.getCurrentAnswerElement();
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
      key: v4(),
    });
    return element;
  }

  getCurrentAnswerElement() {
    const { questionAnswerIdx } = this.current;
    const {
      [this.current.answer]: { type, props: { ...props }, children },
    } = questionAnswer[questionAnswerIdx];
    const element = React.createElement(type, {
      ...props,
      key: v4(),
      children,
    });
    return element;
  }

  onAnswerYes() {
    console.log('yes');
    this.current.answer = 'answerYes';
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.nextYes;
      if (!this.current) {
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  onAnswerNo() {
    console.log('no');
    this.current.answer = 'answerNo';
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.nextNo;
      if (!this.current) {
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  onAnswerConfirm() {
    this.current.answer = 'answerConfirm';
    this.elements.pop();
    this.getCurrentElement();
    this.current = this.current.next;
    this.getCurrentElement();
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        {this.state.elements}
      </View>
    );
  }
}
