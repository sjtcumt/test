// import React, { useState, useRef } from "react";

// import styles from "./index.module.css";

// import Board from "./Board";
// import DragBox from "./DragBox";
// import stylesDragBox from "./DragBox/index.module.css";
// import derivative from "antd/es/theme/themes/default";

// // 创建网格单元格
// function createGridCells() {
//   const gridCells = [];
//   for (let row = 0; row < 17; row++) {
//     for (let col = 0; col < 22; col++) {
//       gridCells.push(
//         <div
//           key={`container-${row}-${col}`}
//           className={styles["grid-item"]}
//         ></div>
//       );
//     }
//   }
//   return gridCells;
// }

// // 定义网格表格组件
// export default function MagicPuzzel() {
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [rotationCount, setRotationCount] = useState(0);
//   const [rotationXCount, setRotationXCount] = useState(0);
//   const [lastClick, setLastClick] = useState(0);
//   const [left, setLeft] = useState(0);
//   const [top, setTop] = useState(0);

//   let dragBoxEle = null;
//   var left0 = 0;
//   var top0 = 0;
//   let drag01 = useRef(null);
//   // 初始化状态

//   // 鼠标按下事件处理函数
//   function onMouseDown(e) {
//     // console.log(e.target);
//     if (e.target.className !== stylesDragBox["grid-item-active"]) {
//       return;
//     }
//     var target = e.target;
//     dragBoxEle = target.parentNode.parentNode;

//     // console.log("onMouseDown", dragBoxEle);
//     left0 = e.clientX - dragBoxEle.offsetLeft;
//     top0 = e.clientY - dragBoxEle.offsetTop;
//     // console.log(
//     //   "onMouseDown",
//     //   e.clientX,
//     //   e.clientY,
//     //   dragBoxEle.offsetLeft,
//     //   dragBoxEle.offsetTop,
//     //   left0,
//     //   top0
//     // );
//     document.addEventListener("mousemove", handleMouseMove);
//   }

//   // 鼠标移动事件处理函数
//   const handleMouseMove = (e) => {
//     if (!dragBoxEle) {
//       return;
//     }

//     const x = e.clientX - left0;
//     const y = e.clientY - top0;
//     dragBoxEle.style.left = `${x / 40}rem`;
//     dragBoxEle.style.top = `${y / 40}rem`;
//     // console.log(
//     //   "handleMouseMove",
//     //   x,
//     //   y,
//     //   e.clientX,
//     //   left0,
//     //   e.clientX - left0,
//     //   dragBoxEle.style.left,
//     //   dragBoxEle.style.top
//     // );
//   };

//   // 鼠标松开事件处理函数
//   document.addEventListener("mouseup", (e) => {
//     if (!dragBoxEle) {
//       return;
//     }
//     // console.log(
//     //   "mouseup",
//     //   dragBoxEle.style.left,
//     //   Math.round(parseInt(dragBoxEle.style.left)) * 1
//     // );

//     // 四舍五入取整
//     dragBoxEle.style.left = `${Math.round(
//       parseFloat(dragBoxEle.style.left) * 1
//     )}rem`;
//     dragBoxEle.style.top = `${Math.round(
//       parseFloat(dragBoxEle.style.top) * 1
//     )}rem`;
//   });

//   // 单击事件处理函数
//   document.addEventListener("click", (e) => {
//     if (!dragBoxEle) {
//       return;
//     }
//     const thisClick = new Date().getTime();
//     const doubleClickThreshold = 400; // 毫秒
//     const isDoubleClick = thisClick - lastClick < doubleClickThreshold;
//     console.log(
//       "click",
//       thisClick,
//       lastClick,
//       thisClick - lastClick,
//       doubleClickThreshold
//     );
//     setLastClick(thisClick);
//     if (!isDoubleClick) {
//       console.log("click", dragBoxEle);
//       console.log(dragBoxEle, "----");
//       // var dd = [
//       //   [1, 1, 0],
//       //   [1, 1, 1],
//       //   [0, 0, 1],
//       // ];
//       drag01.current.refresh();
//     } else {
//       console.log("dbclick", dragBoxEle);
//     }
//     dragBoxEle = null;
//   });

//   return (
//     <div className={styles.puzzel} onMouseDown={onMouseDown}>
//       <div className={styles.container}>
//         {createGridCells()}
//         <Board style={{ top: "2rem" }}></Board>
//         <DragBox
//           key="dra_box_01"
//           style={{
//             left: "0rem",
//             top: "8rem",
//             backGroundColor: "rgba(239, 207, 227, .9)",
//           }}
//           data={[
//             [1, 1, 0],
//             [1, 1, 1],
//             [0, 0, 1],
//           ]}
//           ref={drag01}
//         />
//         <DragBox
//           key="dra_box_02"
//           style={{
//             left: "5rem",
//             top: "8rem",
//             backGroundColor: `rgba(3, 138, 255, .9)`,
//           }}
//           data={[
//             [1, 1, 1],
//             [1, 1, 1],
//           ]}
//         />
//         <DragBox
//           key="dra_box_03"
//           style={{
//             left: "10rem",
//             top: "8rem",
//             backGroundColor: `rgba(130, 94, 92, .9)`,
//           }}
//           data={[
//             [1, 0, 1],
//             [1, 1, 1],
//           ]}
//         />
//         <DragBox
//           key="dra_box_04"
//           style={{
//             left: "15rem",
//             top: "8rem",
//             backGroundColor: `rgba(103, 242, 209, .9)`,
//           }}
//           data={[
//             [1, 1, 1],
//             [1, 0, 0],
//             [1, 0, 0],
//           ]}
//         />
//         <DragBox
//           key="dra_box_05"
//           style={{
//             left: "19rem",
//             top: "8rem",
//             backGroundColor: `rgba(108, 122, 137, .9)`,
//           }}
//           data={[
//             [0, 0, 1],
//             [1, 1, 1],
//             [1, 0, 0],
//           ]}
//         />
//         <DragBox
//           key="dra_box_06"
//           style={{
//             left: "0rem",
//             top: "13rem",
//             backGroundColor: `rgba(241, 90, 34, .9)`,
//           }}
//           data={[
//             [1, 1, 1, 1],
//             [0, 1, 0, 0],
//           ]}
//         />
//         <DragBox
//           key="dra_box_07"
//           style={{
//             left: "5rem",
//             top: "13rem",
//             backGroundColor: `rgba(255, 240, 0, .9)`,
//           }}
//           data={[
//             [0, 1, 1, 1],
//             [1, 1, 0, 0],
//           ]}
//         />
//         <DragBox
//           key="dra_box_08"
//           style={{
//             left: "10rem",
//             top: "13rem",
//             backGroundColor: `rgba(255, 76, 48, .9)`,
//           }}
//           data={[
//             [1, 1],
//             [1, 1],
//             [1, 0],
//           ]}
//         />
//         <DragBox
//           key="dra_box_09"
//           style={{
//             left: "15rem",
//             top: "13rem",
//             backGroundColor: `rgba(178, 222, 39,.9)`,
//           }}
//           data={[
//             [0, 0, 0, 1],
//             [1, 1, 1, 1],
//           ]}
//         />
//       </div>
//     </div>
//   );
// }
