import React, { useState } from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";

import { Button } from "antd";

export default function Message() {
  const [messageArr] = useState([
    {
      id: "01",
      title: "message1",
    },
    {
      id: "02",
      title: "message2",
    },
    {
      id: "03",
      title: "message3",
    },
    {
      id: "04",
      title: "message4",
    },
  ]);

  const navigate = useNavigate();
  function showDetail(m) {
    navigate("detail02", {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
      },
    });
  }

  return (
    <div>
      {/* params */}
      <ul>
        {messageArr.map((msg) => {
          return (
            <li key={msg.id}>
              <Link replace to={`detail/${msg.id}/${msg.title}`}>
                {msg.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* location state  */}
      <ul>
        {messageArr.map((msg) => {
          return (
            <li key={msg.id}>
              <Link
                to={`detail02`}
                state={{
                  id: msg.id,
                  title: msg.title,
                }}
              >
                {msg.title}
              </Link>
              <Button onClick={() => showDetail(msg)}>Show Detail</Button>
            </li>
          );
        })}
      </ul>

      {/* serach */}
      <ul>
        {messageArr.map((msg) => {
          return (
            <li key={msg.id}>
              <Link to={`detail03?id=${msg.id}&title=${msg.title}`}>
                {msg.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
