import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

import { thunk } from "redux-thunk";

const allReducres = combineReducers({
  he: countReducer,
  rens: personReducer,
});

export default createStore(allReducres, applyMiddleware(thunk));
