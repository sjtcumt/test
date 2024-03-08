import React from "react";
import { useRoutes } from "react-router-dom";
// import { useInRouterContext, useRoutes } from "react-router-dom";

import MyNavLink from "./components/MyNavLink";

import routers from "./routers";
import HeaderRouter from "./components/HeaderRouter";

export default function AppRouter() {
  const element = useRoutes(routers);
  // console.log("@@@", useInRouterContext());
  return (
    <div>
      <div>
        <HeaderRouter />
      </div>
      <div className="list-group">
        <MyNavLink to="/home" end children="Home" />
        <MyNavLink to="/about" end children="About" />
      </div>
      <div>
        {element}
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to={<About />} />} />
        </Routes> */}
      </div>
    </div>
  );
}
