import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

// import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

export default createStore(
  reducer,
  applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware(thunk))
);
