import React, { Component } from "react";

import "./index.css";

export default class Item extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleChecked = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm("Are U sure to DELETE ?")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, kind, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChecked(id)}
          />
          <span>{kind}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleDelete(id);
          }}
          style={{ display: mouse ? "block" : "none" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
