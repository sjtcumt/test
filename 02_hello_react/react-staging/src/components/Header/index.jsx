import React, { Component } from "react";
import PropTypes from "prop-types";

import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) {
      return;
    }
    if (target.value.trim() === "") {
      return;
    }
    const todoObj = { id: nanoid(), kind: target.value, done: false };
    this.props.addTodo(todoObj); // Corrected the function name to addTodo
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Input your task, Press ENTER to confirm"
        />
      </div>
    );
  }
}
