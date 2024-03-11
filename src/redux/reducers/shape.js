import { ROTATE, FLIP } from "../constant";

const initState = 0;
const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]).reverse());

export default function shapeReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ROTATE:
      return transpose(data);
    case FLIP:
      return data.reverse();
    default:
      return preState;
  }
}
