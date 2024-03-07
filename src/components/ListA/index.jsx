import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

export default class ListA extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };

  componentDidMount() {
    PubSub.subscribe("atguigu", (_, stateObj) => {
      console.log(stateObj);
      this.setState(stateObj);
    });
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div>
        {isFirst ? (
          <h2>Welcome</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : users.length === 0 ? (
          <h2>No users</h2>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    src={user.avatar_url}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
