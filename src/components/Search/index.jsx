import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  componentDidMount() {
    this.doSearch("atguigu");
  }
  async doSearch(keyWord) {
    console.log(keyWord);
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });

    try {
      const response = await fetch(
        `http://api.github.com/search/users?q=${keyWord}`
      );
      const data = await response.json();
      console.log(data, response, data.items.length);
      if (response.status === 200 && data.items.length > 0) {
        PubSub.publish("atguigu", {
          isLoading: false,
          users: data.items,
        });
      }
    } catch (error) {
      PubSub.publish("atguigu", {
        isLoading: false,
        err: error.message,
      });
    }
  }

  search = async () => {
    const {
      keyWordEle: { value: keyWord },
    } = this;

    // await fetch
    await this.doSearch(keyWord);
    // fetch
    // fetch(`/api1/users?q=${keyWord}`)
    //   .then(
    //     (response) => {
    //       console.log("Connect server success");
    //       return response.json();
    //     },
    //     (reason) => {
    //       console.log("Connect server fail");
    //       console.log(reason);
    //       return new Promise(() => {});
    //     }
    //   )
    //   .then();

    // axios
    // axios.get(`/api1/users?q=${keyWord}`).then(
    //   (response) => {
    //     PubSub.publish("atguigu", {
    //       isLoading: false,
    //       users: response.data.items,
    //       err: "",
    //     });
    //   },
    //   (reason) => {
    //     console.log("fail", reason);
    //     PubSub.publish("atguigu", {
    //       isLoading: false,
    //       err: reason.message,
    //     });
    //   }
    // );
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
