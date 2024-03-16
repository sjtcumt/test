import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

import { addSpend, addSpendAmount } from "../../../../redux/actions/spend";
import { descAmount } from "../../../../redux/actions/amount";

import styles from "./index.module.css";

import { InputNumber, Input } from "antd";

export function Spend(props) {
  let nameEle = null;
  let amountEle = null;
  function addEarn() {
    const name = nameEle.value;
    const amount = amountEle.value;
    const earnObj = { id: nanoid(), name, amount };
    props.addSpend(earnObj);
    props.descAmount(amount);
    props.addSpendAmount(amount);
  }

  return (
    <div className={styles.spend}>
      <div>Spend Amount:{props.spend_amount}</div>
      <Input
        ref={(c) => {
          nameEle = c;
        }}
        style={{ width: 200 }}
        type="text"
        placeholder="book"
      />
      <InputNumber
        ref={(c) => {
          amountEle = c;
        }}
        min={1}
        max={1000}
        defaultValue={5}
      />
      <Button type="primary" onClick={addEarn}>
        Add
      </Button>
      <div className={styles.records}>
        <ul>
          {props.spends.map((obj) => {
            return (
              <li key={obj.id}>
                {obj.name}---{obj.amount}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    amount: state.amount,
    earns: state.earnReducer,
    spends: state.spendReducer,
    spend_amount: state.spendAmountReducer,
  }),
  (dispatch) => ({
    addSpend: (data) => dispatch(addSpend(data)),
    addSpendAmount: (data) => dispatch(addSpendAmount(data)),
    descAmount: (number) => dispatch(descAmount(number)),
  })
  // {
  //   addSpend,
  //   descAmount,
  // }
)(Spend);
