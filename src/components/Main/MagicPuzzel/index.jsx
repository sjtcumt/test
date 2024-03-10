import React, { useState } from "react";

import Board from "./Board";

import "./index.css";
import DragBox from "./DragBox";
import { PaginationLink } from "reactstrap";

// 创建网格单元格
function createGridCells() {
  const gridCells = [];
  for (let row = 0; row < 17; row++) {
    for (let col = 0; col < 22; col++) {
      gridCells.push(
        <div key={`container-${row}-${col}`} className={`grid-item`}></div>
      );
    }
  }
  return gridCells;
}

// 定义网格表格组件
export default function MagicPuzzel() {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationCount, setRotationCount] = useState(0);
  const [rotationXCount, setRotationXCount] = useState(0);
  const [lastClick, setLastClick] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  let dragBoxEle = null;
  var left0 = 0;
  var top0 = 0;
  // 初始化状态

  // 鼠标按下事件处理函数
  function onMouseDown(e) {
    if (e.target.className !== "grid-item_active") {
      return;
    }
    var target = e.target;
    dragBoxEle = target.parentNode.parentNode;
    console.log("onMouseDown", dragBoxEle);
    left0 = e.clientX - dragBoxEle.offsetLeft;
    top0 = e.clientY - dragBoxEle.offsetTop;
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
  }

  // 鼠标移动事件处理函数
  const handleMouseMove = (e) => {
    const x = e.clientX - left0;
    const y = e.clientY - top0;
    dragBoxEle.style.left = `${x}px`;
    dragBoxEle.style.top = `${y}px`;
    // setLeft(x);
    // setTop(y);
  };

  // 鼠标松开事件处理函数
  document.addEventListener("mouseup", (e) => {
    if (!dragBoxEle) {
      return;
    }
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    // 四舍五入取整
    dragBoxEle.style.left = `${
      Math.round(parseInt(dragBoxEle.style.left) / 40) * 40
    }px`;
    dragBoxEle.style.top = `${
      Math.round(parseInt(dragBoxEle.style.top) / 40) * 40
    }px`;
  });

  // 单击事件处理函数
  document.addEventListener("click", (e) => {
    if (!dragBoxEle) {
      return;
    }
    const thisClick = new Date().getTime();
    const doubleClickThreshold = 400; // 毫秒
    const isDoubleClick = thisClick - lastClick < doubleClickThreshold;
    setLastClick(thisClick);

    if (!isDoubleClick) {
      console.log("click", dragBoxEle);
    } else {
      console.log("dbclick", dragBoxEle);
    }
    dragBoxEle = null;
  });

  return (
    <div className="puzzel" onMouseDown={onMouseDown}>
      <div className="container">{createGridCells()}</div>
      <Board style={{ top: "2rem" }}></Board>
      <DragBox
        style={{
          left: "calc(50% - 11rem)",
          top: "8rem",
          backGroudcolor: "pink",
        }}
        data={[
          [1, 1, 0],
          [1, 1, 1],
          [0, 0, 1],
        ]}
      />
    </div>
  );
}
