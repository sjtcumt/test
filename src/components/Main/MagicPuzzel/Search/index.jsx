import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import { Input } from "antd";

const { Search } = Input;

export default class MySearch extends Component {
  search = (value) => {
    PubSub.publish("search_results", { isFirst: false, isLoading: true });
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (response) => {
        PubSub.publish("search_results", {
          isLoading: false,
          users: response.data.items,
          err: "",
        });
      },
      (reason) => {
        PubSub.publish("search_results", {
          isLoading: false,
          err: reason.message,
        });
      }
    );
  };

  render() {
    return (
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={this.search}
        style={{ width: "50%" }}
      />
    );
  }
}
