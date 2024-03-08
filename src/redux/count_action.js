import { ADD, DESC } from "./constant";
export const createAddAction = (data) => ({ type: ADD, data });

export const createDescAction = (data) => ({ type: DESC, data });

// const createDescAction = (data) => {
//   return { type: "desc", data };
// };
