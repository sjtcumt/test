import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class AppAxios extends Component {
  state = {
    todos: [
      { id: "001", kind: "food", done: true },
      { id: "002", kind: "sleep", done: true },
      { id: "003", kind: "code", done: false },
      { id: "004", kind: "shopping", done: true },
    ],
  };

  getStudentsData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("suc", response.data);
      },
      (reason) => {
        console.log("fail", reason);
      }
    );
  };

  getCarsData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("suc", response.data);
      },
      (reason) => {
        console.log("fail", reason);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>Get Students</button>
        <button onClick={this.getCarsData}>Get Cars</button>
      </div>
    );
  }
}
