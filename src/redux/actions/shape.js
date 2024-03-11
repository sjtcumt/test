import { ROTATE, FLIP } from "../constant";

export const rotate = (data) => ({ type: ROTATE, data });

export const flip = (data) => ({ type: FLIP, data });

// ({ type: ADD, data });

// const createDescAction = (data) => {
//   return { type: "desc", data };
// };
