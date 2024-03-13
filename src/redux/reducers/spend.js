import { ADD_SPEND, ADD_SPEND_AMOUNT } from "../constant";

const initState = [{ id: "002", name: "food", amount: 4 }];

export function spendReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_SPEND:
      return [data, ...preState];
    default:
      return preState;
  }
}

const initAmount = 4;
export function spendAmountReducer(preState = initAmount, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_SPEND_AMOUNT:
      return preState + data * 1;
    default:
      return preState;
  }
}
// export default module.exports = {
//   spendReducer: spendReducer,
//   spendAmountReducer: spendAmountReducer,
// };
