import { ADD_AMOUNT, DESC_AMOUNT } from "../constant";

const initState = 5;
export default function amountReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_AMOUNT:
      return preState + data * 1;
    case DESC_AMOUNT:
      return preState - data * 1;
    default:
      return preState;
  }
}
