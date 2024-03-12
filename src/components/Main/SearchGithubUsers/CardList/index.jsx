import React, { useState, useEffect } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default function CardList() {
  const [state, setState] = useState({
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  });

  const { users, isFirst, isLoading, err } = state;

  useEffect(() => {
    PubSub.subscribe("search_results", (_, stateObj) => {
      console.log(stateObj);
      setState({ ...stateObj });
    });
  });

  return (
    <div className="container">
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
            <a rel="noreferrer" href={user.html_url} target="_blank">
              <div key={user.id} className="card">
                <img src={user.avatar_url} alt="" style={{ width: "100px" }} />
                <p className="card-text">{user.login}</p>
              </div>
            </a>
          );
        })
      )}
    </div>
  );
}
