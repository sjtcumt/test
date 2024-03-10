import React, { useState } from "react";

import "./index.css";
export default function DragBox(props) {
  const [state, setState] = useState({ data: [] });
  const { data, style } = props;

  function createDragBoxRow(row) {
    const cells = [];
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === 0) {
        cells.push(
          <div key={`drag-${row}-${col}`} className={`grid-item_empty`}></div>
        );
      } else {
        cells.push(
          <div
            key={`drag-${row}-${col}`}
            className={`grid-item_active`}
            style={{ backgroundColor: style.backGroudcolor }}
          ></div>
        );
      }
    }
    return (
      <div className="drag_row" key={`drag_row-${row}`}>
        {cells}
      </div>
    );
  }

  function createDragBoxCells() {
    const gridCells = [];
    gridCells.push(createDragBoxRow(0));
    for (let row = 1; row < data.length; row++) {
      gridCells.push(createDragBoxRow(row));
      for (let col = 0; col < data[row].length; col++) {}
    }
    return gridCells;
  }
  return (
    <div
      key="drag_box01"
      className="drag_box"
      style={{
        ...props.style,
        width: data.length + "rem",
        height: data[0].length + "rem",
      }}
    >
      {createDragBoxCells()}
    </div>
  );
}
