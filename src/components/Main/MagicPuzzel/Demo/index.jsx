import React from "react";
import { nanoid } from "nanoid";

import styles from "./index.module.css";

export default function Demo(props) {
  return (
    <button
      key={nanoid()}
      className={styles.demo}
      style={{ ...props.style }}
    ></button>
  );
}
