import { ADD_AMOUNT, DESC_AMOUNT } from "../constant";

export const addAmount = (data) => ({ type: ADD_AMOUNT, data });
export const descAmount = (data) => ({ type: DESC_AMOUNT, data });
