import { ADD_EARN } from "../constant";

const initState = [{ id: "001", name: "salary", amount: 10 }];

export default function earnReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_EARN:
      return [data, ...preState];
    default:
      return preState;
  }
}
