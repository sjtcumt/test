import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <div className="list-group">
          <Link className="list-group-item" to="/home">
            Home
          </Link>
          <Link className="list-group-item" to="/about">
            About
          </Link>
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
