import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const classNameFunc = ({ isActive }) =>
  isActive ? "list-group-item atguigu" : "list-group-item";

export default class MyNavLink extends Component {
  render() {
    return <NavLink className={classNameFunc} {...this.props} />;
  }
}
