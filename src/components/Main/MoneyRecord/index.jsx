import React from "react";

import Amount from "./Amount";
import Spend from "./Spend";
import Earn from "./Earn";

import styles from "./index.module.css";

export default function MoneyRecord() {
  return (
    <div className={styles.container}>
      <div className={styles.sum}>
        <Amount></Amount>
      </div>
      <div className={styles.record}>
        <Earn></Earn>
        <Spend></Spend>
      </div>
    </div>
  );
}
