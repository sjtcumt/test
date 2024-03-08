import { ADD, DESC } from "../constant";

export const createAddAction = (data) => ({ type: ADD, data });

export const createDescAction = (data) => ({ type: DESC, data });

export const createAddAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data));
    }, time);
  };
};
// ({ type: ADD, data });

// const createDescAction = (data) => {
//   return { type: "desc", data };
// };
