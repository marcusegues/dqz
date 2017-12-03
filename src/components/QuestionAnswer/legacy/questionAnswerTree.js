// file will be rewritten
import YesNoNode from './nodes/YesNoNode';
import QuestionAnswerNode from './nodes/QuestionAnswerNode';
import ConfirmationNode from './nodes/ConfirmationNode';

const root = new QuestionAnswerNode(0);
const largeItems = new YesNoNode(2);
const overAllowanceSinglePerson = new YesNoNode(1);
root.insertNext('confirmMultiplePersons', largeItems);
root.insertNext('confirmSinglePerson', overAllowanceSinglePerson);
const overAllowanceMultiplePersonsRestGoods = new YesNoNode(3);
const overAllowanceMultiplePersonsAllGoods = new YesNoNode(1);
largeItems.insertYes(overAllowanceMultiplePersonsRestGoods);
largeItems.insertNo(overAllowanceMultiplePersonsAllGoods);
const chooseMainCategories = new ConfirmationNode(4);
overAllowanceSinglePerson.insertYes(chooseMainCategories);
overAllowanceSinglePerson.insertNo(chooseMainCategories);
overAllowanceMultiplePersonsAllGoods.insertYes(chooseMainCategories);
overAllowanceMultiplePersonsAllGoods.insertNo(chooseMainCategories);
overAllowanceMultiplePersonsRestGoods.insertYes(chooseMainCategories);
overAllowanceMultiplePersonsRestGoods.insertNo(chooseMainCategories);
export { root };
