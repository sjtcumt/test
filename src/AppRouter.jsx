import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <div className="list-group">
          <MyNavLink to="/home" children="Home" />
          <MyNavLink to="/about" children="About" />
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    );
  }
}
