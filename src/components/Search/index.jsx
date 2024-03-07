import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    const {
      keyWordEle: { value: keyWord },
    } = this;

    PubSub.publish("atguigu", { isFirst: false, isLoading: true });
    axios.get(`/api1/users?q=${keyWord}`).then(
      (response) => {
        PubSub.publish("atguigu", {
          isLoading: false,
          users: response.data.items,
          err: "",
        });
      },
      (reason) => {
        console.log("fail", reason);
        PubSub.publish("atguigu", {
          isLoading: false,
          err: reason.message,
        });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">search</h3>
        <div>
          <input
            ref={(c) => (this.keyWordEle = c)}
            type="text"
            placeholder="input"
          />
          <button onClick={this.search}>Go</button>
        </div>
      </section>
    );
  }
}
