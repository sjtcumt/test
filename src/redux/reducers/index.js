import { combineReducers } from "redux";

import amount from "./amount";
import { earnReducer, earnAmountReducer } from "./earn";
import { spendReducer, spendAmountReducer } from "./spend";

export default combineReducers({
  amount,
  earnReducer,
  spendReducer,
  earnAmountReducer,
  spendAmountReducer,
});
