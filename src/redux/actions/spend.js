import { ADD_SPEND, ADD_SPEND_AMOUNT } from "../constant";

export const addSpend = (spendObj) => ({
  type: ADD_SPEND,
  data: spendObj,
});
export const addSpendAmount = (spendObj) => ({
  type: ADD_SPEND_AMOUNT,
  data: spendObj,
});
