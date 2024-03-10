import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Search Github Users",
    "search_github_users",
    <AppstoreOutlined />,
    null
  ),
  getItem("Magic Puzzel", "magic_puzzel", <AppstoreOutlined />, null),
];

export default function Main() {
  const navigate = useNavigate();

  function OnClick(e) {
    console.log(e);
    navigate(e.key, {});
  }

  return (
    <Menu
      onClick={OnClick}
      style={{
        width: "100%",
      }}
      mode="vertical"
      items={items}
    />
  );
}
