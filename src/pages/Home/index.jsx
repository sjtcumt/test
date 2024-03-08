import React from "react";
import { Outlet } from "react-router-dom";

import MyNavLink from "../../components/MyNavLink";

export default function Home() {
  // console.log(useOutlet());
  return (
    <div>
      <h3>This is Home content</h3>
      <ul className="list-group">
        <li>
          <MyNavLink to="news" end children="News" />
        </li>
        <li>
          <MyNavLink to="message" end children="Message" />
        </li>
      </ul>
      <hr></hr>
      <Outlet />
    </div>
  );
}
