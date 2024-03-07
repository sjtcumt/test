import React from "react";
import { createRoot } from "react-dom/client";
import AppSearch from "./AppSearch";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <AppSearch />
  </React.StrictMode>
);
