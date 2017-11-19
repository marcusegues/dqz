import Node from './Node';

export default class BinaryNode extends Node {
  constructor(
    questionAnswerIdx,
    parent = null,
    answerNo = null,
    answerYes = null,
    answer = null
  ) {
    super(questionAnswerIdx, parent);
    this.answerYes = answerYes;
    this.answerNo = answerNo;
    this.answer = answer;
  }

  insertYes(node) {
    this.answerYes = node;
    node.parent = this;
    return node;
  }

  insertNo(node) {
    this.answerNo = node;
    node.parent = this;
    return node;
  }
}
