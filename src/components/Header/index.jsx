import React from "react";
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar_start}>
        <div className={styles.nav_logo}></div>
      </div>
      <ul className={styles.navbar_end}>
        <a href="https://github.com/tyler-fft" target="_blank" rel="noreferrer">
          <li></li>
        </a>
        <a href="https://github.com/tyler-fft" target="_blank" rel="noreferrer">
          <li></li>
        </a>
        <a href="https://github.com/tyler-fft" target="_blank" rel="noreferrer">
          <li></li>
        </a>
      </ul>
    </div>
  );
}
