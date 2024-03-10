import React, { useState } from "react";
import "./index.css"; // 导入样式文件

export default function Shape() {
  // 初始化状态
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
  // 鼠标按下事件处理函数
  const onMouseDown = (e) => {
    dragBoxEle = e.target;
    left0 = e.clientX - dragBoxEle.offsetLeft;
    top0 = e.clientY - dragBoxEle.offsetTop;
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
  };

  // 鼠标移动事件处理函数
  const handleMouseMove = (e) => {
    const x = e.clientX - left0;
    const y = e.clientY - top0;
    // dragBoxEle.style.left = `${x}px`;
    // dragBoxEle.style.top = `${y}px`;
    setLeft(x);
    setTop(y);
  };

  // 鼠标松开事件处理函数
  document.addEventListener("mouseup", (e) => {
    if (!dragBoxEle) {
      return;
    }
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    // 四舍五入取整
    // dragBoxEle.style.left = `${
    //   Math.round(parseInt(dragBoxEle.style.left) / 40) * 40
    // }px`;
    // dragBoxEle.style.top = `${
    //   Math.round(parseInt(dragBoxEle.style.top) / 40) * 40
    // }px`;
    var x = Math.round(parseInt(dragBoxEle.style.left) / 40) * 40;
    var y = Math.round(parseInt(dragBoxEle.style.top) / 40) * 40;
    setLeft(x);
    setTop(y);
  });

  // 单击事件处理函数
  document.addEventListener("click", (e) => {
    if (!dragBoxEle) {
      return;
    }
    if (isDragging) {
      setIsDragging(false);
      return;
    }
    const thisClick = new Date().getTime();
    const doubleClickThreshold = 400; // 毫秒
    const isDoubleClick = thisClick - lastClick < doubleClickThreshold;

    if (!isDoubleClick) {
      // setRotationCount(rotationCount + 90);
    } else {
      setRotationXCount(rotationXCount + 180);
      // dragBoxEle.style.transform = `rotateY(${rotationXCount}deg)`;
    }
    setLastClick(thisClick);
    dragBoxEle = null;
  });

  return (
    <div className="puzzelbody">
      {/* 方块元素 */}
      <div
        className="drag-box"
        id="drag-box"
        style={{
          transform: `rotateX(${rotationXCount}deg)`,
          left: `${left}px`,
          top: `${top}px`,
        }}
        onMouseDown={onMouseDown}
      ></div>
    </div>
  );
}
