import YesNoNode from './nodes/YesNoNode';
import QuestionAnswerNode from './nodes/QuestionAnswerNode';
import ConfirmationNode from './nodes/ConfirmationNode';

const root = new QuestionAnswerNode(0);
const largeItems = new YesNoNode(2);
const overAllowanceSinglePerson = new YesNoNode(1);
root.insertNext('confirmMultiplePersons', largeItems);
root.insertNext('confirmSinglePerson', overAllowanceSinglePerson);
const overAllowanceMultiplePersonsRestGoods = new YesNoNode(3);
// const overAllowanceMultiplePersonsAllGoods = new YesNoNode(4);
largeItems.insertYes(overAllowanceMultiplePersonsRestGoods);
// confirmMultiplePersons.insertNo(overAllowanceMultiplePersonsAllGoods);

export { root };
