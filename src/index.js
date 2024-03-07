import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
