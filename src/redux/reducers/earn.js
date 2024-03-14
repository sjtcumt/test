import { ADD_EARN, ADD_EARN_AMOUNT } from "../constant";

const initState = [{ id: "001", name: "salary", amount: 10 }];

export function earnReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_EARN:
      return [data, ...preState];
    default:
      return preState;
  }
}

const initAmount = 9;
export function earnAmountReducer(preState = initAmount, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_EARN_AMOUNT:
      return preState + data * 1;
    default:
      return preState;
  }
}
