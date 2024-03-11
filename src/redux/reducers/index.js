import { combineReducers } from "redux";

import count from "./count";
import persons from "./person";
import shapes from "./shape";

export default combineReducers({
  count,
  persons,
  shapes,
});
