import React from "react";

import styles from "./index.module.css";

import { nanoid } from "nanoid";

import Board from "./Board";
import DragBox from "./DragBox";
import Demo from "./Demo";

// 创建网格单元格
function createGridCells() {
  const gridCells = [];
  for (let row = 0; row < 17; row++) {
    for (let col = 0; col < 22; col++) {
      gridCells.push(
        <div key={nanoid()} className={styles["grid-item"]}></div>
      );
    }
  }
  return gridCells;
}
const boxes = [
  // 1
  {
    style: {
      left: "0rem",
      top: "7rem",
      backGroundColor: "rgba(239, 207, 227, .5)",
    },
    data: [
      [1, 1, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
  },
  // 2
  {
    style: {
      left: "4rem",
      top: "7rem",
      backGroundColor: `rgba(3, 138, 255, .5)`,
    },
    data: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  // 3
  {
    style: {
      left: "8rem",
      top: "7rem",
      backGroundColor: `rgba(130, 94, 92, .8)`,
    },
    data: [
      [1, 0, 1],
      [1, 1, 1],
    ],
  },
  // 4
  {
    style: {
      left: "12rem",
      top: "7rem",
      backGroundColor: `rgba(103, 242, 209, .8)`,
    },
    data: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
  },
  // 5
  {
    style: {
      left: "16rem",
      top: "7rem",
      backGroundColor: `rgba(108, 122, 137, .8)`,
    },
    data: [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  // 6
  {
    style: {
      left: "0rem",
      top: "13rem",
      backGroundColor: `rgba(249, 180, 45, .8)`,
    },
    data: [
      [1, 1, 1, 1],
      [0, 1, 0, 0],
    ],
  },
  // 7
  {
    style: {
      left: "5rem",
      top: "13rem",
      backGroundColor: `rgba(255, 240, 0, .8)`,
    },
    data: [
      [0, 1, 1, 1],
      [1, 1, 0, 0],
    ],
  },
  // 8
  {
    style: {
      left: "18rem",
      top: "1rem",
      backGroundColor: `rgba(242, 38, 19, .8)`,
    },
    data: [
      [1, 1],
      [1, 1],
      [1, 0],
    ],
  },
  // 9
  {
    style: {
      left: "0rem",
      top: "1rem",
      backGroundColor: `rgba(178, 222, 39,.8)`,
    },
    data: [
      [0, 0, 0, 1],
      [1, 1, 1, 1],
    ],
  },
];

// 定义网格表格组件
export default function MagicPuzzel() {
  return (
    <div className={styles.puzzel}>
      <div className={styles.container}>
        {createGridCells()}
        <Board style={{ top: "1rem" }}></Board>

        {[...boxes].map((box) => {
          return (
            <DragBox
              key={nanoid()}
              style={{ ...box.style }}
              data={box.data}
            ></DragBox>
          );
        })}
        <Demo style={{ left: "12rem", top: "12rem" }}></Demo>
      </div>
    </div>
  );
}
