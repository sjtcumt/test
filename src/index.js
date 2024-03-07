import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import AppRouter from "./AppRouter";
// import AppSearch from "./AppSearch";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
      {/* <AppSearch /> */}
    </BrowserRouter>
  </React.StrictMode>
);
