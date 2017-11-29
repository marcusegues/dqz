// file will be rewritten
import QuestionAnswerNode from './QuestionAnswerNode';

export default class ConfirmationNode extends QuestionAnswerNode {
  constructor(questionAnswerIdx, parent = null, confirm = null) {
    super(questionAnswerIdx, parent);
    this.next = {
      confirm,
    };
    this.answer = null;
  }

  insertConfirm(node) {
    this.next.confirm = node;
    node.parent = this;
    return node;
  }
}
