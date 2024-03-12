import { ADD_SPEND } from "../constant";

export const addSpend = (spendObj) => ({
  type: ADD_SPEND,
  data: spendObj,
});
