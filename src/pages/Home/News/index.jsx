import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/news1">news1</a>
          </li>
          <li>
            <a href="/news2">news2</a>
          </li>
          <li>
            <a href="/news3">news3</a>
          </li>
        </ul>
      </div>
    );
  }
}
