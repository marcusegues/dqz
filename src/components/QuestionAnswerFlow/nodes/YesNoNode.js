// file will be rewritten
import QuestionAnswerNode from './QuestionAnswerNode';

export default class YesNoNode extends QuestionAnswerNode {
  constructor(
    questionAnswerIdx,
    parent = null,
    no = null,
    yes = null,
    answer = null
  ) {
    super(questionAnswerIdx, parent);
    this.next = {
      yes,
      no,
    };
    this.answer = answer;
  }

  insertYes(node) {
    this.next.yes = node;
    node.parent = this;
    return node;
  }

  insertNo(node) {
    this.next.no = node;
    node.parent = this;
    return node;
  }
}
