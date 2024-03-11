import React, { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./index.module.css";
const boardData = [
  ["Jan", "Feb", "Mar", "1", "2", "3", "4", "5", "Mon", "Tue"],
  ["Apr", "May", "6", "7", "8", "9", "10", "11", "12", "Wed"],
  ["Jun", "Jul", "13", "14", "15", "16", "17", "18", "19", "Thu"],
  ["Aug", "Sep", "20", "21", "22", "23", "24", "25", "26", "Fri"],
  ["Oct", "Nov", "Dec", "27", "28", "29", "30", "31", "Sat", "Sun"],
];

const currentDate = new Date();
const currentMonth = currentDate.toLocaleString("default", {
  month: "short",
});
const currentDay = currentDate.getDate();
const currentWeekday = currentDate.getDay(); // 周几，0为周日

// 创建网格单元格
function createBoardCells() {
  const gridCells = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 10; col++) {
      if (
        boardData[row][col] === "" + currentDay ||
        boardData[row][col] === currentMonth ||
        boardData[row][col] ===
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][currentWeekday]
      ) {
        gridCells.push(
          <div key={nanoid()} className={styles["grid-item-today"]}>
            {boardData[row][col]}
          </div>
        );
      } else {
        gridCells.push(
          <div key={nanoid()} className={styles["grid-item-normal"]}>
            {boardData[row][col]}
          </div>
        );
      }
    }
  }
  return gridCells;
}

export default class Board extends Component {
  render() {
    return (
      <button className={styles.board} style={{ ...this.props.style }}>
        {createBoardCells()}
      </button>
    );
  }
}
