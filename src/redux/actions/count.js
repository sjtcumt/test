import { ADD, DESC } from "../constant";

export const add = (data) => ({ type: ADD, data });

export const desc = (data) => ({ type: DESC, data });

export const addAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(data));
    }, time);
  };
};
// ({ type: ADD, data });

// const createDescAction = (data) => {
//   return { type: "desc", data };
// };
