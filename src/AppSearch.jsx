import React, { Component } from "react";
import Search from "./components/Search";
import ListA from "./components/ListA";

export default class AppSearch extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <ListA />
      </div>
    );
  }
}
