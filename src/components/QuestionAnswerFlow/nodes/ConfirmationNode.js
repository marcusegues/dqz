import Node from './Node';

export default class ConfirmationNode extends Node {
  constructor(questionAnswerIdx, parent = null, answerConfirm = null) {
    super(questionAnswerIdx, parent);
    this.answerConfirm = answerConfirm;
    this.answer = null;
  }

  insertConfirm(node) {
    this.answerConfirm = node;
    node.parent = this;
    return node;
  }
}
