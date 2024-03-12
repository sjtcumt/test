import { ADD_SPEND } from "../constant";

const initState = [{ id: "002", name: "food", amount: 4 }];

export default function earnReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_SPEND:
      return [data, ...preState];
    default:
      return preState;
  }
}
