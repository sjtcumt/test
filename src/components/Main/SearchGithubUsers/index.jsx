import React, { Component } from "react";
import Search from "./Search";
import CardList from "./CardList";

export default class SearchGithubUsers extends Component {
  render() {
    return (
      <div>
        <Search />
        <CardList />
      </div>
    );
  }
}
