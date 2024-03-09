import React from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import { Input } from "antd";

const { Search } = Input;

const search = (value) => {
  if (value === "") {
    alert("Please input username");
    return;
  }
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
export default function MySearch() {
  return (
    <Search
      placeholder="Input Github username"
      enterButton="Search"
      size="large"
      onSearch={search}
      style={{ width: "50%" }}
    />
  );
}
