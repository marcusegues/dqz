import Node from './Node';

export default class BinaryNode extends Node {
  constructor(
    questionAnswerIdx,
    parent = null,
    nextYes = null,
    nextNo = null,
    answer = null
  ) {
    super(questionAnswerIdx, parent);
    this.nextYes = nextYes;
    this.nextNo = nextNo;
    this.answer = answer;
  }

  insertYes(node) {
    this.nextYes = node;
    node.parent = this;
    return node;
  }

  insertNo(node) {
    this.nextNo = node;
    node.parent = this;
    return node;
  }
}
