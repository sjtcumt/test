import React from "react";
import { Button, Flex } from "antd";
import { connect } from "react-redux";

import { nanoid } from "nanoid";

import { addEarn, addEarnAmount } from "../../../../redux/actions/earn";
import { addAmount } from "../../../../redux/actions/amount";

import styles from "./index.module.css";
import { InputNumber } from "antd";

import { Input } from "antd";
import Column from "antd/es/table/Column";
export function Earn(props) {
  let nameEle = null;
  let amountEle = null;
  function addEarn() {
    const name = nameEle.value;
    const amount = amountEle.value;
    const earnObj = { id: nanoid(), name, amount };
    props.addEarn(earnObj);
    props.addAmount(amount);
    props.addEarnAmount(amount);
  }

  return (
    <div className={styles.earn}>
      <div>Earn Amount:{props.earn_amount}</div>
      <div style={{ display: Flex, flexDirection: Column }}>
        <Input
          ref={(c) => {
            nameEle = c;
          }}
          style={{ width: 200 }}
          type="text"
          placeholder="salary"
        />
        <InputNumber
          ref={(c) => {
            amountEle = c;
          }}
          min={1}
          max={1000}
          defaultValue={100}
        />
        <Button type="primary" onClick={addEarn}>
          Add
        </Button>
      </div>
      <div className={styles.records}>
        <ul>
          {props.earns.map((obj) => {
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
    earn_amount: state.earnAmountReducer,
  }),
  (dispatch) => ({
    addEarn: (number) => dispatch(addEarn(number)),
    addAmount: (number) => dispatch(addAmount(number)),
    addEarnAmount: (data) => dispatch(addEarnAmount(data)),
  })
  // {
  //   addEarn,
  //   addAmount,
  // }
)(Earn);
