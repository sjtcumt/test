import { ADD_EARN } from "../constant";

export const addEarn = (earnObj) => ({
  type: ADD_EARN,
  data: earnObj,
});
