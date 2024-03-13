import { ADD_EARN, ADD_EARN_AMOUNT } from "../constant";

export const addEarn = (earnObj) => ({
  type: ADD_EARN,
  data: earnObj,
});
export const addEarnAmount = (earnObj) => ({
  type: ADD_EARN_AMOUNT,
  data: earnObj,
});
