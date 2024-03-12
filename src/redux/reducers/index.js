import { combineReducers } from "redux";

import amount from "./amount";
import earns from "./earn";
import spends from "./spend";

export default combineReducers({
  amount,
  earns,
  spends,
});
