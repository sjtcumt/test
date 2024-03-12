import React from "react";

import { connect } from "react-redux";

import { nanoid } from "nanoid";

import { addEarn } from "../../../../redux/actions/earn";
import { addAmount } from "../../../../redux/actions/amount";

import styles from "./index.module.css";

export function Earn(props) {
  let nameEle = null;
  let amountEle = null;
  function addEarn() {
    const name = nameEle.value;
    const amount = amountEle.value;
    const earnObj = { id: nanoid(), name, amount };
    props.addEarn(earnObj);
    props.addAmount(amount);
  }

  return (
    <div className={styles.earn}>
      <div>Earn Amount:{props.amount}</div>
      <input
        ref={(c) => {
          nameEle = c;
        }}
        type="text"
        placeholder="input source name"
      />
      <input
        ref={(c) => {
          amountEle = c;
        }}
        type="text"
        placeholder="input amount"
      />
      <button onClick={addEarn}>Add</button>
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
    earns: state.earns,
    spends: state.spends,
  }),
  {
    addEarn,
    addAmount,
  }
)(Earn);
