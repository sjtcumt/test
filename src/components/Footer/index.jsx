import React from "react";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/tyler-fft"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-fft"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.cn/u/knight-gogogo/"
            target="_blank"
            rel="noreferrer"
          >
            Leetcode
          </a>
        </li>
      </ul>
    </div>
  );
}
