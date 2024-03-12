import React from "react";

import styles from "./index.module.css";

export default function Demo(props) {
  return (
    <div className={styles.demo} style={{ ...props.style }}>
      <div className={styles.demo_desc}>Demo : Monday, March 11, 2024</div>
      <a
        className={styles.answer}
        href="https://go.dev/play/p/AI9np8TuiH5"
        target="_black"
      >
        Answer
      </a>
    </div>
  );
}
